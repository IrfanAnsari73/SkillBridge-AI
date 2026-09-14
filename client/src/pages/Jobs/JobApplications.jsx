import { useEffect, useState } from "react";

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
                    data.message ||
                    "Failed to fetch applications"
                );
            }

            setApplications(data.applications || []);
        } catch (err) {
            console.error(
                "Fetch Applications Error:",
                err
            );
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
            setError(
                "Company name and job role are required."
            );
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
                    data.message ||
                    "Failed to save application"
                );
            }

            setForm(initialForm);
            setEditingId(null);

            await fetchApplications();
        } catch (err) {
            console.error(
                "Save Application Error:",
                err
            );
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
            companyName:
                application.companyName || "",
            jobRole:
                application.jobRole || "",
            appliedDate:
                application.appliedDate
                    ? application.appliedDate.split("T")[0]
                    : "",
            status:
                application.status || "Applied",
            jobType:
                application.jobType || "Full Time",
            location:
                application.location || "",
            notes:
                application.notes || "",
            jobLink:
                application.jobLink || "",
        });

        setError("");

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
                    data.message ||
                    "Failed to delete application"
                );
            }

            await fetchApplications();
        } catch (err) {
            console.error(
                "Delete Application Error:",
                err
            );
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

    const totalApplications =
        applications.length;

    const appliedCount =
        applications.filter(
            (app) => app.status === "Applied"
        ).length;

    const shortlistedCount =
        applications.filter(
            (app) => app.status === "Shortlisted"
        ).length;

    const interviewCount =
        applications.filter(
            (app) => app.status === "Interview"
        ).length;

    const selectedCount =
        applications.filter(
            (app) => app.status === "Selected"
        ).length;

    const rejectedCount =
        applications.filter(
            (app) => app.status === "Rejected"
        ).length;

    // ===============================
    // STATUS STYLE
    // ===============================

    const getStatusClass = (status) => {
        switch (status) {
            case "Selected":
                return "bg-green-100 text-green-700 border-green-200";

            case "Interview":
                return "bg-green-50 text-green-700 border-green-200";

            case "Shortlisted":
                return "bg-gray-100 text-gray-700 border-gray-200";

            case "Rejected":
                return "bg-red-50 text-red-700 border-red-200";

            default:
                return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    // ===============================
    // LOADING
    // ===============================

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">

                <div className="min-h-[70vh] flex items-center justify-center">

                    <div className="text-center">

                        <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">

                            <div className="w-8 h-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />

                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-green-600">
                            Career Management
                        </p>

                        <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-2">
                            Loading Job Applications...
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Preparing your application tracker.
                        </p>

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="space-y-7">

                {/* ===============================
                    HERO HEADER
                =============================== */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-28 -top-32 w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />

                    <div className="absolute -left-28 -bottom-32 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />

                    <div className="relative p-6 md:p-9">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                            <div className="flex-1">

                                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
                                    💼 Career Application Hub
                                </div>

                                <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                                    Job Application Tracker
                                    <span className="text-green-500">
                                        .
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-2xl text-gray-400 leading-7">
                                    Track your job and internship
                                    applications, monitor progress
                                    and stay organized throughout
                                    your career journey.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        📋 Track Applications
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        🎯 Monitor Progress
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        📊 View Statistics
                                    </span>

                                </div>

                            </div>

                            <div className="hidden sm:flex w-32 h-32 shrink-0 rounded-3xl border border-green-400/20 bg-green-500/10 items-center justify-center text-6xl">
                                💼
                            </div>

                        </div>

                    </div>

                </section>

                {/* ===============================
                    ERROR
                =============================== */}

                {error && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 md:p-5 text-red-700 break-words">

                        <div className="flex items-start gap-3">

                            <span className="text-xl">
                                ⚠️
                            </span>

                            <div className="min-w-0">

                                <p className="font-bold">
                                    Something went wrong
                                </p>

                                <p className="mt-1 text-sm break-words">
                                    {error}
                                </p>

                            </div>

                        </div>

                    </div>
                )}

                {/* ===============================
                    STATISTICS
                =============================== */}

                <section>

                    <div className="mb-5">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Application Overview
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            Your Application Pipeline
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

                        {/* TOTAL */}

                        <div className="bg-white rounded-[24px] border border-gray-200 shadow-lg p-5 hover:-translate-y-1 transition">

                            <div className="flex items-center justify-between">

                                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                                    📋
                                </div>

                                <span className="text-xs font-black text-gray-400">
                                    TOTAL
                                </span>

                            </div>

                            <p className="text-3xl font-black text-slate-950 mt-5">
                                {totalApplications}
                            </p>

                            <p className="text-gray-500 mt-1 text-sm">
                                Applications
                            </p>

                        </div>

                        {/* APPLIED */}

                        <div className="bg-white rounded-[24px] border border-gray-200 shadow-lg p-5 hover:-translate-y-1 transition">

                            <div className="flex items-center justify-between">

                                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                                    📝
                                </div>

                                <span className="text-xs font-black text-gray-400">
                                    APPLIED
                                </span>

                            </div>

                            <p className="text-3xl font-black text-slate-950 mt-5">
                                {appliedCount}
                            </p>

                            <p className="text-gray-500 mt-1 text-sm">
                                Pending applications
                            </p>

                        </div>

                        {/* SHORTLISTED */}

                        <div className="bg-white rounded-[24px] border border-gray-200 shadow-lg p-5 hover:-translate-y-1 transition">

                            <div className="flex items-center justify-between">

                                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                                    ⭐
                                </div>

                                <span className="text-xs font-black text-gray-400">
                                    SHORTLISTED
                                </span>

                            </div>

                            <p className="text-3xl font-black text-slate-950 mt-5">
                                {shortlistedCount}
                            </p>

                            <p className="text-gray-500 mt-1 text-sm">
                                Shortlisted
                            </p>

                        </div>

                        {/* INTERVIEWS */}

                        <div className="bg-white rounded-[24px] border border-gray-200 shadow-lg p-5 hover:-translate-y-1 transition">

                            <div className="flex items-center justify-between">

                                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                                    🎤
                                </div>

                                <span className="text-xs font-black text-gray-400">
                                    INTERVIEWS
                                </span>

                            </div>

                            <p className="text-3xl font-black text-slate-950 mt-5">
                                {interviewCount}
                            </p>

                            <p className="text-gray-500 mt-1 text-sm">
                                Interview stages
                            </p>

                        </div>

                        {/* SELECTED */}

                        <div className="bg-slate-950 rounded-[24px] border border-slate-800 shadow-lg p-5 text-white hover:-translate-y-1 transition">

                            <div className="flex items-center justify-between">

                                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center text-xl">
                                    🏆
                                </div>

                                <span className="text-xs font-black text-green-300">
                                    SELECTED
                                </span>

                            </div>

                            <p className="text-3xl font-black text-green-400 mt-5">
                                {selectedCount}
                            </p>

                            <p className="text-gray-400 mt-1 text-sm">
                                Successful applications
                            </p>

                        </div>

                    </div>

                </section>

                {/* ===============================
                    ADD / EDIT FORM
                =============================== */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                    Application Management
                                </p>

                                <h2 className="text-2xl font-black text-slate-950 mt-1">
                                    {editingId
                                        ? "✏️ Edit Application"
                                        : "➕ Add Job Application"}
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    {editingId
                                        ? "Update your application details."
                                        : "Save a new job or internship opportunity."}
                                </p>

                            </div>

                            {editingId && (
                                <button
                                    onClick={cancelEdit}
                                    className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-600 hover:border-red-200 hover:text-red-600 transition"
                                >
                                    ✕ Cancel Edit
                                </button>
                            )}

                        </div>

                    </div>

                    <div className="p-6 md:p-8">

                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-5"
                        >

                            {/* COMPANY */}

                            <div>

                                <label className="block text-sm font-black text-slate-950 mb-2">
                                    Company Name *
                                </label>

                                <input
                                    type="text"
                                    name="companyName"
                                    value={form.companyName}
                                    onChange={handleChange}
                                    placeholder="e.g. TCS"
                                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                                />

                            </div>

                            {/* JOB ROLE */}

                            <div>

                                <label className="block text-sm font-black text-slate-950 mb-2">
                                    Job Role *
                                </label>

                                <input
                                    type="text"
                                    name="jobRole"
                                    value={form.jobRole}
                                    onChange={handleChange}
                                    placeholder="e.g. Full Stack Developer"
                                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                                />

                            </div>

                            {/* DATE */}

                            <div>

                                <label className="block text-sm font-black text-slate-950 mb-2">
                                    Applied Date
                                </label>

                                <input
                                    type="date"
                                    name="appliedDate"
                                    value={form.appliedDate}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                                />

                            </div>

                            {/* STATUS */}

                            <div>

                                <label className="block text-sm font-black text-slate-950 mb-2">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
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

                            {/* JOB TYPE */}

                            <div>

                                <label className="block text-sm font-black text-slate-950 mb-2">
                                    Job Type
                                </label>

                                <select
                                    name="jobType"
                                    value={form.jobType}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
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

                            {/* LOCATION */}

                            <div>

                                <label className="block text-sm font-black text-slate-950 mb-2">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    value={form.location}
                                    onChange={handleChange}
                                    placeholder="e.g. Lucknow / Remote"
                                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                                />

                            </div>

                            {/* JOB LINK */}

                            <div className="md:col-span-2">

                                <label className="block text-sm font-black text-slate-950 mb-2">
                                    Job Link
                                </label>

                                <input
                                    type="url"
                                    name="jobLink"
                                    value={form.jobLink}
                                    onChange={handleChange}
                                    placeholder="https://example.com/job"
                                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                                />

                            </div>

                            {/* NOTES */}

                            <div className="md:col-span-2">

                                <label className="block text-sm font-black text-slate-950 mb-2">
                                    Notes
                                </label>

                                <textarea
                                    name="notes"
                                    value={form.notes}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Add interview details, recruiter information, preparation notes..."
                                    className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                                />

                            </div>

                            {/* SUBMIT */}

                            <div className="md:col-span-2">

                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="w-full sm:w-auto rounded-xl bg-green-600 px-7 py-3.5 font-black text-white transition hover:bg-green-700 hover:-translate-y-0.5 shadow-lg shadow-green-600/20 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {saving
                                        ? "⏳ Saving..."
                                        : editingId
                                            ? "✓ Update Application"
                                            : "➕ Add Application"}
                                </button>

                            </div>

                        </form>

                    </div>

                </section>

                {/* ===============================
                    APPLICATION LIST
                =============================== */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                    Your Pipeline
                                </p>

                                <h2 className="text-2xl font-black text-slate-950 mt-1">
                                    📋 My Applications
                                </h2>

                            </div>

                            <span className="inline-flex w-fit rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm font-bold text-green-700">
                                {applications.length} application
                                {applications.length !== 1
                                    ? "s"
                                    : ""}
                            </span>

                        </div>

                    </div>

                    <div className="p-5 md:p-8">

                        {applications.length === 0 ? (

                            <div className="text-center py-14">

                                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 flex items-center justify-center text-3xl">
                                    📭
                                </div>

                                <h3 className="text-xl font-black text-slate-950 mt-5">
                                    No Applications Yet
                                </h3>

                                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                    Add your first job or internship
                                    application using the form above.
                                </p>

                            </div>

                        ) : (

                            <div className="space-y-4">

                                {applications.map(
                                    (application) => (

                                        <div
                                            key={
                                                application._id
                                            }
                                            className="group rounded-2xl border border-gray-200 p-5 md:p-6 hover:border-green-200 hover:shadow-lg transition-all"
                                        >

                                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                                                {/* INFO */}

                                                <div className="flex-1 min-w-0">

                                                    <div className="flex items-start gap-4">

                                                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                                            💼
                                                        </div>

                                                        <div className="min-w-0">

                                                            <div className="flex flex-wrap items-center gap-3">

                                                                <h3 className="text-xl font-black text-slate-950 break-words">
                                                                    {
                                                                        application.jobRole
                                                                    }
                                                                </h3>

                                                                <span
                                                                    className={`px-3 py-1.5 rounded-full border text-xs font-black ${getStatusClass(
                                                                        application.status
                                                                    )}`}
                                                                >
                                                                    {
                                                                        application.status
                                                                    }
                                                                </span>

                                                            </div>

                                                            <p className="text-green-700 font-bold mt-2 break-words">
                                                                🏢{" "}
                                                                {
                                                                    application.companyName
                                                                }
                                                            </p>

                                                        </div>

                                                    </div>

                                                    {/* META */}

                                                    <div className="flex flex-wrap gap-2 mt-5">

                                                        <span className="rounded-xl bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-600">
                                                            📅{" "}
                                                            {application.appliedDate
                                                                ? new Date(
                                                                    application.appliedDate
                                                                ).toLocaleDateString()
                                                                : "N/A"}
                                                        </span>

                                                        <span className="rounded-xl bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-600">
                                                            💼{" "}
                                                            {
                                                                application.jobType
                                                            }
                                                        </span>

                                                        {application.location && (
                                                            <span className="rounded-xl bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-600 break-words">
                                                                📍{" "}
                                                                {
                                                                    application.location
                                                                }
                                                            </span>
                                                        )}

                                                    </div>

                                                    {/* NOTES */}

                                                    {application.notes && (
                                                        <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-4">

                                                            <p className="text-xs font-black uppercase tracking-wide text-gray-500 mb-1">
                                                                Notes
                                                            </p>

                                                            <p className="text-gray-600 leading-6 break-words">
                                                                📝{" "}
                                                                {
                                                                    application.notes
                                                                }
                                                            </p>

                                                        </div>
                                                    )}

                                                </div>

                                                {/* ACTIONS */}

                                                <div className="flex flex-wrap gap-2 lg:max-w-xs">

                                                    {application.jobLink && (
                                                        <a
                                                            href={
                                                                application.jobLink
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="rounded-xl bg-slate-950 px-4 py-2.5 text-white text-sm font-bold hover:bg-gray-800 transition"
                                                        >
                                                            🔗 Job
                                                        </a>
                                                    )}

                                                    <button
                                                        onClick={() =>
                                                            handleEdit(
                                                                application
                                                            )
                                                        }
                                                        className="rounded-xl bg-green-600 px-4 py-2.5 text-white text-sm font-bold hover:bg-green-700 transition"
                                                    >
                                                        ✏️ Edit
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                application._id
                                                            )
                                                        }
                                                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-red-600 text-sm font-bold hover:bg-red-100 transition"
                                                    >
                                                        🗑️ Delete
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        )}

                    </div>

                </section>

                {/* ===============================
                    EXTRA STATISTICS
                =============================== */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />

                    <div className="relative p-6 md:p-8">

                        <div className="flex items-start gap-4">

                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                📈
                            </div>

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                    Pipeline Insights
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black mt-1">
                                    Application Overview
                                </h2>

                                <p className="text-gray-400 mt-2">
                                    A quick look at the later stages
                                    of your application pipeline.
                                </p>

                            </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                <div className="flex items-center justify-between">

                                    <p className="font-bold text-gray-300">
                                        🎤 Interview Stage
                                    </p>

                                    <span className="text-2xl">
                                        🎯
                                    </span>

                                </div>

                                <p className="text-4xl font-black text-green-400 mt-4">
                                    {interviewCount}
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Applications currently at
                                    interview stage
                                </p>

                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                <div className="flex items-center justify-between">

                                    <p className="font-bold text-gray-300">
                                        ❌ Rejected
                                    </p>

                                    <span className="text-2xl">
                                        📉
                                    </span>

                                </div>

                                <p className="text-4xl font-black text-gray-300 mt-4">
                                    {rejectedCount}
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Applications marked rejected
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
};

export default JobApplications;