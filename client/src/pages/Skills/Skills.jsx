import { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingSkillId, setEditingSkillId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        level: "Beginner",
        percentage: 0,
    });

    // =========================================
    // FETCH SKILLS
    // =========================================

    const fetchSkills = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/skills",
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
                    "Failed to load skills."
                );
                return;
            }

            setSkills(data.skills || []);
        } catch (error) {
            console.error(
                "Fetch Skills Error:",
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
        fetchSkills();
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
            name: "",
            category: "",
            level: "Beginner",
            percentage: 0,
        });

        setEditingSkillId(null);
        setShowForm(false);
        setError("");
    };

    // =========================================
    // EDIT SKILL
    // =========================================

    const handleEdit = (skill) => {
        setFormData({
            name: skill.name || "",
            category: skill.category || "",
            level: skill.level || "Beginner",
            percentage: skill.percentage || 0,
        });

        setEditingSkillId(skill._id);
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

            const url = editingSkillId
                ? `https://skillbridge-ai-backend-v6uk.onrender.com/api/skills/${editingSkillId}`
                : "https://skillbridge-ai-backend-v6uk.onrender.com/api/skills";

            const method = editingSkillId
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
                    name: formData.name,
                    category:
                        formData.category,
                    level: formData.level,
                    percentage: Number(
                        formData.percentage
                    ),
                }),
            });

            const data =
                await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    `Failed to ${editingSkillId
                        ? "update"
                        : "create"
                    } skill.`
                );
                return;
            }

            if (editingSkillId) {
                setSkills(
                    skills.map((skill) =>
                        skill._id ===
                            editingSkillId
                            ? data.skill
                            : skill
                    )
                );
            } else {
                setSkills([
                    data.skill,
                    ...skills,
                ]);
            }

            resetForm();
        } catch (error) {
            console.error(
                "Skill Save Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        }
    };

    // =========================================
    // DELETE SKILL
    // =========================================

    const handleDelete = async (skillId) => {
        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this skill?"
            );

        if (!confirmDelete) return;

        try {
            const token =
                localStorage.getItem("token");

            const response = await fetch(
                `https://skillbridge-ai-backend-v6uk.onrender.com/api/skills/${skillId}`,
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
                    "Failed to delete skill."
                );
                return;
            }

            setSkills(
                skills.filter(
                    (skill) =>
                        skill._id !== skillId
                )
            );
        } catch (error) {
            console.error(
                "Delete Skill Error:",
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

    const totalSkills = skills.length;

    const averageSkill =
        totalSkills > 0
            ? Math.round(
                skills.reduce(
                    (sum, skill) =>
                        sum +
                        Number(
                            skill.percentage || 0
                        ),
                    0
                ) / totalSkills
            )
            : 0;

    const advancedSkills =
        skills.filter(
            (skill) =>
                Number(skill.percentage) >= 70
        ).length;

    const categories = new Set(
        skills
            .map((skill) => skill.category)
            .filter(Boolean)
    ).size;

    // =========================================
    // LEVEL COLOR
    // =========================================

    const getLevelStyle = (level) => {
        switch (level) {
            case "Expert":
                return "bg-purple-50 text-purple-700 border-purple-200";

            case "Advanced":
                return "bg-green-50 text-green-700 border-green-200";

            case "Intermediate":
                return "bg-blue-50 text-blue-700 border-blue-200";

            default:
                return "bg-yellow-50 text-yellow-700 border-yellow-200";
        }
    };

    // =========================================
    // SKILL ICON
    // =========================================

    const getSkillIcon = (category) => {
        const value =
            category?.toLowerCase() || "";

        if (
            value.includes("program") ||
            value.includes("development")
        ) {
            return "💻";
        }

        if (
            value.includes("web") ||
            value.includes("frontend") ||
            value.includes("backend")
        ) {
            return "🌐";
        }

        if (
            value.includes("database") ||
            value.includes("sql")
        ) {
            return "🗄️";
        }

        if (
            value.includes("design") ||
            value.includes("ui")
        ) {
            return "🎨";
        }

        if (
            value.includes("cloud") ||
            value.includes("devops")
        ) {
            return "☁️";
        }

        if (
            value.includes("ai") ||
            value.includes("machine")
        ) {
            return "🤖";
        }

        return "⚡";
    };

    // =========================================
    // RENDER
    // =========================================

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            {/* =====================================
                DECORATIVE BACKGROUND
            ===================================== */}

            <div className="relative">

                <div className="pointer-events-none absolute -top-24 right-0 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />

                <div className="pointer-events-none absolute top-[550px] -left-40 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />

                <div className="relative space-y-7">

                    {/* =================================
                        PAGE HEADER
                    ================================= */}

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

                        <div>

                            <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-green-600">
                                Technical Profile
                            </p>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-2 tracking-tight">
                                My Skills
                                <span className="text-green-600">
                                    .
                                </span>
                            </h1>

                            <p className="text-gray-500 mt-2 text-base md:text-lg">
                                Build, track and showcase
                                your technical expertise.
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
                                : "＋ Add New Skill"}
                        </button>

                    </div>

                    {/* =================================
                        HERO SUMMARY
                    ================================= */}

                    <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                        <div className="absolute -right-24 -top-28 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

                        <div className="absolute -left-24 -bottom-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

                        <div className="relative p-6 md:p-8">

                            <div className="flex flex-col lg:flex-row lg:items-center gap-7">

                                <div className="flex-1">

                                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                        🚀 Career Skillset
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-black mt-4">
                                        Turn your skills into
                                        career opportunities.
                                    </h2>

                                    <p className="text-slate-400 mt-2 max-w-2xl leading-7">
                                        Keep your technical
                                        profile updated and
                                        understand where you
                                        are strongest and where
                                        you can improve.
                                    </p>

                                </div>

                                <div className="grid grid-cols-2 gap-3 lg:w-[390px]">

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Total Skills
                                        </p>

                                        <p className="text-3xl font-black mt-1">
                                            {totalSkills}
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Avg. Proficiency
                                        </p>

                                        <p className="text-3xl font-black text-green-400 mt-1">
                                            {averageSkill}%
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Strong Skills
                                        </p>

                                        <p className="text-3xl font-black mt-1">
                                            {advancedSkills}
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Categories
                                        </p>

                                        <p className="text-3xl font-black mt-1">
                                            {categories}
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
                                    Skill Management
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                    {editingSkillId
                                        ? "Edit Your Skill"
                                        : "Add a New Skill"}
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Add your expertise and
                                    set your current
                                    proficiency level.
                                </p>

                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="p-5 md:p-8 bg-slate-50/70"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    {/* NAME */}

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Skill Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={
                                                formData.name
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="e.g. Java, React, Python"
                                            required
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />
                                    </div>

                                    {/* CATEGORY */}

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Category
                                        </label>

                                        <input
                                            type="text"
                                            name="category"
                                            value={
                                                formData.category
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="e.g. Programming, Web Development"
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />
                                    </div>

                                    {/* LEVEL */}

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Skill Level
                                        </label>

                                        <select
                                            name="level"
                                            value={
                                                formData.level
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        >
                                            <option value="Beginner">
                                                Beginner
                                            </option>

                                            <option value="Intermediate">
                                                Intermediate
                                            </option>

                                            <option value="Advanced">
                                                Advanced
                                            </option>

                                            <option value="Expert">
                                                Expert
                                            </option>
                                        </select>
                                    </div>

                                    {/* PERCENTAGE */}

                                    <div>
                                        <label className="flex items-center justify-between text-sm font-bold text-gray-700 mb-2">
                                            <span>
                                                Proficiency
                                            </span>

                                            <span className="text-green-600 text-lg">
                                                {
                                                    formData.percentage
                                                }
                                                %
                                            </span>
                                        </label>

                                        <div className="bg-white border border-gray-200 rounded-xl p-4">

                                            <input
                                                type="range"
                                                name="percentage"
                                                min="0"
                                                max="100"
                                                value={
                                                    formData.percentage
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                className="w-full accent-green-600"
                                            />

                                            <div className="flex justify-between text-xs text-gray-400 mt-2">
                                                <span>
                                                    Beginner
                                                </span>

                                                <span>
                                                    Expert
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* PREVIEW */}

                                <div className="mt-6 rounded-2xl bg-slate-950 text-white p-5">

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">

                                        <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                            {getSkillIcon(
                                                formData.category
                                            )}
                                        </div>

                                        <div className="flex-1">

                                            <div className="flex flex-wrap items-center gap-3">

                                                <h3 className="font-bold text-lg">
                                                    {formData.name ||
                                                        "Your Skill"}
                                                </h3>

                                                <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-400/20">
                                                    {
                                                        formData.level
                                                    }
                                                </span>

                                            </div>

                                            <p className="text-sm text-slate-400 mt-1">
                                                {formData.category ||
                                                    "Skill Category"}
                                            </p>

                                        </div>

                                        <div className="text-2xl font-black text-green-400">
                                            {
                                                formData.percentage
                                            }
                                            %
                                        </div>

                                    </div>

                                </div>

                                {/* BUTTONS */}

                                <div className="flex flex-col sm:flex-row gap-3 mt-6">

                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-green-500 transition-all shadow-lg shadow-green-600/20"
                                    >
                                        {editingSkillId
                                            ? "✓ Update Skill"
                                            : "＋ Save Skill"}
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
                        SKILLS LIST
                    ================================= */}

                    <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                        <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/30 border-b border-gray-200">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>

                                    <p className="text-xs md:text-sm font-black uppercase tracking-[0.18em] text-green-600">
                                        Your Expertise
                                    </p>

                                    <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                        Skills & Proficiency
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        Track the technologies
                                        and skills you're
                                        building.
                                    </p>

                                </div>

                                <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">

                                    <p className="text-xs text-gray-500">
                                        Average Proficiency
                                    </p>

                                    <p className="text-xl font-black text-green-600">
                                        {averageSkill}%
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="p-5 md:p-8 bg-slate-50/60">

                            {loading ? (
                                <div className="flex items-center justify-center py-16">

                                    <div className="w-10 h-10 rounded-full border-4 border-green-100 border-t-green-600 animate-spin" />

                                    <p className="ml-3 text-gray-500 font-medium">
                                        Loading your skills...
                                    </p>

                                </div>
                            ) : skills.length === 0 ? (
                                <div className="text-center py-16">

                                    <div className="w-20 h-20 mx-auto rounded-3xl bg-green-50 flex items-center justify-center text-4xl">
                                        💻
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-950 mt-5">
                                        No skills added yet
                                    </h3>

                                    <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                        Start building your
                                        professional profile
                                        by adding your first
                                        technical skill.
                                    </p>

                                    <button
                                        onClick={() =>
                                            setShowForm(true)
                                        }
                                        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-500 transition"
                                    >
                                        ＋ Add Your First Skill
                                    </button>

                                </div>
                            ) : (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                                    {skills.map((skill) => (

                                        <div
                                            key={skill._id}
                                            className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        >

                                            {/* Top accent */}

                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-400" />

                                            <div className="flex items-start gap-4">

                                                {/* ICON */}

                                                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-2xl group-hover:scale-105 transition">
                                                    {getSkillIcon(
                                                        skill.category
                                                    )}
                                                </div>

                                                {/* INFO */}

                                                <div className="flex-1 min-w-0">

                                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">

                                                        <div>

                                                            <h3 className="text-xl font-black text-slate-950">
                                                                {
                                                                    skill.name
                                                                }
                                                            </h3>

                                                            <p className="text-sm text-gray-500 mt-1">
                                                                {skill.category ||
                                                                    "Technical Skill"}
                                                            </p>

                                                        </div>

                                                        <span
                                                            className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-bold border ${getLevelStyle(
                                                                skill.level
                                                            )}`}
                                                        >
                                                            {
                                                                skill.level
                                                            }
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>

                                            {/* PROFICIENCY */}

                                            <div className="mt-6">

                                                <div className="flex justify-between items-center mb-2">

                                                    <span className="text-sm font-semibold text-gray-600">
                                                        Proficiency
                                                    </span>

                                                    <span className="text-sm font-black text-green-600">
                                                        {
                                                            skill.percentage
                                                        }
                                                        %
                                                    </span>

                                                </div>

                                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                                                    <div
                                                        className="h-full bg-gradient-to-r from-green-600 to-emerald-400 rounded-full transition-all duration-700"
                                                        style={{
                                                            width: `${skill.percentage}%`,
                                                        }}
                                                    />

                                                </div>

                                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                                    <span>
                                                        Learning
                                                    </span>

                                                    <span>
                                                        Mastery
                                                    </span>
                                                </div>

                                            </div>

                                            {/* ACTIONS */}

                                            <div className="flex gap-3 mt-6 pt-5 border-t border-gray-100">

                                                <button
                                                    onClick={() =>
                                                        handleEdit(
                                                            skill
                                                        )
                                                    }
                                                    className="flex-1 border border-green-200 bg-green-50 text-green-700 px-4 py-2.5 rounded-xl font-bold hover:bg-green-600 hover:text-white transition"
                                                >
                                                    ✏️ Edit
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            skill._id
                                                        )
                                                    }
                                                    className="flex-1 border border-red-200 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl font-bold hover:bg-red-500 hover:text-white transition"
                                                >
                                                    🗑️ Delete
                                                </button>

                                            </div>

                                        </div>

                                    ))}

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
                                    Career Tip
                                </h3>

                                <p className="text-slate-400 mt-1 leading-6">
                                    Keep your strongest and
                                    most relevant skills
                                    updated. A well-maintained
                                    skill profile helps you make
                                    better career decisions and
                                    present yourself professionally.
                                </p>

                            </div>

                        </div>

                    </section>

                </div>
            </div>
        </div>
    );
};

export default Skills;