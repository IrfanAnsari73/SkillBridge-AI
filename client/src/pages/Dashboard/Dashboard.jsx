import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const Dashboard = () => {
    const [projectCount, setProjectCount] = useState(0);
    const [skillCount, setSkillCount] = useState(0);
    const [certificateCount, setCertificateCount] = useState(0);
    const [resumeUploaded, setResumeUploaded] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchDashboardData = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                return;
            }

            // =========================
            // FETCH PROJECTS
            // =========================
            const projectResponse = await fetch(
                "http://localhost:5000/api/projects",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const projectData = await projectResponse.json();

            if (projectResponse.ok) {
                setProjectCount(
                    projectData.projects?.length || 0
                );
            }

            // =========================
            // FETCH SKILLS
            // =========================
            const skillResponse = await fetch(
                "http://localhost:5000/api/skills",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const skillData = await skillResponse.json();

            if (skillResponse.ok) {
                setSkillCount(
                    skillData.skills?.length || 0
                );
            }

            // =========================
            // FETCH CERTIFICATES
            // =========================
            const certificateResponse = await fetch(
                "http://localhost:5000/api/certificates",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const certificateData =
                await certificateResponse.json();

            if (certificateResponse.ok) {
                setCertificateCount(
                    certificateData.certificates?.length || 0
                );
            }

            // =========================
            // FETCH RESUME
            // =========================
            const resumeResponse = await fetch(
                "http://localhost:5000/api/resume",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (resumeResponse.ok) {
                setResumeUploaded(true);
            } else if (resumeResponse.status === 404) {
                setResumeUploaded(false);
            }

        } catch (error) {
            console.error(
                "Dashboard Data Error:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    return (
        <DashboardLayout>

            {/* =========================
                PAGE HEADER
            ========================= */}

            <h1 className="text-4xl font-bold text-green-600">
                Welcome, Irfan 👋
            </h1>

            <p className="text-gray-600 mt-2">
                Here's an overview of your career progress.
            </p>

            {/* =========================
                DASHBOARD CARDS
            ========================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                {/* PROJECTS */}
                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-lg font-semibold">
                        Projects
                    </h2>

                    <p className="text-4xl font-bold text-green-600 mt-3">
                        {loading
                            ? "..."
                            : projectCount}
                    </p>

                </div>

                {/* SKILLS */}
                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-lg font-semibold">
                        Skills
                    </h2>

                    <p className="text-4xl font-bold text-green-600 mt-3">
                        {loading
                            ? "..."
                            : skillCount}
                    </p>

                </div>

                {/* CERTIFICATES */}
                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-lg font-semibold">
                        Certificates
                    </h2>

                    <p className="text-4xl font-bold text-green-600 mt-3">
                        {loading
                            ? "..."
                            : certificateCount}
                    </p>

                </div>

                {/* RESUME */}
                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-lg font-semibold">
                        Resume
                    </h2>

                    <p
                        className={`text-xl font-bold mt-3 ${resumeUploaded
                            ? "text-green-600"
                            : "text-red-500"
                            }`}
                    >
                        {loading
                            ? "..."
                            : resumeUploaded
                                ? "Uploaded ✅"
                                : "Not Uploaded"}
                    </p>

                </div>

            </div>
            {/* =========================
    PUBLIC PORTFOLIO
========================= */}

            <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

                <h2 className="text-2xl font-bold text-green-600">
                    Your Public Portfolio 🌐
                </h2>

                <p className="text-gray-600 mt-2">
                    Share your portfolio with recruiters and employers.
                </p>

                <div className="flex flex-wrap gap-4 mt-5">

                    <a
                        href="http://localhost:5173/portfolio/public/6a7776e1a6cd2701d2b8f091"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                    >
                        View Public Portfolio
                    </a>

                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(
                                "http://localhost:5173/portfolio/public/6a7776e1a6cd2701d2b8f091"
                            );

                            alert("Portfolio link copied!");
                        }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Copy Portfolio Link
                    </button>

                </div>

            </div>

            {/* =========================
                RECENT ACTIVITY
            ========================= */}

            <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

                <h2 className="text-2xl font-bold text-green-600 mb-5">
                    Recent Activity
                </h2>

                <ul className="space-y-4">

                    <li className="border-b pb-3">
                        📄 Resume uploaded successfully.
                    </li>

                    <li className="border-b pb-3">
                        🚀 New Project added.
                    </li>

                    <li className="border-b pb-3">
                        💻 Java skill added.
                    </li>

                    <li>
                        📜 Certificate uploaded.
                    </li>

                </ul>

            </div>

        </DashboardLayout>
    );
};

export default Dashboard;