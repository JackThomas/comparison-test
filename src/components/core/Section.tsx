import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { ReactNode } from "react";
import { DiffType } from "../../enum/DiffType.enum";

interface SectionProps {
    header: string;
    children: ReactNode;
    type: DiffType;
}

const Section = ({ header, children, type }: SectionProps) => (
    <Card shadow="none" className="p-4 gap-2 border border-gray">
        <CardHeader
            className={`p-0 text-header text-sm font-medium text-${type}`}
        >
            {type === DiffType.Added && "[+] "}
            {type === DiffType.Removed && "[-] "}
            {header}
        </CardHeader>
        <Divider className="bg-gray" />
        <CardBody className={`p-0 text-content text-sm text-${type}`}>
            {children}
        </CardBody>
    </Card>
);

export { Section };
