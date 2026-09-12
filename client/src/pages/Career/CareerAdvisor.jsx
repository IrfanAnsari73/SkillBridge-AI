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
                "http://localhost:5000/api/career/recommendations",
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
        <div className="w-full max-w-7xl mx-auto min-w-0 space-y-6">

            {/* =========================
                PAGE HEADER
            ========================= */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-600">
                        AI Career Advisor 🤖
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Get personalized career recommendations
                        based on your profile, skills, projects,
                        certificates and resume.
                    </p>
                </div>

                <button
                    onClick={handleGetRecommendations}
                    disabled={loading}
                    className="w-full md:w-auto bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 transition"
                >
                    {loading
                        ? "Analyzing Profile..."
                        : "Get Career Advice 🤖"}
                </button>

            </div>

            {/* =========================
                SUCCESS MESSAGE
            ========================= */}

            {message && (
                <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                    {message}
                </div>
            )}

            {/* =========================
                ERROR MESSAGE
            ========================= */}

            {error && (
                <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* =========================
                INTRO CARDS
            ========================= */}

            {!recommendations && !loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div className="bg-white rounded-xl shadow-lg p-6 border">
                        <div className="text-4xl">
                            🎯
                        </div>

                        <h3 className="text-lg font-bold mt-4">
                            Career Path
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Discover the software development
                            career path that best matches your profile.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border">
                        <div className="text-4xl">
                            💼
                        </div>

                        <h3 className="text-lg font-bold mt-4">
                            Job Roles
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Find suitable internship and
                            entry-level job roles.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border">
                        <div className="text-4xl">
                            📚
                        </div>

                        <h3 className="text-lg font-bold mt-4">
                            Skill Gaps
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Identify important skills you
                            should learn next.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border">
                        <div className="text-4xl">
                            🛣️
                        </div>

                        <h3 className="text-lg font-bold mt-4">
                            Learning Roadmap
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Get a practical step-by-step
                            learning roadmap.
                        </p>
                    </div>

                </div>
            )}

            {/* =========================
                ANALYZING
            ========================= */}

            {loading && (
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center">

                    <div className="text-6xl">
                        🤖
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold mt-5">
                        AI is analyzing your career profile...
                    </h2>

                    <p className="text-gray-500 mt-2">
                        We're analyzing your skills, projects,
                        certificates and resume.
                    </p>

                    <div className="mt-6 w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-600 h-3 rounded-full w-2/3 animate-pulse"></div>
                    </div>

                </div>
            )}

            {/* =========================
                AI RESULTS
            ========================= */}

            {recommendations && !loading && (

                <div className="space-y-6">

                    {/* =========================
                        RECOMMENDED CAREER
                    ========================= */}

                    <div className="bg-purple-50 border border-purple-200 rounded-xl shadow-lg p-6 sm:p-8">

                        <div className="flex items-center gap-3">

                            <div className="text-4xl">
                                🎯
                            </div>

                            <div>
                                <p className="text-sm text-purple-600 font-semibold">
                                    RECOMMENDED CAREER
                                </p>

                                <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 break-words">
                                    {recommendations.recommendedCareer}
                                </h2>
                            </div>

                        </div>

                        {recommendations.careerReason && (
                            <p className="text-gray-700 mt-5 leading-relaxed">
                                {recommendations.careerReason}
                            </p>
                        )}

                    </div>

                    {/* =========================
                        RECOMMENDED ROLES
                    ========================= */}

                    <div className="bg-white border rounded-xl shadow-lg p-5 sm:p-6">

                        <h2 className="text-xl sm:text-2xl font-bold">
                            💼 Recommended Job Roles
                        </h2>

                        {recommendations.recommendedRoles &&
                            recommendations.recommendedRoles.length > 0 ? (

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

                                {recommendations.recommendedRoles.map(
                                    (role, index) => (
                                        <div
                                            key={index}
                                            className="border rounded-lg p-4 bg-blue-50"
                                        >
                                            <div className="text-2xl">
                                                💼
                                            </div>

                                            <p className="font-semibold mt-2 break-words">
                                                {role}
                                            </p>
                                        </div>
                                    )
                                )}

                            </div>

                        ) : (

                            <p className="text-gray-500 mt-4">
                                No specific job roles found.
                            </p>

                        )}

                    </div>

                    {/* =========================
                        SKILL GAPS
                    ========================= */}

                    <div className="bg-white border rounded-xl shadow-lg p-5 sm:p-6">

                        <h2 className="text-xl sm:text-2xl font-bold">
                            ⚠️ Skill Gaps
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Skills that can improve your career opportunities.
                        </p>

                        {recommendations.skillGaps &&
                            recommendations.skillGaps.length > 0 ? (

                            <div className="flex flex-wrap gap-3 mt-5">

                                {recommendations.skillGaps.map(
                                    (skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium break-words"
                                        >
                                            {skill}
                                        </span>
                                    )
                                )}

                            </div>

                        ) : (

                            <p className="text-gray-500 mt-4">
                                No major skill gaps identified.
                            </p>

                        )}

                    </div>

                    {/* =========================
                        SKILLS TO LEARN
                    ========================= */}

                    <div className="bg-white border rounded-xl shadow-lg p-5 sm:p-6">

                        <h2 className="text-xl sm:text-2xl font-bold">
                            📚 Skills To Learn Next
                        </h2>

                        {recommendations.skillsToLearn &&
                            recommendations.skillsToLearn.length > 0 ? (

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

                                {recommendations.skillsToLearn.map(
                                    (skill, index) => (
                                        <div
                                            key={index}
                                            className="border rounded-lg p-4 bg-green-50"
                                        >
                                            <span className="text-2xl">
                                                📚
                                            </span>

                                            <p className="font-semibold mt-2 break-words">
                                                {skill}
                                            </p>
                                        </div>
                                    )
                                )}

                            </div>

                        ) : (

                            <p className="text-gray-500 mt-4">
                                No additional skills recommended.
                            </p>

                        )}

                    </div>

                    {/* =========================
                        LEARNING ROADMAP
                    ========================= */}

                    <div className="bg-white border rounded-xl shadow-lg p-5 sm:p-6">

                        <h2 className="text-xl sm:text-2xl font-bold">
                            🛣️ Learning Roadmap
                        </h2>

                        {recommendations.learningRoadmap &&
                            recommendations.learningRoadmap.length > 0 ? (

                            <div className="mt-5 space-y-4">

                                {recommendations.learningRoadmap.map(
                                    (step, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3 sm:gap-4 items-start"
                                        >
                                            <div className="shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>

                                            <div className="border rounded-lg p-4 flex-1 bg-gray-50 min-w-0">
                                                <p className="text-gray-700 break-words">
                                                    {step}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}

                            </div>

                        ) : (

                            <p className="text-gray-500 mt-4">
                                No learning roadmap available.
                            </p>

                        )}

                    </div>

                    {/* =========================
                        STRENGTHS
                    ========================= */}

                    <div className="bg-white border rounded-xl shadow-lg p-5 sm:p-6">

                        <h2 className="text-xl sm:text-2xl font-bold">
                            💪 Your Career Strengths
                        </h2>

                        {recommendations.strengths &&
                            recommendations.strengths.length > 0 ? (

                            <ul className="mt-5 space-y-3">

                                {recommendations.strengths.map(
                                    (strength, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-gray-700"
                                        >
                                            <span>
                                                ✅
                                            </span>

                                            <span className="break-words">
                                                {strength}
                                            </span>
                                        </li>
                                    )
                                )}

                            </ul>

                        ) : (

                            <p className="text-gray-500 mt-4">
                                No strengths available.
                            </p>

                        )}

                    </div>

                    {/* =========================
                        CAREER ADVICE
                    ========================= */}

                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl shadow-lg p-5 sm:p-6">

                        <h2 className="text-xl sm:text-2xl font-bold">
                            💡 Career Advice
                        </h2>

                        {recommendations.careerAdvice &&
                            recommendations.careerAdvice.length > 0 ? (

                            <ul className="mt-5 space-y-3">

                                {recommendations.careerAdvice.map(
                                    (advice, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-gray-700"
                                        >
                                            <span>
                                                💡
                                            </span>

                                            <span className="break-words">
                                                {advice}
                                            </span>
                                        </li>
                                    )
                                )}

                            </ul>

                        ) : (

                            <p className="text-gray-500 mt-4">
                                No career advice available.
                            </p>

                        )}

                    </div>

                    {/* =========================
                        NEXT STEPS
                    ========================= */}

                    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-lg p-5 sm:p-6">

                        <h2 className="text-xl sm:text-2xl font-bold">
                            🚀 Next Steps
                        </h2>

                        {recommendations.nextSteps &&
                            recommendations.nextSteps.length > 0 ? (

                            <ol className="mt-5 space-y-4">

                                {recommendations.nextSteps.map(
                                    (step, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3"
                                        >
                                            <span className="font-bold text-blue-600 shrink-0">
                                                {index + 1}.
                                            </span>

                                            <span className="text-gray-700 break-words">
                                                {step}
                                            </span>
                                        </li>
                                    )
                                )}

                            </ol>

                        ) : (

                            <p className="text-gray-500 mt-4">
                                No next steps available.
                            </p>

                        )}

                    </div>

                </div>
            )}

        </div>
    );
};

export default CareerAdvisor;