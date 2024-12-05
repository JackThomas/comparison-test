import { SectionContent } from "./SectionContent.type";
import { SectionContentDiff } from "./SectionContentDiff.type";
import { SectionHeader } from "./SectionHeader.type";

export type Section = {
    header: SectionHeader;
    content: SectionContent[];
    contentDiff?: SectionContentDiff[];
};
