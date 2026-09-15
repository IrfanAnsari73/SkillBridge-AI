import { useEffect, useState } from "react";

const CareerGoals = () => {
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingGoal, setEditingGoal] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        targetRole: "",
        description: "",
        targetDate: "",
        progress: 0,
        status: "Not Started",
    });

    const token = localStorage.getItem("token");

    // ==========================================
    // FETCH CAREER GOALS
    // ==========================================

    const fetchGoals = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/career-goals",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.ok) {
                setGoals(
                    Array.isArray(data)
                        ? data
                        : Array.isArray(data.goals)
                            ? data.goals
                            : []
                );
            } else {
                console.error(
                    data.message ||
                    "Unable to fetch career goals"
                );

                setGoals([]);
            }
        } catch (error) {
            console.error(
                "Error fetching career goals:",
                error
            );

            setGoals([]);
        } finally {
            setLoading(false);
        }
    };

    // ==========================================
    // LOAD GOALS
    // ==========================================

    useEffect(() => {
        fetchGoals();
    }, []);

    // ==========================================
    // HANDLE INPUT
    // ==========================================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ==========================================
    // RESET FORM
    // ==========================================

    const resetForm = () => {
        setFormData({
            title: "",
            targetRole: "",
            description: "",
            targetDate: "",
            progress: 0,
            status: "Not Started",
        });

        setEditingGoal(null);
        setShowForm(false);
    };

    // ==========================================
    // CREATE / UPDATE GOAL
    // ==========================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = editingGoal
                ? `https://skillbridge-ai-backend-v6uk.onrender.com/api/career-goals/${editingGoal._id}`
                : "https://skillbridge-ai-backend-v6uk.onrender.com/api/career-goals";

            const method = editingGoal ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: formData.title,
                    targetRole: formData.targetRole,
                    description: formData.description,
                    targetDate: formData.targetDate,
                    progress: Number(formData.progress),
                    status: formData.status,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                    "Unable to save career goal"
                );
                return;
            }

            alert(
                editingGoal
                    ? "Career goal updated successfully!"
                    : "Career goal created successfully!"
            );

            resetForm();

            await fetchGoals();
        } catch (error) {
            console.error(
                "Error saving career goal:",
                error
            );

            alert(
                "Server error. Please try again."
            );
        }
    };

    // ==========================================
    // EDIT GOAL
    // ==========================================

    const handleEdit = (goal) => {
        setEditingGoal(goal);

        setFormData({
            title: goal.title || "",
            targetRole: goal.targetRole || "",
            description: goal.description || "",
            targetDate: goal.targetDate
                ? new Date(goal.targetDate)
                    .toISOString()
                    .split("T")[0]
                : "",
            progress: goal.progress || 0,
            status:
                goal.status || "Not Started",
        });

        setShowForm(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // ==========================================
    // DELETE GOAL
    // ==========================================

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this career goal?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `https://skillbridge-ai-backend-v6uk.onrender.com/api/career-goals/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                    "Unable to delete career goal"
                );
                return;
            }

            alert(
                "Career goal deleted successfully!"
            );

            await fetchGoals();
        } catch (error) {
            console.error(
                "Error deleting career goal:",
                error
            );

            alert(
                "Server error. Please try again."
            );
        }
    };

    // ==========================================
    // PROGRESS COLOR
    // ==========================================

    const getProgressColor = (progress) => {
        if (progress === 100) {
            return "bg-green-600";
        }

        if (progress >= 50) {
            return "bg-green-500";
        }

        if (progress > 0) {
            return "bg-green-400";
        }

        return "bg-gray-300";
    };

    // ==========================================
    // STATUS STYLE
    // ==========================================

    const getStatusStyle = (status) => {
        if (status === "Completed") {
            return "bg-green-100 text-green-700 border border-green-200";
        }

        if (status === "In Progress") {
            return "bg-green-50 text-green-700 border border-green-200";
        }

        return "bg-gray-100 text-gray-700 border border-gray-200";
    };

    // ==========================================
    // LOADING
    // ==========================================

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">

                <div className="min-h-[70vh] flex items-center justify-center">

                    <div className="text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-5">

                            <div className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-green-600 animate-spin" />

                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-green-600">
                            Career Progress
                        </p>

                        <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-2">
                            Loading your career goals...
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Preparing your career progress dashboard.
                        </p>

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            {/* Background Decoration */}

            <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

            <div className="relative space-y-7">

                {/* ==================================
                    HEADER
                ================================== */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-28 -top-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                    <div className="absolute -left-28 -bottom-32 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

                    <div className="relative p-6 md:p-9">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">

                            <div className="flex-1">

                                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                    🎯 Career Progress Tracker
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black mt-5 leading-tight">
                                    Career Goals
                                    <span className="text-green-500">
                                        .
                                    </span>
                                </h1>

                                <p className="text-gray-400 mt-4 max-w-2xl leading-7">
                                    Set meaningful career goals, track
                                    your progress and stay focused on
                                    your professional journey.
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
                                className="w-full lg:w-auto shrink-0 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-xl font-bold transition hover:-translate-y-0.5 shadow-lg shadow-green-600/20"
                            >
                                {showForm
                                    ? "✕ Cancel"
                                    : "+ Add Career Goal"}
                            </button>

                        </div>

                    </div>

                </section>

                {/* ==================================
                    OVERVIEW
                ================================== */}

                <section>

                    <div className="mb-5">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Goal Overview
                        </p>

                        <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                            Your Career Journey
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <OverviewCard
                            icon="🎯"
                            label="Total Goals"
                            value={goals.length}
                        />

                        <OverviewCard
                            icon="🚀"
                            label="In Progress"
                            value={
                                goals.filter(
                                    (goal) =>
                                        goal.status ===
                                        "In Progress"
                                ).length
                            }
                        />

                        <OverviewCard
                            icon="✅"
                            label="Completed"
                            value={
                                goals.filter(
                                    (goal) =>
                                        goal.status ===
                                        "Completed"
                                ).length
                            }
                        />

                        <OverviewCard
                            icon="📊"
                            label="Avg. Progress"
                            value={
                                goals.length > 0
                                    ? `${Math.round(
                                        goals.reduce(
                                            (
                                                total,
                                                goal
                                            ) =>
                                                total +
                                                Number(
                                                    goal.progress ||
                                                    0
                                                ),
                                            0
                                        ) /
                                        goals.length
                                    )}%`
                                    : "0%"
                            }
                        />

                    </div>

                </section>

                {/* ==================================
                    FORM
                ================================== */}

                {showForm && (
                    <section className="relative overflow-hidden bg-white rounded-[28px] shadow-xl border border-gray-200">

                        <div className="absolute right-0 top-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />

                        <div className="relative">

                            <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                    {editingGoal
                                        ? "Update Goal"
                                        : "Create Goal"}
                                </p>

                                <h2 className="text-2xl font-black text-slate-950 mt-1">
                                    {editingGoal
                                        ? "Edit Career Goal"
                                        : "Create New Career Goal"}
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Define what you want to achieve
                                    and track your progress.
                                </p>

                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="relative p-5 md:p-8 space-y-6"
                            >

                                {/* Goal Title + Target Role */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <FormInput
                                        label="Goal Title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Become a Full Stack Developer"
                                        required
                                    />

                                    <FormInput
                                        label="Target Role"
                                        name="targetRole"
                                        value={formData.targetRole}
                                        onChange={handleChange}
                                        placeholder="MERN Stack Developer"
                                        required
                                    />

                                </div>

                                {/* Description */}

                                <div>

                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Description
                                    </label>

                                    <textarea
                                        name="description"
                                        value={
                                            formData.description
                                        }
                                        onChange={handleChange}
                                        placeholder="Describe what you want to achieve..."
                                        rows="4"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 resize-none transition"
                                    />

                                </div>

                                {/* Date + Progress + Status */}

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                                    <FormInput
                                        label="Target Date"
                                        name="targetDate"
                                        type="date"
                                        value={
                                            formData.targetDate
                                        }
                                        onChange={handleChange}
                                        required
                                    />

                                    <FormInput
                                        label="Progress (%)"
                                        name="progress"
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={
                                            formData.progress
                                        }
                                        onChange={handleChange}
                                    />

                                    <div>

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Status
                                        </label>

                                        <select
                                            name="status"
                                            value={
                                                formData.status
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition"
                                        >
                                            <option value="Not Started">
                                                Not Started
                                            </option>

                                            <option value="In Progress">
                                                In Progress
                                            </option>

                                            <option value="Completed">
                                                Completed
                                            </option>
                                        </select>

                                    </div>

                                </div>

                                {/* Progress Preview */}

                                <div className="rounded-2xl bg-green-50 border border-green-100 p-5">

                                    <div className="flex justify-between items-center mb-3">

                                        <div>

                                            <p className="text-xs font-black uppercase tracking-wide text-green-600">
                                                Goal Progress
                                            </p>

                                            <p className="text-sm text-gray-600 mt-1">
                                                Current completion
                                            </p>

                                        </div>

                                        <span className="text-2xl font-black text-green-700">
                                            {formData.progress}%
                                        </span>

                                    </div>

                                    <div className="w-full h-3 bg-white rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-green-600 rounded-full transition-all duration-500"
                                            style={{
                                                width: `${Math.min(
                                                    Math.max(
                                                        Number(
                                                            formData.progress
                                                        ) || 0,
                                                        0
                                                    ),
                                                    100
                                                )}%`,
                                            }}
                                        />

                                    </div>

                                </div>

                                {/* Buttons */}

                                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">

                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-bold hover:bg-gray-50 transition"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition shadow-lg shadow-green-600/20"
                                    >
                                        {editingGoal
                                            ? "✓ Update Goal"
                                            : "+ Create Goal"}
                                    </button>

                                </div>

                            </form>

                        </div>

                    </section>
                )}

                {/* ==================================
                    EMPTY STATE
                ================================== */}

                {goals.length === 0 ? (

                    <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl p-10 md:p-14 text-center">

                        <div className="w-20 h-20 mx-auto rounded-3xl bg-green-50 flex items-center justify-center text-4xl">
                            🎯
                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600 mt-6">
                            Start Your Journey
                        </p>

                        <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-2">
                            No Career Goals Yet
                        </h2>

                        <p className="text-gray-500 max-w-lg mx-auto mt-3 leading-6">
                            Create your first career goal and start
                            tracking your progress toward your dream
                            role.
                        </p>

                        <button
                            onClick={() =>
                                setShowForm(true)
                            }
                            className="mt-7 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-600/20"
                        >
                            + Create Your First Goal
                        </button>

                    </section>

                ) : (

                    /* ==================================
                       GOALS
                    ================================== */

                    <section>

                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                    Your Goals
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                    Career Goals & Progress
                                </h2>

                            </div>

                            <p className="text-sm text-gray-500">
                                {goals.length}{" "}
                                {goals.length === 1
                                    ? "goal"
                                    : "goals"}{" "}
                                tracked
                            </p>

                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            {goals.map((goal) => (

                                <div
                                    key={goal._id}
                                    className="group bg-white rounded-[28px] border border-gray-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all"
                                >

                                    {/* Card Header */}

                                    <div className="flex items-start justify-between gap-4">

                                        <div className="flex items-start gap-4 min-w-0">

                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                                                🎯
                                            </div>

                                            <div className="min-w-0">

                                                <h2 className="text-xl font-black text-slate-950 break-words">
                                                    {goal.title}
                                                </h2>

                                                <p className="text-green-600 font-bold mt-1 break-words">
                                                    {goal.targetRole}
                                                </p>

                                            </div>

                                        </div>

                                        <span
                                            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${getStatusStyle(
                                                goal.status
                                            )}`}
                                        >
                                            {goal.status}
                                        </span>

                                    </div>

                                    {/* Description */}

                                    {goal.description && (
                                        <p className="text-gray-500 text-sm mt-5 leading-6 break-words">
                                            {goal.description}
                                        </p>
                                    )}

                                    {/* Target Date */}

                                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-5">

                                        <span className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                                            📅
                                        </span>

                                        <span>
                                            Target:{" "}
                                            {new Date(
                                                goal.targetDate
                                            ).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                            )}
                                        </span>

                                    </div>

                                    {/* Progress */}

                                    <div className="mt-6">

                                        <div className="flex justify-between items-center mb-2">

                                            <span className="text-sm font-bold text-gray-700">
                                                Progress
                                            </span>

                                            <span className="text-sm font-black text-green-600">
                                                {goal.progress}%
                                            </span>

                                        </div>

                                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                                            <div
                                                className={`h-full rounded-full transition-all duration-700 ${getProgressColor(
                                                    goal.progress
                                                )}`}
                                                style={{
                                                    width: `${Math.min(
                                                        Math.max(
                                                            Number(
                                                                goal.progress ||
                                                                0
                                                            ),
                                                            0
                                                        ),
                                                        100
                                                    )}%`,
                                                }}
                                            />

                                        </div>

                                        <div className="flex justify-between mt-2 text-xs text-gray-400">

                                            <span>
                                                Started
                                            </span>

                                            <span>
                                                {goal.progress >=
                                                    100
                                                    ? "Completed"
                                                    : "In Progress"}
                                            </span>

                                        </div>

                                    </div>

                                    {/* Actions */}

                                    <div className="flex justify-end gap-3 mt-6 pt-5 border-t border-gray-100">

                                        <button
                                            onClick={() =>
                                                handleEdit(goal)
                                            }
                                            className="px-4 py-2.5 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 border border-green-100 font-bold text-sm transition"
                                        >
                                            ✏️ Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    goal._id
                                                )
                                            }
                                            className="px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 font-bold text-sm transition"
                                        >
                                            🗑️ Delete
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>

                )}

            </div>

        </div>
    );
};


// ==========================================
// OVERVIEW CARD
// ==========================================

const OverviewCard = ({
    icon,
    label,
    value,
}) => {
    return (
        <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg p-5 hover:-translate-y-1 hover:shadow-xl transition-all">

            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl group-hover:scale-105 transition">
                {icon}
            </div>

            <p className="text-gray-500 text-sm font-medium mt-4">
                {label}
            </p>

            <p className="text-3xl font-black text-slate-950 mt-1">
                {value}
            </p>

        </div>
    );
};


// ==========================================
// FORM INPUT
// ==========================================

const FormInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
    min,
    max,
}) => {
    return (
        <div>

            <label className="block text-sm font-bold text-gray-700 mb-2">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                min={min}
                max={max}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition"
            />

        </div>
    );
};

export default CareerGoals;