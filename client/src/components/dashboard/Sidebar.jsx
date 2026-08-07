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

                <NavLink to="/dashboard" className={linkClasses}>
                    🏠 Dashboard
                </NavLink>

                <NavLink to="/profile" className={linkClasses}>
                    👤 Profile
                </NavLink>

                <NavLink to="/skills" className={linkClasses}>
                    💻 Skills
                </NavLink>

                <NavLink to="/projects" className={linkClasses}>
                    🚀 Projects
                </NavLink>

                <NavLink to="/certificates" className={linkClasses}>
                    📜 Certificates
                </NavLink>

                <NavLink to="/resume" className={linkClasses}>
                    📄 Resume
                </NavLink>

                <NavLink to="/portfolio" className={linkClasses}>
                    🌐 Portfolio
                </NavLink>

            </nav>

        </div>
    );
};

export default Sidebar;