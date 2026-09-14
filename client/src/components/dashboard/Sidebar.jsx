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
        <div className="w-64 h-screen bg-[#080d18] text-white flex flex-col border-r border-slate-800">

            {/* ========================= */}
            {/* BRAND */}
            {/* ========================= */}

            <div className="px-5 pt-6 pb-5 border-b border-slate-800">

                <Link to="/dashboard" className="block">

                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-xl bg-green-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-green-600/20">
                            S
                        </div>

                        <div>
                            <h1 className="text-lg font-extrabold tracking-tight">
                                Skill<span className="text-green-400">Bridge</span>
                                <span className="text-green-400"> AI</span>
                            </h1>

                            <p className="text-xs text-slate-400 mt-0.5">
                                Career Platform
                            </p>
                        </div>

                    </div>

                </Link>

            </div>

            {/* ========================= */}
            {/* NAVIGATION */}
            {/* ========================= */}

            <div className="flex-1 overflow-y-auto px-3 py-5">

                <p className="px-3 mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Main Menu
                </p>

                <nav className="space-y-1">

                    {menuItems.map((item) => {

                        const isActive =
                            location.pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${isActive
                                        ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                    }`}
                            >

                                {/* Active Indicator */}

                                {isActive && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-green-300 rounded-r-full" />
                                )}

                                {/* Icon */}

                                <span
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-base transition ${isActive
                                            ? "bg-white/15"
                                            : "bg-slate-800 group-hover:bg-slate-700"
                                        }`}
                                >
                                    {item.icon}
                                </span>

                                {/* Name */}

                                <span className="text-sm font-medium leading-5">
                                    {item.name}
                                </span>

                            </Link>
                        );
                    })}

                </nav>

            </div>

            {/* ========================= */}
            {/* LOGOUT */}
            {/* ========================= */}

            <div className="px-3 py-4 border-t border-slate-800">

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 text-left"
                >

                    <span className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-base">
                        🚪
                    </span>

                    <span className="text-sm font-medium">
                        Logout
                    </span>

                </button>

            </div>

        </div>
    );
};

export default Sidebar;