const Project = require("../models/Project");

// =========================
// CREATE PROJECT
// =========================
const createProject = async (req, res) => {
    try {
        const {
            title,
            description,
            technologies,
            githubUrl,
            liveUrl,
            image,
        } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Project title is required",
            });
        }

        const project = await Project.create({
            user: req.user._id,
            title,
            description,
            technologies,
            githubUrl,
            liveUrl,
            image,
        });

        res.status(201).json({
            message: "Project created successfully",
            project,
        });
    } catch (error) {
        console.error("Create Project Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET USER PROJECTS
// =========================
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({
            user: req.user._id,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            projects,
        });
    } catch (error) {
        console.error("Get Projects Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET SINGLE PROJECT
// =========================
const getProject = async (req, res) => {
    try {
        const project = await Project.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }

        res.status(200).json({
            project,
        });
    } catch (error) {
        console.error("Get Project Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// UPDATE PROJECT
// =========================
const updateProject = async (req, res) => {
    try {
        const project = await Project.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }

        const {
            title,
            description,
            technologies,
            githubUrl,
            liveUrl,
            image,
        } = req.body;

        project.title = title ?? project.title;
        project.description = description ?? project.description;
        project.technologies = technologies ?? project.technologies;
        project.githubUrl = githubUrl ?? project.githubUrl;
        project.liveUrl = liveUrl ?? project.liveUrl;
        project.image = image ?? project.image;

        const updatedProject = await project.save();

        res.status(200).json({
            message: "Project updated successfully",
            project: updatedProject,
        });
    } catch (error) {
        console.error("Update Project Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// DELETE PROJECT
// =========================
const deleteProject = async (req, res) => {
    try {
        const project = await Project.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }

        await project.deleteOne();

        res.status(200).json({
            message: "Project deleted successfully",
        });
    } catch (error) {
        console.error("Delete Project Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


module.exports = {
    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject,
};