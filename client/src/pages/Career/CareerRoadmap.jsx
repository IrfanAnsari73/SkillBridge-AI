import { useEffect, useState } from "react";

const CareerRoadmap = () => {
    const [roadmap, setRoadmap] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchRoadmap = async () => {
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
                "http://localhost:5000/api/roadmap",
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
                    "Failed to load career roadmap."
                );
            }

            setRoadmap(data.roadmap);
        } catch (error) {
            console.error(
                "Career Roadmap Error:",
                error
            );

            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRoadmap();
    }, []);

    // =========================
    // LOADING
    // =========================

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">
                <div className="min-h-[70vh] flex items-center justify-center">

                    <div className="text-center">

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-5">

                            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>

                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-green-600">
                            AI Career Intelligence
                        </p>

                        <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-2">
                            AI is creating your career roadmap...
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Analyzing your resume, skills,
                            projects and certificates.
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

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-3xl">
                            ⚠️
                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mt-6">
                            Something Went Wrong
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-2">
                            Unable to Generate Roadmap
                        </h2>

                        <p className="mt-3 text-gray-600 break-words leading-6">
                            {error}
                        </p>

                        <button
                            onClick={fetchRoadmap}
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
    // NO ROADMAP
    // =========================

    if (!roadmap) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">

                <div className="min-h-[65vh] flex items-center justify-center">

                    <div className="w-full max-w-xl bg-white rounded-[28px] border border-gray-200 shadow-xl p-7 md:p-9 text-center">

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-3xl">
                            🗺️
                        </div>

                        <h2 className="text-2xl font-black text-slate-950 mt-6">
                            No Career Roadmap Available
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Add your resume, skills and projects
                            first to generate your personalized roadmap.
                        </p>

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            {/* Background Decoration */}

            <div className="pointer-events-none absolute -top-20 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

            <div className="relative space-y-7">

                {/* =================================
                    HEADER
                ================================= */}

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

                    <div>

                        <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-green-600">
                            AI Career Intelligence
                        </p>

                        <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-2 tracking-tight">
                            AI Career Roadmap
                            <span className="text-green-600">
                                .
                            </span>
                        </h1>

                        <p className="mt-2 text-gray-600 text-base md:text-lg max-w-2xl leading-7">
                            Your personalized step-by-step career
                            roadmap powered by AI.
                        </p>

                    </div>

                    <button
                        onClick={fetchRoadmap}
                        className="w-full lg:w-auto rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700 hover:-translate-y-0.5 shadow-lg shadow-green-600/20"
                    >
                        🔄 Regenerate Roadmap
                    </button>

                </div>

                {/* =================================
                    HERO SUMMARY
                ================================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-24 -top-24 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />

                    <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />

                    <div className="relative p-6 md:p-9">

                        <div className="flex flex-col lg:flex-row lg:items-center gap-8">

                            <div className="flex-1">

                                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                    🗺️ Personalized Career Plan
                                </div>

                                <h2 className="text-2xl md:text-4xl font-black mt-5 leading-tight max-w-3xl break-words">
                                    {roadmap.careerGoal}
                                </h2>

                                <p className="text-gray-400 mt-4 max-w-3xl leading-7">
                                    {roadmap.careerReason}
                                </p>

                            </div>

                            <div className="lg:w-72 shrink-0">

                                <div className="bg-white/5 border border-green-400/10 rounded-3xl p-6">

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                        Job Readiness
                                    </p>

                                    <div className="flex items-center gap-5 mt-5">

                                        <div className="relative w-24 h-24 shrink-0">

                                            <div className="w-24 h-24 rounded-full border-8 border-white/10" />

                                            <div
                                                className="absolute inset-0 w-24 h-24 rounded-full border-8 border-green-500"
                                                style={{
                                                    clipPath: `polygon(0 0, 100% 0, 100% ${Math.min(
                                                        Number(
                                                            roadmap.jobReadinessScore
                                                        ) || 0,
                                                        100
                                                    )}%, 0 ${Math.min(
                                                        Number(
                                                            roadmap.jobReadinessScore
                                                        ) || 0,
                                                        100
                                                    )}%)`,
                                                }}
                                            />

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-xl font-black">
                                                    {roadmap.jobReadinessScore}%
                                                </span>
                                            </div>

                                        </div>

                                        <div>

                                            <p className="font-bold text-white">
                                                Career Readiness
                                            </p>

                                            <p className="text-xs text-gray-400 mt-1 leading-5">
                                                Based on your current
                                                career profile.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =================================
                    QUICK OVERVIEW
                ================================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5">

                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                            🎯
                        </div>

                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mt-4">
                            Target Career
                        </p>

                        <p className="font-black text-slate-950 mt-1 break-words">
                            {roadmap.careerGoal}
                        </p>

                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5">

                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                            💼
                        </div>

                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mt-4">
                            Job Roles
                        </p>

                        <p className="font-black text-slate-950 mt-1">
                            {roadmap.recommendedRoles?.length || 0}
                        </p>

                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5">

                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                            📚
                        </div>

                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mt-4">
                            Skills To Learn
                        </p>

                        <p className="font-black text-slate-950 mt-1">
                            {roadmap.skillsToLearn?.length || 0}
                        </p>

                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5">

                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                            🚀
                        </div>

                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mt-4">
                            Learning Phases
                        </p>

                        <p className="font-black text-slate-950 mt-1">
                            {roadmap.learningRoadmap?.length || 0}
                        </p>

                    </div>

                </div>

                {/* =================================
                    RECOMMENDED ROLES
                ================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Career Opportunities
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            💼 Recommended Job Roles
                        </h2>

                    </div>

                    <div className="p-5 md:p-8">

                        {roadmap.recommendedRoles?.length > 0 ? (

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                {roadmap.recommendedRoles.map(
                                    (role, index) => (
                                        <div
                                            key={index}
                                            className="group rounded-2xl border border-green-100 bg-green-50/60 p-5 hover:-translate-y-1 hover:shadow-lg transition-all"
                                        >

                                            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
                                                💼
                                            </div>

                                            <p className="font-black text-slate-900 mt-4 break-words">
                                                {role}
                                            </p>

                                            <p className="text-xs text-green-600 font-semibold mt-2">
                                                Recommended Role
                                            </p>

                                        </div>
                                    )
                                )}

                            </div>

                        ) : (
                            <p className="text-gray-500">
                                No recommended job roles available.
                            </p>
                        )}

                    </div>

                </section>

                {/* =================================
                    SKILL GAP ANALYSIS
                ================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Improvement Areas
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            🧩 Skill Gap Analysis
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Skills you should focus on to become
                            more job-ready.
                        </p>

                    </div>

                    <div className="p-5 md:p-8">

                        {roadmap.skillGaps?.length > 0 ? (

                            <div className="space-y-4">

                                {roadmap.skillGaps.map(
                                    (gap, index) => {

                                        const priority =
                                            gap.priority?.toLowerCase();

                                        return (
                                            <div
                                                key={index}
                                                className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition"
                                            >

                                                <div className="flex flex-wrap items-center justify-between gap-3">

                                                    <div className="flex items-center gap-3 min-w-0">

                                                        <div className="w-10 h-10 shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-lg">
                                                            📌
                                                        </div>

                                                        <h3 className="font-black text-slate-950 break-words">
                                                            {gap.skill}
                                                        </h3>

                                                    </div>

                                                    <span
                                                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${priority === "high"
                                                                ? "bg-red-50 text-red-700 border border-red-200"
                                                                : priority === "medium"
                                                                    ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                                                                    : "bg-green-50 text-green-700 border border-green-200"
                                                            }`}
                                                    >
                                                        {gap.priority}
                                                    </span>

                                                </div>

                                                <p className="mt-4 text-sm text-gray-600 leading-6 break-words">
                                                    {gap.reason}
                                                </p>

                                            </div>
                                        );
                                    }
                                )}

                            </div>

                        ) : (
                            <div className="rounded-2xl bg-green-50 border border-green-100 p-5 text-green-700 font-semibold">
                                ✓ No major skill gaps identified.
                            </div>
                        )}

                    </div>

                </section>

                {/* =================================
                    SKILLS TO LEARN
                ================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Recommended Learning
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            📚 Skills To Learn Next
                        </h2>

                    </div>

                    <div className="p-5 md:p-8">

                        {roadmap.skillsToLearn?.length > 0 ? (

                            <div className="flex flex-wrap gap-3">

                                {roadmap.skillsToLearn.map(
                                    (skill, index) => (
                                        <div
                                            key={index}
                                            className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2.5 text-green-700 font-bold text-sm hover:bg-green-100 transition"
                                        >
                                            <span>📚</span>
                                            <span className="break-words">
                                                {skill}
                                            </span>
                                        </div>
                                    )
                                )}

                            </div>

                        ) : (
                            <p className="text-gray-500">
                                No additional skills recommended.
                            </p>
                        )}

                    </div>

                </section>

                {/* =================================
                    LEARNING ROADMAP
                ================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Step-by-Step Plan
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            🗺️ Personalized Learning Roadmap
                        </h2>

                    </div>

                    <div className="p-5 md:p-8">

                        {roadmap.learningRoadmap?.length > 0 ? (

                            <div className="relative space-y-6">

                                {roadmap.learningRoadmap.map(
                                    (phase, index) => (
                                        <div
                                            key={index}
                                            className="relative flex gap-4 md:gap-5"
                                        >

                                            {/* Timeline */}

                                            <div className="flex flex-col items-center shrink-0">

                                                <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center font-black shadow-lg shadow-green-600/20">
                                                    {index + 1}
                                                </div>

                                                {index !==
                                                    roadmap.learningRoadmap
                                                        .length -
                                                    1 && (
                                                        <div className="w-0.5 flex-1 bg-green-100 mt-2 min-h-8" />
                                                    )}

                                            </div>

                                            {/* Phase Card */}

                                            <div className="flex-1 min-w-0 rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:shadow-md transition">

                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                                                    <h3 className="text-lg md:text-xl font-black text-slate-950 break-words">
                                                        {phase.phase}
                                                    </h3>

                                                    <span className="w-fit rounded-full bg-green-100 border border-green-200 px-3 py-1.5 text-xs font-bold text-green-700">
                                                        ⏱️ {phase.duration}
                                                    </span>

                                                </div>

                                                {phase.topics?.length >
                                                    0 && (
                                                        <div className="mt-5 space-y-2">

                                                            {phase.topics.map(
                                                                (
                                                                    topic,
                                                                    topicIndex
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            topicIndex
                                                                        }
                                                                        className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-3"
                                                                    >

                                                                        <span className="w-7 h-7 shrink-0 rounded-lg bg-green-50 text-green-600 flex items-center justify-center font-bold text-sm">
                                                                            ✓
                                                                        </span>

                                                                        <span className="text-gray-700 text-sm leading-6 break-words">
                                                                            {
                                                                                topic
                                                                            }
                                                                        </span>

                                                                    </div>
                                                                )
                                                            )}

                                                        </div>
                                                    )}

                                            </div>

                                        </div>
                                    )
                                )}

                            </div>

                        ) : (
                            <p className="text-gray-500">
                                No learning roadmap available.
                            </p>
                        )}

                    </div>

                </section>

                {/* =================================
                    RECOMMENDED PROJECTS
                ================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Build Your Portfolio
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            🚀 Recommended Projects
                        </h2>

                    </div>

                    <div className="p-5 md:p-8">

                        {roadmap.recommendedProjects?.length > 0 ? (

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {roadmap.recommendedProjects.map(
                                    (project, index) => (
                                        <div
                                            key={index}
                                            className="group rounded-2xl border border-green-100 bg-green-50/50 p-5 hover:-translate-y-1 hover:shadow-lg transition-all"
                                        >

                                            <div className="flex items-start gap-4">

                                                <div className="w-11 h-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
                                                    🚀
                                                </div>

                                                <div className="min-w-0">

                                                    <p className="font-black text-slate-900 leading-6 break-words">
                                                        {project}
                                                    </p>

                                                    <p className="text-xs text-green-600 font-semibold mt-2">
                                                        Portfolio Project
                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                    )
                                )}

                            </div>

                        ) : (
                            <p className="text-gray-500">
                                No recommended projects available.
                            </p>
                        )}

                    </div>

                </section>

                {/* =================================
                    STRENGTHS + ADVICE
                ================================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Strengths */}

                    <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                        <div className="px-6 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                Your Advantages
                            </p>

                            <h2 className="text-2xl font-black text-slate-950 mt-1">
                                💪 Career Strengths
                            </h2>

                        </div>

                        <div className="p-6">

                            {roadmap.strengths?.length > 0 ? (

                                <div className="space-y-3">

                                    {roadmap.strengths.map(
                                        (strength, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-100 p-4"
                                            >

                                                <span className="w-8 h-8 shrink-0 rounded-lg bg-white text-green-600 flex items-center justify-center font-black">
                                                    ✓
                                                </span>

                                                <span className="text-green-800 leading-6 break-words">
                                                    {strength}
                                                </span>

                                            </div>
                                        )
                                    )}

                                </div>

                            ) : (
                                <p className="text-gray-500">
                                    No strengths available.
                                </p>
                            )}

                        </div>

                    </section>

                    {/* Career Advice */}

                    <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                        <div className="px-6 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                AI Guidance
                            </p>

                            <h2 className="text-2xl font-black text-slate-950 mt-1">
                                💡 Career Advice
                            </h2>

                        </div>

                        <div className="p-6">

                            {roadmap.careerAdvice?.length > 0 ? (

                                <div className="space-y-3">

                                    {roadmap.careerAdvice.map(
                                        (advice, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-100 p-4"
                                            >

                                                <span className="w-8 h-8 shrink-0 rounded-lg bg-white flex items-center justify-center">
                                                    💡
                                                </span>

                                                <span className="text-gray-700 leading-6 break-words">
                                                    {advice}
                                                </span>

                                            </div>
                                        )
                                    )}

                                </div>

                            ) : (
                                <p className="text-gray-500">
                                    No career advice available.
                                </p>
                            )}

                        </div>

                    </section>

                </div>

                {/* =================================
                    NEXT STEPS
                ================================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                    <div className="relative p-6 md:p-8">

                        <div className="flex items-start gap-4">

                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                🚀
                            </div>

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                    Take Action
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black mt-1">
                                    Your Next Steps
                                </h2>

                                <p className="text-gray-400 mt-1">
                                    Follow these actions to move closer
                                    to your target career.
                                </p>

                            </div>

                        </div>

                        {roadmap.nextSteps?.length > 0 ? (

                            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">

                                {roadmap.nextSteps.map(
                                    (step, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-4"
                                        >

                                            <span className="w-8 h-8 shrink-0 rounded-lg bg-green-500/10 text-green-300 flex items-center justify-center font-black">
                                                {index + 1}
                                            </span>

                                            <span className="text-gray-300 leading-6 break-words pt-1">
                                                {step}
                                            </span>

                                        </div>
                                    )
                                )}

                            </div>

                        ) : (
                            <p className="text-gray-400 mt-5">
                                No next steps available.
                            </p>
                        )}

                    </div>

                </section>

                {/* =================================
                    BOTTOM ACTION
                ================================= */}

                <div className="flex justify-center pt-2 pb-4">

                    <button
                        onClick={fetchRoadmap}
                        className="w-full sm:w-auto rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white transition hover:bg-green-700 hover:-translate-y-0.5 shadow-lg shadow-green-600/20"
                    >
                        🔄 Regenerate Career Roadmap
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CareerRoadmap;