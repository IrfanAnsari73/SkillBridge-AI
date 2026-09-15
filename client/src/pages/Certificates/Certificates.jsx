import { useEffect, useState } from "react";

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingCertificateId, setEditingCertificateId] =
        useState(null);

    const [formData, setFormData] = useState({
        title: "",
        issuer: "",
        issueDate: "",
        credentialUrl: "",
        description: "",
    });

    // =========================================
    // FETCH CERTIFICATES
    // =========================================

    const fetchCertificates = async () => {
        try {
            const token =
                localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/certificates",
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
                    "Failed to load certificates."
                );
                return;
            }

            setCertificates(
                data.certificates || []
            );
        } catch (error) {
            console.error(
                "Fetch Certificates Error:",
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
        fetchCertificates();
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
            issuer: "",
            issueDate: "",
            credentialUrl: "",
            description: "",
        });

        setEditingCertificateId(null);
        setShowForm(false);
        setError("");
    };

    // =========================================
    // EDIT CERTIFICATE
    // =========================================

    const handleEdit = (certificate) => {
        setFormData({
            title: certificate.title || "",
            issuer: certificate.issuer || "",
            issueDate: certificate.issueDate
                ? certificate.issueDate.split("T")[0]
                : "",
            credentialUrl:
                certificate.credentialUrl || "",
            description:
                certificate.description || "",
        });

        setEditingCertificateId(
            certificate._id
        );

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

            const url = editingCertificateId
                ? `https://skillbridge-ai-backend-v6uk.onrender.com/api/certificates/${editingCertificateId}`
                : "https://skillbridge-ai-backend-v6uk.onrender.com/api/certificates";

            const method = editingCertificateId
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
                    issuer: formData.issuer,
                    issueDate:
                        formData.issueDate,
                    credentialUrl:
                        formData.credentialUrl,
                    description:
                        formData.description,
                }),
            });

            const data =
                await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    `Failed to ${editingCertificateId
                        ? "update"
                        : "create"
                    } certificate.`
                );
                return;
            }

            if (editingCertificateId) {
                setCertificates(
                    certificates.map(
                        (certificate) =>
                            certificate._id ===
                                editingCertificateId
                                ? data.certificate
                                : certificate
                    )
                );
            } else {
                setCertificates([
                    data.certificate,
                    ...certificates,
                ]);
            }

            resetForm();
        } catch (error) {
            console.error(
                "Certificate Save Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        }
    };

    // =========================================
    // DELETE
    // =========================================

    const handleDelete = async (
        certificateId
    ) => {
        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this certificate?"
            );

        if (!confirmDelete) return;

        try {
            const token =
                localStorage.getItem("token");

            const response = await fetch(
                `https://skillbridge-ai-backend-v6uk.onrender.com/api/certificates/${certificateId}`,
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
                    "Failed to delete certificate."
                );
                return;
            }

            setCertificates(
                certificates.filter(
                    (certificate) =>
                        certificate._id !==
                        certificateId
                )
            );
        } catch (error) {
            console.error(
                "Delete Certificate Error:",
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

    const totalCertificates =
        certificates.length;

    const certificatesWithCredential =
        certificates.filter(
            (certificate) =>
                certificate.credentialUrl
        ).length;

    const issuers = new Set(
        certificates
            .map(
                (certificate) =>
                    certificate.issuer
            )
            .filter(Boolean)
    ).size;

    const latestCertificate =
        certificates.length > 0
            ? certificates[0]
            : null;

    // =========================================
    // RENDER
    // =========================================

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="relative">

                {/* Decorative Background */}

                <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

                <div className="pointer-events-none absolute top-[700px] -left-40 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />

                <div className="relative space-y-7">

                    {/* =================================
                        HEADER
                    ================================= */}

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

                        <div>

                            <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-green-600">
                                Achievement Portfolio
                            </p>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-2 tracking-tight">
                                My Certificates
                                <span className="text-green-600">
                                    .
                                </span>
                            </h1>

                            <p className="text-gray-500 mt-2 text-base md:text-lg">
                                Showcase your learning,
                                achievements and
                                professional credentials.
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
                                : "＋ Add Certificate"}
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
                                        🏆 Career Achievements
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-black mt-4">
                                        Every certificate
                                        strengthens your profile.
                                    </h2>

                                    <p className="text-slate-400 mt-2 max-w-2xl leading-7">
                                        Keep your certifications
                                        organized and make your
                                        learning journey visible
                                        to recruiters and
                                        opportunities.
                                    </p>

                                </div>

                                <div className="grid grid-cols-2 gap-3 lg:w-[400px]">

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Certificates
                                        </p>

                                        <p className="text-3xl font-black mt-1">
                                            {
                                                totalCertificates
                                            }
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Organizations
                                        </p>

                                        <p className="text-3xl font-black text-green-400 mt-1">
                                            {issuers}
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Verified Links
                                        </p>

                                        <p className="text-3xl font-black mt-1">
                                            {
                                                certificatesWithCredential
                                            }
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-slate-400 text-xs">
                                            Latest
                                        </p>

                                        <p className="text-lg font-black text-green-400 mt-2 truncate">
                                            {latestCertificate
                                                ? latestCertificate.title
                                                : "—"}
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
                                    Certificate Management
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                    {editingCertificateId
                                        ? "Edit Certificate"
                                        : "Add a New Certificate"}
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Add your achievement details
                                    and credential information.
                                </p>

                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="p-5 md:p-8 bg-slate-50/70"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    {/* CERTIFICATE NAME */}

                                    <div className="md:col-span-2">

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Certificate Name
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
                                            placeholder="e.g. Google AI Agents Intensive Course"
                                            required
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />

                                    </div>

                                    {/* ISSUER */}

                                    <div>

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Issuing Organization
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                                🏢
                                            </span>

                                            <input
                                                type="text"
                                                name="issuer"
                                                value={
                                                    formData.issuer
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="Google, Kaggle, Salesforce..."
                                                required
                                                className="w-full border border-gray-200 bg-white rounded-xl pl-11 pr-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />

                                        </div>

                                    </div>

                                    {/* DATE */}

                                    <div>

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Issue Date
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                                📅
                                            </span>

                                            <input
                                                type="date"
                                                name="issueDate"
                                                value={
                                                    formData.issueDate
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                className="w-full border border-gray-200 bg-white rounded-xl pl-11 pr-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />

                                        </div>

                                    </div>

                                    {/* CREDENTIAL URL */}

                                    <div className="md:col-span-2">

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Credential URL
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                                🔗
                                            </span>

                                            <input
                                                type="url"
                                                name="credentialUrl"
                                                value={
                                                    formData.credentialUrl
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="https://example.com/your-certificate"
                                                className="w-full border border-gray-200 bg-white rounded-xl pl-11 pr-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />

                                        </div>

                                        <p className="text-xs text-gray-400 mt-2">
                                            Add a public
                                            verification or
                                            credential link if
                                            available.
                                        </p>

                                    </div>

                                    {/* DESCRIPTION */}

                                    <div className="md:col-span-2">

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Description
                                        </label>

                                        <textarea
                                            name="description"
                                            value={
                                                formData.description
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Briefly describe what you learned or achieved..."
                                            rows="5"
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none resize-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />

                                    </div>

                                </div>

                                {/* =================================
                                    PREVIEW
                                ================================= */}

                                <div className="mt-6 rounded-2xl bg-slate-950 text-white p-5 md:p-6">

                                    <div className="flex items-start gap-4">

                                        <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-3xl">
                                            🏆
                                        </div>

                                        <div className="min-w-0 flex-1">

                                            <p className="text-xs text-green-400 font-bold uppercase tracking-wider">
                                                Certificate Preview
                                            </p>

                                            <h3 className="text-xl font-black mt-1 break-words">
                                                {formData.title ||
                                                    "Your Certificate"}
                                            </h3>

                                            <p className="text-green-300 font-semibold mt-1">
                                                {formData.issuer ||
                                                    "Issuing Organization"}
                                            </p>

                                            {formData.issueDate && (
                                                <p className="text-sm text-slate-400 mt-2">
                                                    Issued on{" "}
                                                    {new Date(
                                                        formData.issueDate
                                                    ).toLocaleDateString(
                                                        "en-IN",
                                                        {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                        }
                                                    )}
                                                </p>
                                            )}

                                            <p className="text-sm text-slate-400 mt-2 line-clamp-2">
                                                {formData.description ||
                                                    "Your certificate description will appear here."}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* BUTTONS */}

                                <div className="flex flex-col sm:flex-row gap-3 mt-6">

                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-green-500 transition-all shadow-lg shadow-green-600/20"
                                    >
                                        {editingCertificateId
                                            ? "✓ Update Certificate"
                                            : "＋ Save Certificate"}
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
                        CERTIFICATE LIST
                    ================================= */}

                    <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                        <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/30 border-b border-gray-200">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>

                                    <p className="text-xs md:text-sm font-black uppercase tracking-[0.18em] text-green-600">
                                        Your Achievements
                                    </p>

                                    <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                        Certificate Collection
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        Your verified learning and
                                        professional achievements.
                                    </p>

                                </div>

                                <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">

                                    <p className="text-xs text-gray-500">
                                        Total Certificates
                                    </p>

                                    <p className="text-xl font-black text-green-600">
                                        {
                                            totalCertificates
                                        }
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
                                        certificates...
                                    </p>

                                </div>
                            ) : certificates.length ===
                                0 ? (
                                <div className="text-center py-16">

                                    <div className="w-20 h-20 mx-auto rounded-3xl bg-green-50 flex items-center justify-center text-4xl">
                                        🏆
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-950 mt-5">
                                        No certificates yet
                                    </h3>

                                    <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                        Start building your
                                        achievement portfolio by
                                        adding your first
                                        certificate.
                                    </p>

                                    <button
                                        onClick={() =>
                                            setShowForm(
                                                true
                                            )
                                        }
                                        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-500 transition"
                                    >
                                        ＋ Add Your First
                                        Certificate
                                    </button>

                                </div>
                            ) : (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                                    {certificates.map(
                                        (
                                            certificate
                                        ) => (
                                            <article
                                                key={
                                                    certificate._id
                                                }
                                                className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                            >

                                                {/* Top Accent */}

                                                <div className="h-1.5 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

                                                <div className="p-5 md:p-6">

                                                    {/* Header */}

                                                    <div className="flex items-start gap-4">

                                                        <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-green-50 flex items-center justify-center text-3xl group-hover:scale-105 transition">
                                                            🏆
                                                        </div>

                                                        <div className="flex-1 min-w-0">

                                                            <h3 className="text-xl font-black text-slate-950 break-words">
                                                                {
                                                                    certificate.title
                                                                }
                                                            </h3>

                                                            <p className="text-green-600 font-bold mt-1">
                                                                {
                                                                    certificate.issuer
                                                                }
                                                            </p>

                                                        </div>

                                                    </div>

                                                    {/* Date */}

                                                    {certificate.issueDate && (
                                                        <div className="inline-flex items-center gap-2 mt-5 bg-slate-50 border border-gray-100 px-3 py-2 rounded-xl">

                                                            <span>
                                                                📅
                                                            </span>

                                                            <span className="text-sm font-semibold text-gray-600">
                                                                Issued{" "}
                                                                {new Date(
                                                                    certificate.issueDate
                                                                ).toLocaleDateString(
                                                                    "en-IN",
                                                                    {
                                                                        day: "numeric",
                                                                        month: "short",
                                                                        year: "numeric",
                                                                    }
                                                                )}
                                                            </span>

                                                        </div>
                                                    )}

                                                    {/* Description */}

                                                    <p className="text-gray-600 mt-5 leading-6 min-h-[72px]">
                                                        {certificate.description ||
                                                            "No description added for this certificate."}
                                                    </p>

                                                    {/* Verified Badge */}

                                                    {certificate.credentialUrl && (
                                                        <div className="flex items-center gap-2 mt-4">

                                                            <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-sm">
                                                                ✓
                                                            </span>

                                                            <span className="text-sm font-bold text-green-700">
                                                                Credential
                                                                available
                                                            </span>

                                                        </div>
                                                    )}

                                                    {/* Actions */}

                                                    <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-gray-100">

                                                        {certificate.credentialUrl && (
                                                            <a
                                                                href={
                                                                    certificate.credentialUrl
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-500 transition"
                                                            >
                                                                🔗
                                                                View Credential
                                                            </a>
                                                        )}

                                                        <button
                                                            onClick={() =>
                                                                handleEdit(
                                                                    certificate
                                                                )
                                                            }
                                                            className="inline-flex items-center gap-2 border border-green-200 bg-green-50 text-green-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition"
                                                        >
                                                            ✏️
                                                            Edit
                                                        </button>

                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    certificate._id
                                                                )
                                                            }
                                                            className="inline-flex items-center gap-2 border border-red-200 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition"
                                                        >
                                                            🗑️
                                                            Delete
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
                                    Career Tip
                                </h3>

                                <p className="text-slate-400 mt-1 leading-6">
                                    Keep your certificates
                                    updated and add credential
                                    links whenever possible.
                                    Verified achievements make
                                    your profile more credible.
                                </p>

                            </div>

                        </div>

                    </section>

                </div>
            </div>
        </div>
    );
};

export default Certificates;