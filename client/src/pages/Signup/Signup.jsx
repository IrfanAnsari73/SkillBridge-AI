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

        // Password validation
        const passwordPattern =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if (!passwordPattern.test(password)) {
            setError(
                "Password must contain: Minimum 8 characters, At least 1 uppercase letter (A-Z), At least 1 number (0-9), At least 1 special character (@$!%*?&)."
            );
            return;
        }

        // Confirm password
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

            // Login page par redirect
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

                    <form
                        className="mt-6"
                        onSubmit={handleSubmit}
                    >

                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
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
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                minLength="8"
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
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                required
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-5 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        {/* Success Message */}
                        {success && (
                            <div className="mb-5 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                                {success}
                            </div>
                        )}

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading
                                ? "Creating Account..."
                                : "Create Account"}
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