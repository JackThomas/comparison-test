import { Card, CardBody } from "@nextui-org/react";

interface SectionSiblingProps {
    siblings: number;
}

const SectionSibling = ({ siblings }: SectionSiblingProps) => (
    <Card shadow="none" className="p-4">
        <CardBody className="p-0 text-content text-sm text-center">
            {siblings} more sections...
        </CardBody>
    </Card>
);

export { SectionSibling };
