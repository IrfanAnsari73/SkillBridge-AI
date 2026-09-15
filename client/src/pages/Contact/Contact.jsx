import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        try {
            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setSuccess(
                "Your message has been sent successfully. We'll get back to you soon."
            );

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            setError(
                err.message ||
                "Unable to send your message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#07130f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-medium mb-7">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        We'd Love To Hear From You
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Let's Build Better
                        <span className="text-green-400"> Careers Together.</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Have a question, suggestion or feedback about
                        SkillBridge AI? Send us a message and we'll be happy
                        to hear from you.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT AREA ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-5 gap-10">

                    {/* LEFT */}
                    <div className="lg:col-span-2">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
                            Get In Touch
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
                            Have something
                            <span className="text-green-600"> to say?</span>
                        </h2>

                        <p className="text-gray-600 mt-5 leading-relaxed">
                            Whether you're a student using SkillBridge AI,
                            interested in collaborating or simply have an idea
                            to share, we'd love to hear from you.
                        </p>

                        <div className="space-y-4 mt-9">

                            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                                        ✉️
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Email
                                        </p>

                                        <p className="font-semibold">
                                            support@skillbridge.ai
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                                        📍
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Location
                                        </p>

                                        <p className="font-semibold">
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#07130f] text-white rounded-2xl p-6">
                                <p className="text-green-400 font-bold">
                                    💡 Have an idea?
                                </p>

                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    Your feedback can help us make SkillBridge
                                    AI better for students everywhere.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:col-span-3">
                        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-7 sm:p-9">

                            <div className="mb-7">
                                <h3 className="text-2xl font-extrabold">
                                    Send us a message
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    Fill in the details below and we'll get back
                                    to you.
                                </p>
                            </div>

                            {success && (
                                <div className="mb-5 rounded-xl bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm">
                                    ✓ {success}
                                </div>
                            )}

                            {error && (
                                <div className="mb-5 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Message
                                    </label>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        rows="6"
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none resize-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-black font-bold py-4 rounded-xl transition shadow-lg shadow-green-500/20"
                                >
                                    {loading
                                        ? "Sending Message..."
                                        : "Send Message →"}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BOTTOM CTA ================= */}
            <section className="px-6 pb-20">
                <div className="max-w-7xl mx-auto bg-[#07130f] text-white rounded-3xl px-8 py-12 sm:px-14 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold">
                        Ready to take the next step?
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Start building your career profile with SkillBridge AI.
                    </p>

                    <a
                        href="/signup"
                        className="inline-flex mt-6 bg-green-500 hover:bg-green-400 text-black px-7 py-3.5 rounded-xl font-bold transition"
                    >
                        Get Started Free →
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;