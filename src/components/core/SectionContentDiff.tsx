import { Fragment } from "react/jsx-runtime";
import { DiffType } from "../../enum/DiffType.enum";

interface SectionContentDiffProps {
    line: { text: string; type: DiffType }[];
}

const SectionContentDiff = ({ line }: SectionContentDiffProps) => {
    const classNames = {
        added: "text-added",
        removed: "text-removed line-through",
        unchanged: "text-unchanged",
        changed: "text-changed",
    };

    return (
        <p>
            {line.map(({ text, type }, index) => (
                <Fragment key={`${text}-${type}-${index}`}>
                    <span className={classNames[type]}>{text}</span>
                    {index === line.length - 1 ? "" : " "}
                </Fragment>
            ))}
        </p>
    );
};

export { SectionContentDiff };
