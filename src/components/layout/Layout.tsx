import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
    <div className="p-14 max-w-[900px] m-auto flex flex-col gap-4">
        <p>Diff</p>
        {children}
    </div>
);

export { Layout };
