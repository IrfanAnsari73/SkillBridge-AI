import DashboardLayout from "../../components/layout/DashboardLayout";

const Skills = () => {
    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                My Skills 💻
            </h1>

            <p className="text-gray-600 mt-2">
                Manage your technical skills.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <div className="bg-green-100 text-green-700 text-center rounded-lg py-4 font-semibold">
                        Java
                    </div>

                    <div className="bg-green-100 text-green-700 text-center rounded-lg py-4 font-semibold">
                        React
                    </div>

                    <div className="bg-green-100 text-green-700 text-center rounded-lg py-4 font-semibold">
                        Node.js
                    </div>

                    <div className="bg-green-100 text-green-700 text-center rounded-lg py-4 font-semibold">
                        MongoDB
                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
};

export default Skills;