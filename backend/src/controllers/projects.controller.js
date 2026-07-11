const Projects = require("../models/projects.model");
const uploadImage = require("../utils/uploadImage");

const getProjects = async (req, res) => {
    try {
        const projects = await Projects.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProject = async (req, res) => {
    try {
        const { title, description, techStack, githubUrl, liveUrl } = req.body;
        const result = await uploadImage(req.file.buffer);
        const image = result.secure_url;
        const techStackArray = techStack.split(",").map((item) => item.trim());
        const project = await Projects.create({
            title,
            description,
            image,
            techStack: techStackArray,
            githubUrl,
            liveUrl,
        });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = { ...req.body };
        if (updatedData.techStack) {
            updatedData.techStack = updatedData.techStack
                .split(",")
                .map((tech) => tech.trim());
        }
        if (req.file) {
            const result = await uploadImage(req.file.buffer);
            updatedData.image = result.secure_url;
        }
        const project = await Projects.findByIdAndUpdate(id, updatedData, {
            returnDocument: "after",
            runValidators: true,
        });

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Projects.findByIdAndDelete(id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
