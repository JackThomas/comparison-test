import { DiffType } from "../../enum/DiffType.enum";

interface SectionContentDiffProps {
    line: { text: string; type: DiffType }[];
}

const SectionContentDiff = ({ line }: SectionContentDiffProps) => (
    <p>
        {line.map(({ text, type }, index) => (
            <>
                <span
                    key={`${text}-${type}`}
                    className={`text-${type} ${
                        type === DiffType.Removed && "line-through"
                    }`}
                >
                    {text}
                </span>
                {index === line.length - 1 ? "" : " "}
            </>
        ))}
    </p>
);

export { SectionContentDiff };
