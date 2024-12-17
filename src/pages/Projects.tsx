import projectData from "../data/projects.json";
import { Project } from "../interfaces";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const projects = projectData.projects as Project[];

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>

            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </div>
    );
};

export default Projects;
