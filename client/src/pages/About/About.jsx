import { Link } from "react-router-dom";
import Footer from "../../components/common/Footer";

const About = () => {
    const features = [
        {
            icon: "🤖",
            title: "AI Career Guidance",
            text: "Get personalized guidance based on your skills, goals and career interests.",
        },
        {
            icon: "📄",
            title: "Resume Intelligence",
            text: "Analyze your resume and discover practical ways to improve it.",
        },
        {
            icon: "🗺️",
            title: "Career Roadmaps",
            text: "Follow structured learning paths designed around your target career.",
        },
        {
            icon: "💼",
            title: "Job Preparation",
            text: "Prepare for opportunities with job matching, applications and mock interviews.",
        },
    ];

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
                                className="font-medium text-green-600"
                            >
                                About
                            </Link>

                            <Link
                                to="/contact"
                                className="font-medium text-gray-600 hover:text-green-600 transition"
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

                <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-semibold">
                        🚀 About SkillBridge AI
                    </span>

                    <h1 className="mt-7 text-5xl md:text-6xl font-extrabold tracking-tight">
                        Helping Students
                        <span className="block text-green-400">
                            Build Better Careers.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-8">
                        SkillBridge AI is an AI-powered career and portfolio
                        platform designed to help students organize their
                        skills, build their professional profile and make
                        smarter career decisions.
                    </p>

                </div>
            </section>


            {/* ================= OUR PURPOSE ================= */}
            <section className="px-6 py-24 bg-white">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <p className="text-green-600 font-bold uppercase tracking-wider text-sm">
                            Our Purpose
                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
                            Turning career confusion into a clear direction.
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-8">
                            Students often have the skills, projects and
                            ambition they need, but managing everything
                            required for a successful career can become
                            overwhelming.
                        </p>

                        <p className="mt-5 text-lg text-gray-600 leading-8">
                            SkillBridge AI brings important career tools
                            together in one place so students can understand
                            their strengths, identify gaps and take meaningful
                            steps toward their goals.
                        </p>

                    </div>


                    {/* Visual */}
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">

                        <div className="bg-[#0b0f19] rounded-2xl p-7 text-white">

                            <p className="text-sm text-gray-400">
                                Student Career Journey
                            </p>

                            <div className="mt-7 space-y-5">

                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center">
                                        👤
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            Build Your Profile
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Skills & education
                                        </p>
                                    </div>
                                </div>

                                <div className="ml-5 h-6 border-l border-green-500/40"></div>

                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center">
                                        🤖
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            Get AI Guidance
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Discover opportunities
                                        </p>
                                    </div>
                                </div>

                                <div className="ml-5 h-6 border-l border-green-500/40"></div>

                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center">
                                        🎯
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            Reach Your Goals
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Track your progress
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>


            {/* ================= FEATURES ================= */}
            <section className="bg-gray-50 px-6 py-24">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto">

                        <p className="text-green-600 font-bold uppercase tracking-wider text-sm">
                            What We Offer
                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
                            Everything Students Need
                            <span className="text-green-600">
                                {" "}to Move Forward
                            </span>
                        </h2>

                        <p className="mt-5 text-lg text-gray-600 leading-8">
                            SkillBridge AI combines career management,
                            preparation and artificial intelligence into
                            one connected experience.
                        </p>

                    </div>


                    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-green-300 hover:shadow-lg hover:-translate-y-1 transition"
                            >

                                <div className="text-4xl">
                                    {feature.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-gray-600 leading-7">
                                    {feature.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* ================= VISION ================= */}
            <section className="bg-[#0b0f19] text-white px-6 py-24">

                <div className="max-w-5xl mx-auto text-center">

                    <p className="text-green-400 font-bold uppercase tracking-wider text-sm">
                        Our Vision
                    </p>

                    <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
                        A smarter way for students to build their future.
                    </h2>

                    <p className="mt-7 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
                        We envision a platform where every student can
                        understand their career options, develop relevant
                        skills, present their work professionally and
                        confidently prepare for opportunities.
                    </p>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="px-6 py-24 bg-white">

                <div className="max-w-4xl mx-auto bg-green-600 rounded-3xl px-6 py-14 text-center shadow-xl">

                    <div className="text-5xl">
                        🚀
                    </div>

                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-white">
                        Ready to Build Your Career?
                    </h2>

                    <p className="mt-4 text-green-50 text-lg">
                        Start your journey with SkillBridge AI today.
                    </p>

                    <Link
                        to="/signup"
                        className="inline-flex mt-7 bg-white text-green-600 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition"
                    >
                        Get Started →
                    </Link>

                </div>

            </section>


            <Footer />
        </div>
    );
};

export default About;