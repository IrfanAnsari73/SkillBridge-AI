import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [projectCount, setProjectCount] = useState(0);
    const [skillCount, setSkillCount] = useState(0);
    const [certificateCount, setCertificateCount] = useState(0);
    const [resumeUploaded, setResumeUploaded] = useState(false);

    const [recentActivities, setRecentActivities] = useState([]);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // =========================
    // GET USER
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
            // PROJECTS
            // =========================

            const projectResponse = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/projects",
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
            // SKILLS
            // =========================

            const skillResponse = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/skills",
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
            // CERTIFICATES
            // =========================

            const certificateResponse = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/certificates",
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
            // RESUME
            // =========================

            const resumeResponse = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/resume",
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
            // RECENT ACTIVITIES
            // =========================

            const activities = [];

            if (resumeExists) {
                activities.push({
                    icon: "📄",
                    title: "Resume uploaded",
                    text: "Your resume is ready for career analysis.",
                });
            }

            if (projects.length > 0) {
                const latestProject =
                    projects[projects.length - 1];

                activities.push({
                    icon: "🚀",
                    title: "Project added",
                    text: latestProject.title || "New Project",
                });
            }

            if (skills.length > 0) {
                const latestSkill =
                    skills[skills.length - 1];

                activities.push({
                    icon: "💻",
                    title: "Skill added",
                    text: latestSkill.name || "New Skill",
                });
            }

            if (certificates.length > 0) {
                const latestCertificate =
                    certificates[certificates.length - 1];

                activities.push({
                    icon: "🏆",
                    title: "Certificate added",
                    text:
                        latestCertificate.title ||
                        "New Certificate",
                });
            }

            if (activities.length === 0) {
                activities.push({
                    icon: "✨",
                    title: "Start your journey",
                    text: "Add your first skill, project or certificate.",
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
    // PROGRESS
    // =========================

    const skillsProgress = Math.min(
        Math.round((skillCount / 5) * 100),
        100
    );

    const projectsProgress = Math.min(
        Math.round((projectCount / 5) * 100),
        100
    );

    const certificatesProgress = Math.min(
        Math.round((certificateCount / 5) * 100),
        100
    );

    const resumeProgress = resumeUploaded ? 100 : 0;

    const overallProgress = Math.round(
        (
            skillsProgress +
            projectsProgress +
            certificatesProgress +
            resumeProgress
        ) / 4
    );

    // =========================
    // PORTFOLIO URL
    // =========================

    const userId = user?._id || user?.id;

    const publicPortfolioUrl = userId
        ? `http://localhost:5173/portfolio/public/${userId}`
        : "";

    // =========================
    // COPY PORTFOLIO
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

    // =========================
    // PROGRESS BAR
    // =========================

    const ProgressBar = ({
        title,
        icon,
        percentage,
    }) => {
        return (
            <div className="mb-7">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                            {icon}
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800">
                                {title}
                            </p>

                            <p className="text-xs text-gray-500">
                                Career profile
                            </p>
                        </div>
                    </div>

                    <span className="font-bold text-green-600">
                        {percentage}%
                    </span>
                </div>

                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-700"
                        style={{
                            width: `${percentage}%`,
                        }}
                    ></div>
                </div>
            </div>
        );
    };

    // =========================
    // STAT CARD
    // =========================

    const StatCard = ({
        title,
        value,
        icon,
        description,
        link,
    }) => {
        return (
            <Link
                to={link}
                className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">
                            {title}
                        </p>

                        <p className="text-4xl font-extrabold text-gray-900 mt-3">
                            {loading ? "..." : value}
                        </p>

                        <p className="text-xs text-gray-500 mt-2">
                            {description}
                        </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                        {icon}
                    </div>
                </div>

                <div className="mt-5 flex items-center text-sm font-semibold text-green-600">
                    View details
                    <span className="ml-2 group-hover:translate-x-1 transition">
                        →
                    </span>
                </div>
            </Link>
        );
    };

    return (
        <div className="w-full max-w-7xl mx-auto space-y-7">

            {/* =====================================
                WELCOME HERO
            ===================================== */}

            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07111f] via-[#0b1725] to-[#063c2b] p-7 md:p-9 text-white shadow-xl">

                <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>

                <div className="absolute -bottom-24 -left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">

                    <div className="max-w-2xl">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-semibold">
                            <span>🤖</span>
                            AI-Powered Career Platform
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold mt-5 leading-tight">
                            Welcome back,{" "}
                            <span className="text-green-400">
                                {user?.name?.split(" ")[0] || "User"}
                            </span>
                            ! 👋
                        </h1>

                        <p className="text-gray-300 mt-4 text-base md:text-lg leading-7">
                            Build your skills, strengthen your resume,
                            prepare for opportunities and move closer
                            to your career goals.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-6">

                            <Link
                                to="/career-advisor"
                                className="px-5 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold transition shadow-lg shadow-green-900/30"
                            >
                                🤖 Ask AI Career Advisor
                            </Link>

                            <Link
                                to="/career-goals"
                                className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold transition"
                            >
                                🎯 View Career Goals
                            </Link>

                        </div>
                    </div>

                    {/* Progress Mini Card */}

                    <div className="w-full lg:w-72 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-300">
                                    Career Profile
                                </p>

                                <p className="text-3xl font-extrabold mt-1">
                                    {loading
                                        ? "..."
                                        : `${overallProgress}%`}
                                </p>
                            </div>

                            <div className="w-16 h-16 rounded-full border-4 border-green-400/30 flex items-center justify-center">
                                <span className="text-sm font-bold text-green-300">
                                    {loading
                                        ? "..."
                                        : `${overallProgress}%`}
                                </span>
                            </div>
                        </div>

                        <div className="mt-5 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-green-400 rounded-full transition-all duration-700"
                                style={{
                                    width: `${overallProgress}%`,
                                }}
                            ></div>
                        </div>

                        <p className="text-xs text-gray-400 mt-3">
                            Keep building your profile to improve your
                            career readiness.
                        </p>

                    </div>

                </div>
            </section>

            {/* =====================================
                STAT CARDS
            ===================================== */}

            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                <StatCard
                    title="Projects"
                    value={projectCount}
                    icon="🚀"
                    description="Projects in your portfolio"
                    link="/projects"
                />

                <StatCard
                    title="Skills"
                    value={skillCount}
                    icon="💻"
                    description="Skills added to profile"
                    link="/skills"
                />

                <StatCard
                    title="Certificates"
                    value={certificateCount}
                    icon="🏆"
                    description="Achievements added"
                    link="/certificates"
                />

                <StatCard
                    title="Resume"
                    value={
                        resumeUploaded
                            ? "Ready"
                            : "Missing"
                    }
                    icon="📄"
                    description={
                        resumeUploaded
                            ? "Resume uploaded"
                            : "Upload your resume"
                    }
                    link="/resume"
                />

            </section>

            {/* =====================================
                MAIN GRID
            ===================================== */}

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* =================================
                    CAREER PROGRESS
                ================================= */}

                <div className="xl:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-7">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">

                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-extrabold text-gray-900">
                                    Career Progress
                                </h2>

                                <span>📊</span>
                            </div>

                            <p className="text-gray-500 mt-1">
                                Track your career profile completion.
                            </p>
                        </div>

                        <div className="text-left sm:text-right">

                            <p className="text-4xl font-extrabold text-green-600">
                                {loading
                                    ? "..."
                                    : `${overallProgress}%`}
                            </p>

                            <p className="text-xs text-gray-500">
                                Overall Progress
                            </p>

                        </div>

                    </div>

                    {!loading && (
                        <div>

                            <ProgressBar
                                title="Skills"
                                icon="💻"
                                percentage={skillsProgress}
                            />

                            <ProgressBar
                                title="Projects"
                                icon="🚀"
                                percentage={projectsProgress}
                            />

                            <ProgressBar
                                title="Certificates"
                                icon="🏆"
                                percentage={certificatesProgress}
                            />

                            <ProgressBar
                                title="Resume"
                                icon="📄"
                                percentage={resumeProgress}
                            />

                        </div>
                    )}

                </div>

                {/* =================================
                    RECENT ACTIVITY
                ================================= */}

                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-7">

                    <div className="flex items-center justify-between mb-6">

                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900">
                                Recent Activity
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                Your latest updates
                            </p>
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                            🕐
                        </div>

                    </div>

                    {loading ? (
                        <p className="text-gray-500">
                            Loading activities...
                        </p>
                    ) : (
                        <div className="space-y-5">

                            {recentActivities.map(
                                (activity, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4"
                                    >

                                        <div className="flex flex-col items-center">

                                            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-lg flex-shrink-0">
                                                {activity.icon}
                                            </div>

                                            {index !==
                                                recentActivities.length - 1 && (
                                                    <div className="w-px h-full bg-gray-200 mt-2"></div>
                                                )}

                                        </div>

                                        <div className="pb-2">

                                            <p className="font-semibold text-gray-800">
                                                {activity.title}
                                            </p>

                                            <p className="text-sm text-gray-500 mt-1 leading-5">
                                                {activity.text}
                                            </p>

                                        </div>

                                    </div>
                                )
                            )}

                        </div>
                    )}

                </div>

            </section>

            {/* =====================================
                PORTFOLIO
            ===================================== */}

            <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-6 md:p-8 text-white shadow-lg">

                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                    <div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-2xl">
                                🌐
                            </div>

                            <div>
                                <h2 className="text-2xl font-extrabold">
                                    Your Public Portfolio
                                </h2>

                                <p className="text-green-100 text-sm">
                                    Your professional profile, ready to share.
                                </p>
                            </div>
                        </div>

                        <p className="text-green-50 mt-4 max-w-2xl">
                            Share your projects, skills, certificates and
                            career profile with recruiters and employers.
                        </p>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {publicPortfolioUrl && (
                            <a
                                href={publicPortfolioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 bg-white text-green-700 rounded-xl font-bold hover:bg-green-50 transition"
                            >
                                View Portfolio ↗
                            </a>
                        )}

                        <button
                            onClick={copyPortfolioLink}
                            disabled={!publicPortfolioUrl}
                            className="px-5 py-3 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition disabled:opacity-50"
                        >
                            Copy Link
                        </button>

                    </div>

                </div>
            </section>

            {/* =====================================
                QUICK ACTIONS
            ===================================== */}

            <section>

                <div className="mb-5">

                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Quick Actions ⚡
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Continue building your career profile.
                    </p>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <Link
                        to="/profile"
                        className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                            👤
                        </div>

                        <h3 className="font-bold text-gray-900 mt-4">
                            Edit Profile
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Update your career information.
                        </p>

                        <span className="block text-green-600 font-semibold text-sm mt-4">
                            Open →
                        </span>
                    </Link>

                    <Link
                        to="/skills"
                        className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl">
                            💻
                        </div>

                        <h3 className="font-bold text-gray-900 mt-4">
                            Add Skills
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Showcase your technical skills.
                        </p>

                        <span className="block text-green-600 font-semibold text-sm mt-4">
                            Open →
                        </span>
                    </Link>

                    <Link
                        to="/projects"
                        className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                    >
                        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl">
                            🚀
                        </div>

                        <h3 className="font-bold text-gray-900 mt-4">
                            Add Project
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Build a stronger portfolio.
                        </p>

                        <span className="block text-green-600 font-semibold text-sm mt-4">
                            Open →
                        </span>
                    </Link>

                    <Link
                        to="/resume"
                        className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                    >
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-2xl">
                            📄
                        </div>

                        <h3 className="font-bold text-gray-900 mt-4">
                            Manage Resume
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Upload and analyze your resume.
                        </p>

                        <span className="block text-green-600 font-semibold text-sm mt-4">
                            Open →
                        </span>
                    </Link>

                </div>

            </section>

            {/* =====================================
                AI TOOLS
            ===================================== */}

            <section className="bg-[#07111f] rounded-3xl p-6 md:p-8 text-white">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">

                    <div>

                        <div className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm">
                            🤖 AI CAREER TOOLS
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
                            Get smarter about your career.
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Use AI-powered tools to improve your career readiness.
                        </p>

                    </div>

                    <Link
                        to="/career-advisor"
                        className="px-5 py-3 bg-green-500 hover:bg-green-400 rounded-xl font-bold transition"
                    >
                        Explore AI Tools →
                    </Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <Link
                        to="/career-advisor"
                        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
                    >
                        <div className="text-2xl">🤖</div>

                        <h3 className="font-bold mt-3">
                            AI Career Advisor
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            Get personalized career guidance.
                        </p>
                    </Link>

                    <Link
                        to="/job-matcher"
                        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
                    >
                        <div className="text-2xl">🎯</div>

                        <h3 className="font-bold mt-3">
                            AI Job Matcher
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            Find roles matching your skills.
                        </p>
                    </Link>

                    <Link
                        to="/mock-interview"
                        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
                    >
                        <div className="text-2xl">🎤</div>

                        <h3 className="font-bold mt-3">
                            Mock Interview
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            Practice interviews with AI.
                        </p>
                    </Link>

                </div>

            </section>

        </div>
    );
};

export default Dashboard;