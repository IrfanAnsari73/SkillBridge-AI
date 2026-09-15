import { useEffect, useState } from "react";

const CareerAnalytics = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // =========================
    // FETCH ANALYTICS
    // =========================

    const fetchAnalytics = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/analytics",
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
                    "Failed to load analytics"
                );
            }

            setAnalytics(data.analytics);
        } catch (err) {
            console.error("Analytics Error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnalytics();
    }, []);

    // =========================
    // HELPER
    // =========================

    const getSkillWidth = (level) => {
        const value = level?.toLowerCase();

        if (value === "advanced") return "90%";
        if (value === "intermediate") return "65%";

        return "40%";
    };

    const getReadinessMessage = (score) => {
        if (score >= 80) {
            return "Excellent! Your profile is looking highly job-ready.";
        }

        if (score >= 60) {
            return "Good progress! A few improvements can make your profile stronger.";
        }

        if (score >= 40) {
            return "You are building a solid foundation. Keep improving your profile.";
        }

        return "Your career profile needs more work. Start by completing the key sections.";
    };

    // =========================
    // LOADING
    // =========================

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">

                <div className="min-h-[70vh] flex items-center justify-center">

                    <div className="text-center">

                        <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">

                            <div className="w-8 h-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />

                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-green-600">
                            Career Intelligence
                        </p>

                        <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-2">
                            Generating Career Analytics...
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Analyzing your career profile
                        </p>

                    </div>

                </div>

            </div>
        );
    }

    // =========================
    // ERROR
    // =========================

    if (error) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">

                <div className="min-h-[65vh] flex items-center justify-center">

                    <div className="w-full max-w-xl bg-white rounded-[28px] border border-gray-200 shadow-xl p-7 md:p-9 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 flex items-center justify-center text-3xl">
                            ⚠️
                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mt-6">
                            Analytics Error
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-2">
                            Unable to Load Analytics
                        </h2>

                        <p className="text-red-600 mt-3 mb-5 break-words">
                            {error}
                        </p>

                        <button
                            onClick={fetchAnalytics}
                            className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700 transition shadow-lg shadow-green-600/20"
                        >
                            🔄 Try Again
                        </button>

                    </div>

                </div>

            </div>
        );
    }

    const readiness =
        analytics?.overallReadiness || 0;

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="relative space-y-7">

                {/* =========================
                    HERO HEADER
                ========================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-28 -top-32 w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />

                    <div className="absolute -left-28 -bottom-32 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />

                    <div className="relative p-6 md:p-9">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                            <div className="flex-1">

                                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
                                    📊 Career Intelligence
                                </div>

                                <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                                    Career Analytics
                                    <span className="text-green-500">
                                        .
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-2xl text-gray-400 leading-7">
                                    Track your career profile strength,
                                    understand your current readiness
                                    and discover areas that need
                                    improvement.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        💻 Skills
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        🚀 Projects
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        📜 Certificates
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        📄 Resume
                                    </span>

                                </div>

                            </div>

                            {/* READINESS */}

                            <div className="shrink-0">

                                <div className="w-56 rounded-3xl border border-green-400/20 bg-white/5 p-6 text-center">

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                        Career Readiness
                                    </p>

                                    <div className="relative w-32 h-32 mx-auto mt-5">

                                        <div className="absolute inset-0 rounded-full border-[10px] border-white/10" />

                                        <div
                                            className="absolute inset-0 rounded-full border-[10px] border-green-500"
                                            style={{
                                                clipPath: `polygon(
                                                    0 0,
                                                    100% 0,
                                                    100% ${Math.min(
                                                    readiness,
                                                    100
                                                )}%,
                                                    0 ${Math.min(
                                                    readiness,
                                                    100
                                                )}%
                                                )`,
                                            }}
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center">

                                            <span className="text-3xl font-black">
                                                {readiness}%
                                            </span>

                                        </div>

                                    </div>

                                    <p className="text-gray-400 text-sm mt-4">
                                        Overall readiness score
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================
                    READINESS SUMMARY
                ========================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="p-6 md:p-8">

                        <div className="flex flex-col md:flex-row md:items-center gap-6">

                            <div className="w-16 h-16 shrink-0 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-3xl">
                                🎯
                            </div>

                            <div className="flex-1">

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                    Readiness Overview
                                </p>

                                <h2 className="text-2xl font-black text-slate-950 mt-1">
                                    Overall Career Readiness
                                </h2>

                                <p className="text-gray-500 mt-2 leading-6">
                                    {getReadinessMessage(
                                        readiness
                                    )}
                                </p>

                            </div>

                            <div className="shrink-0 text-center md:text-right">

                                <p className="text-4xl font-black text-green-600">
                                    {readiness}%
                                </p>

                                <p className="text-sm font-semibold text-gray-500 mt-1">
                                    Readiness Score
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================
                    PROFILE STATS
                ========================= */}

                <section>

                    <div className="mb-5">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Profile Overview
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            Your Career Assets
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {/* SKILLS */}

                        <div className="group bg-white rounded-[24px] border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition-all">

                            <div className="flex items-center justify-between">

                                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                    💻
                                </div>

                                <span className="text-xs font-bold text-green-600">
                                    SKILLS
                                </span>

                            </div>

                            <p className="text-4xl font-black text-slate-950 mt-6">
                                {analytics?.profile?.skills || 0}
                            </p>

                            <p className="text-gray-500 mt-1">
                                Technical skills
                            </p>

                        </div>

                        {/* PROJECTS */}

                        <div className="group bg-white rounded-[24px] border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition-all">

                            <div className="flex items-center justify-between">

                                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                    🚀
                                </div>

                                <span className="text-xs font-bold text-green-600">
                                    PROJECTS
                                </span>

                            </div>

                            <p className="text-4xl font-black text-slate-950 mt-6">
                                {analytics?.profile?.projects || 0}
                            </p>

                            <p className="text-gray-500 mt-1">
                                Portfolio projects
                            </p>

                        </div>

                        {/* CERTIFICATES */}

                        <div className="group bg-white rounded-[24px] border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition-all">

                            <div className="flex items-center justify-between">

                                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                    📜
                                </div>

                                <span className="text-xs font-bold text-green-600">
                                    CERTIFICATES
                                </span>

                            </div>

                            <p className="text-4xl font-black text-slate-950 mt-6">
                                {analytics?.profile?.certificates || 0}
                            </p>

                            <p className="text-gray-500 mt-1">
                                Verified credentials
                            </p>

                        </div>

                        {/* RESUME */}

                        <div className="group bg-white rounded-[24px] border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition-all">

                            <div className="flex items-center justify-between">

                                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                    📄
                                </div>

                                <span className="text-xs font-bold text-green-600">
                                    RESUME
                                </span>

                            </div>

                            <p className="text-xl font-black text-slate-950 mt-7">
                                {analytics?.profile?.resumeUploaded
                                    ? "Uploaded"
                                    : "Missing"}
                            </p>

                            <p className="text-gray-500 mt-1">
                                Resume status
                            </p>

                        </div>

                    </div>

                </section>

                {/* =========================
                    SKILL ANALYSIS
                ========================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Technical Profile
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            💻 Skill Analysis
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Understand the strength of your current
                            technical skill set.
                        </p>

                    </div>

                    <div className="p-6 md:p-8">

                        {analytics?.skillAnalysis?.length > 0 ? (

                            <div className="space-y-6">

                                {analytics.skillAnalysis.map(
                                    (skill, index) => (

                                        <div key={index}>

                                            <div className="flex flex-wrap justify-between gap-2 mb-2">

                                                <span className="font-black text-slate-950 break-words">
                                                    {skill.name}
                                                </span>

                                                <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-bold text-green-700">
                                                    {skill.level}
                                                </span>

                                            </div>

                                            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">

                                                <div
                                                    className="bg-green-600 h-3 rounded-full transition-all duration-700"
                                                    style={{
                                                        width: getSkillWidth(
                                                            skill.level
                                                        ),
                                                    }}
                                                />

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        ) : (

                            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 text-center">

                                <div className="text-3xl">
                                    💻
                                </div>

                                <p className="font-bold text-slate-950 mt-3">
                                    No skills added yet
                                </p>

                                <p className="text-gray-500 text-sm mt-1">
                                    Add your technical skills to
                                    see detailed analysis.
                                </p>

                            </div>

                        )}

                    </div>

                </section>

                {/* =========================
                    PROJECT ANALYSIS
                ========================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Portfolio Strength
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            🚀 Project Analysis
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Review the projects contributing to your
                            career profile.
                        </p>

                    </div>

                    <div className="p-5 md:p-8">

                        {analytics?.projectAnalysis?.length > 0 ? (

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                {analytics.projectAnalysis.map(
                                    (project, index) => (

                                        <div
                                            key={index}
                                            className="group rounded-2xl border border-gray-200 p-5 hover:border-green-200 hover:shadow-lg transition-all"
                                        >

                                            <div className="flex items-start gap-4">

                                                <div className="w-11 h-11 shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                                                    🚀
                                                </div>

                                                <div className="min-w-0">

                                                    <h3 className="font-black text-lg text-slate-950 break-words">
                                                        {project.title}
                                                    </h3>

                                                    <div className="mt-3 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 break-words">
                                                        ⚙️{" "}
                                                        {project.technology}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        ) : (

                            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 text-center">

                                <div className="text-3xl">
                                    🚀
                                </div>

                                <p className="font-bold text-slate-950 mt-3">
                                    No projects added yet
                                </p>

                                <p className="text-gray-500 text-sm mt-1">
                                    Add projects to strengthen your
                                    portfolio.
                                </p>

                            </div>

                        )}

                    </div>

                </section>

                {/* =========================
                    CERTIFICATE ANALYSIS
                ========================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Credentials
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            📜 Certificate Analysis
                        </h2>

                    </div>

                    <div className="p-5 md:p-8">

                        {analytics?.certificateAnalysis?.length > 0 ? (

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {analytics.certificateAnalysis.map(
                                    (
                                        certificate,
                                        index
                                    ) => (

                                        <div
                                            key={index}
                                            className="rounded-2xl border border-gray-200 p-5 hover:shadow-md hover:border-green-200 transition"
                                        >

                                            <div className="flex items-start gap-4">

                                                <div className="w-11 h-11 shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                                                    📜
                                                </div>

                                                <div className="min-w-0">

                                                    <h3 className="font-black text-slate-950 break-words">
                                                        {
                                                            certificate.title
                                                        }
                                                    </h3>

                                                    <p className="text-gray-500 mt-2 break-words text-sm">
                                                        Issuer:{" "}
                                                        {
                                                            certificate.issuer
                                                        }
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        ) : (

                            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 text-center">

                                <div className="text-3xl">
                                    📜
                                </div>

                                <p className="font-bold text-slate-950 mt-3">
                                    No certificates added yet
                                </p>

                                <p className="text-gray-500 text-sm mt-1">
                                    Add your certifications to improve
                                    your career profile.
                                </p>

                            </div>

                        )}

                    </div>

                </section>

                {/* =========================
                    AI SUGGESTIONS
                ========================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />

                    <div className="relative p-6 md:p-8">

                        <div className="flex items-start gap-4">

                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                🤖
                            </div>

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                    AI Career Coach
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black mt-1">
                                    Career Improvement Suggestions
                                </h2>

                                <p className="text-gray-400 mt-2">
                                    Personalized recommendations based
                                    on your current career profile.
                                </p>

                            </div>

                        </div>

                        <div className="mt-7 space-y-3">

                            {analytics?.suggestions?.length > 0 ? (

                                analytics.suggestions.map(
                                    (
                                        suggestion,
                                        index
                                    ) => (

                                        <div
                                            key={index}
                                            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5"
                                        >

                                            <span className="w-9 h-9 shrink-0 rounded-xl bg-green-500/10 text-green-300 flex items-center justify-center font-black">
                                                {index + 1}
                                            </span>

                                            <p className="text-gray-300 leading-6 break-words pt-1">
                                                {
                                                    suggestion
                                                }
                                            </p>

                                        </div>

                                    )
                                )

                            ) : (

                                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-gray-400">
                                    No improvement suggestions available
                                    right now.
                                </div>

                            )}

                        </div>

                    </div>

                </section>

                {/* =========================
                    REFRESH
                ========================= */}

                <div className="flex flex-col items-center gap-3 pb-5">

                    <button
                        onClick={fetchAnalytics}
                        className="w-full sm:w-auto rounded-xl bg-green-600 px-7 py-3.5 font-black text-white transition hover:bg-green-700 hover:-translate-y-0.5 shadow-lg shadow-green-600/20"
                    >
                        🔄 Refresh Analytics
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                        Refresh to analyze the latest information
                        in your career profile.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default CareerAnalytics;