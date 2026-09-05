import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const linkClasses = ({ isActive }) =>
        `px-3 py-3 rounded-lg transition duration-300 ${isActive
            ? "bg-green-700 text-white"
            : "hover:bg-green-700 text-white"
        }`;

    return (
        <div className="w-64 min-h-screen bg-green-600 text-white p-6">

            <h2 className="text-3xl font-bold mb-10">
                SkillBridge AI
            </h2>

            <nav className="flex flex-col gap-3">

                {/* Dashboard */}

                <NavLink
                    to="/dashboard"
                    className={linkClasses}
                >
                    🏠 Dashboard
                </NavLink>


                {/* Profile */}

                <NavLink
                    to="/profile"
                    className={linkClasses}
                >
                    👤 Profile
                </NavLink>


                {/* Skills */}

                <NavLink
                    to="/skills"
                    className={linkClasses}
                >
                    💻 Skills
                </NavLink>


                {/* Projects */}

                <NavLink
                    to="/projects"
                    className={linkClasses}
                >
                    🚀 Projects
                </NavLink>


                {/* Certificates */}

                <NavLink
                    to="/certificates"
                    className={linkClasses}
                >
                    📜 Certificates
                </NavLink>


                {/* Resume */}

                <NavLink
                    to="/resume"
                    className={linkClasses}
                >
                    📄 Resume
                </NavLink>


                {/* Portfolio */}

                <NavLink
                    to="/portfolio"
                    className={linkClasses}
                >
                    🌐 Portfolio
                </NavLink>


                {/* AI Career Advisor */}

                <NavLink
                    to="/career-advisor"
                    className={linkClasses}
                >
                    🤖 Career Advisor
                </NavLink>

            </nav>

        </div>
    );
};

export default Sidebar;