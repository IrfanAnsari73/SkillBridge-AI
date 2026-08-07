import DashboardLayout from "../../components/layout/DashboardLayout";

const Profile = () => {
    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                My Profile 👤
            </h1>

            <p className="text-gray-600 mt-2">
                Manage your personal information.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 font-semibold">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
};

export default Profile;