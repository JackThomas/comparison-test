import { diff } from "../../helpers/diff";
import { Section } from "./Section";
import { SectionContent } from "./SectionContent";
import { SectionSibling } from "./SectionSibling";

interface DiffProps {
    prevString: string;
    nextString: string;
}

const Diff = ({ prevString, nextString }: DiffProps) => {
    const sections = diff(prevString, nextString);

    return sections.map((section) => {
        if (section.siblings && section.siblings > 1) {
            return <SectionSibling siblings={section.siblings} />;
        }
        return (
            <Section
                key={section.header}
                type={section.type}
                header={section.header}
            >
                <SectionContent
                    content={section.contentDiff ?? section.content}
                />
            </Section>
        );
    });
};

export { Diff };
