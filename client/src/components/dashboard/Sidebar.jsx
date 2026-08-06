import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 min-h-screen bg-green-600 text-white p-6">

            {/* Logo */}

            <h2 className="text-3xl font-bold mb-10">
                SkillBridge AI
            </h2>

            {/* Menu */}

            <nav className="flex flex-col gap-3">

                <Link
                    to="/dashboard"
                    className="bg-green-700 px-3 py-3 rounded-lg transition duration-300"
                >
                    🏠 Dashboard
                </Link>

                <Link
                    to="/profile"
                    className="hover:bg-green-700 px-3 py-3 rounded-lg transition duration-300"
                >
                    👤 Profile
                </Link>

                <Link
                    to="/skills"
                    className="hover:bg-green-700 px-3 py-3 rounded-lg transition duration-300"
                >
                    💻 Skills
                </Link>

                <Link
                    to="/projects"
                    className="hover:bg-green-700 px-3 py-3 rounded-lg transition duration-300"
                >
                    🚀 Projects
                </Link>

                <Link
                    to="/certificates"
                    className="hover:bg-green-700 px-3 py-3 rounded-lg transition duration-300"
                >
                    📜 Certificates
                </Link>

                <Link
                    to="/resume"
                    className="hover:bg-green-700 px-3 py-3 rounded-lg transition duration-300"
                >
                    📄 Resume
                </Link>

                <Link
                    to="/portfolio"
                    className="hover:bg-green-700 px-3 py-3 rounded-lg transition duration-300"
                >
                    🌐 Portfolio
                </Link>

            </nav>

        </div>
    );
};

export default Sidebar;