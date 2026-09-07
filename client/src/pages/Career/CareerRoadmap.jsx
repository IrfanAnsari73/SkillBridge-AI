import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const CareerRoadmap = () => {
    const [roadmap, setRoadmap] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchRoadmap = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

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
                    data.message || "Failed to load career roadmap."
                );
            }

            setRoadmap(data.roadmap);
        } catch (error) {
            console.error("Career Roadmap Error:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRoadmap();
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex min-h-[70vh] items-center justify-center">
                    <div className="text-center">
                        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>

                        <h2 className="text-xl font-semibold text-gray-800">
                            AI is creating your career roadmap...
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Analyzing your resume, skills, projects and
                            certificates.
                        </p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    if (error) {
        return (
            <DashboardLayout>
                <div className="rounded-xl bg-white p-8 shadow">
                    <h2 className="text-xl font-bold text-red-600">
                        Unable to Generate Roadmap
                    </h2>

                    <p className="mt-3 text-gray-600">
                        {error}
                    </p>

                    <button
                        onClick={fetchRoadmap}
                        className="mt-6 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        Try Again
                    </button>
                </div>
            </DashboardLayout>
        );
    }

    if (!roadmap) {
        return (
            <DashboardLayout>
                <div className="rounded-xl bg-white p-8 text-center shadow">
                    <h2 className="text-xl font-bold text-gray-800">
                        No Career Roadmap Available
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Add your resume, skills and projects first.
                    </p>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">

                {/* HEADER */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        🤖 AI Career Roadmap
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Your personalized career roadmap powered by AI.
                    </p>
                </div>


                {/* CAREER GOAL + READINESS */}
                <div className="grid gap-6 md:grid-cols-2">

                    <div className="rounded-xl bg-white p-6 shadow">
                        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                            Recommended Career
                        </p>

                        <h2 className="mt-3 text-2xl font-bold text-gray-800">
                            {roadmap.careerGoal}
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            {roadmap.careerReason}
                        </p>
                    </div>


                    <div className="rounded-xl bg-white p-6 shadow">
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                            Job Readiness
                        </p>

                        <div className="mt-5 flex items-center gap-6">

                            <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-green-500">
                                <span className="text-3xl font-bold text-gray-800">
                                    {roadmap.jobReadinessScore}%
                                </span>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Career Readiness Score
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    Based on your current resume, skills,
                                    projects and certificates.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>


                {/* RECOMMENDED ROLES */}
                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        💼 Recommended Job Roles
                    </h2>

                    <div className="mt-5 grid gap-3 md:grid-cols-2">

                        {roadmap.recommendedRoles?.map(
                            (role, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg bg-gray-50 p-4 font-medium text-gray-700"
                                >
                                    {index + 1}. {role}
                                </div>
                            )
                        )}

                    </div>
                </div>


                {/* SKILL GAPS */}
                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        🧩 Skill Gap Analysis
                    </h2>

                    <div className="mt-5 space-y-4">

                        {roadmap.skillGaps?.map(
                            (gap, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border p-4"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2">

                                        <h3 className="font-semibold text-gray-800">
                                            {gap.skill}
                                        </h3>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${gap.priority?.toLowerCase() ===
                                                    "high"
                                                    ? "bg-red-100 text-red-700"
                                                    : gap.priority?.toLowerCase() ===
                                                        "medium"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-green-100 text-green-700"
                                                }`}
                                        >
                                            {gap.priority}
                                        </span>

                                    </div>

                                    <p className="mt-2 text-sm text-gray-600">
                                        {gap.reason}
                                    </p>
                                </div>
                            )
                        )}

                    </div>
                </div>


                {/* SKILLS TO LEARN */}
                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        📚 Skills To Learn Next
                    </h2>

                    <div className="mt-5 flex flex-wrap gap-3">

                        {roadmap.skillsToLearn?.map(
                            (skill, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700"
                                >
                                    {skill}
                                </span>
                            )
                        )}

                    </div>
                </div>


                {/* LEARNING ROADMAP */}
                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        🗺️ Personalized Learning Roadmap
                    </h2>

                    <div className="mt-6 space-y-5">

                        {roadmap.learningRoadmap?.map(
                            (phase, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border-l-4 border-green-600 bg-gray-50 p-5"
                                >

                                    <div className="flex flex-wrap items-center justify-between gap-3">

                                        <h3 className="text-lg font-bold text-gray-800">
                                            {phase.phase}
                                        </h3>

                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                                            {phase.duration}
                                        </span>

                                    </div>

                                    <ul className="mt-4 space-y-2">

                                        {phase.topics?.map(
                                            (topic, topicIndex) => (
                                                <li
                                                    key={topicIndex}
                                                    className="text-gray-600"
                                                >
                                                    ✓ {topic}
                                                </li>
                                            )
                                        )}

                                    </ul>

                                </div>
                            )
                        )}

                    </div>
                </div>


                {/* RECOMMENDED PROJECTS */}
                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        🚀 Recommended Projects
                    </h2>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">

                        {roadmap.recommendedProjects?.map(
                            (project, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg bg-gray-50 p-5"
                                >
                                    <p className="font-medium text-gray-700">
                                        {index + 1}. {project}
                                    </p>
                                </div>
                            )
                        )}

                    </div>
                </div>


                {/* STRENGTHS */}
                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        💪 Career Strengths
                    </h2>

                    <div className="mt-5 space-y-3">

                        {roadmap.strengths?.map(
                            (strength, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg bg-green-50 p-4 text-green-800"
                                >
                                    ✓ {strength}
                                </div>
                            )
                        )}

                    </div>
                </div>


                {/* CAREER ADVICE */}
                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        💡 Career Advice
                    </h2>

                    <div className="mt-5 space-y-3">

                        {roadmap.careerAdvice?.map(
                            (advice, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg bg-blue-50 p-4 text-blue-800"
                                >
                                    {index + 1}. {advice}
                                </div>
                            )
                        )}

                    </div>
                </div>


                {/* NEXT STEPS */}
                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        ✅ Your Next Steps
                    </h2>

                    <div className="mt-5 space-y-3">

                        {roadmap.nextSteps?.map(
                            (step, index) => (
                                <div
                                    key={index}
                                    className="flex gap-3 rounded-lg bg-gray-50 p-4"
                                >
                                    <span className="font-bold text-green-600">
                                        {index + 1}.
                                    </span>

                                    <span className="text-gray-700">
                                        {step}
                                    </span>
                                </div>
                            )
                        )}

                    </div>
                </div>


                {/* REGENERATE BUTTON */}
                <div className="pb-6 text-center">

                    <button
                        onClick={fetchRoadmap}
                        className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        🔄 Regenerate Career Roadmap
                    </button>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default CareerRoadmap;