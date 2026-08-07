import DashboardLayout from "../../components/layout/DashboardLayout";

const Projects = () => {
    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                My Projects 🚀
            </h1>

            <p className="text-gray-600 mt-2">
                Showcase all your projects here.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="border rounded-xl p-6">
                        <h2 className="text-xl font-bold text-green-600">
                            SkillBridge AI
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Student Career & Portfolio Management System built using MERN Stack.
                        </p>

                        <button className="mt-5 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            View Project
                        </button>
                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
};

export default Projects;