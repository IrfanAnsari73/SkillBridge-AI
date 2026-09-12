import { useEffect, useState } from "react";

const CareerAnalytics = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchAnalytics = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/analytics",
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
                    data.message || "Failed to load analytics"
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
    // LOADING
    // =========================

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto min-w-0">
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <div className="text-5xl mb-4">
                            📊
                        </div>

                        <p className="text-xl font-semibold text-gray-700">
                            Generating Career Analytics...
                        </p>

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
                <div className="max-w-3xl mx-auto mt-10 bg-red-50 border border-red-200 rounded-xl p-6">

                    <h2 className="text-xl font-bold text-red-700 mb-2">
                        Unable to Load Analytics
                    </h2>

                    <p className="text-red-600 mb-4 break-words">
                        {error}
                    </p>

                    <button
                        onClick={fetchAnalytics}
                        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        Try Again
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0">

            <div className="space-y-8">

                {/* Header */}

                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        📊 Career Analytics
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Track your career profile strength and readiness.
                    </p>
                </div>

                {/* Overall Readiness */}

                <div className="bg-white rounded-2xl shadow-md p-5 sm:p-8">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Overall Career Readiness
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Based on your skills, projects,
                                certificates and resume.
                            </p>
                        </div>

                        <div className="text-center">

                            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-8 border-green-500 flex items-center justify-center">

                                <span className="text-3xl sm:text-4xl font-bold text-green-600">
                                    {analytics?.overallReadiness || 0}%
                                </span>

                            </div>

                            <p className="font-semibold text-gray-700 mt-3">
                                Readiness Score
                            </p>

                        </div>

                    </div>

                </div>

                {/* Profile Stats */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-500">
                            💻 Skills
                        </p>

                        <h3 className="text-3xl font-bold text-gray-800 mt-2">
                            {analytics?.profile?.skills || 0}
                        </h3>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-500">
                            🚀 Projects
                        </p>

                        <h3 className="text-3xl font-bold text-gray-800 mt-2">
                            {analytics?.profile?.projects || 0}
                        </h3>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-500">
                            📜 Certificates
                        </p>

                        <h3 className="text-3xl font-bold text-gray-800 mt-2">
                            {analytics?.profile?.certificates || 0}
                        </h3>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-500">
                            📄 Resume
                        </p>

                        <h3 className="text-3xl font-bold text-gray-800 mt-2">
                            {analytics?.profile?.resumeUploaded
                                ? "Uploaded"
                                : "Missing"}
                        </h3>
                    </div>

                </div>

                {/* Skills */}

                <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                        💻 Skill Analysis
                    </h2>

                    {analytics?.skillAnalysis?.length > 0 ? (

                        <div className="space-y-5">

                            {analytics.skillAnalysis.map(
                                (skill, index) => (
                                    <div key={index}>

                                        <div className="flex flex-wrap justify-between gap-2 mb-2">

                                            <span className="font-semibold text-gray-700 break-words">
                                                {skill.name}
                                            </span>

                                            <span className="text-sm text-gray-500">
                                                {skill.level}
                                            </span>

                                        </div>

                                        <div className="w-full bg-gray-200 rounded-full h-3">

                                            <div
                                                className="bg-green-500 h-3 rounded-full"
                                                style={{
                                                    width:
                                                        skill.level
                                                            ?.toLowerCase() ===
                                                            "advanced"
                                                            ? "90%"
                                                            : skill.level
                                                                ?.toLowerCase() ===
                                                                "intermediate"
                                                                ? "65%"
                                                                : "40%",
                                                }}
                                            ></div>

                                        </div>

                                    </div>
                                )
                            )}

                        </div>

                    ) : (

                        <p className="text-gray-500">
                            No skills added yet.
                        </p>

                    )}

                </div>

                {/* Projects */}

                <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                        🚀 Project Analysis
                    </h2>

                    {analytics?.projectAnalysis?.length > 0 ? (

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {analytics.projectAnalysis.map(
                                (project, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-xl p-5 hover:shadow-md transition"
                                    >

                                        <h3 className="font-bold text-lg text-gray-800 break-words">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-500 mt-2 break-words">
                                            Technology:{" "}
                                            {project.technology}
                                        </p>

                                    </div>
                                )
                            )}

                        </div>

                    ) : (

                        <p className="text-gray-500">
                            No projects added yet.
                        </p>

                    )}

                </div>

                {/* Certificates */}

                <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                        📜 Certificate Analysis
                    </h2>

                    {analytics?.certificateAnalysis?.length > 0 ? (

                        <div className="space-y-4">

                            {analytics.certificateAnalysis.map(
                                (certificate, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-xl p-4"
                                    >

                                        <h3 className="font-bold text-gray-800 break-words">
                                            {certificate.title}
                                        </h3>

                                        <p className="text-gray-500 mt-1 break-words">
                                            Issuer:{" "}
                                            {certificate.issuer}
                                        </p>

                                    </div>
                                )
                            )}

                        </div>

                    ) : (

                        <p className="text-gray-500">
                            No certificates added yet.
                        </p>

                    )}

                </div>

                {/* Suggestions */}

                <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                        🎯 AI Career Improvement Suggestions
                    </h2>

                    <div className="space-y-4">

                        {analytics?.suggestions?.map(
                            (suggestion, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 bg-green-50 rounded-xl p-4"
                                >

                                    <span className="text-xl shrink-0">
                                        💡
                                    </span>

                                    <p className="text-gray-700 break-words">
                                        {suggestion}
                                    </p>

                                </div>
                            )
                        )}

                    </div>

                </div>

                {/* Refresh */}

                <div className="text-center pb-8">

                    <button
                        onClick={fetchAnalytics}
                        className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                        🔄 Refresh Analytics
                    </button>

                </div>

            </div>

        </div>
    );
};

export default CareerAnalytics;