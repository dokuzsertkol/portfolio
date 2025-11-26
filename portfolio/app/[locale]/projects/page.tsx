"use client";

import { projects } from '@/data/projects'
import { useMessages } from "../components/MessageProvider";;
import ProjectCard from '../components/ProjectCard';
import { useParams } from 'next/navigation';

export default function ProjectsPage() {
    const { locale } = useParams();
    const messages = useMessages();
    const t = messages.ProjectsPage;
    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

    return (
        <main className="pt-10">
            <h1 className="text-center text-4xl md:text-5xl font-bold mt-5 mb-5">{t.title}</h1>
            <p className="italic text-center mb-10">{t.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(projects).map(([slug, project]) => (
                <ProjectCard
                    key={slug}
                    title={project.title}
                    keywords={project.keywords}
                    imageUrl={basePath + project.imageUrl}
                    href={"/" + locale + "/projects/" + Object.keys(projects).find((key) => projects[key] === project)}
                />
            ))}
            </div>
        </main>
    );
}
