import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Login = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

                    <h2 className="text-3xl font-bold text-center text-blue-600">
                        Welcome Back 👋
                    </h2>

                    <p className="text-center text-gray-500 mt-2">
                        Login to your SkillBridge AI account
                    </p>

                    <form className="mt-6">

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 font-medium">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        >
                            Login
                        </button>

                    </form>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Login;