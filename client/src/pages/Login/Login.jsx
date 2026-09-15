import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (!email || !password) {
            setError("Please enter email and password.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Login failed.");
                return;
            }

            // Save JWT token
            localStorage.setItem("token", data.token);

            // Save logged-in user
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            // Dashboard redirect
            navigate("/dashboard");

        } catch (error) {
            console.error("Login Error:", error);

            setError(
                "Unable to connect to server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">

            <Navbar />

            {/* ================= LOGIN SECTION ================= */}
            <section className="relative overflow-hidden bg-[#0b0f19] min-h-[calc(100vh-80px)] flex items-center">

                {/* Background Glow */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

                <div className="relative w-full max-w-6xl mx-auto px-6 py-16">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* ================= LEFT CONTENT ================= */}
                        <div className="hidden lg:block text-white">

                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-semibold">
                                🤖 AI-Powered Career Platform
                            </span>

                            <h1 className="mt-7 text-5xl xl:text-6xl font-extrabold leading-tight">
                                Welcome Back to
                                <span className="block text-green-400">
                                    SkillBridge AI.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-lg text-gray-300 leading-8">
                                Continue building your skills, improving your
                                resume, preparing for opportunities and moving
                                closer to your career goals.
                            </p>

                            {/* Benefits */}
                            <div className="mt-9 space-y-4">

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center text-green-400">
                                        ✓
                                    </div>

                                    <span className="text-gray-300">
                                        AI Career Guidance
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center text-green-400">
                                        ✓
                                    </div>

                                    <span className="text-gray-300">
                                        Resume & Job Analysis
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center text-green-400">
                                        ✓
                                    </div>

                                    <span className="text-gray-300">
                                        Career Goals & Progress Tracking
                                    </span>
                                </div>

                            </div>

                        </div>


                        {/* ================= LOGIN CARD ================= */}
                        <div className="w-full max-w-md mx-auto">

                            <div className="bg-white rounded-3xl p-7 md:p-9 shadow-2xl">

                                {/* Icon */}
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-3xl">
                                        🔐
                                    </div>
                                </div>

                                <h2 className="mt-5 text-3xl font-extrabold text-center text-slate-900">
                                    Welcome Back
                                </h2>

                                <p className="mt-2 text-center text-gray-500">
                                    Login to continue your career journey
                                </p>


                                {/* ================= FORM ================= */}
                                <form
                                    className="mt-8 space-y-5"
                                    onSubmit={handleSubmit}
                                >

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                ✉️
                                            </span>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                required
                                                className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
                                            />

                                        </div>
                                    </div>


                                    {/* Password */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">

                                            <label className="block text-sm font-semibold text-gray-700">
                                                Password
                                            </label>

                                        </div>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                🔒
                                            </span>

                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="Enter your password"
                                                required
                                                className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-12 py-3.5 outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600 transition"
                                            >
                                                {showPassword
                                                    ? "🙈"
                                                    : "👁️"}
                                            </button>

                                        </div>
                                    </div>


                                    {/* Error */}
                                    {error && (
                                        <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                                            <span>⚠️</span>

                                            <span>
                                                {error}
                                            </span>
                                        </div>
                                    )}


                                    {/* Login Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-100 transition"
                                    >
                                        {loading
                                            ? "Logging in..."
                                            : "Login to SkillBridge AI →"}
                                    </button>

                                </form>


                                {/* Divider */}
                                <div className="flex items-center gap-4 my-7">

                                    <div className="flex-1 h-px bg-gray-200"></div>

                                    <span className="text-sm text-gray-400">
                                        New to SkillBridge AI?
                                    </span>

                                    <div className="flex-1 h-px bg-gray-200"></div>

                                </div>


                                {/* Signup */}
                                <Link
                                    to="/signup"
                                    className="block w-full text-center border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 rounded-xl transition"
                                >
                                    Create Free Account
                                </Link>


                                {/* Back Home */}
                                <Link
                                    to="/"
                                    className="block mt-5 text-center text-sm text-gray-500 hover:text-green-600 transition"
                                >
                                    ← Back to Home
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
};

export default Login;