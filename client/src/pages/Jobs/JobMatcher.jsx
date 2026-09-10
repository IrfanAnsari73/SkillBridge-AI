import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const JobMatcher = () => {
    const [jobMatch, setJobMatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchJobMatch = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/job-matcher",
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
            <DashboardLayout>

                <div className="flex min-h-[70vh] items-center justify-center">

                    <div className="text-center">

                        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>

                        <h2 className="text-xl font-semibold text-gray-800">
                            AI is analyzing your job compatibility...
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Comparing your skills, projects,
                            certificates and resume.
                        </p>

                    </div>

                </div>

            </DashboardLayout>
        );
    }


    // =========================
    // ERROR
    // =========================

    if (error) {
        return (
            <DashboardLayout>

                <div className="rounded-xl bg-white p-8 shadow">

                    <h2 className="text-xl font-bold text-red-600">
                        Unable to Generate Job Match
                    </h2>

                    <p className="mt-3 text-gray-600">
                        {error}
                    </p>

                    <button
                        onClick={fetchJobMatch}
                        className="mt-6 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        Try Again
                    </button>

                </div>

            </DashboardLayout>
        );
    }


    // =========================
    // NO DATA
    // =========================

    if (!jobMatch) {
        return (
            <DashboardLayout>

                <div className="rounded-xl bg-white p-8 text-center shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        No Job Match Available
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Add your resume, skills and projects
                        first.
                    </p>

                </div>

            </DashboardLayout>
        );
    }


    return (
        <DashboardLayout>

            <div className="space-y-6">


                {/* =========================
                    HEADER
                ========================= */}

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        💼 AI Job Matcher
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Discover the technology roles that
                        best match your current profile.
                    </p>

                </div>


                {/* =========================
                    OVERALL MATCH
                ========================= */}

                <div className="grid gap-6 md:grid-cols-2">


                    {/* SCORE */}

                    <div className="rounded-xl bg-white p-6 shadow">

                        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                            Overall Job Match
                        </p>

                        <div className="mt-5 flex items-center gap-6">

                            <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-green-500">

                                <span className="text-3xl font-bold text-gray-800">
                                    {jobMatch.overallMatchScore}%
                                </span>

                            </div>


                            <div>

                                <h2 className="text-xl font-bold text-gray-800">
                                    Profile Match Score
                                </h2>

                                <p className="mt-2 text-sm text-gray-500">
                                    Based on your current
                                    skills, projects,
                                    certificates and resume.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* RECOMMENDATION */}

                    <div className="rounded-xl bg-white p-6 shadow">

                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                            AI Recommendation
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            {jobMatch.overallRecommendation}
                        </p>

                    </div>

                </div>


                {/* =========================
                    RECOMMENDED ROLES
                ========================= */}

                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        🎯 Recommended Job Roles
                    </h2>


                    <div className="mt-6 grid gap-5 lg:grid-cols-2">

                        {jobMatch.recommendedRoles?.map(
                            (role, index) => (

                                <div
                                    key={index}
                                    className="rounded-xl border p-5"
                                >

                                    <div className="flex flex-wrap items-center justify-between gap-3">

                                        <h3 className="text-lg font-bold text-gray-800">
                                            {role.role}
                                        </h3>

                                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                                            {role.matchScore}% Match
                                        </span>

                                    </div>


                                    <p className="mt-4 text-gray-600">
                                        {role.reason}
                                    </p>


                                    {/* REQUIRED SKILLS */}

                                    <div className="mt-5">

                                        <h4 className="text-sm font-semibold text-gray-700">
                                            Required Skills
                                        </h4>

                                        <div className="mt-2 flex flex-wrap gap-2">

                                            {role.requiredSkills?.map(
                                                (
                                                    skill,
                                                    skillIndex
                                                ) => (

                                                    <span
                                                        key={
                                                            skillIndex
                                                        }
                                                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                                                    >
                                                        {skill}
                                                    </span>

                                                )
                                            )}

                                        </div>

                                    </div>


                                    {/* MISSING SKILLS */}

                                    <div className="mt-5">

                                        <h4 className="text-sm font-semibold text-gray-700">
                                            Skills To Improve
                                        </h4>

                                        <div className="mt-2 flex flex-wrap gap-2">

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
                                                            className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700"
                                                        >
                                                            {skill}
                                                        </span>

                                                    )
                                                )

                                            ) : (

                                                <span className="text-sm text-green-600">
                                                    ✓ No major skill
                                                    gap identified
                                                </span>

                                            )}

                                        </div>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>


                {/* =========================
                    RESUME MATCH
                ========================= */}

                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        📄 Resume Match
                    </h2>


                    <div className="mt-5 flex flex-wrap items-center gap-6">

                        <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-blue-500">

                            <span className="text-2xl font-bold text-gray-800">
                                {jobMatch.resumeMatch?.score}%
                            </span>

                        </div>


                        <p className="max-w-3xl leading-7 text-gray-600">
                            {jobMatch.resumeMatch?.feedback}
                        </p>

                    </div>

                </div>


                {/* =========================
                    PROFILE STRENGTHS
                ========================= */}

                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        💪 Profile Strengths
                    </h2>


                    <div className="mt-5 space-y-3">

                        {jobMatch.profileStrengths?.map(
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


                {/* =========================
                    SKILLS TO IMPROVE
                ========================= */}

                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        🧩 Skills To Improve
                    </h2>


                    <div className="mt-5 flex flex-wrap gap-3">

                        {jobMatch.skillsToImprove?.map(
                            (skill, index) => (

                                <span
                                    key={index}
                                    className="rounded-full bg-yellow-100 px-4 py-2 font-medium text-yellow-700"
                                >
                                    {skill}
                                </span>

                            )
                        )}

                    </div>

                </div>


                {/* =========================
                    RECOMMENDED ACTIONS
                ========================= */}

                <div className="rounded-xl bg-white p-6 shadow">

                    <h2 className="text-xl font-bold text-gray-800">
                        🚀 Recommended Actions
                    </h2>


                    <div className="mt-5 space-y-3">

                        {jobMatch.recommendedActions?.map(
                            (action, index) => (

                                <div
                                    key={index}
                                    className="flex gap-3 rounded-lg bg-gray-50 p-4"
                                >

                                    <span className="font-bold text-green-600">
                                        {index + 1}.
                                    </span>

                                    <span className="text-gray-700">
                                        {action}
                                    </span>

                                </div>

                            )
                        )}

                    </div>

                </div>


                {/* =========================
                    REGENERATE
                ========================= */}

                <div className="pb-6 text-center">

                    <button
                        onClick={fetchJobMatch}
                        className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        🔄 Re-analyze My Job Match
                    </button>

                </div>

            </div>

        </DashboardLayout>
    );
};

export default JobMatcher;