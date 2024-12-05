import { Fragment } from "react/jsx-runtime";
import { SectionContentDiff } from "./SectionContentDiff";
import { SectionContentLines } from "./SectionContentLine";
import { DiffType } from "../../enum/DiffType.enum";

interface SectionContentProps {
    content: string[] | { text: string; type: DiffType }[][];
}

const SectionContent = ({ content }: SectionContentProps) =>
    content.map((line, index) => (
        <Fragment key={index}>
            {typeof line === "string" ? (
                <SectionContentLines line={line} />
            ) : (
                <SectionContentDiff line={line} />
            )}
        </Fragment>
    ));

export { SectionContent };
