interface SectionContentLineProps {
    line: string;
}

const SectionContentLines = ({ line }: SectionContentLineProps) => (
    <p>{line}</p>
);

export { SectionContentLines };
