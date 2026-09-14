import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [showResults, setShowResults] = useState(false);

    // =========================
    // GET USER
    // =========================

    const storedUser = localStorage.getItem("user");

    let user = {};

    try {
        user = storedUser ? JSON.parse(storedUser) : {};
    } catch {
        user = {};
    }

    const userName = user?.name || "Irfan Ansari";
    const userRole = "Student";

    // =========================
    // LOGOUT
    // =========================

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    // =========================
    // SEARCH DATA
    // =========================

    const searchItems = [
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
            icon: "🚀",
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
            icon: "💼",
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
            icon: "✨",
        },
    ];

    // =========================
    // FILTER SEARCH
    // =========================

    const filteredItems = searchItems.filter((item) =>
        item.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // =========================
    // SEARCH CHANGE
    // =========================

    const handleSearchChange = (e) => {
        const value = e.target.value;

        setSearch(value);

        if (value.trim() !== "") {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    };

    // =========================
    // SEARCH RESULT CLICK
    // =========================

    const handleResultClick = (path) => {
        navigate(path);

        setSearch("");
        setShowResults(false);
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm px-5 py-4">

            <div className="flex items-center justify-between gap-5">

                {/* =================================
                    SEARCH
                ================================= */}

                <div className="relative flex-1 max-w-xl">

                    <div className="relative">

                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                            🔍
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={handleSearchChange}
                            onFocus={() => {
                                if (search.trim() !== "") {
                                    setShowResults(true);
                                }
                            }}
                            placeholder="Search your career tools..."
                            className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                        />

                    </div>

                    {/* =========================
                        SEARCH RESULTS
                    ========================= */}

                    {showResults && search.trim() !== "" && (
                        <div className="absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">

                            <div className="px-4 py-2.5 border-b border-gray-100">
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                    Quick Navigation
                                </p>
                            </div>

                            {filteredItems.length > 0 ? (

                                <div className="max-h-80 overflow-y-auto">

                                    {filteredItems.map((item) => (

                                        <button
                                            key={item.path}
                                            onClick={() =>
                                                handleResultClick(
                                                    item.path
                                                )
                                            }
                                            className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-green-50 transition"
                                        >

                                            <span className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-base">
                                                {item.icon}
                                            </span>

                                            <span className="font-medium text-gray-700 text-sm">
                                                {item.name}
                                            </span>

                                            <span className="ml-auto text-gray-400">
                                                →
                                            </span>

                                        </button>

                                    ))}

                                </div>

                            ) : (

                                <div className="px-4 py-6 text-center">

                                    <div className="text-2xl mb-2">
                                        🔎
                                    </div>

                                    <p className="text-sm font-medium text-gray-700">
                                        No results found
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        Try another search
                                    </p>

                                </div>

                            )}

                        </div>
                    )}

                </div>

                {/* =================================
                    USER AREA
                ================================= */}

                <div className="flex items-center gap-4">

                    {/* USER INFO */}

                    <div className="hidden sm:block text-right">

                        <p className="text-sm font-bold text-gray-800 whitespace-nowrap">
                            {userName}
                        </p>

                        <p className="text-xs text-gray-500 mt-0.5">
                            {userRole}
                        </p>

                    </div>

                    {/* AVATAR */}

                    <div className="relative">

                        <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-green-600/20">
                            {userName
                                .split(" ")
                                .map((word) => word[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase()}
                        </div>

                        {/* Online Indicator */}

                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />

                    </div>

                    {/* LOGOUT */}

                    <button
                        onClick={handleLogout}
                        className="h-11 px-5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Topbar;