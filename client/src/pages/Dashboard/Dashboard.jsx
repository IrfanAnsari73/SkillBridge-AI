import DashboardLayout from "../../components/layout/DashboardLayout";

const Dashboard = () => {
    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                Welcome, Irfan 👋
            </h1>

            <p className="text-gray-600 mt-2">
                Here's an overview of your career progress.
            </p>

            {/* Dashboard Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-lg font-semibold">Projects</h2>
                    <p className="text-4xl font-bold text-green-600 mt-3">0</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-lg font-semibold">Skills</h2>
                    <p className="text-4xl font-bold text-green-600 mt-3">0</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-lg font-semibold">Certificates</h2>
                    <p className="text-4xl font-bold text-green-600 mt-3">0</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-lg font-semibold">Resume</h2>
                    <p className="text-xl font-bold text-red-500 mt-3">
                        Not Uploaded
                    </p>
                </div>

            </div>

            {/* Recent Activity */}

            <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

                <h2 className="text-2xl font-bold text-green-600 mb-5">
                    Recent Activity
                </h2>

                <ul className="space-y-4">

                    <li className="border-b pb-3">
                        📄 Resume uploaded successfully.
                    </li>

                    <li className="border-b pb-3">
                        🚀 New Project added.
                    </li>

                    <li className="border-b pb-3">
                        💻 Java skill added.
                    </li>

                    <li>
                        📜 Certificate uploaded.
                    </li>

                </ul>

            </div>

        </DashboardLayout>
    );
};

export default Dashboard;