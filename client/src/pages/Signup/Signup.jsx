import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Signup = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 py-10">
                <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

                    <h2 className="text-3xl font-bold text-center text-green-600">
                        Create Account
                    </h2>

                    <p className="text-center text-gray-500 mt-2">
                        Join SkillBridge AI Today 🚀
                    </p>

                    <form className="mt-6">

                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                required
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                required
                                minLength="8"
                                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
                                title="Password must contain: Minimum 8 characters, At least 1 uppercase letter (A-Z), At least 1 number (0-9), At least 1 special character (@$!%*?&)."
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6">
                            <label className="block mb-2 font-medium">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm your password"
                                required
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            Create Account
                        </button>

                        {/* Login Link */}
                        <p className="text-center text-gray-600 mt-5">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-green-600 font-semibold hover:underline"
                            >
                                Login
                            </Link>
                        </p>

                    </form>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Signup;