import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingProjectId, setEditingProjectId] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveUrl: "",
    });

    // =========================
    // FETCH PROJECTS
    // =========================
    const fetchProjects = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/projects",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to load projects.");
                return;
            }

            setProjects(data.projects || []);
        } catch (error) {
            console.error("Fetch Projects Error:", error);
            setError("Unable to connect to server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // =========================
    // INPUT CHANGE
    // =========================
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // =========================
    // RESET FORM
    // =========================
    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            technologies: "",
            githubUrl: "",
            liveUrl: "",
        });

        setEditingProjectId(null);
        setShowForm(false);
        setError("");
    };

    // =========================
    // EDIT PROJECT
    // =========================
    const handleEdit = (project) => {
        setFormData({
            title: project.title || "",
            description: project.description || "",
            technologies: project.technologies
                ? project.technologies.join(", ")
                : "",
            githubUrl: project.githubUrl || "",
            liveUrl: project.liveUrl || "",
        });

        setEditingProjectId(project._id);
        setShowForm(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // =========================
    // CREATE / UPDATE PROJECT
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const technologiesArray = formData.technologies
                .split(",")
                .map((tech) => tech.trim())
                .filter((tech) => tech !== "");

            const url = editingProjectId
                ? `http://localhost:5000/api/projects/${editingProjectId}`
                : "http://localhost:5000/api/projects";

            const method = editingProjectId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    technologies: technologiesArray,
                    githubUrl: formData.githubUrl,
                    liveUrl: formData.liveUrl,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    `Failed to ${editingProjectId ? "update" : "create"} project.`
                );
                return;
            }

            if (editingProjectId) {
                setProjects(
                    projects.map((project) =>
                        project._id === editingProjectId
                            ? data.project
                            : project
                    )
                );
            } else {
                setProjects([data.project, ...projects]);
            }

            resetForm();

        } catch (error) {
            console.error("Project Save Error:", error);
            setError("Unable to connect to server.");
        }
    };

    // =========================
    // DELETE PROJECT
    // =========================
    const handleDelete = async (projectId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this project?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `http://localhost:5000/api/projects/${projectId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to delete project.");
                return;
            }

            setProjects(
                projects.filter(
                    (project) => project._id !== projectId
                )
            );

        } catch (error) {
            console.error("Delete Project Error:", error);
            setError("Unable to connect to server.");
        }
    };

    return (
        <DashboardLayout>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                    <h1 className="text-4xl font-bold text-green-600">
                        My Projects 🚀
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Showcase all your projects here.
                    </p>
                </div>

                <button
                    onClick={() => {
                        if (showForm) {
                            resetForm();
                        } else {
                            setShowForm(true);
                        }
                    }}
                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
                >
                    {showForm ? "Close Form" : "+ Add Project"}
                </button>

            </div>

            {/* Error */}
            {error && (
                <div className="mt-6 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* Add / Edit Form */}
            {showForm && (
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                    <h2 className="text-2xl font-bold text-green-600 mb-6">
                        {editingProjectId
                            ? "Edit Project"
                            : "Add New Project"}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Title */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Project Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter project title"
                                required
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Describe your project"
                                rows="4"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Technologies */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Technologies
                            </label>

                            <input
                                type="text"
                                name="technologies"
                                value={formData.technologies}
                                onChange={handleChange}
                                placeholder="React, Node.js, MongoDB"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <p className="text-sm text-gray-500 mt-1">
                                Separate technologies with commas.
                            </p>
                        </div>

                        {/* GitHub */}
                        <div>
                            <label className="block mb-2 font-medium">
                                GitHub URL
                            </label>

                            <input
                                type="url"
                                name="githubUrl"
                                value={formData.githubUrl}
                                onChange={handleChange}
                                placeholder="https://github.com/..."
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Live URL */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Live Project URL
                            </label>

                            <input
                                type="url"
                                name="liveUrl"
                                value={formData.liveUrl}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex gap-3">

                            <button
                                type="submit"
                                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                            >
                                {editingProjectId
                                    ? "Update Project"
                                    : "Save Project"}
                            </button>

                            {editingProjectId && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="border border-gray-400 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                            )}

                        </div>

                    </form>
                </div>
            )}

            {/* Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <h2 className="text-2xl font-bold text-green-600 mb-6">
                    Your Projects
                </h2>

                {loading ? (
                    <p className="text-gray-500">
                        Loading projects...
                    </p>
                ) : projects.length === 0 ? (
                    <div className="text-center py-10">

                        <p className="text-gray-500">
                            No projects added yet.
                        </p>

                        <p className="text-gray-400 mt-2">
                            Click "+ Add Project" to create your first project.
                        </p>

                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {projects.map((project) => (
                            <div
                                key={project._id}
                                className="border rounded-xl p-6 hover:shadow-md transition"
                            >

                                <h3 className="text-xl font-bold text-green-600">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                {project.technologies?.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">

                                        {project.technologies.map(
                                            (technology, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {technology}
                                                </span>
                                            )
                                        )}

                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3 mt-5">

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                                        >
                                            GitHub
                                        </a>
                                    )}

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                        >
                                            Live Demo
                                        </a>
                                    )}

                                    <button
                                        onClick={() => handleEdit(project)}
                                        className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(project._id)
                                        }
                                        className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </DashboardLayout>
    );
};

export default Projects;