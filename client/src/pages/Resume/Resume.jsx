import DashboardLayout from "../../components/layout/DashboardLayout";

const Resume = () => {
    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                My Resume 📄
            </h1>

            <p className="text-gray-600 mt-2">
                Upload and manage your resume.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                    Upload Resume
                </button>

            </div>

        </DashboardLayout>
    );
};

export default Resume;