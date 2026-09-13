import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "🏠",
        },
        {
            name: "Profile",
            path: "/profile",
            icon: "👤",
        },
        {
            name: "Skills",
            path: "/skills",
            icon: "🛠️",
        },
        {
            name: "Projects",
            path: "/projects",
            icon: "💻",
        },
        {
            name: "Certificates",
            path: "/certificates",
            icon: "🏆",
        },
        {
            name: "Resume",
            path: "/resume",
            icon: "📄",
        },
        {
            name: "Portfolio",
            path: "/portfolio",
            icon: "🌐",
        },
        {
            name: "Career Advisor",
            path: "/career-advisor",
            icon: "🤖",
        },
        {
            name: "Career Roadmap",
            path: "/career-roadmap",
            icon: "🗺️",
        },
        {
            name: "Career Action Center",
            path: "/career-actions",
            icon: "🎯",
        },
        {
            name: "Career Goals",
            path: "/career-goals",
            icon: "🎯",
        },
        {
            name: "Job Matcher",
            path: "/job-matcher",
            icon: "🎯",
        },
        {
            name: "Mock Interview",
            path: "/mock-interview",
            icon: "🎤",
        },
        {
            name: "Career Analytics",
            path: "/career-analytics",
            icon: "📊",
        },
        {
            name: "Job Applications",
            path: "/job-applications",
            icon: "📋",
        },
        {
            name: "AI Application Insights",
            path: "/application-insights",
            icon: "🤖",
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <div className="w-64 h-screen bg-green-600 text-white p-6 overflow-y-auto">

            {/* ========================= */}
            {/* LOGO / TITLE */}
            {/* ========================= */}

            <div className="mb-8">
                <h1 className="text-2xl font-bold">
                    SkillBridge AI
                </h1>

                <p className="text-green-100 text-sm mt-1">
                    Career & Portfolio
                </p>
            </div>

            {/* ========================= */}
            {/* MENU */}
            {/* ========================= */}

            <nav className="space-y-2">

                {menuItems.map((item) => {

                    const isActive =
                        location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${isActive
                                ? "bg-white text-green-700 font-semibold"
                                : "hover:bg-green-700 text-white"
                                }`}
                        >
                            <span className="text-lg">
                                {item.icon}
                            </span>

                            <span>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}

            </nav>

            {/* ========================= */}
            {/* LOGOUT */}
            {/* ========================= */}

            <div className="mt-8 pt-6 border-t border-green-500">

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition text-left"
                >
                    <span className="text-lg">
                        🚪
                    </span>

                    <span>
                        Logout
                    </span>
                </button>

            </div>

        </div>
    );
};

export default Sidebar;