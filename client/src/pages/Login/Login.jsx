import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

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
                "http://localhost:5000/api/auth/login",
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
        <>
            <Navbar />

            <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

                    <h2 className="text-3xl font-bold text-center text-green-600">
                        Welcome Back 👋
                    </h2>

                    <p className="text-center text-gray-500 mt-2">
                        Login to your SkillBridge AI account
                    </p>

                    <form
                        className="mt-6"
                        onSubmit={handleSubmit}
                    >

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
                        <div className="mb-6">
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
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="mb-5 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </form>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Login;