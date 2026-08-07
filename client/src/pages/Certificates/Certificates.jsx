import DashboardLayout from "../../components/layout/DashboardLayout";

const Certificates = () => {
    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                My Certificates 📜
            </h1>

            <p className="text-gray-600 mt-2">
                Store all your certificates in one place.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <div className="border rounded-xl p-6">

                    <h2 className="text-xl font-bold text-green-600">
                        Google AI Certificate
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Successfully completed Google AI course.
                    </p>

                </div>

            </div>

        </DashboardLayout>
    );
};

export default Certificates;