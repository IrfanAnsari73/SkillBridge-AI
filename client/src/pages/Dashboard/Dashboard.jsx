import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const Dashboard = () => {
    const [projectCount, setProjectCount] = useState(0);
    const [skillCount, setSkillCount] = useState(0);
    const [certificateCount, setCertificateCount] = useState(0);
    const [resumeUploaded, setResumeUploaded] = useState(false);

    const [recentActivities, setRecentActivities] = useState([]);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // =========================
    // GET USER FROM LOCAL STORAGE
    // =========================

    const getUser = () => {
        try {
            const storedUser = localStorage.getItem("user");

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("User Data Error:", error);
        }
    };

    // =========================
    // FETCH DASHBOARD DATA
    // =========================

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

            let projects = [];

            if (projectResponse.ok) {
                projects = projectData.projects || [];

                setProjectCount(projects.length);
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

            let skills = [];

            if (skillResponse.ok) {
                skills = skillData.skills || [];

                setSkillCount(skills.length);
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

            let certificates = [];

            if (certificateResponse.ok) {
                certificates =
                    certificateData.certificates || [];

                setCertificateCount(certificates.length);
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

            let resumeExists = false;

            if (resumeResponse.ok) {
                resumeExists = true;
                setResumeUploaded(true);
            } else if (resumeResponse.status === 404) {
                resumeExists = false;
                setResumeUploaded(false);
            }

            // =========================
            // CREATE RECENT ACTIVITIES
            // =========================

            const activities = [];

            // Resume activity
            if (resumeExists) {
                activities.push({
                    icon: "📄",
                    text: "Resume uploaded successfully.",
                });
            }

            // Project activity
            if (projects.length > 0) {
                const latestProject =
                    projects[projects.length - 1];

                activities.push({
                    icon: "🚀",
                    text: `Project added: ${latestProject.title || "New Project"
                        }`,
                });
            }

            // Skill activity
            if (skills.length > 0) {
                const latestSkill =
                    skills[skills.length - 1];

                activities.push({
                    icon: "💻",
                    text: `Skill added: ${latestSkill.name || "New Skill"
                        }`,
                });
            }

            // Certificate activity
            if (certificates.length > 0) {
                const latestCertificate =
                    certificates[certificates.length - 1];

                activities.push({
                    icon: "📜",
                    text: `Certificate added: ${latestCertificate.title ||
                        "New Certificate"
                        }`,
                });
            }

            // No activity
            if (activities.length === 0) {
                activities.push({
                    icon: "ℹ️",
                    text: "No recent activity yet.",
                });
            }

            setRecentActivities(activities);
        } catch (error) {
            console.error(
                "Dashboard Data Error:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // INITIAL LOAD
    // =========================

    useEffect(() => {
        getUser();
        fetchDashboardData();
    }, []);

    // =========================
    // PUBLIC PORTFOLIO URL
    // =========================

    const userId = user?._id || user?.id;

    const publicPortfolioUrl =
        userId
            ? `http://localhost:5173/portfolio/public/${userId}`
            : "";

    // =========================
    // COPY PORTFOLIO LINK
    // =========================

    const copyPortfolioLink = async () => {
        if (!publicPortfolioUrl) {
            return;
        }

        try {
            await navigator.clipboard.writeText(
                publicPortfolioUrl
            );

            alert("Portfolio link copied!");
        } catch (error) {
            console.error(
                "Copy Link Error:",
                error
            );

            alert(
                "Unable to copy portfolio link."
            );
        }
    };

    return (
        <DashboardLayout>

            {/* =========================
                PAGE HEADER
            ========================= */}

            <h1 className="text-4xl font-bold text-green-600">
                Welcome, {user?.name || "User"} 👋
            </h1>

            <p className="text-gray-600 mt-2">
                Here's an overview of your
                career progress.
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
                    Share your portfolio with
                    recruiters and employers.
                </p>

                <div className="flex flex-wrap gap-4 mt-5">

                    {publicPortfolioUrl && (
                        <a
                            href={publicPortfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                        >
                            View Public Portfolio
                        </a>
                    )}

                    <button
                        onClick={copyPortfolioLink}
                        disabled={!publicPortfolioUrl}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        Copy Portfolio Link
                    </button>

                </div>

            </div>


            {/* =========================
                QUICK ACTIONS
            ========================= */}

            <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

                <h2 className="text-2xl font-bold text-green-600">
                    Quick Actions ⚡
                </h2>

                <p className="text-gray-600 mt-2">
                    Quickly manage your career profile.
                </p>

                <div className="flex flex-wrap gap-4 mt-5">

                    <a
                        href="/profile"
                        className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
                    >
                        Edit Profile
                    </a>

                    <a
                        href="/skills"
                        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Add Skills
                    </a>

                    <a
                        href="/projects"
                        className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700"
                    >
                        Add Project
                    </a>

                    <a
                        href="/resume"
                        className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600"
                    >
                        Manage Resume
                    </a>

                </div>

            </div>


            {/* =========================
                RECENT ACTIVITY
            ========================= */}

            <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

                <h2 className="text-2xl font-bold text-green-600 mb-5">
                    Recent Activity
                </h2>

                {loading ? (
                    <p className="text-gray-500">
                        Loading activities...
                    </p>
                ) : (
                    <ul className="space-y-4">

                        {recentActivities.map(
                            (activity, index) => (
                                <li
                                    key={index}
                                    className="border-b pb-3 text-gray-700"
                                >
                                    <span className="mr-2">
                                        {activity.icon}
                                    </span>

                                    {activity.text}
                                </li>
                            )
                        )}

                    </ul>
                )}

            </div>

        </DashboardLayout>
    );
};

export default Dashboard;