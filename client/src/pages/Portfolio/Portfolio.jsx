import DashboardLayout from "../../components/layout/DashboardLayout";

const Portfolio = () => {
    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                My Portfolio 🌐
            </h1>

            <p className="text-gray-600 mt-2">
                Showcase your portfolio and personal branding.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <div className="space-y-6">

                    <div>
                        <label className="block mb-2 font-semibold">
                            Portfolio Title
                        </label>

                        <input
                            type="text"
                            placeholder="Full Stack Developer"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            About Me
                        </label>

                        <textarea
                            rows="5"
                            placeholder="Write something about yourself..."
                            className="w-full border rounded-lg px-4 py-2"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Portfolio URL
                        </label>

                        <input
                            type="url"
                            placeholder="https://yourportfolio.com"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                        Save Portfolio
                    </button>

                </div>

            </div>

        </DashboardLayout>
    );
};

export default Portfolio;