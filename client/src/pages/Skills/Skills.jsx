import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

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

    // =========================
    // FETCH SKILLS
    // =========================
    const fetchSkills = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/skills",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to load skills.");
                return;
            }

            setSkills(data.skills || []);
        } catch (error) {
            console.error("Fetch Skills Error:", error);
            setError("Unable to connect to server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkills();
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
            name: "",
            category: "",
            level: "Beginner",
            percentage: 0,
        });

        setEditingSkillId(null);
        setShowForm(false);
        setError("");
    };

    // =========================
    // EDIT SKILL
    // =========================
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

    // =========================
    // CREATE / UPDATE SKILL
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const url = editingSkillId
                ? `http://localhost:5000/api/skills/${editingSkillId}`
                : "http://localhost:5000/api/skills";

            const method = editingSkillId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: formData.name,
                    category: formData.category,
                    level: formData.level,
                    percentage: Number(formData.percentage),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    `Failed to ${editingSkillId ? "update" : "create"} skill.`
                );
                return;
            }

            if (editingSkillId) {
                setSkills(
                    skills.map((skill) =>
                        skill._id === editingSkillId
                            ? data.skill
                            : skill
                    )
                );
            } else {
                setSkills([data.skill, ...skills]);
            }

            resetForm();

        } catch (error) {
            console.error("Skill Save Error:", error);
            setError("Unable to connect to server.");
        }
    };

    // =========================
    // DELETE SKILL
    // =========================
    const handleDelete = async (skillId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this skill?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `http://localhost:5000/api/skills/${skillId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to delete skill.");
                return;
            }

            setSkills(
                skills.filter(
                    (skill) => skill._id !== skillId
                )
            );

        } catch (error) {
            console.error("Delete Skill Error:", error);
            setError("Unable to connect to server.");
        }
    };

    return (
        <DashboardLayout>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                    <h1 className="text-4xl font-bold text-green-600">
                        My Skills 💻
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Manage your technical skills.
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
                    {showForm ? "Close Form" : "+ Add Skill"}
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
                        {editingSkillId
                            ? "Edit Skill"
                            : "Add New Skill"}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Skill Name */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Skill Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Java"
                                required
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Category
                            </label>

                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Programming"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Level */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Skill Level
                            </label>

                            <select
                                name="level"
                                value={formData.level}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
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

                        {/* Percentage */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Skill Percentage: {formData.percentage}%
                            </label>

                            <input
                                type="range"
                                name="percentage"
                                min="0"
                                max="100"
                                value={formData.percentage}
                                onChange={handleChange}
                                className="w-full accent-green-600"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">

                            <button
                                type="submit"
                                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                            >
                                {editingSkillId
                                    ? "Update Skill"
                                    : "Save Skill"}
                            </button>

                            {editingSkillId && (
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

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <h2 className="text-2xl font-bold text-green-600 mb-6">
                    Your Skills
                </h2>

                {loading ? (
                    <p className="text-gray-500">
                        Loading skills...
                    </p>
                ) : skills.length === 0 ? (
                    <div className="text-center py-10">

                        <p className="text-gray-500">
                            No skills added yet.
                        </p>

                        <p className="text-gray-400 mt-2">
                            Click "+ Add Skill" to add your first skill.
                        </p>

                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {skills.map((skill) => (
                            <div
                                key={skill._id}
                                className="border rounded-xl p-6 hover:shadow-md transition"
                            >

                                <div className="flex justify-between items-start gap-4">

                                    <div>
                                        <h3 className="text-xl font-bold text-green-600">
                                            {skill.name}
                                        </h3>

                                        <p className="text-gray-500 mt-1">
                                            {skill.category}
                                        </p>
                                    </div>

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {skill.level}
                                    </span>

                                </div>

                                {/* Progress */}
                                <div className="mt-5">

                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600">
                                            Proficiency
                                        </span>

                                        <span className="font-semibold text-green-600">
                                            {skill.percentage}%
                                        </span>
                                    </div>

                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-green-600 h-3 rounded-full"
                                            style={{
                                                width: `${skill.percentage}%`,
                                            }}
                                        ></div>
                                    </div>

                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 mt-5">

                                    <button
                                        onClick={() =>
                                            handleEdit(skill)
                                        }
                                        className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(skill._id)
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

export default Skills;