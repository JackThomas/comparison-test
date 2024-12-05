import { Fragment } from "react/jsx-runtime";
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
    return sections.map((section) => (
        <Fragment key={section.header}>
            {section.siblings && section.siblings > 1 ? (
                <SectionSibling siblings={section.siblings} />
            ) : (
                <Section type={section.type} header={section.header}>
                    <SectionContent
                        content={section.contentDiff ?? section.content}
                    />
                </Section>
            )}
        </Fragment>
    ));
};

export { Diff };
