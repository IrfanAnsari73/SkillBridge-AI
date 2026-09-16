import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SEO from "../../components/common/SEO";

const About = () => {
    const features = [
        {
            icon: "🤖",
            title: "AI Career Guidance",
            text: "Get personalized career guidance based on your skills, goals and interests.",
        },
        {
            icon: "📄",
            title: "Resume Intelligence",
            text: "Analyze your resume and discover practical ways to improve your profile.",
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
        {
            icon: "📊",
            title: "Career Analytics",
            text: "Understand your career progress and identify areas that need improvement.",
        },
        {
            icon: "🎯",
            title: "Career Goals",
            text: "Set meaningful goals and track your progress as you move forward.",
        },
    ];

    const founderHighlights = [
        {
            icon: "💻",
            title: "Full Stack Development",
            text: "Building modern web applications with practical, real-world technologies.",
        },
        {
            icon: "🤖",
            title: "AI-Powered Solutions",
            text: "Exploring AI to create smarter and more useful student-focused products.",
        },
        {
            icon: "🎓",
            title: "Student-Focused",
            text: "Understanding the challenges students face while building their careers.",
        },
        {
            icon: "🚀",
            title: "Product Builder",
            text: "Turning ideas into useful digital products designed to solve real problems.",
        },
    ];

    const reasons = [
        "One connected place for your career journey",
        "AI-powered tools for practical career preparation",
        "Simple profile, resume and portfolio management",
        "Progress tracking and career planning",
        "Designed with students and early-career professionals in mind",
        "Focused on actionable career improvement",
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">

            {/* ================= SEO ================= */}
            <SEO
                title="About SkillBridge AI — AI-Powered Career Platform"
                description="Learn about SkillBridge AI, an AI-powered career platform designed to help students organize their professional journey, build stronger profiles, prepare for opportunities, and plan their careers."
                canonical="https://skill-bridge-ai-sage.vercel.app/about"
            />

            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#07130f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
                    <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-green-400/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">
                    <div className="max-w-4xl">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-medium mb-7">
                            <span className="w-2 h-2 bg-green-400 rounded-full" />
                            About SkillBridge AI
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Helping Students
                            <span className="text-green-400">
                                {" "}Build Better Careers.
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
                            SkillBridge AI is an AI-powered career platform designed
                            to help students organize their professional journey,
                            understand their strengths and prepare for real-world
                            opportunities.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-8">
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                                🎓 Student First
                            </span>

                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                                🤖 AI Powered
                            </span>

                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                                🚀 Career Focused
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= ABOUT INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    <div>
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
                            Why SkillBridge AI?
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
                            Your skills deserve a
                            <span className="text-green-600">
                                {" "}clear direction.
                            </span>
                        </h2>

                        <p className="text-gray-600 mt-6 leading-relaxed">
                            Students build skills, complete projects, earn
                            certificates and prepare resumes — but all of this
                            information is often scattered across different
                            platforms.
                        </p>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            SkillBridge AI brings these pieces together and adds
                            intelligent career tools to help students make better
                            decisions and take meaningful next steps.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-7">
                            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                                Student First
                            </span>

                            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                AI Powered
                            </span>

                            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                                Career Focused
                            </span>
                        </div>
                    </div>

                    {/* Visual Card */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full" />

                        <div className="relative bg-[#07130f] rounded-3xl p-8 shadow-2xl">
                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-gray-400 text-sm">
                                        Your Career Journey
                                    </p>

                                    <h3 className="text-2xl font-bold text-white mt-1">
                                        Connected. Organized. Smarter.
                                    </h3>
                                </div>

                                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-xl">
                                    🚀
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                {[
                                    ["📄", "Resume", "Build a stronger profile"],
                                    ["🧠", "Skills", "Track your capabilities"],
                                    ["💻", "Projects", "Showcase your work"],
                                    ["🎯", "Career", "Plan your next step"],
                                ].map(([icon, title, text]) => (
                                    <div
                                        key={title}
                                        className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center text-lg">
                                            {icon}
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-white">
                                                {title}
                                            </h4>

                                            <p className="text-sm text-gray-400">
                                                {text}
                                            </p>
                                        </div>

                                        <span className="ml-auto text-green-400">
                                            ✓
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= THE PROBLEM ================= */}
            <section className="bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="max-w-3xl">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
                            The Problem
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
                            Building a career shouldn't feel
                            <span className="text-green-600">
                                {" "}scattered.
                            </span>
                        </h2>

                        <p className="text-gray-600 mt-5 leading-relaxed">
                            Students often manage their resumes, projects,
                            certificates, skills, applications and career
                            planning across different platforms.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">

                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                📄
                            </div>

                            <h3 className="text-xl font-bold mt-6">
                                Scattered Profiles
                            </h3>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                Resume, projects, certificates and skills often
                                live in different places.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                🎯
                            </div>

                            <h3 className="text-xl font-bold mt-6">
                                Unclear Direction
                            </h3>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                It can be difficult to know which skills,
                                opportunities and career path to focus on.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                💼
                            </div>

                            <h3 className="text-xl font-bold mt-6">
                                Difficult Preparation
                            </h3>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                Preparing for jobs, interviews and applications
                                requires time and the right guidance.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= MISSION + VISION ================= */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-[#07130f] text-white rounded-3xl p-8 sm:p-10 shadow-xl">
                            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-xl">
                                🎯
                            </div>

                            <h2 className="text-2xl font-extrabold mt-6">
                                Our Mission
                            </h2>

                            <p className="text-gray-400 mt-4 leading-relaxed">
                                To make career preparation simpler, smarter and
                                more accessible for students by bringing their
                                professional journey into one connected platform.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-3xl p-8 sm:p-10 border border-green-100 shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-xl">
                                🚀
                            </div>

                            <h2 className="text-2xl font-extrabold mt-6">
                                Our Vision
                            </h2>

                            <p className="text-gray-600 mt-4 leading-relaxed">
                                To build a student-focused career ecosystem where
                                every learner can understand their potential,
                                prepare confidently and move closer to their
                                career goals.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= WHAT WE OFFER ================= */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
                            What We Offer
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
                            Everything Students Need to
                            <span className="text-green-600">
                                {" "}Move Forward
                            </span>
                        </h2>

                        <p className="text-gray-600 mt-5 leading-relaxed">
                            SkillBridge AI combines career management,
                            preparation and artificial intelligence into one
                            connected experience.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-gray-50 border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-green-200 transition duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold mt-6">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-500 mt-3 leading-relaxed">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= FOUNDER ================= */}
            <section className="bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
                            Meet the Founder
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
                            Built with a
                            <span className="text-green-600">
                                {" "}student-first vision.
                            </span>
                        </h2>

                        <p className="text-gray-600 mt-5 leading-relaxed">
                            SkillBridge AI started with a simple idea — make it
                            easier for students to organize their career journey
                            and take meaningful steps toward their goals.
                        </p>
                    </div>

                    <div className="mt-14 bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">

                        <div className="grid lg:grid-cols-2">

                            {/* Founder Photo */}
                            <div className="relative bg-[#07130f] min-h-[500px] flex items-center justify-center p-8 overflow-hidden">

                                <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />

                                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                                <div className="relative">
                                    <div className="absolute -inset-3 rounded-[2rem] bg-green-500/20 blur-xl" />

                                    <div className="relative rounded-[2rem] overflow-hidden border-4 border-green-400/30 shadow-2xl">
                                        <img
                                            src="/founder.png"
                                            alt="Irfan Ansari - Founder of SkillBridge AI"
                                            className="w-full max-w-md h-[460px] object-cover"
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* Founder Details */}
                            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">

                                <span className="inline-flex w-fit px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-bold">
                                    🚀 Founder & Builder
                                </span>

                                <h3 className="text-3xl sm:text-4xl font-extrabold mt-5">
                                    Irfan Ansari
                                </h3>

                                <p className="text-green-600 font-bold mt-2">
                                    Founder & Builder — SkillBridge AI
                                </p>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    SkillBridge AI was created with the vision of
                                    helping students bring their entire career
                                    journey into one connected platform.
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    From managing resumes, skills and projects to
                                    preparing for interviews and discovering career
                                    opportunities, the goal is to make career
                                    development simpler, smarter and more
                                    accessible.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                    {founderHighlights.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl bg-gray-50 border border-gray-100 p-4 hover:border-green-200 hover:bg-green-50/40 transition"
                                        >
                                            <div className="text-xl">
                                                {item.icon}
                                            </div>

                                            <h4 className="font-bold mt-2">
                                                {item.title}
                                            </h4>

                                            <p className="text-xs text-gray-500 mt-1 leading-5">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-8">
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-3 rounded-xl bg-[#07130f] text-white font-bold hover:bg-black transition"
                                    >
                                        LinkedIn →
                                    </a>

                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-3 rounded-xl border border-gray-200 text-gray-800 font-bold hover:border-green-300 hover:text-green-700 transition"
                                    >
                                        GitHub →
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= WHY SKILLBRIDGE ================= */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
                                Why SkillBridge AI
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
                                More than a profile.
                                <span className="text-green-600">
                                    {" "}A career workspace.
                                </span>
                            </h2>

                            <p className="text-gray-600 mt-5 leading-relaxed">
                                SkillBridge AI is designed to connect the different
                                parts of a student's career journey instead of
                                treating them as separate tasks.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {reasons.map((reason, index) => (
                                <div
                                    key={reason}
                                    className="flex items-start gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-md transition"
                                >
                                    <div className="w-8 h-8 shrink-0 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-black text-sm">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <p className="text-sm font-semibold text-gray-700 leading-6">
                                        {reason}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= AI SECTION ================= */}
            <section className="bg-[#07130f] text-white">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
                                Built With AI
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
                                Intelligence that helps you
                                <span className="text-green-400">
                                    {" "}take action.
                                </span>
                            </h2>

                            <p className="text-gray-400 mt-5 leading-relaxed">
                                Instead of simply storing career information,
                                SkillBridge AI uses AI-powered tools to help
                                students understand their profile and identify
                                practical next steps.
                            </p>

                            <div className="mt-7">
                                <Link
                                    to="/signup"
                                    className="inline-flex bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-green-400 transition"
                                >
                                    Explore SkillBridge →
                                </Link>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Resume Analysis",
                                "Career Advisor",
                                "Job Matching",
                                "Mock Interviews",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="border border-white/10 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition"
                                >
                                    <div className="text-green-400 text-sm font-bold">
                                        0{index + 1}
                                    </div>

                                    <h3 className="font-bold text-lg mt-3">
                                        {item}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2">
                                        AI-assisted career preparation.
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="px-6 py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto rounded-3xl bg-green-500 overflow-hidden shadow-xl">

                    <div className="px-8 py-14 sm:px-14 text-center">
                        <span className="inline-block px-4 py-2 rounded-full bg-black/10 text-black text-sm font-bold">
                            Your Career Starts Here
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-5">
                            Start building your career today.
                        </h2>

                        <p className="text-black/70 mt-4 max-w-2xl mx-auto">
                            Create your free SkillBridge AI profile and bring
                            your career journey together in one place.
                        </p>

                        <Link
                            to="/signup"
                            className="inline-flex mt-7 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition"
                        >
                            Get Started Free →
                        </Link>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;