import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CareerActionCenter = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // ===============================
    // FETCH CAREER ACTIONS
    // ===============================

    const fetchCareerActions = async () => {
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
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/career-actions",
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
                    "Failed to load career actions"
                );
            }

            setData(result);
        } catch (err) {
            console.error(
                "Career Action Error:",
                err
            );

            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCareerActions();
    }, []);

    // ===============================
    // ACTION NAVIGATION
    // ===============================

    const handleAction = (action) => {
        switch (action) {
            case "Upload Resume":
            case "Analyze Resume":
                navigate("/resume");
                break;

            case "Add Skills":
            case "Improve Skills":
                navigate("/skills");
                break;

            case "Add Project":
            case "Improve Projects":
                navigate("/projects");
                break;

            case "Add Certificate":
                navigate("/certificates");
                break;

            case "Add Application":
            case "Apply More":
            case "Analyze Applications":
                navigate("/job-applications");
                break;

            case "Start Mock Interview":
            case "Prepare Interview":
                navigate("/mock-interview");
                break;

            case "Review Career Strategy":
                navigate("/career-advisor");
                break;

            default:
                break;
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

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-5">

                            <div className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-green-600 animate-spin" />

                        </div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-green-600">
                            AI Career Intelligence
                        </p>

                        <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-2">
                            Analyzing your career profile...
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Preparing your personalized action plan.
                        </p>

                    </div>

                </div>

            </div>
        );
    }

    // ===============================
    // ERROR
    // ===============================

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
                            Unable to Load Career Actions
                        </h2>

                        <p className="text-gray-600 mt-3 break-words leading-6">
                            {error}
                        </p>

                        <button
                            onClick={fetchCareerActions}
                            className="mt-7 rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700 shadow-lg shadow-green-600/20"
                        >
                            🔄 Try Again
                        </button>

                    </div>

                </div>

            </div>
        );
    }

    const summary = data?.summary || {};
    const actions = data?.actions || [];
    const recommendations =
        data?.recommendations || [];

    // ===============================
    // HIGHEST PRIORITY
    // ===============================

    const highPriorityAction =
        actions.find(
            (action) =>
                action.priority === "High"
        );

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            {/* Background Decoration */}

            <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

            <div className="relative space-y-7">

                {/* =================================
                    HEADER
                ================================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-28 -top-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                    <div className="absolute -left-28 -bottom-32 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

                    <div className="relative p-6 md:p-9">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                            <div className="flex-1">

                                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                    🎯 AI Career Action Center
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black mt-5 leading-tight">
                                    Your Next Career Moves
                                    <span className="text-green-500">
                                        .
                                    </span>
                                </h1>

                                <p className="text-gray-400 mt-4 max-w-2xl leading-7">
                                    Personalized actions based on your
                                    current profile, skills, projects
                                    and applications.
                                </p>

                                <div className="flex flex-wrap gap-3 mt-6">

                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                        🛠️ Build Skills
                                    </span>

                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                        💻 Improve Projects
                                    </span>

                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                        📋 Track Applications
                                    </span>

                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                        🎤 Prepare Interviews
                                    </span>

                                </div>

                            </div>

                            {/* Career Score */}

                            <div className="lg:w-64 shrink-0">

                                <div className="bg-white/5 border border-green-400/10 rounded-3xl p-6 text-center">

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                        Career Score
                                    </p>

                                    <div className="mt-4">

                                        <p className="text-6xl font-black text-white">
                                            {data?.careerScore ?? 0}
                                        </p>

                                        <p className="text-gray-400 text-sm mt-1">
                                            out of 100
                                        </p>

                                    </div>

                                    <div className="mt-5 w-full h-2 bg-white/10 rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-green-500 rounded-full transition-all duration-700"
                                            style={{
                                                width: `${Math.min(
                                                    Math.max(
                                                        Number(
                                                            data?.careerScore
                                                        ) || 0,
                                                        0
                                                    ),
                                                    100
                                                )}%`,
                                            }}
                                        />

                                    </div>

                                    <p className="text-xs text-gray-400 mt-3">
                                        Overall career readiness
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =================================
                    STATS
                ================================= */}

                <section>

                    <div className="mb-4">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                            Career Snapshot
                        </p>

                        <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                            Your Current Progress
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                        <StatCard
                            icon="🛠️"
                            label="Skills"
                            value={summary.skills ?? 0}
                        />

                        <StatCard
                            icon="💻"
                            label="Projects"
                            value={summary.projects ?? 0}
                        />

                        <StatCard
                            icon="🏆"
                            label="Certificates"
                            value={summary.certificates ?? 0}
                        />

                        <StatCard
                            icon="📋"
                            label="Applications"
                            value={summary.applications ?? 0}
                        />

                        <StatCard
                            icon="🎤"
                            label="Interviews"
                            value={summary.interviews ?? 0}
                        />

                    </div>

                </section>

                {/* =================================
                    HIGHEST PRIORITY
                ================================= */}

                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                    <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Start Here
                        </p>

                        <h2 className="text-2xl font-black text-slate-950 mt-1">
                            🔥 Highest Priority
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Start with these actions to improve your
                            career readiness.
                        </p>

                    </div>

                    <div className="p-5 md:p-8">

                        {highPriorityAction ? (

                            <div className="border border-green-200 bg-green-50 rounded-2xl p-5 md:p-6">

                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                                    <div className="flex gap-4 items-start min-w-0">

                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm">
                                            {highPriorityAction.icon || "🔥"}
                                        </div>

                                        <div className="min-w-0">

                                            <div className="flex flex-wrap items-center gap-2">

                                                <p className="text-xs font-black uppercase tracking-wide text-red-600">
                                                    High Priority
                                                </p>

                                                <span className="w-1 h-1 rounded-full bg-gray-300" />

                                                <p className="text-xs font-semibold text-gray-500">
                                                    Recommended Action
                                                </p>

                                            </div>

                                            <h3 className="text-xl font-black text-slate-950 mt-1 break-words">
                                                {highPriorityAction.title}
                                            </h3>

                                            <p className="text-gray-600 mt-2 leading-6 break-words">
                                                {highPriorityAction.description}
                                            </p>

                                        </div>

                                    </div>

                                    <button
                                        onClick={() =>
                                            handleAction(
                                                highPriorityAction.action
                                            )
                                        }
                                        className="w-full lg:w-auto px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-600/20 whitespace-nowrap"
                                    >
                                        Take Action →
                                    </button>

                                </div>

                            </div>

                        ) : (

                            <div className="rounded-2xl bg-green-50 border border-green-100 p-5 text-green-700 font-semibold">
                                ✓ No high-priority action available right now.
                            </div>

                        )}

                    </div>

                </section>

                {/* =================================
                    RECOMMENDED ACTIONS
                ================================= */}

                <section>

                    <div className="mb-5">

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                            Personalized Plan
                        </p>

                        <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                            🚀 Recommended Actions
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Take these actions to strengthen your
                            career profile.
                        </p>

                    </div>

                    {actions.length > 0 ? (

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {actions.map(
                                (action, index) => (
                                    <ActionCard
                                        key={index}
                                        action={action}
                                        onAction={handleAction}
                                    />
                                )
                            )}

                        </div>

                    ) : (

                        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                            <p className="text-gray-500">
                                No actions available right now.
                            </p>
                        </div>

                    )}

                </section>

                {/* =================================
                    RECOMMENDATIONS
                ================================= */}

                {recommendations.length > 0 && (

                    <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                        <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40">

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                AI Guidance
                            </p>

                            <h2 className="text-2xl font-black text-slate-950 mt-1">
                                💡 Career Recommendations
                            </h2>

                        </div>

                        <div className="p-5 md:p-8">

                            <div className="space-y-3">

                                {recommendations.map(
                                    (
                                        recommendation,
                                        index
                                    ) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 items-start bg-green-50/60 border border-green-100 rounded-2xl p-4 md:p-5"
                                        >

                                            <span className="w-9 h-9 shrink-0 rounded-xl bg-green-600 text-white flex items-center justify-center font-black">
                                                {index + 1}
                                            </span>

                                            <p className="text-gray-700 leading-6 pt-1 break-words">
                                                {recommendation}
                                            </p>

                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                    </section>

                )}

                {/* =================================
                    FINAL CTA
                ================================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                    <div className="relative p-6 md:p-8">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                    Keep Moving Forward
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black mt-2">
                                    Turn your career plan into action.
                                </h2>

                                <p className="text-gray-400 mt-2 max-w-2xl leading-6">
                                    Complete the recommended actions,
                                    improve your profile and keep
                                    building toward your target role.
                                </p>

                            </div>

                            <button
                                onClick={() =>
                                    navigate("/career-advisor")
                                }
                                className="w-full md:w-auto shrink-0 px-6 py-3.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-600/20"
                            >
                                🤖 Review Career Strategy
                            </button>

                        </div>

                    </div>

                </section>

                {/* =================================
                    REFRESH
                ================================= */}

                <div className="flex justify-center pt-1 pb-4">

                    <button
                        onClick={fetchCareerActions}
                        className="w-full sm:w-auto rounded-xl border border-green-200 bg-green-50 px-6 py-3 font-bold text-green-700 hover:bg-green-100 transition"
                    >
                        🔄 Refresh Career Actions
                    </button>

                </div>

            </div>

        </div>
    );
};


// ===============================
// STAT CARD
// ===============================

const StatCard = ({
    icon,
    label,
    value,
}) => {
    return (
        <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg p-5 hover:-translate-y-1 hover:shadow-xl transition-all">

            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl group-hover:scale-105 transition">
                {icon}
            </div>

            <p className="text-gray-500 text-sm font-medium mt-4">
                {label}
            </p>

            <p className="text-3xl font-black text-slate-950 mt-1">
                {value}
            </p>

        </div>
    );
};


// ===============================
// ACTION CARD
// ===============================

const ActionCard = ({
    action,
    onAction,
}) => {
    return (
        <div className="group bg-white rounded-[24px] border border-gray-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all">

            <div className="flex items-start justify-between gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-2xl group-hover:scale-105 transition">
                    {action.icon || "🎯"}
                </div>

                <span
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold ${action.priority === "High"
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : action.priority === "Medium"
                            ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                            : "bg-green-50 text-green-700 border border-green-200"
                        }`}
                >
                    {action.priority} Priority
                </span>

            </div>

            <h3 className="text-xl font-black text-slate-950 mt-5 break-words">
                {action.title}
            </h3>

            <p className="text-gray-500 mt-2 leading-6 break-words">
                {action.description}
            </p>

            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-3">

                <span className="text-xs font-semibold text-gray-400">
                    Recommended for you
                </span>

                <button
                    onClick={() =>
                        onAction(action.action)
                    }
                    className="px-4 py-2.5 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition shadow-sm whitespace-nowrap"
                >
                    Take Action →
                </button>

            </div>

        </div>
    );
};

export default CareerActionCenter;