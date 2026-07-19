import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import ProjectModal from "../../components/ProjectModal";
import {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
} from "../../services/projectService";

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        document.title = "Ankush Kumar | Admin";
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);

            const res = await getProjects();

            console.log(res);

            setProjects(res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Delete this project?");

        if (!confirmDelete) return;

        try {
            await deleteProject(id);

            setProjects((prev) => prev.filter((project) => project._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const handleSave = async (data) => {
        try {
            if (editingProject) {
                await updateProject(editingProject._id, data);
            } else {
                await createProject(data);
            }

            await fetchProjects();

            setIsModalOpen(false);
            setEditingProject(null);

            setSaved(true);

            setTimeout(() => {
                setSaved(false);
            }, 5000);
        } catch (error) {
            console.error(error);
            alert("Failed to save project.");
        }
    };

    if (loading) {
        return <div className="p-10 text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-[#24292E] p-10 text-white">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Projects</h1>

                <button
                    onClick={() => {
                        setEditingProject(null);
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 rounded bg-[#F78166] px-5 py-3 font-semibold text-black"
                >
                    <FaPlus />
                    Add Project
                </button>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#30363D]">
                <table className="w-full">
                    <thead className="bg-[#1F2428]">
                        <tr>
                            <th className="p-4">Image</th>

                            <th className="p-4 text-left">Title</th>

                            <th className="p-4 text-left">Tech Stack</th>

                            <th className="p-4">Github</th>

                            <th className="p-4">Live</th>

                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.map((project) => (
                            <tr
                                key={project._id}
                                className="border-t border-[#30363D]"
                            >
                                <td className="p-4">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-16 w-24 rounded object-cover"
                                    />
                                </td>

                                <td className="p-4">{project.title}</td>

                                <td className="p-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded bg-[#30363D] px-2 py-1 text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </td>

                                <td className="text-center">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        🔗
                                    </a>
                                </td>

                                <td className="text-center">
                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            🌐
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>

                                <td>
                                    <div className="flex justify-center gap-3">
                                        <button
                                            onClick={() => {
                                                setEditingProject(project);
                                                setIsModalOpen(true);
                                            }}
                                            className="rounded bg-blue-500 p-2 hover:bg-blue-600"
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(project._id)
                                            }
                                            className="rounded bg-red-500 p-2 hover:bg-red-600"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingProject(null);
                }}
                onSubmit={handleSave}
                initialData={editingProject}
            />
        </div>
    );
};

export default AdminProjects;
