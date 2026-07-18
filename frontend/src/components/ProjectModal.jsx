import { useEffect, useState } from "react";

const ProjectModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        techStack: "",
        githubUrl: "",
        liveUrl: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title,
                description: initialData.description,
                techStack: initialData.techStack.join(", "),
                githubUrl: initialData.githubUrl,
                liveUrl: initialData.liveUrl || "",
            });
        } else {
            setFormData({
                title: "",
                description: "",
                techStack: "",
                githubUrl: "",
                liveUrl: "",
            });
        }
    }, [initialData]);

    useEffect(() => {
        if (!isOpen) {
            setImageFile(null);
            setPreview("");
        }
    }, [isOpen]);

    useEffect(() => {
        if (!imageFile) return;

        const objectUrl = URL.createObjectURL(imageFile);

        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [imageFile]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select an image.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Image should be less than 5MB.");
            return;
        }

        setImageFile(file);
    };

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("githubUrl", formData.githubUrl);
        data.append("liveUrl", formData.liveUrl);
        data.append("techStack", formData.techStack);

        if (imageFile) {
            data.append("image", imageFile);
        }
        try {
            setUploading(true);

            await onSubmit(data);

            setImageFile(null);
            setPreview("");
        } catch (error) {
            console.error(error);
            alert("Failed to save project.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-2xl rounded-lg bg-[#161B22] p-8">
                <h2 className="mb-6 text-2xl font-bold text-white">
                    {initialData ? "Edit Project" : "Add Project"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="title"
                        placeholder="Project Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full rounded border border-[#30363D] bg-[#0D1117] p-3 text-white"
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full rounded border border-[#30363D] bg-[#0D1117] p-3 text-white"
                        required
                    />

                    <div>
                        <label className="mb-2 block text-white">
                            Project Image
                        </label>

                        <input
                            type="file"
                            required={!initialData}
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full rounded border border-[#30363D] bg-[#0D1117] p-3 text-white"
                        />
                        {(preview || initialData?.image) && (
                            <img
                                src={preview || initialData?.image}
                                alt="Preview"
                                className="mt-3 h-40 w-full rounded object-cover"
                            />
                        )}
                    </div>

                    <input
                        type="text"
                        name="techStack"
                        placeholder="React, Node.js, MongoDB"
                        value={formData.techStack}
                        onChange={handleChange}
                        className="w-full rounded border border-[#30363D] bg-[#0D1117] p-3 text-white"
                        required
                    />

                    <input
                        type="url"
                        name="githubUrl"
                        placeholder="GitHub URL"
                        value={formData.githubUrl}
                        onChange={handleChange}
                        className="w-full rounded border border-[#30363D] bg-[#0D1117] p-3 text-white"
                        required
                    />

                    <input
                        type="url"
                        name="liveUrl"
                        placeholder="Live Demo URL"
                        value={formData.liveUrl}
                        onChange={handleChange}
                        className="w-full rounded border border-[#30363D] bg-[#0D1117] p-3 text-white"
                    />

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded bg-gray-700 px-5 py-2 text-white"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={uploading}
                            className="rounded bg-[#F78166] px-5 py-2 font-semibold text-black"
                        >
                            {uploading
                                ? "Uploading..."
                                : initialData
                                  ? "Update"
                                  : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;
