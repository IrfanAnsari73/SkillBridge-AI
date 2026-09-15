import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingProjectId, setEditingProjectId] =
        useState(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveUrl: "",
    });

    // =========================================
    // FETCH PROJECTS
    // =========================================

    const fetchProjects = async () => {
        try {
            const token =
                localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/projects",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Failed to load projects."
                );
                return;
            }

            setProjects(data.projects || []);
        } catch (error) {
            console.error(
                "Fetch Projects Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // =========================================
    // INPUT CHANGE
    // =========================================

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError("");
    };

    // =========================================
    // RESET FORM
    // =========================================

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

    // =========================================
    // EDIT PROJECT
    // =========================================

    const handleEdit = (project) => {
        setFormData({
            title: project.title || "",
            description:
                project.description || "",
            technologies: project.technologies
                ? project.technologies.join(", ")
                : "",
            githubUrl:
                project.githubUrl || "",
            liveUrl:
                project.liveUrl || "",
        });

        setEditingProjectId(project._id);
        setShowForm(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // =========================================
    // CREATE / UPDATE
    // =========================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token =
                localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const technologiesArray =
                formData.technologies
                    .split(",")
                    .map((tech) => tech.trim())
                    .filter(
                        (tech) => tech !== ""
                    );

            const url = editingProjectId
                ? `https://skillbridge-ai-backend-v6uk.onrender.com/api/projects/${editingProjectId}`
                : "https://skillbridge-ai-backend-v6uk.onrender.com/api/projects";

            const method = editingProjectId
                ? "PUT"
                : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type":
                        "application/json",
                    Authorization:
                        `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: formData.title,
                    description:
                        formData.description,
                    technologies:
                        technologiesArray,
                    githubUrl:
                        formData.githubUrl,
                    liveUrl:
                        formData.liveUrl,
                }),
            });

            const data =
                await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    `Failed to ${editingProjectId
                        ? "update"
                        : "create"
                    } project.`
                );
                return;
            }

            if (editingProjectId) {
                setProjects(
                    projects.map((project) =>
                        project._id ===
                            editingProjectId
                            ? data.project
                            : project
                    )
                );
            } else {
                setProjects([
                    data.project,
                    ...projects,
                ]);
            }

            resetForm();
        } catch (error) {
            console.error(
                "Project Save Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        }
    };

    // =========================================
    // DELETE PROJECT
    // =========================================

    const handleDelete = async (projectId) => {
        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this project?"
            );

        if (!confirmDelete) return;

        try {
            const token =
                localStorage.getItem("token");

            const response = await fetch(
                `https://skillbridge-ai-backend-v6uk.onrender.com/api/projects/${projectId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Failed to delete project."
                );
                return;
            }

            setProjects(
                projects.filter(
                    (project) =>
                        project._id !== projectId
                )
            );
        } catch (error) {
            console.error(
                "Delete Project Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        }
    };

    // =========================================
    // STATS
    // =========================================

    const totalProjects = projects.length;

    const projectsWithGithub =
        projects.filter(
            (project) => project.githubUrl
        ).length;

    const projectsWithLiveDemo =
        projects.filter(
            (project) => project.liveUrl
        ).length;

    const technologiesUsed =
        new Set(
            projects.flatMap(
                (project) =>
                    project.technologies || []
            )
        ).size;

    // =========================================
    // RENDER
    // =========================================

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="relative">

                {/* Decorative Background */}

                <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

                <div className="pointer-events-none absolute top-[650px] -left-40 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />

                <div className="relative space-y-7">

                    {/* =================================
                        HEADER
                    ================================= */}

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

                        <div>

                            <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-green-600">
                                Project Portfolio
                            </p>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-2 tracking-tight">
                                My Projects
                                <span className="text-green-600">
                                    .
                                </span>
                            </h1>

                            <p className="text-gray-500 mt-2 text-base md:text-lg">
                                Showcase the work,
                                technologies and
                                experiences you've built.
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
                            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-green-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-green-600/20"
                        >
                            {showForm
                                ? "✕ Close Form"
                                : "＋ Add New Project"}
                        </button>

                    </div>

                    {/* =================================
                        HERO
                    ================================= */}

                    <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                        <div className="absolute -right-24 -top-28 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

                        <div className="absolute -left-24 -bottom-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

                        <div className="relative p-6 md:p-8">

                            <div className="flex flex-col lg:flex-row lg:items-center gap-8">

                                <div className="flex-1">

                                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                        🚀 Builder's Portfolio
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-black mt-4">
                                        Your projects tell
                                        your career story.
                                    </h2>

                                    <p className="text-slate-400 mt-2 max-w-2xl leading-7">
                                        Add your best projects,
                                        highlight the technologies
                                        you've used and make your
                                        portfolio stronger for
                                        recruiters.
                                    </p>

                                </div>

                                <div className="grid grid-cols-2 gap-3 lg:w-[400px]">

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Projects
                                        </p>

                                        <p className="text-3xl font-black mt-1">
                                            {totalProjects}
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Technologies
                                        </p>

                                        <p className="text-3xl font-black text-green-400 mt-1">
                                            {
                                                technologiesUsed
                                            }
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            GitHub
                                        </p>

                                        <p className="text-3xl font-black mt-1">
                                            {
                                                projectsWithGithub
                                            }
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Live Demos
                                        </p>

                                        <p className="text-3xl font-black text-green-400 mt-1">
                                            {
                                                projectsWithLiveDemo
                                            }
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* =================================
                        ERROR
                    ================================= */}

                    {error && (
                        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl font-semibold shadow-sm">

                            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                !
                            </span>

                            {error}

                        </div>
                    )}

                    {/* =================================
                        ADD / EDIT FORM
                    ================================= */}

                    {showForm && (
                        <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                            <div className="h-1.5 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

                            <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/40 border-b border-gray-200">

                                <p className="text-xs md:text-sm font-black uppercase tracking-[0.18em] text-green-600">
                                    Project Management
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                    {editingProjectId
                                        ? "Edit Your Project"
                                        : "Add a New Project"}
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Add project details,
                                    technologies and useful
                                    links.
                                </p>

                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="p-5 md:p-8 bg-slate-50/70"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    {/* TITLE */}

                                    <div className="md:col-span-2">

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Project Title
                                        </label>

                                        <input
                                            type="text"
                                            name="title"
                                            value={
                                                formData.title
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="e.g. SkillBridge AI"
                                            required
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />

                                    </div>

                                    {/* DESCRIPTION */}

                                    <div className="md:col-span-2">

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Project Description
                                        </label>

                                        <textarea
                                            name="description"
                                            value={
                                                formData.description
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Describe what you built, the problem it solves and your contribution..."
                                            rows="5"
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none resize-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />

                                    </div>

                                    {/* TECHNOLOGIES */}

                                    <div className="md:col-span-2">

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Technologies Used
                                        </label>

                                        <input
                                            type="text"
                                            name="technologies"
                                            value={
                                                formData.technologies
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="React, Node.js, Express, MongoDB"
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />

                                        <p className="text-xs text-gray-400 mt-2">
                                            Separate each
                                            technology with a
                                            comma.
                                        </p>

                                    </div>

                                    {/* GITHUB */}

                                    <div>

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            GitHub Repository
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                                🐙
                                            </span>

                                            <input
                                                type="url"
                                                name="githubUrl"
                                                value={
                                                    formData.githubUrl
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="https://github.com/..."
                                                className="w-full border border-gray-200 bg-white rounded-xl pl-11 pr-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />

                                        </div>

                                    </div>

                                    {/* LIVE */}

                                    <div>

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Live Project URL
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                                🌐
                                            </span>

                                            <input
                                                type="url"
                                                name="liveUrl"
                                                value={
                                                    formData.liveUrl
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="https://..."
                                                className="w-full border border-gray-200 bg-white rounded-xl pl-11 pr-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />

                                        </div>

                                    </div>

                                </div>

                                {/* =================================
                                    PROJECT PREVIEW
                                ================================= */}

                                <div className="mt-6 rounded-2xl bg-slate-950 text-white p-5">

                                    <div className="flex items-start gap-4">

                                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                            🚀
                                        </div>

                                        <div className="min-w-0 flex-1">

                                            <h3 className="text-lg font-black truncate">
                                                {formData.title ||
                                                    "Your Project"}
                                            </h3>

                                            <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                                                {formData.description ||
                                                    "Your project description will appear here."}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-3">

                                                {formData.technologies
                                                    ? formData.technologies
                                                        .split(",")
                                                        .map(
                                                            (
                                                                tech,
                                                                index
                                                            ) =>
                                                                tech.trim() && (
                                                                    <span
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="text-xs bg-green-500/10 border border-green-400/20 text-green-300 px-2.5 py-1 rounded-full"
                                                                    >
                                                                        {
                                                                            tech.trim()
                                                                        }
                                                                    </span>
                                                                )
                                                        )
                                                    : (
                                                        <span className="text-xs text-slate-500">
                                                            Technologies
                                                            will
                                                            appear
                                                            here
                                                        </span>
                                                    )}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* BUTTONS */}

                                <div className="flex flex-col sm:flex-row gap-3 mt-6">

                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-green-500 transition-all shadow-lg shadow-green-600/20"
                                    >
                                        {editingProjectId
                                            ? "✓ Update Project"
                                            : "＋ Save Project"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="border border-gray-300 bg-white text-gray-700 px-7 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition"
                                    >
                                        Cancel
                                    </button>

                                </div>

                            </form>

                        </section>
                    )}

                    {/* =================================
                        PROJECT LIST
                    ================================= */}

                    <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                        <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/30 border-b border-gray-200">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>

                                    <p className="text-xs md:text-sm font-black uppercase tracking-[0.18em] text-green-600">
                                        Your Work
                                    </p>

                                    <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                        Project Showcase
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        Your latest projects
                                        and technical work.
                                    </p>

                                </div>

                                <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">

                                    <p className="text-xs text-gray-500">
                                        Total Projects
                                    </p>

                                    <p className="text-xl font-black text-green-600">
                                        {totalProjects}
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="p-5 md:p-8 bg-slate-50/60">

                            {loading ? (
                                <div className="flex items-center justify-center py-16">

                                    <div className="w-10 h-10 rounded-full border-4 border-green-100 border-t-green-600 animate-spin" />

                                    <p className="ml-3 text-gray-500 font-medium">
                                        Loading your
                                        projects...
                                    </p>

                                </div>
                            ) : projects.length === 0 ? (
                                <div className="text-center py-16">

                                    <div className="w-20 h-20 mx-auto rounded-3xl bg-green-50 flex items-center justify-center text-4xl">
                                        🚀
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-950 mt-5">
                                        No projects yet
                                    </h3>

                                    <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                        Start showcasing your
                                        work by adding your
                                        first project.
                                    </p>

                                    <button
                                        onClick={() =>
                                            setShowForm(true)
                                        }
                                        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-500 transition"
                                    >
                                        ＋ Add Your First
                                        Project
                                    </button>

                                </div>
                            ) : (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                                    {projects.map(
                                        (project) => (
                                            <article
                                                key={
                                                    project._id
                                                }
                                                className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                            >

                                                {/* Accent */}

                                                <div className="h-1.5 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

                                                <div className="p-5 md:p-6">

                                                    {/* Header */}

                                                    <div className="flex items-start gap-4">

                                                        <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-green-50 flex items-center justify-center text-3xl group-hover:scale-105 transition">
                                                            🚀
                                                        </div>

                                                        <div className="flex-1 min-w-0">

                                                            <h3 className="text-xl font-black text-slate-950 break-words">
                                                                {
                                                                    project.title
                                                                }
                                                            </h3>

                                                            <p className="text-xs text-green-600 font-bold uppercase tracking-wider mt-1">
                                                                Personal
                                                                Project
                                                            </p>

                                                        </div>

                                                    </div>

                                                    {/* Description */}

                                                    <p className="text-gray-600 mt-5 leading-6 min-h-[72px]">
                                                        {project.description ||
                                                            "No project description added."}
                                                    </p>

                                                    {/* Technologies */}

                                                    {project
                                                        .technologies
                                                        ?.length >
                                                        0 && (
                                                            <div className="mt-5">

                                                                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                                                                    Tech
                                                                    Stack
                                                                </p>

                                                                <div className="flex flex-wrap gap-2">

                                                                    {project.technologies.map(
                                                                        (
                                                                            technology,
                                                                            index
                                                                        ) => (
                                                                            <span
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className="bg-green-50 border border-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-bold"
                                                                            >
                                                                                {
                                                                                    technology
                                                                                }
                                                                            </span>
                                                                        )
                                                                    )}

                                                                </div>

                                                            </div>
                                                        )}

                                                    {/* Links */}

                                                    <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-gray-100">

                                                        {project.githubUrl && (
                                                            <a
                                                                href={
                                                                    project.githubUrl
                                                                }
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="inline-flex items-center gap-2 bg-slate-950 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition"
                                                            >
                                                                🐙
                                                                GitHub
                                                            </a>
                                                        )}

                                                        {project.liveUrl && (
                                                            <a
                                                                href={
                                                                    project.liveUrl
                                                                }
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-500 transition"
                                                            >
                                                                🌐
                                                                Live Demo
                                                            </a>
                                                        )}

                                                        <button
                                                            onClick={() =>
                                                                handleEdit(
                                                                    project
                                                                )
                                                            }
                                                            className="inline-flex items-center gap-2 border border-green-200 bg-green-50 text-green-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition"
                                                        >
                                                            ✏️ Edit
                                                        </button>

                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    project._id
                                                                )
                                                            }
                                                            className="inline-flex items-center gap-2 border border-red-200 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition"
                                                        >
                                                            🗑️ Delete
                                                        </button>

                                                    </div>

                                                </div>

                                            </article>
                                        )
                                    )}

                                </div>
                            )}

                        </div>

                    </section>

                    {/* =================================
                        CAREER TIP
                    ================================= */}

                    <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white p-6 md:p-8 shadow-xl">

                        <div className="absolute right-0 top-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                        <div className="relative flex flex-col md:flex-row md:items-center gap-5">

                            <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                💡
                            </div>

                            <div>

                                <h3 className="text-xl font-black">
                                    Portfolio Tip
                                </h3>

                                <p className="text-slate-400 mt-1 leading-6">
                                    Showcase projects that
                                    demonstrate real skills.
                                    Add a clear description,
                                    relevant technologies and
                                    working links whenever
                                    possible.
                                </p>

                            </div>

                        </div>

                    </section>

                </div>
            </div>
        </div>
    );
};

export default Projects;