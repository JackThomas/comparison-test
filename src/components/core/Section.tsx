import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { ReactNode } from "react";
import { DiffType } from "../../enum/DiffType.enum";

interface SectionProps {
    header: string;
    children: ReactNode;
    type: DiffType;
}

const Section = ({ header, children, type }: SectionProps) => {
    const classNames = {
        added: "text-added",
        removed: "text-removed",
        unchanged: "text-unchanged",
        changed: "text-changed",
    };
    return (
        <Card shadow="none" className="p-4 gap-2 border border-gray">
            <CardHeader
                className={`p-0 text-header text-sm font-medium ${classNames[type]}`}
            >
                {type === DiffType.Added && "[+] "}
                {type === DiffType.Removed && "[-] "}
                {header}
            </CardHeader>
            <Divider className="bg-gray" />
            <CardBody
                className={`p-0 text-content text-sm ${classNames[type]}`}
            >
                {children}
            </CardBody>
        </Card>
    );
};

export { Section };
