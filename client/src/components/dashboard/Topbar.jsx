import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [showResults, setShowResults] = useState(false);

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
            icon: "💻",
        },
        {
            name: "Projects",
            path: "/projects",
            icon: "🚀",
        },
        {
            name: "Certificates",
            path: "/certificates",
            icon: "📜",
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
    ];

    // =========================
    // FILTER SEARCH RESULTS
    // =========================

    const filteredItems = searchItems.filter((item) =>
        item.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // =========================
    // HANDLE SEARCH
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
    // OPEN SEARCH RESULT
    // =========================

    const handleResultClick = (path) => {
        navigate(path);

        setSearch("");
        setShowResults(false);
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center mb-8">

            {/* =========================
                SEARCH
            ========================= */}

            <div className="relative">

                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    onFocus={() => {
                        if (search.trim() !== "") {
                            setShowResults(true);
                        }
                    }}
                    placeholder="🔍 Search..."
                    className="border border-gray-300 rounded-lg px-4 py-2 w-72 outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* =========================
                    SEARCH RESULTS
                ========================= */}

                {showResults && search.trim() !== "" && (
                    <div className="absolute top-12 left-0 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">

                        {filteredItems.length > 0 ? (

                            filteredItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() =>
                                        handleResultClick(
                                            item.path
                                        )
                                    }
                                    className="w-full text-left px-4 py-3 hover:bg-green-50 flex items-center gap-3 transition"
                                >
                                    <span>
                                        {item.icon}
                                    </span>

                                    <span className="font-medium text-gray-700">
                                        {item.name}
                                    </span>
                                </button>
                            ))

                        ) : (

                            <div className="px-4 py-3 text-gray-500">
                                No results found
                            </div>

                        )}

                    </div>
                )}

            </div>


            {/* =========================
                USER INFO + LOGOUT
            ========================= */}

            <div className="flex items-center gap-5">

                <div className="text-right">

                    <h3 className="font-semibold text-lg">
                        Irfan Ansari
                    </h3>

                    <p className="text-sm text-gray-500">
                        Student
                    </p>

                </div>


                {/* PROFILE IMAGE */}

                <img
                    src="https://ui-avatars.com/api/?name=Irfan+Ansari&background=16a34a&color=fff"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />


                {/* LOGOUT */}

                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Logout
                </button>

            </div>

        </div>
    );
};

export default Topbar;