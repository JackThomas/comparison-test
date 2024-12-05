import { DiffType } from "../enum/DiffType.enum";
import { DiffSection } from "../types/DiffSection.type";
import { Section } from "../types/Section.type";
import { SectionHeader } from "../types/SectionHeader.type";

const SECTION_START = "# "; // Including space here to avoid matching substrings

const isHeaderLine = (line: SectionHeader) => line.startsWith(SECTION_START);

const toSections = (text: string) => {
    const lines = text.split("\n");

    const sections: Section[] = lines.reduce((acc: Section[], line: string) => {
        const isHeader = isHeaderLine(line);

        if (isHeader) {
            const header = line.slice(SECTION_START.length);
            acc.push({ header, content: [] });
        } else {
            acc[acc.length - 1].content.push(line);
        }
        return acc;
    }, []);

    return sections;
};

const isSectionContentChanged = (
    prevSection: Section,
    nextSection: Section
) => {
    if (!prevSection || !nextSection) {
        return false;
    }

    const contentX = prevSection.content.join("\n");
    const contentY = nextSection.content.join("\n");

    return contentX !== contentY
        ? { content: prevSection.content, newContent: nextSection.content }
        : false;
};

const createLineContentDiff = (prevLine: string, nextLine: string) => {
    const wordsPrevious = prevLine.split(/\s+/);
    const wordsNext = nextLine.split(/\s+/);
    const words = [];

    let i = 0;
    const maxWordCount = Math.max(wordsPrevious.length, wordsNext.length);

    while (i < maxWordCount) {
        if (wordsPrevious[i] === wordsNext[i]) {
            words.push({
                text: wordsPrevious[i],
                type: DiffType.Unchanged,
            });
        } else {
            const removed: string[] = [];
            const added: string[] = [];

            while (
                wordsPrevious[i] !== wordsNext[i] &&
                (i < wordsPrevious.length || i < wordsNext.length)
            ) {
                if (i < wordsPrevious.length) {
                    removed.push(wordsPrevious[i]);
                }

                if (i < wordsNext.length) {
                    added.push(wordsNext[i]);
                }
                i++;
            }

            if (removed.length > 0) {
                words.push({
                    text: removed.join(" "),
                    type: DiffType.Removed,
                });
            }

            if (added.length > 0) {
                words.push({
                    text: added.join(" "),
                    type: DiffType.Added,
                });
            }
            continue;
        }
        i++;
    }

    return words;
};

const createSectionContentDiff = (
    prevContent: string[],
    nextContent: string[]
) => {
    const maxLinesCount = Math.max(prevContent.length, nextContent.length);
    let i = 0;
    const diff = [];

    while (i < maxLinesCount) {
        const prevLine = prevContent[i] ?? "";
        const nextLine = nextContent[i] ?? "";
        const lineDiff = createLineContentDiff(prevLine, nextLine);

        diff.push(lineDiff);
        i++;
    }

    return diff;
};

const compareSections = (prevSections: Section[], nextSections: Section[]) => {
    const diff: DiffSection[] = [];

    const prevHeaders = prevSections.map(({ header }) => header);
    const nextHeaders = nextSections.map(({ header }) => header);

    prevSections.forEach((section) => {
        const yHeaderIndex = nextHeaders.indexOf(section.header);
        const nextSection = nextSections[yHeaderIndex];
        const existsInNext = yHeaderIndex !== -1; // Check if header exists in next

        if (!existsInNext) {
            diff.push({ ...section, type: DiffType.Removed });
        } else {
            const isContentChanged = isSectionContentChanged(
                section,
                nextSection
            );
            if (isContentChanged) {
                const contentDiff = createSectionContentDiff(
                    section.content,
                    nextSection.content
                );

                diff.push({
                    ...section,
                    contentDiff,
                    type: DiffType.Changed,
                });
            } else {
                diff.push({ ...section, type: DiffType.Unchanged });
            }
        }
    });

    nextSections.forEach((section, i) => {
        const existsInPrev = prevHeaders.includes(section.header);
        if (!existsInPrev) {
            const obj = { ...section, type: DiffType.Added };
            diff.splice(i, 0, obj);
        }
    });

    return diff;
};

const truncateSections = (sections: DiffSection[]) => {
    const truncated = sections.reduce(
        (acc: DiffSection[], section: DiffSection) => {
            if (section.type === DiffType.Unchanged) {
                const previousSection = acc[acc.length - 1];

                if (previousSection?.type === DiffType.Unchanged) {
                    // If prev section is unchanged, increment count and remove last item from acc because we don't need it anymore
                    const siblings = previousSection?.siblings ?? 1;
                    acc.pop();

                    acc.push({
                        ...section,
                        siblings: siblings + 1,
                    });
                } else {
                    // Don't increment siblings if prev section is not unchanged
                    acc.push(section);
                }
            } else {
                acc.push(section);
            }
            return acc;
        },
        []
    );

    return truncated;
};

export const diff = (prevString: string, nextString: string) => {
    const nextSections = toSections(prevString);
    const prevSections = toSections(nextString);

    const diffSections = compareSections(nextSections, prevSections);
    const truncatedSections = truncateSections(diffSections);

    return truncatedSections;
};
