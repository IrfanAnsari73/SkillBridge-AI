import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CareerActionCenter = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCareerActions = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(
                    "http://localhost:5000/api/career-actions",
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
            <div className="w-full max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
                    <div className="text-4xl mb-4">
                        🤖
                    </div>

                    <h2 className="text-xl font-semibold text-gray-800">
                        Analyzing your career profile...
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Preparing your personalized action plan.
                    </p>
                </div>
            </div>
        );
    }

    // ===============================
    // ERROR
    // ===============================

    if (error) {
        return (
            <div className="w-full max-w-7xl mx-auto">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-red-700">
                        Unable to load Career Action Center
                    </h2>

                    <p className="text-red-600 mt-2">
                        {error}
                    </p>
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
        <div className="w-full max-w-7xl mx-auto space-y-6">

            {/* =============================== */}
            {/* HEADER */}
            {/* =============================== */}

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    <div>
                        <p className="text-green-600 font-semibold text-sm">
                            AI CAREER ACTION CENTER
                        </p>

                        <h1 className="text-3xl font-bold text-gray-800 mt-1">
                            Your Next Career Moves 🎯
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Personalized actions based on your current
                            profile, skills, projects and applications.
                        </p>
                    </div>

                    {/* CAREER SCORE */}

                    <div className="bg-green-50 rounded-2xl px-7 py-5 text-center min-w-[150px]">

                        <p className="text-sm text-gray-500">
                            Career Score
                        </p>

                        <p className="text-4xl font-bold text-green-600">
                            {data?.careerScore ?? 0}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                            out of 100
                        </p>

                    </div>

                </div>

            </div>


            {/* =============================== */}
            {/* STATS */}
            {/* =============================== */}

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


            {/* =============================== */}
            {/* HIGHEST PRIORITY */}
            {/* =============================== */}

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <div className="flex items-center gap-2">
                    <span className="text-2xl">
                        🔥
                    </span>

                    <h2 className="text-xl font-bold text-gray-800">
                        Highest Priority
                    </h2>
                </div>

                <p className="text-gray-500 mt-1">
                    Start with these actions to improve your career readiness.
                </p>

                <div className="mt-5">

                    {highPriorityAction ? (
                        <div className="border border-green-200 bg-green-50 rounded-xl p-5">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>

                                    <p className="text-xs font-semibold text-red-600 uppercase">
                                        High Priority
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 mt-1">
                                        {highPriorityAction.title}
                                    </h3>

                                    <p className="text-gray-600 mt-2">
                                        {highPriorityAction.description}
                                    </p>

                                </div>

                                <button
                                    onClick={() =>
                                        handleAction(
                                            highPriorityAction.action
                                        )
                                    }
                                    className="px-5 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition whitespace-nowrap"
                                >
                                    Take Action →
                                </button>

                            </div>

                        </div>
                    ) : (
                        <p className="text-gray-500">
                            No priority action available.
                        </p>
                    )}

                </div>

            </div>


            {/* =============================== */}
            {/* RECOMMENDED ACTIONS */}
            {/* =============================== */}

            <div>

                <div className="flex items-center gap-2 mb-4">

                    <span className="text-2xl">
                        🚀
                    </span>

                    <h2 className="text-xl font-bold text-gray-800">
                        Recommended Actions
                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {actions.length > 0 ? (
                        actions.map(
                            (action, index) => (
                                <ActionCard
                                    key={index}
                                    action={action}
                                    onAction={handleAction}
                                />
                            )
                        )
                    ) : (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <p className="text-gray-500">
                                No actions available right now.
                            </p>
                        </div>
                    )}

                </div>

            </div>


            {/* =============================== */}
            {/* RECOMMENDATIONS */}
            {/* =============================== */}

            {recommendations.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-6">

                    <div className="flex items-center gap-2">

                        <span className="text-2xl">
                            💡
                        </span>

                        <h2 className="text-xl font-bold text-gray-800">
                            Career Recommendations
                        </h2>

                    </div>

                    <div className="mt-5 space-y-3">

                        {recommendations.map(
                            (recommendation, index) => (
                                <div
                                    key={index}
                                    className="flex gap-3 items-start bg-gray-50 rounded-xl p-4"
                                >

                                    <span className="font-semibold text-green-600">
                                        {index + 1}.
                                    </span>

                                    <p className="text-gray-700">
                                        {recommendation}
                                    </p>

                                </div>
                            )
                        )}

                    </div>

                </div>
            )}

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
        <div className="bg-white rounded-2xl shadow-sm p-5">

            <div className="text-2xl">
                {icon}
            </div>

            <p className="text-gray-500 text-sm mt-3">
                {label}
            </p>

            <p className="text-2xl font-bold text-gray-800 mt-1">
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
        <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">

            <div className="flex items-start justify-between gap-4">

                <div>

                    <h3 className="text-lg font-bold text-gray-800">
                        {action.title}
                    </h3>

                    <p className="text-gray-500 mt-2">
                        {action.description}
                    </p>

                </div>

                <span className="text-2xl">
                    {action.icon || "🎯"}
                </span>

            </div>

            <div className="mt-5 flex items-center justify-between gap-3">

                <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${action.priority === "High"
                            ? "bg-red-100 text-red-700"
                            : action.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                        }`}
                >
                    {action.priority} Priority
                </span>

                <button
                    onClick={() =>
                        onAction(action.action)
                    }
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                >
                    Take Action →
                </button>

            </div>

        </div>
    );
};

export default CareerActionCenter;