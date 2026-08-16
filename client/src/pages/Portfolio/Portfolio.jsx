import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState({
        title: "",
        about: "",
        portfolioUrl: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // =========================
    // FETCH PORTFOLIO
    // =========================
    const fetchPortfolio = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/portfolio",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.ok) {
                setPortfolio({
                    title: data.portfolio.title || "",
                    about: data.portfolio.about || "",
                    portfolioUrl:
                        data.portfolio.portfolioUrl || "",
                });
            } else if (response.status === 404) {
                setPortfolio({
                    title: "",
                    about: "",
                    portfolioUrl: "",
                });
            } else {
                setError(
                    data.message ||
                    "Failed to load portfolio."
                );
            }
        } catch (error) {
            console.error(
                "Fetch Portfolio Error:",
                error
            );

            setError("Unable to connect to server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPortfolio();
    }, []);

    // =========================
    // HANDLE INPUT
    // =========================
    const handleChange = (e) => {
        setPortfolio({
            ...portfolio,
            [e.target.name]: e.target.value,
        });
    };

    // =========================
    // SAVE PORTFOLIO
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);
            setMessage("");
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/portfolio",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(portfolio),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Failed to save portfolio."
                );
                return;
            }

            setPortfolio({
                title: data.portfolio.title || "",
                about: data.portfolio.about || "",
                portfolioUrl:
                    data.portfolio.portfolioUrl || "",
            });

            setMessage(data.message);
        } catch (error) {
            console.error(
                "Save Portfolio Error:",
                error
            );

            setError("Unable to connect to server.");
        } finally {
            setSaving(false);
        }
    };

    // =========================
    // LOADING
    // =========================
    if (loading) {
        return (
            <DashboardLayout>
                <p className="text-gray-600">
                    Loading portfolio...
                </p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                My Portfolio 🌐
            </h1>

            <p className="text-gray-600 mt-2">
                Showcase your portfolio and personal
                branding.
            </p>

            {/* SUCCESS MESSAGE */}
            {message && (
                <div className="mt-6 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                    {message}
                </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
                <div className="mt-6 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* PORTFOLIO FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-8 mt-8"
            >

                <div className="space-y-6">

                    {/* Portfolio Title */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Portfolio Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={portfolio.title}
                            onChange={handleChange}
                            placeholder="Full Stack Developer"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* About Me */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            About Me
                        </label>

                        <textarea
                            name="about"
                            value={portfolio.about}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Write something about yourself..."
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                    </div>

                    {/* Portfolio URL */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Portfolio URL
                        </label>

                        <input
                            type="url"
                            name="portfolioUrl"
                            value={portfolio.portfolioUrl}
                            onChange={handleChange}
                            placeholder="https://yourportfolio.com"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Save Button */}
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
                    >
                        {saving
                            ? "Saving..."
                            : "Save Portfolio"}
                    </button>

                </div>

            </form>

        </DashboardLayout>
    );
};

export default Portfolio;