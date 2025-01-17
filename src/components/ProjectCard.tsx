import { Link } from "react-router-dom";
import { Project } from "../interfaces";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link to={project.url}>
            <div
                className="p-4 bg-palette-4 rounded border-palette-4 
                            text-palette-1 m-8 transition-all 
                            hover:bg-palette-5 hover:p-6">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-palette-1 p-2 text-xs text-palette-5 
                            px-2 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
