import { Link } from "react-router-dom";
import { Project } from "../interfaces";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link to={project.url} className="block">
            <div
                className="p-6 bg-palette-3/20 rounded-2xl m-6 text-palette-5
                           transition-transform duration-300 hover:bg-palette-4/40
                           hover:shadow-lg hover:scale-[1.03] hover:translate-x-2">
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-sm text-palette-5/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-palette-5/80 text-palette-1 text-xs font-medium
                                       px-3 py-1 rounded-full shadow-sm"
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

