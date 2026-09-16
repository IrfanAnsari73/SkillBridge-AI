import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SEO from "../../components/common/SEO";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">

            {/* ================= SEO ================= */}
            <SEO
                title="SkillBridge AI — Build Your Career Smarter"
                description="SkillBridge AI is an AI-powered career platform that helps students build resumes, manage skills and projects, prepare for interviews, discover career opportunities, and track career growth."
                canonical="https://skill-bridge-ai-sage.vercel.app/"
            />

            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#07130f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        {/* LEFT */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-medium mb-7">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                AI-Powered Career Platform
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                                Build Your
                                <span className="text-green-400"> Career </span>
                                Smarter.
                            </h1>

                            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
                                SkillBridge AI helps students manage their resumes,
                                skills, projects and certificates while using AI to
                                discover better career opportunities.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-9">
                                <Link
                                    to="/signup"
                                    className="inline-flex justify-center items-center px-7 py-3.5 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition shadow-lg shadow-green-500/20"
                                >
                                    Get Started Free →
                                </Link>

                                <Link
                                    to="/about"
                                    className="inline-flex justify-center items-center px-7 py-3.5 border border-gray-600 hover:border-green-400 hover:text-green-300 font-semibold rounded-xl transition"
                                >
                                    Explore SkillBridge
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-6 mt-9 text-sm text-gray-400">
                                <span>✓ Student-focused</span>
                                <span>✓ AI-powered</span>
                                <span>✓ Career-ready</span>
                            </div>
                        </div>

                        {/* RIGHT - PRODUCT PREVIEW */}
                        <div className="relative">
                            <div className="absolute -inset-5 bg-green-500/10 blur-3xl rounded-full"></div>

                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-700">

                                {/* Fake browser bar */}
                                <div className="bg-gray-100 px-5 py-3 flex items-center gap-2 border-b">
                                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-400"></span>

                                    <div className="ml-4 flex-1 bg-white rounded-md px-4 py-1.5 text-xs text-gray-400">
                                        skillbridge.ai/dashboard
                                    </div>
                                </div>

                                {/* Dashboard mock */}
                                <div className="p-5 bg-gray-50">
                                    <div className="flex gap-4">

                                        <div className="hidden sm:block w-28 bg-[#07130f] rounded-xl p-3">
                                            <div className="text-green-400 font-bold text-xs mb-5">
                                                SkillBridge
                                            </div>

                                            {[
                                                "Dashboard",
                                                "Profile",
                                                "Skills",
                                                "Projects",
                                                "Resume",
                                            ].map((item, index) => (
                                                <div
                                                    key={item}
                                                    className={`text-[10px] px-2 py-2 rounded-lg mb-1 ${index === 0
                                                        ? "bg-green-500 text-black font-bold"
                                                        : "text-gray-400"
                                                        }`}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-4">
                                                <div>
                                                    <p className="text-[10px] text-gray-400">
                                                        Welcome back
                                                    </p>

                                                    <h3 className="text-lg font-bold">
                                                        Career Dashboard
                                                    </h3>
                                                </div>

                                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">
                                                    IA
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">

                                                <div className="bg-white rounded-xl p-4 shadow-sm">
                                                    <p className="text-[10px] text-gray-400">
                                                        Career Score
                                                    </p>

                                                    <p className="text-2xl font-bold text-green-600 mt-1">
                                                        78
                                                    </p>

                                                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                                                        <div className="w-[78%] h-full bg-green-500 rounded-full"></div>
                                                    </div>
                                                </div>

                                                <div className="bg-white rounded-xl p-4 shadow-sm">
                                                    <p className="text-[10px] text-gray-400">
                                                        Projects
                                                    </p>

                                                    <p className="text-2xl font-bold mt-1">
                                                        08
                                                    </p>

                                                    <p className="text-[9px] text-green-600 mt-1">
                                                        +2 this month
                                                    </p>
                                                </div>

                                                <div className="bg-white rounded-xl p-4 shadow-sm">
                                                    <p className="text-[10px] text-gray-400">
                                                        AI Insights
                                                    </p>

                                                    <p className="text-sm font-bold mt-2">
                                                        Resume Match
                                                    </p>

                                                    <p className="text-[9px] text-gray-400 mt-1">
                                                        Strong profile detected
                                                    </p>
                                                </div>

                                                <div className="bg-[#07130f] text-white rounded-xl p-4 shadow-sm">
                                                    <p className="text-[10px] text-gray-400">
                                                        Job Match
                                                    </p>

                                                    <p className="text-2xl font-bold text-green-400 mt-1">
                                                        82%
                                                    </p>

                                                    <p className="text-[9px] text-gray-400 mt-1">
                                                        MERN Developer
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="bg-white rounded-xl p-4 shadow-sm mt-3">
                                                <div className="flex justify-between">
                                                    <p className="text-xs font-bold">
                                                        Career Progress
                                                    </p>

                                                    <span className="text-[10px] text-green-600">
                                                        72%
                                                    </span>
                                                </div>

                                                <div className="flex gap-2 mt-4">
                                                    <div className="h-16 flex-1 bg-green-50 rounded-lg"></div>
                                                    <div className="h-12 flex-1 bg-green-100 rounded-lg mt-4"></div>
                                                    <div className="h-20 flex-1 bg-green-200 rounded-lg"></div>
                                                    <div className="h-14 flex-1 bg-green-300 rounded-lg mt-2"></div>
                                                    <div className="h-24 flex-1 bg-green-500 rounded-lg"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= TRUST BAR ================= */}
            <section className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-7">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                        <div>
                            <p className="text-2xl font-extrabold">AI</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Career Assistance
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-extrabold">10+</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Career Tools
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-extrabold">100%</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Student Focused
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-extrabold text-green-600">
                                Free
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                To Get Started
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= PROBLEM ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="max-w-3xl">
                    <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
                        The Problem
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
                        Your career journey shouldn't feel scattered.
                    </h2>

                    <p className="text-gray-600 mt-5 leading-relaxed">
                        Students often keep resumes, certificates, projects,
                        skills and job applications across different platforms.
                        Finding the right opportunities and preparing for them
                        becomes difficult.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {[
                        {
                            icon: "📄",
                            title: "Scattered Profiles",
                            text: "Your resume, projects and certificates live in different places.",
                        },
                        {
                            icon: "🎯",
                            title: "Unclear Direction",
                            text: "It is difficult to know which skills and career path to focus on.",
                        },
                        {
                            icon: "💼",
                            title: "Job Preparation",
                            text: "Matching your profile with jobs and preparing for interviews takes time.",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                        >
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mt-5">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= SOLUTION ================= */}
            <section className="bg-[#07130f] text-white">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
                            The Solution
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
                            One platform for your entire career journey.
                        </h2>

                        <p className="text-gray-400 mt-5 leading-relaxed">
                            SkillBridge AI brings your career information,
                            preparation tools and AI-powered guidance together
                            in one place.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
                        {[
                            ["🤖", "AI Career Advisor", "Get personalized career guidance."],
                            ["📊", "Career Analytics", "Understand your career progress."],
                            ["🎯", "Job Matcher", "Find roles matching your skills."],
                            ["🎤", "Mock Interview", "Practice interviews with AI."],
                            ["📄", "Resume Analyzer", "Improve your resume with AI insights."],
                            ["🗺️", "Career Roadmap", "Follow a structured career path."],
                            ["💼", "Job Applications", "Track your applications easily."],
                            ["🏆", "Career Goals", "Set goals and monitor progress."],
                        ].map(([icon, title, text]) => (
                            <div
                                key={title}
                                className="border border-gray-800 bg-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-green-500/40 transition"
                            >
                                <div className="text-3xl">
                                    {icon}
                                </div>

                                <h3 className="font-bold text-lg mt-4">
                                    {title}
                                </h3>

                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center">
                    <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
                        How It Works
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
                        Start building your career in minutes.
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mt-14">
                    {[
                        ["01", "Create Your Profile", "Add your education, skills and career details."],
                        ["02", "Build Your Portfolio", "Organize your projects, certificates and resume."],
                        ["03", "Use AI Tools", "Analyze your profile, match jobs and practice interviews."],
                        ["04", "Track Your Growth", "Set goals and continuously improve your career profile."],
                    ].map(([number, title, text]) => (
                        <div key={number} className="relative">

                            <div className="text-5xl font-black text-green-100">
                                {number}
                            </div>

                            <h3 className="text-xl font-bold mt-4">
                                {title}
                            </h3>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="px-6 pb-20">
                <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-green-500">

                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>

                    <div className="relative px-8 py-14 sm:px-14 sm:py-16 flex flex-col lg:flex-row justify-between items-center gap-8">

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
                                Ready to build your career smarter?
                            </h2>

                            <p className="text-black/70 mt-3 max-w-2xl">
                                Create your SkillBridge AI profile and start
                                turning your skills into career opportunities.
                            </p>
                        </div>

                        <Link
                            to="/signup"
                            className="shrink-0 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition shadow-lg"
                        >
                            Create Free Account →
                        </Link>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;