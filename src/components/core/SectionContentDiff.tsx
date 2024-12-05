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
                <>
                    <span key={`${text}-${type}`} className={classNames[type]}>
                        {text}
                    </span>
                    {index === line.length - 1 ? "" : " "}
                </>
            ))}
        </p>
    );
};

export { SectionContentDiff };
