import { useEffect, useState } from "react";

const Resume = () => {
    const [resume, setResume] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // AI ANALYZER
    const [analyzing, setAnalyzing] = useState(false);
    const [analysisStarted, setAnalysisStarted] =
        useState(false);
    const [analysis, setAnalysis] = useState(null);

    // =========================================
    // FETCH RESUME
    // =========================================

    const fetchResume = async () => {
        try {
            const token =
                localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/resume",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.ok) {
                setResume(data.resume);
            } else if (response.status === 404) {
                setResume(null);
            } else {
                setError(
                    data.message ||
                    "Failed to load resume."
                );
            }
        } catch (error) {
            console.error(
                "Fetch Resume Error:",
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
        fetchResume();
    }, []);

    // =========================================
    // FILE CHANGE
    // =========================================

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            setSelectedFile(null);
            return;
        }

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
            setError(
                "Only PDF, DOC and DOCX files are allowed."
            );
            setSelectedFile(null);
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError(
                "File size must be less than 5 MB."
            );
            setSelectedFile(null);
            return;
        }

        setError("");
        setMessage("");
        setSelectedFile(file);
    };

    // =========================================
    // UPLOAD / REPLACE
    // =========================================

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            setError("Please select a resume file.");
            return;
        }

        try {
            setUploading(true);
            setMessage("");
            setError("");

            const token =
                localStorage.getItem("token");

            const formData = new FormData();

            formData.append(
                "resume",
                selectedFile
            );

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/resume",
                {
                    method: "POST",
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                    body: formData,
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Resume upload failed."
                );
                return;
            }

            setResume(data.resume);
            setSelectedFile(null);
            setMessage(data.message);

            setAnalysisStarted(false);
            setAnalysis(null);

            const fileInput =
                document.getElementById(
                    "resumeFile"
                );

            if (fileInput) {
                fileInput.value = "";
            }
        } catch (error) {
            console.error(
                "Upload Resume Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        } finally {
            setUploading(false);
        }
    };

    // =========================================
    // DOWNLOAD
    // =========================================

    const handleDownload = async () => {
        try {
            setError("");
            setMessage("");

            const token =
                localStorage.getItem("token");

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/resume/download",
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                let errorMessage =
                    "Download failed.";

                try {
                    const data =
                        await response.json();

                    errorMessage =
                        data.message ||
                        errorMessage;
                } catch {
                    // Ignore
                }

                throw new Error(errorMessage);
            }

            const blob =
                await response.blob();

            const downloadUrl =
                window.URL.createObjectURL(
                    blob
                );

            const link =
                document.createElement("a");

            link.href = downloadUrl;
            link.download =
                resume.originalName;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(
                downloadUrl
            );

            setMessage(
                "Resume downloaded successfully! 📥"
            );
        } catch (error) {
            console.error(
                "Download Resume Error:",
                error
            );

            setError(
                error.message ||
                "Unable to download resume."
            );
        }
    };

    // =========================================
    // DELETE
    // =========================================

    const handleDelete = async () => {
        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete your resume?"
            );

        if (!confirmDelete) return;

        try {
            setError("");
            setMessage("");

            const token =
                localStorage.getItem("token");

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/resume",
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
                    "Failed to delete resume."
                );
                return;
            }

            setResume(null);
            setAnalysisStarted(false);
            setAnalysis(null);

            setMessage(data.message);
        } catch (error) {
            console.error(
                "Delete Resume Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        }
    };

    // =========================================
    // AI RESUME ANALYZER
    // =========================================

    const handleAnalyzeResume = async () => {
        if (!resume) {
            setError(
                "Please upload a resume before analyzing."
            );
            return;
        }

        try {
            setError("");
            setMessage("");
            setAnalyzing(true);
            setAnalysisStarted(false);
            setAnalysis(null);

            const token =
                localStorage.getItem("token");

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/resume/analyze",
                {
                    method: "POST",
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
                    "Resume analysis failed."
                );
                return;
            }

            setAnalysis(data.analysis);
            setAnalysisStarted(true);

            setMessage(
                "Resume analyzed successfully! 🤖"
            );
        } catch (error) {
            console.error(
                "Analyze Resume Error:",
                error
            );

            setError(
                "Unable to connect to resume analyzer."
            );
        } finally {
            setAnalyzing(false);
        }
    };

    // =========================================
    // FILE SIZE
    // =========================================

    const getFileSize = (bytes) => {
        if (!bytes) {
            return "0 KB";
        }

        return `${(bytes / 1024).toFixed(1)} KB`;
    };

    // =========================================
    // LOADING
    // =========================================

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto flex items-center justify-center py-20">
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-full border-4 border-green-100 border-t-green-600 animate-spin" />

                    <p className="text-gray-500 mt-4 font-medium">
                        Loading your resume...
                    </p>
                </div>
            </div>
        );
    }

    // =========================================
    // UI
    // =========================================

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="relative">

                {/* BACKGROUND GLOW */}

                <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

                <div className="pointer-events-none absolute top-[700px] -left-40 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />

                <div className="relative space-y-7">

                    {/* =================================
                        HEADER
                    ================================= */}

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

                        <div>

                            <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-green-600">
                                Career Document
                            </p>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-2 tracking-tight">
                                My Resume
                                <span className="text-green-600">
                                    .
                                </span>
                            </h1>

                            <p className="text-gray-500 mt-2 text-base md:text-lg">
                                Manage your resume,
                                download it anytime and
                                get AI-powered insights.
                            </p>

                        </div>

                        {resume && (
                            <button
                                onClick={
                                    handleAnalyzeResume
                                }
                                disabled={analyzing}
                                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-green-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-green-600/20 disabled:opacity-50"
                            >
                                {analyzing
                                    ? "🤖 Analyzing..."
                                    : "🤖 Analyze with AI"}
                            </button>
                        )}

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
                                        📄 Professional Resume
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-black mt-4">
                                        Build a resume that
                                        gets noticed.
                                    </h2>

                                    <p className="text-slate-400 mt-3 max-w-2xl leading-7">
                                        Keep your latest resume
                                        ready for opportunities
                                        and use AI to identify
                                        strengths, weaknesses,
                                        skills and ATS keywords.
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-6">

                                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                            📄 PDF / DOC / DOCX
                                        </div>

                                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                            🔒 Secure Profile
                                        </div>

                                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                            🤖 AI Analysis
                                        </div>

                                    </div>

                                </div>

                                <div className="lg:w-72">

                                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                                        <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-4xl">
                                            📄
                                        </div>

                                        <p className="text-slate-400 text-sm mt-5">
                                            Resume Status
                                        </p>

                                        <p className="text-2xl font-black text-green-400 mt-1">
                                            {resume
                                                ? "Ready"
                                                : "Not Uploaded"}
                                        </p>

                                        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">

                                            <div
                                                className={`h-full rounded-full ${resume
                                                    ? "w-full bg-green-500"
                                                    : "w-0"
                                                    }`}
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* =================================
                        MESSAGES
                    ================================= */}

                    {message && (
                        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-2xl font-semibold shadow-sm">

                            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                ✓
                            </span>

                            {message}

                        </div>
                    )}

                    {error && (
                        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl font-semibold shadow-sm">

                            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                !
                            </span>

                            {error}

                        </div>
                    )}

                    {/* =================================
                        UPLOAD SECTION
                    ================================= */}

                    <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                        <div className="h-1.5 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

                        <div className="p-6 md:p-8">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                                <div>

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                        Resume Management
                                    </p>

                                    <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                        {resume
                                            ? "Replace Your Resume"
                                            : "Upload Your Resume"}
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        Keep your latest
                                        professional resume
                                        available.
                                    </p>

                                </div>

                                <div className="flex gap-2">

                                    <span className="px-3 py-2 rounded-xl bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                                        PDF
                                    </span>

                                    <span className="px-3 py-2 rounded-xl bg-gray-50 text-gray-600 text-xs font-bold border border-gray-100">
                                        DOC
                                    </span>

                                    <span className="px-3 py-2 rounded-xl bg-gray-50 text-gray-600 text-xs font-bold border border-gray-100">
                                        5 MB
                                    </span>

                                </div>

                            </div>

                            <form
                                onSubmit={
                                    handleUpload
                                }
                                className="mt-7"
                            >

                                <label
                                    htmlFor="resumeFile"
                                    className="group block cursor-pointer"
                                >

                                    <div className="border-2 border-dashed border-gray-200 hover:border-green-400 bg-slate-50 hover:bg-green-50/40 rounded-2xl p-8 md:p-10 text-center transition-all">

                                        <div className="w-20 h-20 mx-auto rounded-3xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-4xl group-hover:scale-105 transition">
                                            📤
                                        </div>

                                        <h3 className="text-xl font-black text-slate-950 mt-5">
                                            Choose your resume
                                        </h3>

                                        <p className="text-gray-500 mt-2">
                                            Click here to select
                                            PDF, DOC or DOCX
                                            file
                                        </p>

                                        <p className="text-xs text-gray-400 mt-2">
                                            Maximum file size:
                                            5 MB
                                        </p>

                                    </div>

                                    <input
                                        id="resumeFile"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={
                                            handleFileChange
                                        }
                                        className="hidden"
                                    />

                                </label>

                                {selectedFile && (
                                    <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-green-50 border border-green-200 rounded-2xl p-4">

                                        <div className="flex items-center gap-3 min-w-0">

                                            <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-white flex items-center justify-center">
                                                📄
                                            </div>

                                            <div className="min-w-0">

                                                <p className="font-bold text-gray-800 truncate">
                                                    {
                                                        selectedFile.name
                                                    }
                                                </p>

                                                <p className="text-xs text-gray-500 mt-1">
                                                    {getFileSize(
                                                        selectedFile.size
                                                    )}
                                                </p>

                                            </div>

                                        </div>

                                        <button
                                            type="submit"
                                            disabled={
                                                uploading
                                            }
                                            className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-500 transition disabled:opacity-50"
                                        >
                                            {uploading
                                                ? "Uploading..."
                                                : resume
                                                    ? "Replace Resume"
                                                    : "Upload Resume"}
                                        </button>

                                    </div>
                                )}

                            </form>

                        </div>

                    </section>

                    {/* =================================
                        CURRENT RESUME
                    ================================= */}

                    {resume && (
                        <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                            <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/30 border-b border-gray-200">

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                    Active Document
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                    Current Resume
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Your currently uploaded
                                    professional document.
                                </p>

                            </div>

                            <div className="p-5 md:p-8 bg-slate-50/60">

                                <div className="bg-slate-950 text-white rounded-3xl p-6 md:p-8">

                                    <div className="flex flex-col md:flex-row md:items-center gap-6">

                                        <div className="w-20 h-20 flex-shrink-0 rounded-3xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-4xl">
                                            📄
                                        </div>

                                        <div className="flex-1 min-w-0">

                                            <p className="text-xs uppercase tracking-wider font-bold text-green-400">
                                                Uploaded Resume
                                            </p>

                                            <h3 className="text-xl md:text-2xl font-black mt-1 break-all">
                                                {
                                                    resume.originalName
                                                }
                                            </h3>

                                            <div className="flex flex-wrap gap-2 mt-3">

                                                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
                                                    📦{" "}
                                                    {getFileSize(
                                                        resume.fileSize
                                                    )}
                                                </span>

                                                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
                                                    📄{" "}
                                                    {resume.mimeType ===
                                                        "application/pdf"
                                                        ? "PDF"
                                                        : "Document"}
                                                </span>

                                                <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-400/20 text-sm text-green-300">
                                                    ✓ Active
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-7 pt-6 border-t border-white/10">

                                        <a
                                            href={`https://skillbridge-ai-backend-v6uk.onrender.com/uploads/${resume.fileName}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-500 transition"
                                        >
                                            👁️ View Resume
                                        </a>

                                        <button
                                            onClick={
                                                handleDownload
                                            }
                                            className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white px-5 py-3 rounded-xl font-bold hover:bg-white/15 transition"
                                        >
                                            📥 Download
                                        </button>

                                        <button
                                            onClick={
                                                handleDelete
                                            }
                                            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-400/20 text-red-300 px-5 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition"
                                        >
                                            🗑️ Delete
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </section>
                    )}

                    {/* =================================
                        AI ANALYZER
                    ================================= */}

                    {resume && (
                        <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                            <div className="h-1.5 bg-gradient-to-r from-purple-600 via-green-500 to-purple-600" />

                            <div className="p-6 md:p-8">

                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                                    <div>

                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-600">
                                            Artificial Intelligence
                                        </p>

                                        <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                            AI Resume Analyzer
                                            <span className="text-purple-600">
                                                .
                                            </span>
                                        </h2>

                                        <p className="text-gray-500 mt-2 max-w-2xl">
                                            Get AI-powered feedback
                                            on your resume,
                                            including strengths,
                                            weaknesses, skills and
                                            ATS keywords.
                                        </p>

                                    </div>

                                    <button
                                        onClick={
                                            handleAnalyzeResume
                                        }
                                        disabled={
                                            analyzing
                                        }
                                        className="bg-purple-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-purple-500 transition shadow-lg shadow-purple-600/20 disabled:opacity-50"
                                    >
                                        {analyzing
                                            ? "🤖 Analyzing..."
                                            : "Analyze Resume 🤖"}
                                    </button>

                                </div>

                                {/* =================================
                                    ANALYZER FEATURES
                                ================================= */}

                                {!analysisStarted &&
                                    !analyzing && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">

                                            <div className="group border border-gray-200 rounded-2xl p-5 bg-slate-50 hover:bg-blue-50 hover:-translate-y-1 transition">

                                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                                                    📄
                                                </div>

                                                <h3 className="font-black text-slate-950 mt-4">
                                                    Resume Summary
                                                </h3>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    AI-generated
                                                    overview of your
                                                    resume.
                                                </p>

                                            </div>

                                            <div className="group border border-gray-200 rounded-2xl p-5 bg-slate-50 hover:bg-green-50 hover:-translate-y-1 transition">

                                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                                                    💻
                                                </div>

                                                <h3 className="font-black text-slate-950 mt-4">
                                                    Skills Detection
                                                </h3>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    Identify skills
                                                    mentioned in your
                                                    resume.
                                                </p>

                                            </div>

                                            <div className="group border border-gray-200 rounded-2xl p-5 bg-slate-50 hover:bg-yellow-50 hover:-translate-y-1 transition">

                                                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl">
                                                    ⭐
                                                </div>

                                                <h3 className="font-black text-slate-950 mt-4">
                                                    Strengths
                                                </h3>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    Discover your
                                                    resume strengths.
                                                </p>

                                            </div>

                                            <div className="group border border-gray-200 rounded-2xl p-5 bg-slate-50 hover:bg-purple-50 hover:-translate-y-1 transition">

                                                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                                                    🎯
                                                </div>

                                                <h3 className="font-black text-slate-950 mt-4">
                                                    ATS & Improvements
                                                </h3>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    Improve your resume
                                                    for job applications.
                                                </p>

                                            </div>

                                        </div>
                                    )}

                                {/* =================================
                                    ANALYZING
                                ================================= */}

                                {analyzing && (
                                    <div className="mt-8 bg-slate-950 text-white rounded-3xl p-8 text-center">

                                        <div className="w-20 h-20 mx-auto rounded-3xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-4xl animate-pulse">
                                            🤖
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-black mt-5">
                                            AI is analyzing your
                                            resume...
                                        </h3>

                                        <p className="text-slate-400 mt-2">
                                            Reviewing your resume
                                            and preparing career
                                            insights.
                                        </p>

                                        <div className="mt-6 max-w-xl mx-auto h-2 bg-white/10 rounded-full overflow-hidden">

                                            <div className="h-full w-2/3 bg-purple-500 rounded-full animate-pulse" />

                                        </div>

                                    </div>
                                )}

                                {/* =================================
                                    AI RESULT
                                ================================= */}

                                {analysisStarted &&
                                    !analyzing &&
                                    analysis && (
                                        <div className="mt-8">

                                            {/* SCORE */}

                                            <div className="rounded-3xl bg-slate-950 text-white p-6 md:p-8">

                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                                                    <div>

                                                        <p className="text-xs uppercase tracking-wider font-bold text-purple-400">
                                                            AI Evaluation
                                                        </p>

                                                        <h3 className="text-2xl md:text-3xl font-black mt-1">
                                                            Resume
                                                            Performance
                                                        </h3>

                                                        <p className="text-slate-400 mt-2">
                                                            Your resume
                                                            has been
                                                            analyzed
                                                            successfully.
                                                        </p>

                                                    </div>

                                                    <div className="text-center">

                                                        <div className="w-28 h-28 rounded-full border-8 border-purple-500/20 flex items-center justify-center">

                                                            <div>

                                                                <p className="text-3xl font-black text-purple-400">
                                                                    {
                                                                        analysis.score
                                                                    }
                                                                </p>

                                                                <p className="text-xs text-slate-400">
                                                                    /100
                                                                </p>

                                                            </div>

                                                        </div>

                                                        <p className="text-sm text-slate-400 mt-2">
                                                            Resume Score
                                                        </p>

                                                    </div>

                                                </div>

                                            </div>

                                            {/* RESULT GRID */}

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

                                                {/* SUMMARY */}

                                                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">

                                                    <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                                                        📄
                                                    </div>

                                                    <h3 className="text-lg font-black text-slate-950 mt-4">
                                                        Resume Summary
                                                    </h3>

                                                    <p className="text-gray-600 mt-3 leading-6">
                                                        {
                                                            analysis.summary
                                                        }
                                                    </p>

                                                </div>

                                                {/* SKILLS */}

                                                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">

                                                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center text-xl">
                                                        💻
                                                    </div>

                                                    <h3 className="text-lg font-black text-slate-950 mt-4">
                                                        Skills Detected
                                                    </h3>

                                                    {analysis.skills &&
                                                        analysis.skills.length >
                                                        0 ? (
                                                        <div className="flex flex-wrap gap-2 mt-4">

                                                            {analysis.skills.map(
                                                                (
                                                                    skill,
                                                                    index
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-bold"
                                                                    >
                                                                        {
                                                                            skill
                                                                        }
                                                                    </span>
                                                                )
                                                            )}

                                                        </div>
                                                    ) : (
                                                        <p className="text-gray-500 mt-3">
                                                            No technical
                                                            skills
                                                            detected.
                                                        </p>
                                                    )}

                                                </div>

                                                {/* STRENGTHS */}

                                                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">

                                                    <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center text-xl">
                                                        ⭐
                                                    </div>

                                                    <h3 className="text-lg font-black text-slate-950 mt-4">
                                                        Resume Strengths
                                                    </h3>

                                                    {analysis.strengths &&
                                                        analysis.strengths.length >
                                                        0 ? (
                                                        <ul className="mt-4 space-y-3">

                                                            {analysis.strengths.map(
                                                                (
                                                                    strength,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="flex gap-2 text-gray-600"
                                                                    >
                                                                        <span className="text-green-600">
                                                                            ✓
                                                                        </span>

                                                                        <span>
                                                                            {
                                                                                strength
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}

                                                        </ul>
                                                    ) : (
                                                        <p className="text-gray-500 mt-3">
                                                            No strengths
                                                            detected.
                                                        </p>
                                                    )}

                                                </div>

                                                {/* WEAKNESSES */}

                                                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">

                                                    <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center text-xl">
                                                        ⚠️
                                                    </div>

                                                    <h3 className="text-lg font-black text-slate-950 mt-4">
                                                        Resume Weaknesses
                                                    </h3>

                                                    {analysis.weaknesses &&
                                                        analysis.weaknesses.length >
                                                        0 ? (
                                                        <ul className="mt-4 space-y-3">

                                                            {analysis.weaknesses.map(
                                                                (
                                                                    weakness,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="flex gap-2 text-gray-600"
                                                                    >
                                                                        <span>
                                                                            ⚠️
                                                                        </span>

                                                                        <span>
                                                                            {
                                                                                weakness
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}

                                                        </ul>
                                                    ) : (
                                                        <p className="text-gray-500 mt-3">
                                                            No major
                                                            weaknesses
                                                            detected.
                                                        </p>
                                                    )}

                                                </div>

                                                {/* IMPROVEMENTS */}

                                                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">

                                                    <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                                                        💡
                                                    </div>

                                                    <h3 className="text-lg font-black text-slate-950 mt-4">
                                                        Improvement
                                                        Suggestions
                                                    </h3>

                                                    {analysis.improvements &&
                                                        analysis.improvements.length >
                                                        0 ? (
                                                        <ul className="mt-4 space-y-3">

                                                            {analysis.improvements.map(
                                                                (
                                                                    improvement,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="flex gap-2 text-gray-600"
                                                                    >
                                                                        <span className="text-purple-600">
                                                                            →
                                                                        </span>

                                                                        <span>
                                                                            {
                                                                                improvement
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}

                                                        </ul>
                                                    ) : (
                                                        <p className="text-gray-500 mt-3">
                                                            No improvement
                                                            suggestions.
                                                        </p>
                                                    )}

                                                </div>

                                                {/* ATS */}

                                                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">

                                                    <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                                                        🎯
                                                    </div>

                                                    <h3 className="text-lg font-black text-slate-950 mt-4">
                                                        ATS Keywords
                                                    </h3>

                                                    {analysis.atsKeywords &&
                                                        analysis.atsKeywords.length >
                                                        0 ? (
                                                        <div className="flex flex-wrap gap-2 mt-4">

                                                            {analysis.atsKeywords.map(
                                                                (
                                                                    keyword,
                                                                    index
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-sm font-bold"
                                                                    >
                                                                        {
                                                                            keyword
                                                                        }
                                                                    </span>
                                                                )
                                                            )}

                                                        </div>
                                                    ) : (
                                                        <p className="text-gray-500 mt-3">
                                                            No ATS
                                                            keywords
                                                            detected.
                                                        </p>
                                                    )}

                                                </div>

                                            </div>

                                        </div>
                                    )}

                            </div>

                        </section>
                    )}

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
                                    Resume Tip
                                </h3>

                                <p className="text-slate-400 mt-1 leading-6">
                                    Keep your resume updated
                                    with your latest skills,
                                    projects and achievements.
                                    Use the AI Analyzer regularly
                                    to improve your profile.
                                </p>

                            </div>

                        </div>

                    </section>

                </div>

            </div>

        </div>
    );
};

export default Resume;