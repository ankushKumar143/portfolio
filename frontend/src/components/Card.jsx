import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ project }) => {
    return (
        <div className="w-[305px]  min-h-75 overflow-hidden rounded-b-2xl border border-[#30363D] bg-[#1F2428] transition-all duration-300 hover:-translate-y-2 hover:border-[#F78166] hover:shadow-xl">
            <img
                src={project.image}
                alt={project.title}
                className="h-38 w-full object-cover"
            />

            <div className="flex flex-col p-5">
                <h2 className="mb-1 text-xl font-semibold text-white">
                    {project.title}
                </h2>

                <p className="mb-5 text-sm leading-[1.3] text-gray-300">
                    {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-[#30363D] px-3 py-1 text-xs font-medium text-[#58A6FF]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex gap-3">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#30363D] px-4 py-2 text-white transition hover:bg-[#484F58]"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#F78166] px-4 py-2 font-semibold text-black transition hover:opacity-90"
                        >
                            <FaExternalLinkAlt />
                            Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
