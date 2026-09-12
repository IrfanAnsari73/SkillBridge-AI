import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const initialForm = {
    companyName: "",
    jobRole: "",
    appliedDate: "",
    status: "Applied",
    jobType: "Full Time",
    location: "",
    notes: "",
    jobLink: "",
};

const JobApplications = () => {
    const [applications, setApplications] = useState([]);
    const [form, setForm] = useState(initialForm);
    const [editingId, setEditingId] = useState(null);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const token = localStorage.getItem("token");

    // ===============================
    // FETCH APPLICATIONS
    // ===============================
    const fetchApplications = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "http://localhost:5000/api/job-applications",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch applications"
                );
            }

            setApplications(data.applications || []);
        } catch (err) {
            console.error("Fetch Applications Error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    // ===============================
    // HANDLE INPUT
    // ===============================
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // ===============================
    // ADD / UPDATE
    // ===============================
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.companyName || !form.jobRole) {
            setError("Company name and job role are required.");
            return;
        }

        try {
            setSaving(true);
            setError("");

            const url = editingId
                ? `http://localhost:5000/api/job-applications/${editingId}`
                : "http://localhost:5000/api/job-applications";

            const method = editingId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to save application"
                );
            }

            setForm(initialForm);
            setEditingId(null);

            await fetchApplications();
        } catch (err) {
            console.error("Save Application Error:", err);
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    // ===============================
    // EDIT
    // ===============================
    const handleEdit = (application) => {
        setEditingId(application._id);

        setForm({
            companyName: application.companyName || "",
            jobRole: application.jobRole || "",
            appliedDate: application.appliedDate
                ? application.appliedDate.split("T")[0]
                : "",
            status: application.status || "Applied",
            jobType: application.jobType || "Full Time",
            location: application.location || "",
            notes: application.notes || "",
            jobLink: application.jobLink || "",
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // ===============================
    // DELETE
    // ===============================
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this application?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            setError("");

            const response = await fetch(
                `http://localhost:5000/api/job-applications/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete application"
                );
            }

            await fetchApplications();
        } catch (err) {
            console.error("Delete Application Error:", err);
            setError(err.message);
        }
    };

    // ===============================
    // CANCEL EDIT
    // ===============================
    const cancelEdit = () => {
        setEditingId(null);
        setForm(initialForm);
        setError("");
    };

    // ===============================
    // STATISTICS
    // ===============================
    const totalApplications = applications.length;

    const appliedCount = applications.filter(
        (app) => app.status === "Applied"
    ).length;

    const shortlistedCount = applications.filter(
        (app) => app.status === "Shortlisted"
    ).length;

    const interviewCount = applications.filter(
        (app) => app.status === "Interview"
    ).length;

    const selectedCount = applications.filter(
        (app) => app.status === "Selected"
    ).length;

    const rejectedCount = applications.filter(
        (app) => app.status === "Rejected"
    ).length;

    // ===============================
    // STATUS STYLE
    // ===============================
    const getStatusClass = (status) => {
        switch (status) {
            case "Selected":
                return "bg-green-100 text-green-700";

            case "Interview":
                return "bg-blue-100 text-blue-700";

            case "Shortlisted":
                return "bg-yellow-100 text-yellow-700";

            case "Rejected":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <div className="text-5xl mb-4">💼</div>

                        <p className="text-xl font-semibold text-gray-700">
                            Loading Job Applications...
                        </p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="space-y-8">

                {/* ===============================
                    HEADER
                =============================== */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        💼 Job Application Tracker
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Track your job and internship applications in one place.
                    </p>
                </div>

                {/* ===============================
                    ERROR
                =============================== */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
                        {error}
                    </div>
                )}

                {/* ===============================
                    STATISTICS
                =============================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            📋 Total
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {totalApplications}
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            📝 Applied
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {appliedCount}
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            ⭐ Shortlisted
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {shortlistedCount}
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            🎤 Interviews
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {interviewCount}
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            🏆 Selected
                        </p>

                        <h2 className="text-3xl font-bold text-green-600 mt-2">
                            {selectedCount}
                        </h2>
                    </div>

                </div>

                {/* ===============================
                    ADD / EDIT FORM
                =============================== */}
                <div className="bg-white rounded-2xl shadow-md p-6">

                    <div className="flex items-center justify-between mb-6">

                        <h2 className="text-2xl font-bold text-gray-800">
                            {editingId
                                ? "✏️ Edit Application"
                                : "➕ Add Job Application"}
                        </h2>

                        {editingId && (
                            <button
                                onClick={cancelEdit}
                                className="text-sm text-red-600 font-semibold hover:underline"
                            >
                                Cancel Edit
                            </button>
                        )}

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    >

                        {/* Company */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Company Name *
                            </label>

                            <input
                                type="text"
                                name="companyName"
                                value={form.companyName}
                                onChange={handleChange}
                                placeholder="e.g. TCS"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Job Role */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Job Role *
                            </label>

                            <input
                                type="text"
                                name="jobRole"
                                value={form.jobRole}
                                onChange={handleChange}
                                placeholder="e.g. Full Stack Developer"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Applied Date */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Applied Date
                            </label>

                            <input
                                type="date"
                                name="appliedDate"
                                value={form.appliedDate}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Status
                            </label>

                            <select
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="Applied">
                                    Applied
                                </option>

                                <option value="Shortlisted">
                                    Shortlisted
                                </option>

                                <option value="Interview">
                                    Interview
                                </option>

                                <option value="Selected">
                                    Selected
                                </option>

                                <option value="Rejected">
                                    Rejected
                                </option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Job Type
                            </label>

                            <select
                                name="jobType"
                                value={form.jobType}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="Full Time">
                                    Full Time
                                </option>

                                <option value="Part Time">
                                    Part Time
                                </option>

                                <option value="Internship">
                                    Internship
                                </option>

                                <option value="Remote">
                                    Remote
                                </option>

                                <option value="Freelance">
                                    Freelance
                                </option>
                            </select>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Location
                            </label>

                            <input
                                type="text"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                placeholder="e.g. Lucknow / Remote"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Job Link */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Job Link
                            </label>

                            <input
                                type="url"
                                name="jobLink"
                                value={form.jobLink}
                                onChange={handleChange}
                                placeholder="https://example.com/job"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Notes */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Notes
                            </label>

                            <textarea
                                name="notes"
                                value={form.notes}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Add interview details, recruiter information, preparation notes..."
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2">

                            <button
                                type="submit"
                                disabled={saving}
                                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 transition"
                            >
                                {saving
                                    ? "Saving..."
                                    : editingId
                                        ? "Update Application"
                                        : "Add Application"}
                            </button>

                        </div>

                    </form>
                </div>

                {/* ===============================
                    APPLICATION LIST
                =============================== */}
                <div className="bg-white rounded-2xl shadow-md p-6">

                    <div className="flex items-center justify-between mb-6">

                        <h2 className="text-2xl font-bold text-gray-800">
                            📋 My Applications
                        </h2>

                        <span className="text-sm text-gray-500">
                            {applications.length} application
                            {applications.length !== 1 ? "s" : ""}
                        </span>

                    </div>

                    {applications.length === 0 ? (

                        <div className="text-center py-12">

                            <div className="text-5xl mb-4">
                                📭
                            </div>

                            <h3 className="text-xl font-bold text-gray-700">
                                No Applications Yet
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Add your first job or internship application above.
                            </p>

                        </div>

                    ) : (

                        <div className="space-y-4">

                            {applications.map((application) => (

                                <div
                                    key={application._id}
                                    className="border rounded-xl p-5 hover:shadow-md transition"
                                >

                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

                                        {/* Application Info */}
                                        <div className="flex-1">

                                            <div className="flex flex-wrap items-center gap-3">

                                                <h3 className="text-xl font-bold text-gray-800">
                                                    {application.jobRole}
                                                </h3>

                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                                                        application.status
                                                    )}`}
                                                >
                                                    {application.status}
                                                </span>

                                            </div>

                                            <p className="text-green-700 font-semibold mt-2">
                                                🏢 {application.companyName}
                                            </p>

                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">

                                                <span>
                                                    📅{" "}
                                                    {application.appliedDate
                                                        ? new Date(
                                                            application.appliedDate
                                                        ).toLocaleDateString()
                                                        : "N/A"}
                                                </span>

                                                <span>
                                                    💼 {application.jobType}
                                                </span>

                                                {application.location && (
                                                    <span>
                                                        📍{" "}
                                                        {application.location}
                                                    </span>
                                                )}

                                            </div>

                                            {application.notes && (
                                                <p className="text-gray-600 mt-4">
                                                    📝 {application.notes}
                                                </p>
                                            )}

                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-wrap gap-2">

                                            {application.jobLink && (
                                                <a
                                                    href={application.jobLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
                                                >
                                                    🔗 Job
                                                </a>
                                            )}

                                            <button
                                                onClick={() =>
                                                    handleEdit(application)
                                                }
                                                className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600"
                                            >
                                                ✏️ Edit
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(
                                                        application._id
                                                    )
                                                }
                                                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700"
                                            >
                                                🗑️ Delete
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

                {/* ===============================
                    EXTRA STATISTICS
                =============================== */}
                <div className="bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        📈 Application Overview
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="bg-blue-50 rounded-xl p-5">
                            <p className="text-blue-700 font-semibold">
                                🎤 Interview Stage
                            </p>

                            <p className="text-3xl font-bold text-blue-800 mt-2">
                                {interviewCount}
                            </p>
                        </div>

                        <div className="bg-red-50 rounded-xl p-5">
                            <p className="text-red-700 font-semibold">
                                ❌ Rejected
                            </p>

                            <p className="text-3xl font-bold text-red-800 mt-2">
                                {rejectedCount}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default JobApplications;