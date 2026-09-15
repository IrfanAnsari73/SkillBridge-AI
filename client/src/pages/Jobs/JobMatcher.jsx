import { useEffect, useState } from "react";

const JobMatcher = () => {
    const [jobMatch, setJobMatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // =========================
    // FETCH JOB MATCH
    // =========================

    const fetchJobMatch = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                setLoading(false);
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/job-matcher",
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
                    "Failed to generate job match."
                );
            }

            setJobMatch(data.jobMatch);
        } catch (error) {
            console.error(
                "Job Matcher Error:",
                error
            );

            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobMatch();
    }, []);

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
                            AI Job Intelligence
                        </p>

                        <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-2">
                            AI is analyzing your job compatibility...
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Comparing your skills, projects,
                            certificates and resume.
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
                            Something Went Wrong
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-2">
                            Unable to Generate Job Match
                        </h2>

                        <p className="mt-3 text-gray-600 break-words leading-6">
                            {error}
                        </p>

                        <button
                            onClick={fetchJobMatch}
                            className="mt-7 rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700 shadow-lg shadow-green-600/20"
                        >
                            🔄 Try Again
                        </button>

                    </div>

                </div>

            </div>
        );
    }

    // =========================
    // NO DATA
    // =========================

    if (!jobMatch) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">

                <div className="min-h-[65vh] flex items-center justify-center">

                    <div className="w-full max-w-xl bg-white rounded-[28px] border border-gray-200 shadow-xl p-7 md:p-9 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 flex items-center justify-center text-3xl">
                            💼
                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-green-600 mt-6">
                            Job Matching
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-2">
                            No Job Match Available
                        </h2>

                        <p className="mt-3 text-gray-500 leading-6">
                            Add your resume, skills and projects
                            first to generate your personalized
                            job match.
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

                {/* =========================
                    HEADER
                ========================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-28 -top-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                    <div className="absolute -left-28 -bottom-32 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

                    <div className="relative p-6 md:p-9">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">

                            <div className="flex-1">

                                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                    💼 AI Job Intelligence
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black mt-5 leading-tight">
                                    AI Job Matcher
                                    <span className="text-green-500">
                                        .
                                    </span>
                                </h1>

                                <p className="text-gray-400 mt-4 max-w-2xl leading-7">
                                    Discover technology roles that
                                    best match your current skills,
                                    projects, certificates and resume.
                                </p>

                                <div className="flex flex-wrap gap-3 mt-6">

                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                        🎯 Job Match
                                    </span>

                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                        🧠 Skill Analysis
                                    </span>

                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                        📄 Resume Match
                                    </span>

                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                        🚀 Career Actions
                                    </span>

                                </div>

                            </div>

                            {/* Overall Score */}

                            <div className="lg:w-64 shrink-0">

                                <div className="bg-white/5 border border-green-400/10 rounded-3xl p-6 text-center">

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                        Overall Match
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
                                                    Number(
                                                        jobMatch.overallMatchScore
                                                    ) || 0,
                                                    100
                                                )}%,
                                                    0 ${Math.min(
                                                    Number(
                                                        jobMatch.overallMatchScore
                                                    ) || 0,
                                                    100
                                                )}%
                                                )`,
                                            }}
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center">

                                            <span className="text-3xl font-black">
                                                {jobMatch.overallMatchScore}%
                                            </span>

                                        </div>

                                    </div>

                                    <p className="text-gray-400 text-sm mt-4">
                                        Profile compatibility
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================
                    OVERALL MATCH + RECOMMENDATION
                ========================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* SCORE */}

                    <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                        <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                Compatibility Analysis
                            </p>

                            <h2 className="text-2xl font-black text-slate-950 mt-1">
                                🎯 Overall Job Match
                            </h2>

                        </div>

                        <div className="p-6 md:p-8">

                            <div className="flex flex-col sm:flex-row items-center gap-6">

                                <div className="relative w-32 h-32 shrink-0">

                                    <div className="absolute inset-0 rounded-full border-[10px] border-green-100" />

                                    <div
                                        className="absolute inset-0 rounded-full border-[10px] border-green-600"
                                        style={{
                                            clipPath: `polygon(
                                                0 0,
                                                100% 0,
                                                100% ${Math.min(
                                                Number(
                                                    jobMatch.overallMatchScore
                                                ) || 0,
                                                100
                                            )}%,
                                                0 ${Math.min(
                                                Number(
                                                    jobMatch.overallMatchScore
                                                ) || 0,
                                                100
                                            )}%
                                            )`,
                                        }}
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">

                                        <span className="text-3xl font-black text-slate-950">
                                            {jobMatch.overallMatchScore}%
                                        </span>

                                    </div>

                                </div>

                                <div>

                                    <p className="text-lg font-black text-slate-950">
                                        Profile Match Score
                                    </p>

                                    <p className="mt-2 text-gray-500 leading-6">
                                        Based on your current skills,
                                        projects, certificates and
                                        resume.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* RECOMMENDATION */}

                    <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                        <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                AI Guidance
                            </p>

                            <h2 className="text-2xl font-black text-slate-950 mt-1">
                                💡 AI Recommendation
                            </h2>

                        </div>

                        <div className="p-6 md:p-8">

                            <div className="rounded-2xl bg-green-50 border border-green-100 p-5">

                                <p className="leading-7 text-green-800 break-words">
                                    {jobMatch.overallRecommendation}
                                </p>

                            </div>

                        </div>

                    </section>

                </div>

                {/* =========================
                    RECOMMENDED ROLES
                ========================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Career Opportunities
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            🎯 Recommended Job Roles
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Roles ranked according to your current
                            profile compatibility.
                        </p>

                    </div>

                    <div className="p-5 md:p-8">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {jobMatch.recommendedRoles?.map(
                                (role, index) => (

                                    <div
                                        key={index}
                                        className="group rounded-2xl border border-gray-200 p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
                                    >

                                        {/* Role Header */}

                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                                            <div className="flex items-start gap-4 min-w-0">

                                                <div className="w-12 h-12 shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                                                    💼
                                                </div>

                                                <div className="min-w-0">

                                                    <h3 className="text-xl font-black text-slate-950 break-words">
                                                        {role.role}
                                                    </h3>

                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Recommended for your
                                                        profile
                                                    </p>

                                                </div>

                                            </div>

                                            <span className="shrink-0 rounded-full bg-green-100 border border-green-200 px-3 py-1.5 text-sm font-black text-green-700">
                                                {role.matchScore}% Match
                                            </span>

                                        </div>

                                        {/* Match Bar */}

                                        <div className="mt-5">

                                            <div className="flex justify-between text-xs font-semibold text-gray-500 mb-2">

                                                <span>
                                                    Compatibility
                                                </span>

                                                <span>
                                                    {role.matchScore}%
                                                </span>

                                            </div>

                                            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">

                                                <div
                                                    className="h-full bg-green-600 rounded-full transition-all duration-700"
                                                    style={{
                                                        width: `${Math.min(
                                                            Math.max(
                                                                Number(
                                                                    role.matchScore
                                                                ) || 0,
                                                                0
                                                            ),
                                                            100
                                                        )}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>

                                        {/* Reason */}

                                        <div className="mt-5 rounded-xl bg-gray-50 p-4">

                                            <p className="text-sm font-bold text-gray-700 mb-1">
                                                Why this role?
                                            </p>

                                            <p className="text-gray-600 leading-6 break-words">
                                                {role.reason}
                                            </p>

                                        </div>

                                        {/* Required Skills */}

                                        <div className="mt-5">

                                            <h4 className="text-sm font-black text-slate-950">
                                                Required Skills
                                            </h4>

                                            <div className="mt-3 flex flex-wrap gap-2">

                                                {role.requiredSkills?.map(
                                                    (
                                                        skill,
                                                        skillIndex
                                                    ) => (

                                                        <span
                                                            key={
                                                                skillIndex
                                                            }
                                                            className="rounded-full bg-green-50 border border-green-200 px-3 py-1.5 text-xs font-bold text-green-700 break-words"
                                                        >
                                                            {skill}
                                                        </span>

                                                    )
                                                )}

                                            </div>

                                        </div>

                                        {/* Missing Skills */}

                                        <div className="mt-5">

                                            <h4 className="text-sm font-black text-slate-950">
                                                Skills To Improve
                                            </h4>

                                            <div className="mt-3 flex flex-wrap gap-2">

                                                {role.missingSkills?.length >
                                                    0 ? (

                                                    role.missingSkills.map(
                                                        (
                                                            skill,
                                                            skillIndex
                                                        ) => (

                                                            <span
                                                                key={
                                                                    skillIndex
                                                                }
                                                                className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1.5 text-xs font-bold text-orange-700 break-words"
                                                            >
                                                                {skill}
                                                            </span>

                                                        )
                                                    )

                                                ) : (

                                                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-3 py-1.5 text-sm font-bold text-green-700">
                                                        ✓ No major skill gap identified
                                                    </span>

                                                )}

                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>

                {/* =========================
                    RESUME MATCH
                ========================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Resume Compatibility
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            📄 Resume Match
                        </h2>

                    </div>

                    <div className="p-6 md:p-8">

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-7">

                            <div className="relative w-28 h-28 shrink-0">

                                <div className="absolute inset-0 rounded-full border-[10px] border-green-100" />

                                <div
                                    className="absolute inset-0 rounded-full border-[10px] border-green-600"
                                    style={{
                                        clipPath: `polygon(
                                            0 0,
                                            100% 0,
                                            100% ${Math.min(
                                            Number(
                                                jobMatch.resumeMatch?.score
                                            ) || 0,
                                            100
                                        )}%,
                                            0 ${Math.min(
                                            Number(
                                                jobMatch.resumeMatch?.score
                                            ) || 0,
                                            100
                                        )}%
                                        )`,
                                    }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center">

                                    <span className="text-2xl font-black text-slate-950">
                                        {jobMatch.resumeMatch?.score}%
                                    </span>

                                </div>

                            </div>

                            <div className="flex-1 min-w-0">

                                <div className="flex flex-wrap items-center gap-3">

                                    <span className="rounded-full bg-green-100 border border-green-200 px-3 py-1.5 text-xs font-bold text-green-700">
                                        Resume Compatibility
                                    </span>

                                    <span className="text-sm text-gray-500">
                                        AI evaluated
                                    </span>

                                </div>

                                <p className="mt-4 max-w-4xl leading-7 text-gray-600 break-words">
                                    {jobMatch.resumeMatch?.feedback}
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================
                    PROFILE STRENGTHS
                ========================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Your Advantages
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            💪 Profile Strengths
                        </h2>

                    </div>

                    <div className="p-5 md:p-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                            {jobMatch.profileStrengths?.map(
                                (strength, index) => (

                                    <div
                                        key={index}
                                        className="flex items-start gap-3 rounded-2xl bg-green-50 border border-green-100 p-4"
                                    >

                                        <span className="w-9 h-9 shrink-0 rounded-xl bg-white text-green-600 flex items-center justify-center font-black shadow-sm">
                                            ✓
                                        </span>

                                        <span className="text-green-800 leading-6 break-words pt-1">
                                            {strength}
                                        </span>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>

                {/* =========================
                    SKILLS TO IMPROVE
                ========================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Improvement Areas
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            🧩 Skills To Improve
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Focus on these skills to increase your
                            job compatibility.
                        </p>

                    </div>

                    <div className="p-5 md:p-8">

                        {jobMatch.skillsToImprove?.length > 0 ? (

                            <div className="flex flex-wrap gap-3">

                                {jobMatch.skillsToImprove.map(
                                    (skill, index) => (

                                        <span
                                            key={index}
                                            className="rounded-full bg-green-50 border border-green-200 px-4 py-2.5 font-bold text-green-700 break-words"
                                        >
                                            📚 {skill}
                                        </span>

                                    )
                                )}

                            </div>

                        ) : (

                            <div className="rounded-2xl bg-green-50 border border-green-100 p-5 text-green-700 font-bold">
                                ✓ Your current skill profile is strong.
                            </div>

                        )}

                    </div>

                </section>

                {/* =========================
                    RECOMMENDED ACTIONS
                ========================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                    <div className="relative p-6 md:p-8">

                        <div className="flex items-start gap-4">

                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                🚀
                            </div>

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                    Improve Your Match
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black mt-1">
                                    Recommended Actions
                                </h2>

                                <p className="text-gray-400 mt-2 leading-6">
                                    Follow these AI-generated actions
                                    to improve your job readiness.
                                </p>

                            </div>

                        </div>

                        <div className="mt-7 space-y-3">

                            {jobMatch.recommendedActions?.map(
                                (action, index) => (

                                    <div
                                        key={index}
                                        className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5"
                                    >

                                        <span className="w-9 h-9 shrink-0 rounded-xl bg-green-500/10 text-green-300 flex items-center justify-center font-black">
                                            {index + 1}
                                        </span>

                                        <span className="text-gray-300 leading-6 break-words pt-1">
                                            {action}
                                        </span>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>

                {/* =========================
                    REGENERATE
                ========================= */}

                <div className="flex flex-col items-center gap-3 pt-1 pb-5">

                    <button
                        onClick={fetchJobMatch}
                        className="w-full sm:w-auto rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white transition hover:bg-green-700 hover:-translate-y-0.5 shadow-lg shadow-green-600/20"
                    >
                        🔄 Re-analyze My Job Match
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                        Your results are based on the latest
                        information in your SkillBridge profile.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default JobMatcher;