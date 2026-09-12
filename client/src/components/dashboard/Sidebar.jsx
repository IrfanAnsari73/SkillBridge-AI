import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const linkClasses = ({ isActive }) =>
        `px-3 py-3 rounded-lg transition duration-300 ${isActive
            ? "bg-green-700 text-white"
            : "hover:bg-green-700 text-white"
        }`;

    return (
        <div className="fixed left-0 top-0 w-64 h-screen bg-green-600 text-white p-6 overflow-y-auto">

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

                <NavLink to="/career-advisor" className={linkClasses}>
                    🤖 Career Advisor
                </NavLink>

                <NavLink to="/career-roadmap" className={linkClasses}>
                    🗺️ Career Roadmap
                </NavLink>

                <NavLink to="/job-matcher" className={linkClasses}>
                    💼 Job Matcher
                </NavLink>

                <NavLink to="/mock-interview" className={linkClasses}>
                    🎤 Mock Interview
                </NavLink>

                <NavLink to="/career-analytics" className={linkClasses}>
                    📊 Career Analytics
                </NavLink>

            </nav>
        </div>
    );
};

export default Sidebar;