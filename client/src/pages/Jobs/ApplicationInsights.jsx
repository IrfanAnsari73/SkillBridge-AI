import { useEffect, useState } from "react";

const ApplicationInsights = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // =========================================
    // FETCH APPLICATION INSIGHTS
    // =========================================

    const fetchInsights = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/application-insights",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Failed to load application insights"
                );
            }

            setData(result.insights);
        } catch (error) {
            console.error(
                "Application Insights Error:",
                error
            );

            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // =========================================
    // LOAD DATA
    // =========================================

    useEffect(() => {
        fetchInsights();
    }, []);

    // =========================================
    // LOADING
    // =========================================

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">
                <div className="min-h-[70vh] flex items-center justify-center">
                    <div className="text-center">

                        <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
                            <div className="w-8 h-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />
                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-green-600">
                            AI Career Intelligence
                        </p>

                        <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-2">
                            Analyzing Your Applications...
                        </h2>

                        <p className="text-gray-500 mt-2">
                            AI is preparing your personalized insights.
                        </p>

                    </div>
                </div>
            </div>
        );
    }

    // =========================================
    // ERROR
    // =========================================

    if (error) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">
                <div className="min-h-[65vh] flex items-center justify-center">

                    <div className="w-full max-w-xl bg-white rounded-[28px] border border-gray-200 shadow-xl p-7 md:p-9 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 flex items-center justify-center text-3xl">
                            ⚠️
                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mt-6">
                            Application Insights
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-2">
                            Unable to Load Insights
                        </h2>

                        <p className="text-red-600 mt-3 break-words">
                            {error}
                        </p>

                        <button
                            onClick={fetchInsights}
                            className="mt-6 rounded-xl bg-green-600 text-white px-6 py-3 font-black hover:bg-green-700 transition shadow-lg shadow-green-600/20"
                        >
                            🔄 Try Again
                        </button>

                    </div>

                </div>
            </div>
        );
    }

    // =========================================
    // DATA
    // =========================================

    const stats = data?.statistics || {};
    const rates = data?.rates || {};
    const insights = data?.insights || [];
    const recommendations = data?.recommendations || [];

    // =========================================
    // STAT CARDS
    // =========================================

    const statCards = [
        {
            title: "Total Applications",
            value: stats.totalApplications || 0,
            icon: "📋",
        },
        {
            title: "Shortlisted",
            value: stats.shortlisted || 0,
            icon: "⭐",
        },
        {
            title: "Interviews",
            value: stats.interviews || 0,
            icon: "🎯",
        },
        {
            title: "Selected",
            value: stats.selected || 0,
            icon: "🏆",
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="space-y-7">

                {/* =========================================
                    HERO HEADER
                ========================================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-28 -top-32 w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />

                    <div className="absolute -left-28 -bottom-32 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />

                    <div className="relative p-6 md:p-9">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                            <div className="flex-1 min-w-0">

                                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
                                    🤖 AI Career Intelligence
                                </div>

                                <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight break-words">
                                    AI Job Application Insights
                                    <span className="text-green-500">
                                        .
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-2xl text-gray-400 leading-7">
                                    Understand your application pipeline,
                                    discover success patterns and get
                                    personalized recommendations to improve
                                    your job search.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        📊 Success Rates
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        💡 AI Insights
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        🚀 Recommendations
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        🎯 Pipeline Analysis
                                    </span>

                                </div>

                            </div>

                            <div className="hidden sm:flex w-32 h-32 shrink-0 rounded-3xl border border-green-400/20 bg-green-500/10 items-center justify-center text-6xl">
                                🤖
                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================================
                    HEADER ACTION
                ========================================= */}

                <section className="bg-white rounded-[24px] border border-gray-200 shadow-lg p-5 md:p-6">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                Career Analysis
                            </p>

                            <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-1">
                                Your Application Performance
                            </h2>

                            <p className="text-gray-500 mt-1">
                                AI-generated analysis based on your
                                current application data.
                            </p>

                        </div>

                        <button
                            onClick={fetchInsights}
                            className="w-full sm:w-auto shrink-0 rounded-xl bg-green-600 text-white px-6 py-3 font-black hover:bg-green-700 transition shadow-lg shadow-green-600/20"
                        >
                            🔄 Refresh Insights
                        </button>

                    </div>

                </section>

                {/* =========================================
                    STATISTICS
                ========================================= */}

                <section>

                    <div className="mb-5">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Application Statistics
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            Your Career Pipeline
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                        {statCards.map((card) => (

                            <div
                                key={card.title}
                                className="group bg-white rounded-[24px] border border-gray-200 shadow-lg p-6 hover:-translate-y-1 hover:border-green-200 transition-all"
                            >

                                <div className="flex items-center justify-between gap-4">

                                    <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-2xl shrink-0">
                                        {card.icon}
                                    </div>

                                    <span className="text-xs font-black text-gray-400 tracking-wide">
                                        {card.title.toUpperCase()}
                                    </span>

                                </div>

                                <h2 className="text-4xl font-black text-slate-950 mt-6">
                                    {card.value}
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    {card.title}
                                </p>

                            </div>

                        ))}

                    </div>

                </section>

                {/* =========================================
                    SUCCESS RATES
                ========================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Performance Metrics
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            📊 Application Success Rates
                        </h2>

                        <p className="text-gray-500 mt-1">
                            See how your applications are progressing
                            through the hiring pipeline.
                        </p>

                    </div>

                    <div className="p-5 md:p-8">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                            {/* SHORTLIST */}

                            <div className="rounded-2xl bg-green-50 border border-green-100 p-5">

                                <div className="flex items-center justify-between">

                                    <p className="font-black text-slate-950">
                                        Shortlist Rate
                                    </p>

                                    <span className="text-2xl">
                                        ⭐
                                    </span>

                                </div>

                                <h3 className="text-4xl font-black text-green-600 mt-5">
                                    {rates.shortlistRate || 0}%
                                </h3>

                                <div className="mt-4 h-2.5 bg-white rounded-full overflow-hidden">

                                    <div
                                        className="h-full bg-green-600 rounded-full transition-all duration-700"
                                        style={{
                                            width: `${Math.min(
                                                Number(
                                                    rates.shortlistRate
                                                ) || 0,
                                                100
                                            )}%`,
                                        }}
                                    />

                                </div>

                                <p className="text-sm text-gray-500 mt-3">
                                    Applications reaching shortlist
                                    or beyond.
                                </p>

                            </div>

                            {/* INTERVIEW */}

                            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">

                                <div className="flex items-center justify-between">

                                    <p className="font-black text-slate-950">
                                        Interview Rate
                                    </p>

                                    <span className="text-2xl">
                                        🎯
                                    </span>

                                </div>

                                <h3 className="text-4xl font-black text-slate-950 mt-5">
                                    {rates.interviewRate || 0}%
                                </h3>

                                <div className="mt-4 h-2.5 bg-white rounded-full overflow-hidden border border-gray-200">

                                    <div
                                        className="h-full bg-green-600 rounded-full transition-all duration-700"
                                        style={{
                                            width: `${Math.min(
                                                Number(
                                                    rates.interviewRate
                                                ) || 0,
                                                100
                                            )}%`,
                                        }}
                                    />

                                </div>

                                <p className="text-sm text-gray-500 mt-3">
                                    Applications reaching interview
                                    or beyond.
                                </p>

                            </div>

                            {/* SELECTION */}

                            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 text-white">

                                <div className="flex items-center justify-between">

                                    <p className="font-black text-white">
                                        Selection Rate
                                    </p>

                                    <span className="text-2xl">
                                        🏆
                                    </span>

                                </div>

                                <h3 className="text-4xl font-black text-green-400 mt-5">
                                    {rates.selectionRate || 0}%
                                </h3>

                                <div className="mt-4 h-2.5 bg-white/10 rounded-full overflow-hidden">

                                    <div
                                        className="h-full bg-green-500 rounded-full transition-all duration-700"
                                        style={{
                                            width: `${Math.min(
                                                Number(
                                                    rates.selectionRate
                                                ) || 0,
                                                100
                                            )}%`,
                                        }}
                                    />

                                </div>

                                <p className="text-sm text-gray-400 mt-3">
                                    Applications resulting in
                                    selection.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================================
                    APPLICATION INSIGHTS
                ========================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            AI Analysis
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            💡 Application Insights
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Important patterns detected in your job
                            application journey.
                        </p>

                    </div>

                    <div className="p-5 md:p-8">

                        {insights.length === 0 ? (

                            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-7 text-center">

                                <div className="text-3xl">
                                    💡
                                </div>

                                <p className="font-bold text-slate-950 mt-3">
                                    No Insights Available Yet
                                </p>

                                <p className="text-gray-500 text-sm mt-1">
                                    Add more applications to generate
                                    useful career insights.
                                </p>

                            </div>

                        ) : (

                            <div className="space-y-4">

                                {insights.map(
                                    (insight, index) => (

                                        <div
                                            key={index}
                                            className="flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-200 p-5 hover:border-green-200 hover:shadow-md transition"
                                        >

                                            <div className="w-11 h-11 shrink-0 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-xl">
                                                💡
                                            </div>

                                            <div className="min-w-0">

                                                <p className="text-xs font-black uppercase tracking-wide text-green-600 mb-1">
                                                    Insight {index + 1}
                                                </p>

                                                <p className="text-gray-700 leading-7 break-words">
                                                    {insight}
                                                </p>

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        )}

                    </div>

                </section>

                {/* =========================================
                    AI RECOMMENDATIONS
                ========================================= */}

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
                                    🚀 AI Recommendations
                                </h2>

                                <p className="text-gray-400 mt-2">
                                    Actionable suggestions to improve
                                    your application strategy.
                                </p>

                            </div>

                        </div>

                        <div className="mt-7">

                            {recommendations.length === 0 ? (

                                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-gray-400">
                                    No recommendations available yet.
                                </div>

                            ) : (

                                <div className="space-y-3">

                                    {recommendations.map(
                                        (
                                            recommendation,
                                            index
                                        ) => (

                                            <div
                                                key={index}
                                                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 hover:bg-white/[0.07] transition"
                                            >

                                                <div className="w-10 h-10 shrink-0 rounded-xl bg-green-500/10 border border-green-400/10 flex items-center justify-center text-lg text-green-300">
                                                    {index + 1}
                                                </div>

                                                <p className="text-gray-300 leading-7 break-words pt-1">
                                                    {recommendation}
                                                </p>

                                            </div>

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                    </div>

                </section>

                {/* =========================================
                    APPLICATION PIPELINE
                ========================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Hiring Journey
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            📈 Application Pipeline
                        </h2>

                        <p className="text-gray-500 mt-1">
                            See how applications move through each
                            stage of the hiring process.
                        </p>

                    </div>

                    <div className="p-5 md:p-8">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                            {/* APPLIED */}

                            <div className="text-center rounded-2xl bg-gray-50 border border-gray-200 p-5">

                                <div className="w-11 h-11 mx-auto rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl">
                                    📝
                                </div>

                                <p className="text-3xl font-black text-slate-950 mt-4">
                                    {stats.applied || 0}
                                </p>

                                <p className="text-sm font-semibold text-gray-500 mt-1">
                                    Applied
                                </p>

                            </div>

                            {/* SHORTLISTED */}

                            <div className="text-center rounded-2xl bg-green-50 border border-green-100 p-5">

                                <div className="w-11 h-11 mx-auto rounded-xl bg-white border border-green-100 flex items-center justify-center text-xl">
                                    ⭐
                                </div>

                                <p className="text-3xl font-black text-green-600 mt-4">
                                    {stats.shortlisted || 0}
                                </p>

                                <p className="text-sm font-semibold text-gray-500 mt-1">
                                    Shortlisted
                                </p>

                            </div>

                            {/* INTERVIEW */}

                            <div className="text-center rounded-2xl bg-gray-50 border border-gray-200 p-5">

                                <div className="w-11 h-11 mx-auto rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl">
                                    🎤
                                </div>

                                <p className="text-3xl font-black text-slate-950 mt-4">
                                    {stats.interviews || 0}
                                </p>

                                <p className="text-sm font-semibold text-gray-500 mt-1">
                                    Interview
                                </p>

                            </div>

                            {/* SELECTED */}

                            <div className="text-center rounded-2xl bg-slate-950 border border-slate-800 p-5 text-white">

                                <div className="w-11 h-11 mx-auto rounded-xl bg-green-500/10 flex items-center justify-center text-xl">
                                    🏆
                                </div>

                                <p className="text-3xl font-black text-green-400 mt-4">
                                    {stats.selected || 0}
                                </p>

                                <p className="text-sm font-semibold text-gray-400 mt-1">
                                    Selected
                                </p>

                            </div>

                            {/* REJECTED */}

                            <div className="text-center rounded-2xl bg-gray-50 border border-gray-200 p-5">

                                <div className="w-11 h-11 mx-auto rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl">
                                    📉
                                </div>

                                <p className="text-3xl font-black text-gray-700 mt-4">
                                    {stats.rejected || 0}
                                </p>

                                <p className="text-sm font-semibold text-gray-500 mt-1">
                                    Rejected
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================================
                    FOOTER TIP
                ========================================= */}

                <section className="rounded-[24px] border border-green-100 bg-green-50 p-5 md:p-6">

                    <div className="flex items-start gap-4">

                        <div className="w-11 h-11 shrink-0 rounded-xl bg-white border border-green-100 flex items-center justify-center text-xl">
                            💡
                        </div>

                        <div>

                            <p className="font-black text-green-800">
                                Career Tip
                            </p>

                            <p className="text-green-700 text-sm leading-6 mt-1">
                                Use these insights to identify weak
                                stages in your application pipeline and
                                continuously improve your resume,
                                skills and interview preparation.
                            </p>

                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
};

export default ApplicationInsights;