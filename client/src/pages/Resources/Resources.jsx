import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SEO from "../../components/common/SEO";

const Resources = () => {
    const resources = [
        {
            icon: "📄",
            title: "Resume Guides",
            description:
                "Create a professional, ATS-friendly resume that highlights your skills, projects, education and achievements.",
            topics: [
                "ATS-Friendly Resume",
                "Fresher Resume",
                "Resume Mistakes",
            ],
            link: "/resources/ats-friendly-resume-for-freshers",
            button: "Read Resume Guide",
        },
        {
            icon: "🎯",
            title: "Interview Guides",
            description:
                "Prepare for technical interviews with structured guidance covering programming, DSA, DBMS, SQL, OS and networking.",
            topics: [
                "Technical Interview",
                "DSA Preparation",
                "Interview Questions",
            ],
            link: "/resources/technical-interview-preparation-for-freshers",
            button: "Read Interview Guide",
        },
        {
            icon: "💻",
            title: "Developer Roadmaps",
            description:
                "Follow structured learning paths and understand what to learn to become job-ready for modern software development roles.",
            topics: [
                "MERN Stack",
                "Java Developer",
                "Frontend Developer",
            ],
            link: "/resources/mern-stack-developer-roadmap",
            button: "Read MERN Roadmap",
        },
        {
            icon: "🚀",
            title: "Career & Internship",
            description:
                "Learn practical strategies for finding internships, preparing for placements, networking and getting your first job.",
            topics: [
                "Find Internships",
                "LinkedIn Guide",
                "First Job Preparation",
            ],
            link: "/resources/career-guides-for-students",
            button: "Read Career Guide",
        },
    ];

    return (
        <>
            <SEO
                title="Career Resources for Students — SkillBridge AI"
                description="Explore practical career resources from SkillBridge AI including resume guides, interview preparation, developer roadmaps, internships and fresher job guidance."
                canonical="https://skill-bridge-ai-sage.vercel.app/resources"
            />

            <Navbar />

            <main className="min-h-screen bg-slate-50">

                {/* ================= HERO ================= */}
                <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-16 text-white md:py-20">

                    {/* Green Glow */}
                    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-green-500/15 blur-[100px]" />

                    <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-green-400/10 blur-[100px]" />

                    <div className="relative mx-auto max-w-6xl">

                        <div className="max-w-5xl">

                            {/* Badge */}
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
                                <span>●</span>
                                Student Career Resources
                            </div>

                            {/* Heading */}
                            <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
                                Learn. Prepare.{" "}
                                <span className="text-green-400">
                                    Build Your Career.
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                                Practical career resources designed to help students build
                                stronger resumes, prepare for interviews, develop technical
                                skills and discover career opportunities.
                            </p>

                            {/* Pills */}
                            <div className="mt-6 flex flex-wrap gap-3">

                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm">
                                    🎓 Student First
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm">
                                    🤖 AI Powered
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm">
                                    🚀 Career Focused
                                </span>

                            </div>

                        </div>

                    </div>
                </section>

                {/* ================= SECTION INTRO ================= */}
                <section className="px-6 py-20 md:py-24">

                    <div className="mx-auto max-w-6xl">

                        <div className="mx-auto max-w-3xl text-center">

                            <p className="font-bold tracking-[0.2em] text-green-600">
                                EXPLORE RESOURCES
                            </p>

                            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                                Everything You Need to{" "}
                                <span className="text-green-600">
                                    Move Forward.
                                </span>
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Explore practical guides created around the
                                challenges students face while building their
                                skills and starting their professional journey.
                            </p>

                        </div>

                    </div>
                </section>

                {/* ================= RESOURCE CARDS ================= */}
                <section className="px-6 pb-24">

                    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

                        {resources.map((resource) => (
                            <article
                                key={resource.title}
                                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl md:p-9"
                            >

                                {/* Top Green Glow */}
                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-500/5 blur-3xl transition group-hover:bg-green-500/10" />

                                <div className="relative">

                                    {/* Icon */}
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-green-100">
                                        {resource.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-7 text-2xl font-extrabold text-slate-900 md:text-3xl">
                                        {resource.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-4 text-base leading-8 text-slate-600">
                                        {resource.description}
                                    </p>

                                    {/* Topics */}
                                    <div className="mt-7 space-y-3">

                                        {resource.topics.map((topic) => (
                                            <div
                                                key={topic}
                                                className="flex items-center rounded-xl bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-700 transition group-hover:bg-green-50/60"
                                            >
                                                <span className="mr-3 font-bold text-green-600">
                                                    ✓
                                                </span>

                                                {topic}
                                            </div>
                                        ))}

                                    </div>

                                    {/* Button */}
                                    <Link
                                        to={resource.link}
                                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-green-600/30"
                                    >
                                        {resource.button}
                                        <span>→</span>
                                    </Link>

                                </div>

                            </article>
                        ))}

                    </div>

                </section>

                {/* ================= DARK FEATURE SECTION ================= */}
                <section className="px-6 pb-24">

                    <div className="mx-auto max-w-6xl">

                        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-7 py-14 text-white md:px-12 md:py-16">

                            {/* Glow */}
                            <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[120px]" />

                            <div className="relative grid gap-12 md:grid-cols-2 md:items-center">

                                {/* Left */}
                                <div>

                                    <p className="font-bold tracking-[0.2em] text-green-400">
                                        WHY SKILLBRIDGE AI
                                    </p>

                                    <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                                        Turn confusion into a{" "}
                                        <span className="text-green-400">
                                            clear career path.
                                        </span>
                                    </h2>

                                    <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                                        Learn the right skills, build your
                                        professional profile, prepare for
                                        opportunities and keep improving with
                                        practical career guidance.
                                    </p>

                                    <Link
                                        to="/signup"
                                        className="mt-8 inline-flex rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-green-500"
                                    >
                                        Start Your Journey →
                                    </Link>

                                </div>

                                {/* Right Cards */}
                                <div className="grid gap-4 sm:grid-cols-2">

                                    {[
                                        {
                                            icon: "📄",
                                            title: "Build Better Resumes",
                                        },
                                        {
                                            icon: "🎯",
                                            title: "Prepare for Interviews",
                                        },
                                        {
                                            icon: "💻",
                                            title: "Learn Development",
                                        },
                                        {
                                            icon: "🚀",
                                            title: "Find Opportunities",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                                        >
                                            <div className="text-3xl">
                                                {item.icon}
                                            </div>

                                            <h3 className="mt-4 font-bold text-white">
                                                {item.title}
                                            </h3>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= FINAL CTA ================= */}
                <section className="px-6 pb-24">

                    <div className="mx-auto max-w-5xl">

                        <div className="relative overflow-hidden rounded-[2rem] bg-green-600 px-7 py-14 text-center text-white shadow-2xl shadow-green-600/20 md:px-12">

                            {/* Glow */}
                            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

                            <div className="relative">

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl">
                                    🚀
                                </div>

                                <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
                                    Ready to build your career?
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-green-50">
                                    Join SkillBridge AI and bring your resume,
                                    skills, projects, opportunities and career
                                    goals together in one place.
                                </p>

                                <Link
                                    to="/signup"
                                    className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-green-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
                                >
                                    Get Started Free →
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
};

export default Resources;