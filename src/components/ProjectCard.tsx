import { Link } from "react-router-dom";
import { Project } from "../interfaces";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link to={project.url}>
            <div
                className="p-4 bg-palette-3/20 rounded m-8 text-palette-1 
                            transition-all hover:bg-palette-4/30 
                            hover:translate-x-2 ease-in">
                <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-palette-5/20 p-2 text-xs text-palette-1
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
