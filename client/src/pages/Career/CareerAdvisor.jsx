import { useState } from "react";

const CareerAdvisor = () => {
    const [loading, setLoading] = useState(false);
    const [recommendations, setRecommendations] = useState(null);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    // =========================
    // GET AI CAREER RECOMMENDATIONS
    // =========================

    const handleGetRecommendations = async () => {
        try {
            setLoading(true);
            setError("");
            setMessage("");
            setRecommendations(null);

            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/career/recommendations",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Failed to generate career recommendations."
                );
                return;
            }

            setRecommendations(data.recommendations);

            setMessage(
                "AI career recommendations generated successfully! 🤖"
            );
        } catch (error) {
            console.error("Career Advisor Error:", error);

            setError("Unable to connect to Career Advisor.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="relative">

                {/* Background Decoration */}

                <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                <div className="pointer-events-none absolute top-[700px] -left-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

                <div className="relative space-y-7">

                    {/* =================================
                        PAGE HEADER
                    ================================= */}

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

                        <div>

                            <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-green-600">
                                AI Career Intelligence
                            </p>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-2 tracking-tight">
                                AI Career Advisor
                                <span className="text-green-600">
                                    .
                                </span>
                            </h1>

                            <p className="text-gray-600 mt-2 text-base md:text-lg max-w-2xl leading-7">
                                Get personalized career
                                recommendations based on your
                                profile, skills, projects,
                                certificates and resume.
                            </p>

                        </div>

                        <button
                            onClick={handleGetRecommendations}
                            disabled={loading}
                            className="w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-green-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-green-600/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {loading ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                    Analyzing Profile...
                                </>
                            ) : (
                                <>
                                    🤖
                                    Get Career Advice
                                </>
                            )}
                        </button>

                    </div>

                    {/* =================================
                        HERO
                    ================================= */}

                    {!recommendations && !loading && (
                        <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                            <div className="absolute -right-28 -top-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                            <div className="absolute -left-28 -bottom-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                            <div className="relative p-6 md:p-9">

                                <div className="flex flex-col lg:flex-row lg:items-center gap-8">

                                    <div className="flex-1">

                                        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                            ✨ AI-Powered Guidance
                                        </div>

                                        <h2 className="text-2xl md:text-4xl font-black mt-5 max-w-2xl leading-tight">
                                            Discover the career path
                                            that fits you best.
                                        </h2>

                                        <p className="text-gray-400 mt-4 max-w-2xl leading-7">
                                            SkillBridge AI analyzes
                                            your career profile and
                                            gives you practical
                                            recommendations to help
                                            you move closer to your
                                            target role.
                                        </p>

                                        <div className="flex flex-wrap gap-3 mt-6">

                                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                                🎯 Career Path
                                            </span>

                                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                                💼 Job Roles
                                            </span>

                                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                                📚 Skill Gaps
                                            </span>

                                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                                🛣️ Roadmap
                                            </span>

                                        </div>

                                    </div>

                                    <div className="lg:w-80">

                                        <div className="bg-white/5 border border-green-400/10 rounded-3xl p-6">

                                            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-4xl">
                                                🤖
                                            </div>

                                            <h3 className="text-xl font-black mt-5">
                                                Your AI Career Coach
                                            </h3>

                                            <p className="text-gray-400 text-sm leading-6 mt-2">
                                                Get insights based on
                                                the career data already
                                                available in your
                                                SkillBridge profile.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>
                    )}

                    {/* =================================
                        SUCCESS MESSAGE
                    ================================= */}

                    {message && (
                        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-2xl font-semibold shadow-sm">

                            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                ✓
                            </span>

                            <span>{message}</span>

                        </div>
                    )}

                    {/* =================================
                        ERROR MESSAGE
                    ================================= */}

                    {error && (
                        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl font-semibold shadow-sm">

                            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                !
                            </span>

                            <span>{error}</span>

                        </div>
                    )}

                    {/* =================================
                        FEATURE CARDS
                    ================================= */}

                    {!recommendations && !loading && (
                        <section>

                            <div className="mb-5">

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                                    What You Get
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                    Personalized Career Insights
                                </h2>

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                                {/* Career Path */}

                                <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all">

                                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl group-hover:scale-105 transition">
                                        🎯
                                    </div>

                                    <h3 className="text-lg font-black text-slate-950 mt-5">
                                        Career Path
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2 leading-6">
                                        Discover the software
                                        development career path
                                        that best matches your
                                        profile.
                                    </p>

                                </div>

                                {/* Job Roles */}

                                <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all">

                                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl group-hover:scale-105 transition">
                                        💼
                                    </div>

                                    <h3 className="text-lg font-black text-slate-950 mt-5">
                                        Job Roles
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2 leading-6">
                                        Find suitable internship
                                        and entry-level job roles
                                        for your current profile.
                                    </p>

                                </div>

                                {/* Skill Gaps */}

                                <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all">

                                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl group-hover:scale-105 transition">
                                        📚
                                    </div>

                                    <h3 className="text-lg font-black text-slate-950 mt-5">
                                        Skill Gaps
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2 leading-6">
                                        Identify important skills
                                        that can improve your
                                        career opportunities.
                                    </p>

                                </div>

                                {/* Roadmap */}

                                <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all">

                                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl group-hover:scale-105 transition">
                                        🛣️
                                    </div>

                                    <h3 className="text-lg font-black text-slate-950 mt-5">
                                        Learning Roadmap
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2 leading-6">
                                        Get a practical,
                                        step-by-step learning
                                        roadmap for your goals.
                                    </p>

                                </div>

                            </div>

                        </section>
                    )}

                    {/* =================================
                        ANALYZING
                    ================================= */}

                    {loading && (
                        <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5" />

                            <div className="relative p-8 md:p-14 text-center">

                                <div className="w-20 h-20 mx-auto rounded-3xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-5xl animate-pulse">
                                    🤖
                                </div>

                                <p className="text-green-300 text-xs font-black uppercase tracking-[0.2em] mt-7">
                                    AI Analysis In Progress
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black mt-2">
                                    Analyzing Your Career Profile...
                                </h2>

                                <p className="text-gray-400 mt-3 max-w-xl mx-auto leading-7">
                                    We're analyzing your skills,
                                    projects, certificates and
                                    resume to prepare personalized
                                    career recommendations.
                                </p>

                                <div className="mt-8 max-w-xl mx-auto">

                                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                                        <span>
                                            AI Processing
                                        </span>

                                        <span>
                                            Please wait
                                        </span>
                                    </div>

                                    <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">

                                        <div className="h-full w-2/3 bg-green-500 rounded-full animate-pulse" />

                                    </div>

                                </div>

                            </div>

                        </section>
                    )}

                    {/* =================================
                        AI RESULTS
                    ================================= */}

                    {recommendations && !loading && (

                        <div className="space-y-6">

                            {/* RESULTS HEADER */}

                            <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                                <div className="absolute -right-24 -top-24 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />

                                <div className="relative p-6 md:p-8">

                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                                        <div>

                                            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-300">
                                                AI Career Report
                                            </p>

                                            <h2 className="text-2xl md:text-3xl font-black mt-2">
                                                Your Personalized
                                                Career Insights
                                            </h2>

                                            <p className="text-gray-400 mt-2">
                                                Based on your current
                                                SkillBridge AI profile.
                                            </p>

                                        </div>

                                        <button
                                            onClick={
                                                handleGetRecommendations
                                            }
                                            className="w-full md:w-auto bg-green-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-600/20"
                                        >
                                            🔄 Regenerate
                                        </button>

                                    </div>

                                </div>

                            </section>

                            {/* =================================
                                RECOMMENDED CAREER
                            ================================= */}

                            <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-green-50 to-white border border-green-200 shadow-xl p-6 md:p-8">

                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

                                <div className="relative">

                                    <div className="flex items-start gap-4">

                                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-green-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-green-600/20">
                                            🎯
                                        </div>

                                        <div className="min-w-0">

                                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                                Recommended Career
                                            </p>

                                            <h2 className="text-2xl md:text-3xl font-black text-green-800 mt-1 break-words">
                                                {
                                                    recommendations.recommendedCareer
                                                }
                                            </h2>

                                        </div>

                                    </div>

                                    {recommendations.careerReason && (
                                        <p className="text-gray-700 mt-6 leading-7 max-w-4xl">
                                            {
                                                recommendations.careerReason
                                            }
                                        </p>
                                    )}

                                </div>

                            </section>

                            {/* =================================
                                JOB ROLES
                            ================================= */}

                            <section className="bg-white border border-gray-200 rounded-[28px] shadow-xl overflow-hidden">

                                <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                        Career Opportunities
                                    </p>

                                    <h2 className="text-2xl font-black text-slate-950 mt-1">
                                        💼 Recommended Job Roles
                                    </h2>

                                </div>

                                <div className="p-5 md:p-8">

                                    {recommendations.recommendedRoles &&
                                        recommendations.recommendedRoles.length > 0 ? (

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                            {recommendations.recommendedRoles.map(
                                                (role, index) => (
                                                    <div
                                                        key={index}
                                                        className="group border border-green-100 bg-green-50/60 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all"
                                                    >

                                                        <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
                                                            💼
                                                        </div>

                                                        <p className="font-black text-slate-900 mt-4 break-words">
                                                            {role}
                                                        </p>

                                                        <p className="text-xs text-green-600 font-semibold mt-2">
                                                            Suitable Role
                                                        </p>

                                                    </div>
                                                )
                                            )}

                                        </div>

                                    ) : (
                                        <p className="text-gray-500">
                                            No specific job roles found.
                                        </p>
                                    )}

                                </div>

                            </section>

                            {/* =================================
                                SKILL GAPS
                            ================================= */}

                            <section className="bg-white border border-gray-200 rounded-[28px] shadow-xl overflow-hidden">

                                <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                        Improvement Areas
                                    </p>

                                    <h2 className="text-2xl font-black text-slate-950 mt-1">
                                        ⚠️ Skill Gaps
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        Skills that can improve your
                                        career opportunities.
                                    </p>

                                </div>

                                <div className="p-5 md:p-8">

                                    {recommendations.skillGaps &&
                                        recommendations.skillGaps.length > 0 ? (

                                        <div className="flex flex-wrap gap-3">

                                            {recommendations.skillGaps.map(
                                                (skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-green-50 border border-green-200 text-green-700 px-4 py-2.5 rounded-full font-bold text-sm break-words"
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            )}

                                        </div>

                                    ) : (
                                        <p className="text-gray-500">
                                            No major skill gaps identified.
                                        </p>
                                    )}

                                </div>

                            </section>

                            {/* =================================
                                SKILLS TO LEARN
                            ================================= */}

                            <section className="bg-white border border-gray-200 rounded-[28px] shadow-xl overflow-hidden">

                                <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                        Recommended Learning
                                    </p>

                                    <h2 className="text-2xl font-black text-slate-950 mt-1">
                                        📚 Skills To Learn Next
                                    </h2>

                                </div>

                                <div className="p-5 md:p-8">

                                    {recommendations.skillsToLearn &&
                                        recommendations.skillsToLearn.length > 0 ? (

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                            {recommendations.skillsToLearn.map(
                                                (skill, index) => (
                                                    <div
                                                        key={index}
                                                        className="border border-green-100 bg-green-50/60 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all"
                                                    >

                                                        <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
                                                            📚
                                                        </div>

                                                        <p className="font-black text-slate-900 mt-4 break-words">
                                                            {skill}
                                                        </p>

                                                        <p className="text-xs text-green-600 font-semibold mt-2">
                                                            Recommended Skill
                                                        </p>

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

                            <section className="bg-white border border-gray-200 rounded-[28px] shadow-xl overflow-hidden">

                                <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                        Your Learning Journey
                                    </p>

                                    <h2 className="text-2xl font-black text-slate-950 mt-1">
                                        🛣️ Learning Roadmap
                                    </h2>

                                </div>

                                <div className="p-5 md:p-8">

                                    {recommendations.learningRoadmap &&
                                        recommendations.learningRoadmap.length > 0 ? (

                                        <div className="space-y-5">

                                            {recommendations.learningRoadmap.map(
                                                (step, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex gap-4 items-start"
                                                    >

                                                        <div className="shrink-0 w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-black shadow-lg shadow-green-600/20">
                                                            {index + 1}
                                                        </div>

                                                        <div className="flex-1 min-w-0 border border-gray-200 bg-gray-50 rounded-2xl p-4 md:p-5">

                                                            <p className="text-gray-700 leading-7 break-words">
                                                                {step}
                                                            </p>

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
                                STRENGTHS + ADVICE
                            ================================= */}

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                                {/* Career Strengths */}

                                <section className="bg-white border border-gray-200 rounded-[28px] shadow-xl overflow-hidden">

                                    <div className="px-6 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                            What You Already Have
                                        </p>

                                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                                            💪 Career Strengths
                                        </h2>

                                    </div>

                                    <div className="p-6">

                                        {recommendations.strengths &&
                                            recommendations.strengths.length > 0 ? (

                                            <ul className="space-y-4">

                                                {recommendations.strengths.map(
                                                    (strength, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex gap-3 items-start"
                                                        >

                                                            <span className="w-8 h-8 shrink-0 rounded-lg bg-green-50 text-green-600 flex items-center justify-center font-bold">
                                                                ✓
                                                            </span>

                                                            <span className="text-gray-700 leading-6 break-words">
                                                                {strength}
                                                            </span>

                                                        </li>
                                                    )
                                                )}

                                            </ul>

                                        ) : (
                                            <p className="text-gray-500">
                                                No strengths available.
                                            </p>
                                        )}

                                    </div>

                                </section>

                                {/* Career Advice */}

                                <section className="bg-white border border-gray-200 rounded-[28px] shadow-xl overflow-hidden">

                                    <div className="px-6 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                            Expert Guidance
                                        </p>

                                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                                            💡 Career Advice
                                        </h2>

                                    </div>

                                    <div className="p-6">

                                        {recommendations.careerAdvice &&
                                            recommendations.careerAdvice.length > 0 ? (

                                            <ul className="space-y-4">

                                                {recommendations.careerAdvice.map(
                                                    (advice, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex gap-3 items-start"
                                                        >

                                                            <span className="w-8 h-8 shrink-0 rounded-lg bg-green-50 flex items-center justify-center">
                                                                💡
                                                            </span>

                                                            <span className="text-gray-700 leading-6 break-words">
                                                                {advice}
                                                            </span>

                                                        </li>
                                                    )
                                                )}

                                            </ul>

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

                                            <h2 className="text-2xl font-black mt-1">
                                                Your Next Steps
                                            </h2>

                                        </div>

                                    </div>

                                    {recommendations.nextSteps &&
                                        recommendations.nextSteps.length > 0 ? (

                                        <ol className="mt-7 space-y-4">

                                            {recommendations.nextSteps.map(
                                                (step, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-4"
                                                    >

                                                        <span className="w-8 h-8 shrink-0 rounded-lg bg-green-500/10 text-green-300 flex items-center justify-center font-black">
                                                            {index + 1}
                                                        </span>

                                                        <span className="text-gray-300 leading-6 break-words pt-1">
                                                            {step}
                                                        </span>

                                                    </li>
                                                )
                                            )}

                                        </ol>

                                    ) : (
                                        <p className="text-gray-400 mt-5">
                                            No next steps available.
                                        </p>
                                    )}

                                </div>

                            </section>

                        </div>
                    )}

                </div>

            </div>

        </div>
    );
};

export default CareerAdvisor;