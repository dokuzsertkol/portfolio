import { projects } from "@/data/projects";

export async function generateStaticParams() {
    return Object.keys(projects).map((slug) => ({
        slug
    }));
}

type Props = {
    children: React.ReactNode;
};

export default function ProjectsLayout({ children }: Props) {
    return (
        <>
            {children}
        </>
    );
}