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
            const response = await fetch(
                "http://localhost:5000/api/career-goals",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            console.log("Career Goals API:", data);

            if (response.ok) {
                // Backend may return:
                // [ ...goals ]
                // OR
                // { success: true, goals: [ ...goals ] }

                setGoals(
                    Array.isArray(data)
                        ? data
                        : Array.isArray(data.goals)
                            ? data.goals
                            : []
                );
            } else {
                console.error(
                    data.message || "Unable to fetch career goals"
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
                ? `http://localhost:5000/api/career-goals/${editingGoal._id}`
                : "http://localhost:5000/api/career-goals";

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

            console.log("Save Goal API:", data);

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
                `http://localhost:5000/api/career-goals/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            console.log("Delete Goal API:", data);

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
            return "bg-green-500";
        }

        if (progress >= 50) {
            return "bg-blue-500";
        }

        if (progress > 0) {
            return "bg-yellow-500";
        }

        return "bg-gray-400";
    };

    // ==========================================
    // STATUS STYLE
    // ==========================================

    const getStatusStyle = (status) => {
        if (status === "Completed") {
            return "bg-green-100 text-green-700";
        }

        if (status === "In Progress") {
            return "bg-blue-100 text-blue-700";
        }

        return "bg-gray-100 text-gray-700";
    };

    // ==========================================
    // LOADING
    // ==========================================

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <p className="text-gray-500 text-lg">
                    Loading career goals...
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">

            {/* ==================================
                HEADER
            ================================== */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Career Goals 🎯
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Set your career goals and track
                        your progress.
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
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold transition"
                >
                    {showForm
                        ? "✕ Cancel"
                        : "+ Add Career Goal"}
                </button>
            </div>

            {/* ==================================
                FORM
            ================================== */}

            {showForm && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">

                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                        {editingGoal
                            ? "Edit Career Goal"
                            : "Create New Career Goal"}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Goal Title + Target Role */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Goal Title
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Become a Full Stack Developer"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Target Role
                                </label>

                                <input
                                    type="text"
                                    name="targetRole"
                                    value={formData.targetRole}
                                    onChange={handleChange}
                                    placeholder="MERN Stack Developer"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                        </div>

                        {/* Description */}

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Describe what you want to achieve..."
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 resize-none"
                            />
                        </div>

                        {/* Date + Progress + Status */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Target Date
                                </label>

                                <input
                                    type="date"
                                    name="targetDate"
                                    value={formData.targetDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Progress (%)
                                </label>

                                <input
                                    type="number"
                                    name="progress"
                                    min="0"
                                    max="100"
                                    value={formData.progress}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
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

                        {/* Form Buttons */}

                        <div className="flex justify-end gap-3 pt-2">

                            <button
                                type="button"
                                onClick={resetForm}
                                className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold"
                            >
                                {editingGoal
                                    ? "Update Goal"
                                    : "Create Goal"}
                            </button>

                        </div>

                    </form>
                </div>
            )}

            {/* ==================================
                EMPTY STATE
            ================================== */}

            {goals.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">

                    <div className="text-6xl mb-4">
                        🎯
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        No Career Goals Yet
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Create your first career goal
                        and start tracking your journey.
                    </p>

                    <button
                        onClick={() =>
                            setShowForm(true)
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        + Create Your First Goal
                    </button>

                </div>
            ) : (

                /* ==================================
                   GOALS GRID
                ================================== */

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {goals.map((goal) => (
                        <div
                            key={goal._id}
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
                        >

                            {/* Card Header */}

                            <div className="flex items-start justify-between gap-4">

                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {goal.title}
                                    </h2>

                                    <p className="text-green-600 font-medium mt-1">
                                        🎯{" "}
                                        {goal.targetRole}
                                    </p>
                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusStyle(
                                        goal.status
                                    )}`}
                                >
                                    {goal.status}
                                </span>

                            </div>

                            {/* Description */}

                            {goal.description && (
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                    {goal.description}
                                </p>
                            )}

                            {/* Target Date */}

                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-5">
                                📅

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

                            <div className="mt-5">

                                <div className="flex justify-between mb-2">

                                    <span className="text-sm font-semibold text-gray-700">
                                        Progress
                                    </span>

                                    <span className="text-sm font-bold text-gray-800">
                                        {goal.progress}%
                                    </span>

                                </div>

                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                                            goal.progress
                                        )}`}
                                        style={{
                                            width: `${goal.progress}%`,
                                        }}
                                    />

                                </div>

                            </div>

                            {/* Actions */}

                            <div className="flex justify-end gap-3 mt-6 pt-5 border-t border-gray-100">

                                <button
                                    onClick={() =>
                                        handleEdit(goal)
                                    }
                                    className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 font-semibold text-sm"
                                >
                                    ✏️ Edit
                                </button>

                                <button
                                    onClick={() =>
                                        handleDelete(
                                            goal._id
                                        )
                                    }
                                    className="px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-semibold text-sm"
                                >
                                    🗑️ Delete
                                </button>

                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
};

export default CareerGoals;