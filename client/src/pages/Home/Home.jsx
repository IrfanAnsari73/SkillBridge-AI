import { Link } from "react-router-dom";
import Footer from "../../components/common/Footer";

const Home = () => {
    const features = [
        {
            icon: "🤖",
            title: "AI Career Advisor",
            text: "Get personalized career guidance based on your skills, profile and goals.",
        },
        {
            icon: "🗺️",
            title: "Career Roadmap",
            text: "Follow a structured roadmap to build the right skills for your target career.",
        },
        {
            icon: "📄",
            title: "AI Resume Analyzer",
            text: "Analyze your resume and discover practical improvements for better opportunities.",
        },
        {
            icon: "💼",
            title: "AI Job Matcher",
            text: "Compare your skills with job roles and identify important skill gaps.",
        },
        {
            icon: "🎤",
            title: "Mock Interview",
            text: "Practice interview questions and improve your confidence before real interviews.",
        },
        {
            icon: "📊",
            title: "Career Analytics",
            text: "Track your career progress and understand where you need to improve.",
        },
        {
            icon: "🎯",
            title: "Career Goals",
            text: "Set meaningful career goals and track your progress toward achieving them.",
        },
        {
            icon: "📋",
            title: "Job Application Tracker",
            text: "Manage your applications, statuses and job search progress in one place.",
        },
    ];

    const resources = [
        {
            icon: "💻",
            title: "Coding Roadmaps",
            text: "Java, SQL, MERN, DSA and Full Stack development learning paths.",
        },
        {
            icon: "📄",
            title: "Resume Guides",
            text: "Learn how to create better resumes and prepare for ATS-based hiring.",
        },
        {
            icon: "🎤",
            title: "Interview Preparation",
            text: "Prepare for technical, HR and placement interviews with practical resources.",
        },
        {
            icon: "🚀",
            title: "Career Preparation",
            text: "Useful guides for internships, placements, skills and career growth.",
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
                                className="font-medium text-green-600"
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
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Hero Text */}
                        <div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-semibold">
                                🤖 AI-Powered Career Platform
                            </div>

                            <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                                Build Your Career
                                <span className="block text-green-400">
                                    Smarter.
                                </span>
                            </h1>

                            <p className="mt-7 text-lg md:text-xl text-gray-300 leading-8 max-w-xl">
                                SkillBridge AI helps students build their
                                profiles, improve resumes, discover career
                                paths, prepare for interviews and track their
                                career journey — all in one platform.
                            </p>

                            <div className="mt-9 flex flex-col sm:flex-row gap-4">

                                <Link
                                    to="/signup"
                                    className="inline-flex justify-center items-center bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-4 rounded-xl transition shadow-xl shadow-green-900/30"
                                >
                                    Start Your Career Journey 🚀
                                </Link>

                                <a
                                    href="#features"
                                    className="inline-flex justify-center items-center border border-gray-600 hover:border-green-400 hover:text-green-400 text-white font-semibold px-7 py-4 rounded-xl transition"
                                >
                                    Explore Platform
                                </a>

                            </div>

                            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-400">
                                <span>✓ AI Career Guidance</span>
                                <span>✓ Resume Analysis</span>
                                <span>✓ Job Matching</span>
                            </div>
                        </div>


                        {/* Product Preview */}
                        <div className="relative">

                            <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full"></div>

                            <div className="relative bg-white rounded-3xl p-3 shadow-2xl shadow-black/40">

                                <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">

                                    {/* Fake Browser Header */}
                                    <div className="h-12 bg-white border-b border-gray-200 flex items-center gap-2 px-5">
                                        <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                        <span className="w-3 h-3 rounded-full bg-green-400"></span>

                                        <div className="ml-4 flex-1 h-7 bg-gray-100 rounded-lg"></div>
                                    </div>

                                    <div className="p-6 md:p-8">

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Career Dashboard
                                                </p>

                                                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                                    Welcome to SkillBridge AI
                                                </h3>
                                            </div>

                                            <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                                                AI
                                            </div>
                                        </div>

                                        <div className="mt-6 grid grid-cols-2 gap-4">

                                            <div className="bg-green-50 rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">
                                                    Skills
                                                </p>
                                                <p className="mt-2 text-3xl font-bold text-green-600">
                                                    AI
                                                </p>
                                            </div>

                                            <div className="bg-blue-50 rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">
                                                    Resume
                                                </p>
                                                <p className="mt-2 text-3xl font-bold text-blue-600">
                                                    ✓
                                                </p>
                                            </div>

                                            <div className="bg-purple-50 rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">
                                                    Jobs
                                                </p>
                                                <p className="mt-2 text-3xl">
                                                    💼
                                                </p>
                                            </div>

                                            <div className="bg-orange-50 rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">
                                                    Goals
                                                </p>
                                                <p className="mt-2 text-3xl">
                                                    🎯
                                                </p>
                                            </div>

                                        </div>

                                        <div className="mt-5 bg-white border border-gray-200 rounded-2xl p-5">

                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-slate-900">
                                                    Career Progress
                                                </span>

                                                <span className="text-green-600 font-semibold">
                                                    Track
                                                </span>
                                            </div>

                                            <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full w-4/5 bg-green-500 rounded-full"></div>
                                            </div>

                                            <p className="mt-3 text-sm text-gray-500">
                                                Build your profile and move
                                                closer to your career goals.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= TRUST STRIP ================= */}
            <section className="border-b border-gray-100 bg-white">
                <div className="max-w-6xl mx-auto px-6 py-8">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                        <div>
                            <p className="text-2xl font-bold text-slate-900">
                                AI
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Powered Career Tools
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-slate-900">
                                8+
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Career Features
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-slate-900">
                                1
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Complete Platform
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-green-600">
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
            <section className="bg-gray-50 px-6 py-24">

                <div className="max-w-6xl mx-auto">

                    <div className="max-w-3xl">
                        <p className="text-green-600 font-bold uppercase tracking-wider text-sm">
                            The Problem
                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
                            Your career journey shouldn't feel scattered.
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-8">
                            Students often manage their resumes, projects,
                            certificates, skills, applications and career
                            planning across different platforms.
                        </p>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-6">

                        <div className="bg-white p-7 rounded-2xl border border-gray-200">
                            <div className="text-3xl">📄</div>
                            <h3 className="mt-5 text-xl font-bold">
                                Resume Problems
                            </h3>
                            <p className="mt-3 text-gray-600 leading-7">
                                Creating and improving a strong resume can
                                be confusing for students.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-200">
                            <div className="text-3xl">🧩</div>
                            <h3 className="mt-5 text-xl font-bold">
                                Skill Gaps
                            </h3>
                            <p className="mt-3 text-gray-600 leading-7">
                                Students often don't know which skills are
                                required for their target career.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-200">
                            <div className="text-3xl">💼</div>
                            <h3 className="mt-5 text-xl font-bold">
                                Job Preparation
                            </h3>
                            <p className="mt-3 text-gray-600 leading-7">
                                Applications, interviews and career planning
                                can become difficult to manage.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= FEATURES ================= */}
            <section
                id="features"
                className="bg-[#0b0f19] text-white px-6 py-24"
            >

                <div className="max-w-7xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto">

                        <p className="text-green-400 font-bold uppercase tracking-wider text-sm">
                            Everything You Need
                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
                            One Platform for Your
                            <span className="text-green-400">
                                {" "}Complete Career Journey
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 text-lg leading-8">
                            From building your profile to preparing for
                            interviews, SkillBridge AI brings your career
                            journey together.
                        </p>

                    </div>


                    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 border border-white/10 hover:border-green-400/40 rounded-2xl p-6 transition hover:-translate-y-1"
                            >

                                <div className="text-4xl">
                                    {feature.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-gray-400 leading-7">
                                    {feature.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* ================= HOW IT WORKS ================= */}
            <section className="bg-white px-6 py-24">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center">

                        <p className="text-green-600 font-bold uppercase tracking-wider text-sm">
                            How It Works
                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
                            Start Building Your Career in 4 Steps
                        </h2>

                    </div>


                    <div className="mt-16 grid md:grid-cols-4 gap-8">

                        {[
                            {
                                number: "01",
                                title: "Create Profile",
                                text: "Add your education, skills and professional information.",
                            },
                            {
                                number: "02",
                                title: "Build Portfolio",
                                text: "Add projects, certificates and your resume.",
                            },
                            {
                                number: "03",
                                title: "Get AI Guidance",
                                text: "Use AI tools to analyze, improve and plan your career.",
                            },
                            {
                                number: "04",
                                title: "Track Progress",
                                text: "Track goals, applications and overall career progress.",
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="text-center"
                            >

                                <div className="mx-auto w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-green-100">
                                    {step.number}
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-gray-600 leading-7">
                                    {step.text}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* ================= RESOURCES ================= */}
            <section className="bg-gray-50 px-6 py-24">

                <div className="max-w-7xl mx-auto">

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                        <div>
                            <p className="text-green-600 font-bold uppercase tracking-wider text-sm">
                                Career Resources
                            </p>

                            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
                                Learn. Prepare. Grow.
                            </h2>

                            <p className="mt-5 max-w-2xl text-gray-600 text-lg leading-8">
                                Practical resources to help students improve
                                their technical skills, resumes and career
                                preparation.
                            </p>
                        </div>

                    </div>


                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {resources.map((resource, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-green-300 hover:shadow-lg transition"
                            >

                                <div className="text-4xl">
                                    {resource.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold">
                                    {resource.title}
                                </h3>

                                <p className="mt-3 text-gray-600 leading-7">
                                    {resource.text}
                                </p>

                                <span className="inline-block mt-5 text-green-600 font-semibold text-sm">
                                    Coming Soon →
                                </span>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* ================= FINAL CTA ================= */}
            <section className="bg-[#0b0f19] text-white px-6 py-24">

                <div className="max-w-4xl mx-auto text-center">

                    <div className="text-5xl">
                        🚀
                    </div>

                    <h2 className="mt-6 text-4xl md:text-6xl font-extrabold">
                        Ready to Build Your Career?
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg md:text-xl leading-8">
                        Create your SkillBridge AI profile and start building
                        a smarter career journey today.
                    </p>

                    <Link
                        to="/signup"
                        className="inline-flex mt-9 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-green-900/30"
                    >
                        Create Your Free Profile 🚀
                    </Link>

                </div>
            </section>


            <Footer />
        </div>
    );
};

export default Home;