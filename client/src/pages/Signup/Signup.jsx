import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

        const passwordPattern =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if (!passwordPattern.test(password)) {
            setError(
                "Password must contain at least 8 characters, 1 uppercase letter, 1 number and 1 special character."
            );
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Registration failed.");
                return;
            }

            setSuccess("Account created successfully! 🎉");

            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (error) {
            console.error("Signup Error:", error);

            setError(
                "Unable to connect to server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#080d18] text-white">

            <Navbar />

            {/* Main Signup Section */}
            <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#080d18] via-[#0b1220] to-[#071f1a] px-6 py-12 md:py-16">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <div className="hidden lg:block">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-medium">
                            🚀 AI-Powered Career Platform
                        </div>

                        <h1 className="mt-7 text-5xl xl:text-6xl font-extrabold leading-tight">
                            Start Your Journey with
                            <span className="block text-green-400 mt-2">
                                SkillBridge AI.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-lg text-slate-300 leading-8">
                            Create your free account and start building
                            your skills, improving your resume, preparing
                            for opportunities and achieving your career goals.
                        </p>

                        <div className="mt-8 space-y-5">

                            <div className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center text-green-400">
                                    ✓
                                </div>
                                <span className="text-slate-200">
                                    AI Career Guidance
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center text-green-400">
                                    ✓
                                </div>
                                <span className="text-slate-200">
                                    Resume & Job Analysis
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center text-green-400">
                                    ✓
                                </div>
                                <span className="text-slate-200">
                                    Career Goals & Progress Tracking
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center text-green-400">
                                    ✓
                                </div>
                                <span className="text-slate-200">
                                    Mock Interviews & Career Preparation
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE - SIGNUP CARD */}
                    <div className="w-full max-w-md mx-auto lg:ml-auto">

                        <div className="bg-white text-slate-900 rounded-3xl shadow-2xl p-7 sm:p-9 border border-white/10">

                            {/* Icon */}
                            <div className="flex justify-center mb-5">
                                <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-3xl">
                                    👤
                                </div>
                            </div>

                            <h2 className="text-3xl font-extrabold text-center">
                                Create Your Account
                            </h2>

                            <p className="text-center text-slate-500 mt-2">
                                Join SkillBridge AI and start your career journey
                            </p>

                            <form
                                className="mt-7 space-y-5"
                                onSubmit={handleSubmit}
                            >

                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                                        Full Name
                                    </label>

                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                            👤
                                        </span>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                                        Email Address
                                    </label>

                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                            ✉️
                                        </span>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                                        Password
                                    </label>

                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
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
                                            placeholder="Create a password"
                                            required
                                            minLength="8"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-12 outline-none transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    !showPassword
                                                )
                                            }
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-green-600"
                                        >
                                            {showPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                                        Confirm Password
                                    </label>

                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                            🔐
                                        </span>

                                        <input
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confirmPassword"
                                            value={
                                                formData.confirmPassword
                                            }
                                            onChange={handleChange}
                                            placeholder="Confirm your password"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-12 outline-none transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-green-600"
                                        >
                                            {showConfirmPassword
                                                ? "🙈"
                                                : "👁️"}
                                        </button>
                                    </div>
                                </div>

                                {/* Password Hint */}
                                <p className="text-xs text-slate-500">
                                    Password must contain 8+ characters,
                                    uppercase letter, number and special character.
                                </p>

                                {/* Error */}
                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm leading-6">
                                        {error}
                                    </div>
                                )}

                                {/* Success */}
                                {success && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                                        {success}
                                    </div>
                                )}

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-green-600/20 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {loading
                                        ? "Creating Account..."
                                        : "Create Free Account →"}
                                </button>

                                {/* Login */}
                                <div className="flex items-center gap-3 my-5">
                                    <div className="h-px bg-slate-200 flex-1"></div>

                                    <span className="text-xs text-slate-400">
                                        Already a member?
                                    </span>

                                    <div className="h-px bg-slate-200 flex-1"></div>
                                </div>

                                <Link
                                    to="/login"
                                    className="block w-full text-center border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 rounded-xl transition"
                                >
                                    Login to SkillBridge AI
                                </Link>

                                <Link
                                    to="/"
                                    className="block text-center text-sm text-slate-500 hover:text-green-600 transition mt-5"
                                >
                                    ← Back to Home
                                </Link>

                            </form>

                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
};

export default Signup;