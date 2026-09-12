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
            <div className="flex items-center justify-center min-h-[60vh]">

                <div className="text-center">

                    <div className="text-5xl mb-4">
                        🤖
                    </div>

                    <p className="text-gray-600 font-medium">
                        Analyzing your job applications...
                    </p>

                </div>

            </div>
        );

    }


    // =========================================
    // ERROR
    // =========================================

    if (error) {

        return (
            <div className="w-full max-w-4xl mx-auto">

                <div className="bg-red-50 border border-red-200 text-red-700 p-5 rounded-xl">

                    <h2 className="font-bold text-lg mb-2">
                        Unable to Load Insights
                    </h2>

                    <p>
                        {error}
                    </p>

                    <button
                        onClick={fetchInsights}
                        className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                    >
                        Try Again
                    </button>

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
            icon: "🎉",
        },

    ];


    return (

        <div className="w-full max-w-7xl mx-auto space-y-6 min-w-0">

            {/* ========================================= */}
            {/* HEADER */}
            {/* ========================================= */}

            <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-6 min-w-0">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 min-w-0">

                    <div className="min-w-0">

                        <div className="flex items-start gap-3">

                            <span className="text-4xl shrink-0">
                                🤖
                            </span>

                            <div className="min-w-0">

                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 break-words">
                                    AI Job Application Insights
                                </h1>

                                <p className="text-gray-500 mt-1 leading-relaxed">
                                    Analyze your application pipeline and get
                                    personalized career recommendations.
                                </p>

                            </div>

                        </div>

                    </div>


                    <button
                        onClick={fetchInsights}
                        className="w-full lg:w-auto shrink-0 bg-green-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                    >
                        🔄 Refresh Insights
                    </button>

                </div>

            </div>


            {/* ========================================= */}
            {/* STATISTICS */}
            {/* ========================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 min-w-0">

                {statCards.map((card) => (

                    <div
                        key={card.title}
                        className="bg-white rounded-2xl shadow-sm border p-5 min-w-0 overflow-hidden"
                    >

                        <div className="flex items-center justify-between gap-4">

                            <div className="min-w-0">

                                <p className="text-gray-500 text-sm truncate">
                                    {card.title}
                                </p>

                                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                    {card.value}
                                </h2>

                            </div>

                            <div className="text-3xl shrink-0">
                                {card.icon}
                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* ========================================= */}
            {/* APPLICATION SUCCESS RATES */}
            {/* ========================================= */}

            <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-6 min-w-0">

                <h2 className="text-xl font-bold text-gray-800 mb-5">
                    📊 Application Success Rates
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 min-w-0">

                    {/* Shortlist Rate */}

                    <div className="bg-blue-50 rounded-xl p-5 min-w-0">

                        <p className="text-gray-600">
                            Shortlist Rate
                        </p>

                        <h3 className="text-3xl font-bold text-blue-700 mt-2">
                            {rates.shortlistRate || 0}%
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Applications reaching shortlist or beyond
                        </p>

                    </div>


                    {/* Interview Rate */}

                    <div className="bg-purple-50 rounded-xl p-5 min-w-0">

                        <p className="text-gray-600">
                            Interview Rate
                        </p>

                        <h3 className="text-3xl font-bold text-purple-700 mt-2">
                            {rates.interviewRate || 0}%
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Applications reaching interview or beyond
                        </p>

                    </div>


                    {/* Selection Rate */}

                    <div className="bg-green-50 rounded-xl p-5 min-w-0">

                        <p className="text-gray-600">
                            Selection Rate
                        </p>

                        <h3 className="text-3xl font-bold text-green-700 mt-2">
                            {rates.selectionRate || 0}%
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Applications resulting in selection
                        </p>

                    </div>

                </div>

            </div>


            {/* ========================================= */}
            {/* APPLICATION INSIGHTS */}
            {/* ========================================= */}

            <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-6 min-w-0">

                <h2 className="text-xl font-bold text-gray-800 mb-5">
                    💡 Application Insights
                </h2>


                {insights.length === 0 ? (

                    <p className="text-gray-500">
                        No insights available yet.
                    </p>

                ) : (

                    <div className="space-y-4 min-w-0">

                        {insights.map((insight, index) => (

                            <div
                                key={index}
                                className="flex items-start gap-4 bg-gray-50 border rounded-xl p-4 min-w-0"
                            >

                                <div className="text-2xl shrink-0">
                                    💡
                                </div>

                                <p className="text-gray-700 leading-relaxed break-words min-w-0">
                                    {insight}
                                </p>

                            </div>

                        ))}

                    </div>

                )}

            </div>


            {/* ========================================= */}
            {/* AI RECOMMENDATIONS */}
            {/* ========================================= */}

            <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-6 min-w-0">

                <h2 className="text-xl font-bold text-gray-800 mb-5">
                    🚀 AI Recommendations
                </h2>


                {recommendations.length === 0 ? (

                    <p className="text-gray-500">
                        No recommendations available yet.
                    </p>

                ) : (

                    <div className="space-y-4 min-w-0">

                        {recommendations.map(
                            (recommendation, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-green-50 border border-green-100 rounded-xl p-4 min-w-0"
                                >

                                    <div className="text-2xl shrink-0">
                                        ✅
                                    </div>

                                    <p className="text-gray-700 leading-relaxed break-words min-w-0">
                                        {recommendation}
                                    </p>

                                </div>

                            )
                        )}

                    </div>

                )}

            </div>


            {/* ========================================= */}
            {/* APPLICATION PIPELINE */}
            {/* ========================================= */}

            <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-6 min-w-0">

                <h2 className="text-xl font-bold text-gray-800 mb-5">
                    📈 Application Pipeline
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 min-w-0">

                    {/* Applied */}

                    <div className="text-center bg-gray-50 rounded-xl p-4 min-w-0">

                        <p className="text-2xl font-bold text-gray-800">
                            {stats.applied || 0}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            Applied
                        </p>

                    </div>


                    {/* Shortlisted */}

                    <div className="text-center bg-yellow-50 rounded-xl p-4 min-w-0">

                        <p className="text-2xl font-bold text-yellow-700">
                            {stats.shortlisted || 0}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            Shortlisted
                        </p>

                    </div>


                    {/* Interview */}

                    <div className="text-center bg-purple-50 rounded-xl p-4 min-w-0">

                        <p className="text-2xl font-bold text-purple-700">
                            {stats.interviews || 0}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            Interview
                        </p>

                    </div>


                    {/* Selected */}

                    <div className="text-center bg-green-50 rounded-xl p-4 min-w-0">

                        <p className="text-2xl font-bold text-green-700">
                            {stats.selected || 0}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            Selected
                        </p>

                    </div>


                    {/* Rejected */}

                    <div className="text-center bg-red-50 rounded-xl p-4 min-w-0">

                        <p className="text-2xl font-bold text-red-700">
                            {stats.rejected || 0}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            Rejected
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
};


export default ApplicationInsights;