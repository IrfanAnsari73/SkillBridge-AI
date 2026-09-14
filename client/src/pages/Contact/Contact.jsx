import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/common/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
                "http://localhost:5000/api/contact",
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
                throw new Error(
                    data.message || "Failed to send message."
                );
            }

            setSuccess(
                "Your message has been sent successfully! We will get back to you soon. 📩"
            );

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (err) {
            console.error("Contact form error:", err);

            setError(
                err.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* ================= NAVBAR ================= */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="h-20 flex items-center justify-between">

                        <Link
                            to="/"
                            className="text-2xl md:text-3xl font-extrabold tracking-tight"
                        >
                            Skill<span className="text-green-600">Bridge AI</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-8">

                            <Link
                                to="/"
                                className="font-medium text-gray-600 hover:text-green-600 transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="font-medium text-gray-600 hover:text-green-600 transition"
                            >
                                About
                            </Link>

                            <Link
                                to="/contact"
                                className="font-medium text-green-600"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/login"
                                className="font-medium text-gray-700 hover:text-green-600 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-green-100"
                            >
                                Get Started
                            </Link>

                        </div>

                        <Link
                            to="/signup"
                            className="md:hidden bg-green-600 text-white font-semibold px-4 py-2 rounded-lg"
                        >
                            Start
                        </Link>

                    </div>
                </div>
            </nav>


            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#0b0f19] text-white">

                <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-semibold">
                        💬 Get In Touch
                    </span>

                    <h1 className="mt-7 text-5xl md:text-6xl font-extrabold tracking-tight">
                        Let's Talk About
                        <span className="block text-green-400">
                            Your Career.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-8">
                        Have a question, suggestion or feedback?
                        We'd love to hear from you.
                    </p>

                </div>
            </section>


            {/* ================= CONTACT SECTION ================= */}
            <section className="bg-slate-100 px-6 py-16 md:py-20">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

                    {/* ================= CONTACT INFORMATION ================= */}
                    <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-sm">

                        <p className="text-green-600 font-bold uppercase tracking-wider text-sm">
                            Contact Information
                        </p>

                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
                            We're Here to Help.
                        </h2>

                        <p className="mt-5 text-gray-600 text-lg leading-8">
                            Whether you need help with SkillBridge AI,
                            want to share feedback, or have a suggestion,
                            feel free to reach out.
                        </p>


                        <div className="mt-8 space-y-4">

                            {/* Email */}
                            <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-green-300 hover:bg-green-50/50 transition">

                                <div className="w-12 h-12 shrink-0 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                                    📧
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:skillbridgeai08@gmail.com"
                                        className="font-semibold text-slate-900 hover:text-green-600 transition break-all"
                                    >
                                        skillbridgeai08@gmail.com
                                    </a>
                                </div>

                            </div>


                            {/* Phone */}
                            <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50/50 transition">

                                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                                    📱
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+917376583770"
                                        className="font-semibold text-slate-900 hover:text-blue-600 transition"
                                    >
                                        +91 7376583770
                                    </a>
                                </div>

                            </div>


                            {/* Location */}
                            <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-purple-300 hover:bg-purple-50/50 transition">

                                <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                                    📍
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Location
                                    </p>

                                    <p className="font-semibold text-slate-900">
                                        Lucknow, Uttar Pradesh, India
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Social Links */}
                        <div className="mt-8 pt-7 border-t border-gray-100">

                            <p className="text-sm font-semibold text-gray-700">
                                Connect with us
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">

                                <a
                                    href="https://github.com/IrfanAnsari73"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-2.5 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition"
                                >
                                    GitHub ↗
                                </a>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
                                >
                                    LinkedIn ↗
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* ================= MESSAGE FORM ================= */}
                    <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-sm">

                        <p className="text-green-600 font-bold uppercase tracking-wider text-sm">
                            Send a Message
                        </p>

                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
                            How Can We Help?
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Send us a message and we'll get back to you.
                        </p>


                        <form
                            onSubmit={handleSubmit}
                            className="mt-7 space-y-5"
                        >

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
                                />
                            </div>


                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Write your message..."
                                    required
                                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3.5 outline-none resize-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
                                ></textarea>
                            </div>


                            {/* Success Message */}
                            {success && (
                                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium">
                                    ✅ {success}
                                </div>
                            )}


                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                                    ❌ {error}
                                </div>
                            )}


                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-100 transition"
                            >
                                {loading
                                    ? "Sending..."
                                    : "Send Message 🚀"}
                            </button>

                        </form>

                    </div>

                </div>
            </section>


            {/* ================= SUPPORT SECTION ================= */}
            <section className="bg-[#0b0f19] px-6 py-20 text-white">

                <div className="max-w-5xl mx-auto text-center">

                    <p className="text-green-400 font-bold uppercase tracking-wider text-sm">
                        Need Assistance?
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
                        We're Building SkillBridge AI for Students.
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
                        Your feedback helps us improve the platform and
                        create better tools for students preparing for
                        their careers.
                    </p>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="bg-white px-6 py-16">

                <div className="max-w-5xl mx-auto bg-green-600 rounded-3xl px-6 py-14 text-center shadow-xl">

                    <div className="text-5xl">
                        🚀
                    </div>

                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-white">
                        Ready to Build Your Career?
                    </h2>

                    <p className="mt-4 text-green-50 text-lg">
                        Create your profile and start your journey
                        with SkillBridge AI.
                    </p>

                    <Link
                        to="/signup"
                        className="inline-flex mt-7 bg-white text-green-600 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition"
                    >
                        Get Started →
                    </Link>

                </div>

            </section>


            {/* ================= FOOTER ================= */}
            <Footer />

        </div>
    );
};

export default Contact;