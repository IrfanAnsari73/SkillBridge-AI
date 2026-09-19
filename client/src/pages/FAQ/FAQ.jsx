import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SEO from "../../components/common/SEO";

const faqData = [
    {
        question: "What is SkillBridge AI?",
        answer:
            "SkillBridge AI is an AI-powered career platform designed to help students and freshers manage their career journey. It brings resumes, skills, projects, certificates, career guidance, job matching, mock interviews, and career tracking into one platform.",
    },
    {
        question: "Who can use SkillBridge AI?",
        answer:
            "SkillBridge AI is primarily designed for college students, freshers, and early-career developers who want to prepare for internships and jobs and organize their career information in one place.",
    },
    {
        question: "What can I do with SkillBridge AI?",
        answer:
            "You can build your profile, manage skills and projects, upload your resume and certificates, analyze your resume, get AI-powered career guidance, create career roadmaps, match your profile with jobs, practice mock interviews, track applications, and monitor your career progress.",
    },
    {
        question: "Does SkillBridge AI provide resume analysis?",
        answer:
            "Yes. SkillBridge AI includes an AI-powered Resume Analyzer that can review your resume and provide insights about its structure, skills, projects, experience, and overall job readiness.",
    },
    {
        question: "What is the AI Career Advisor?",
        answer:
            "The AI Career Advisor provides career-focused guidance based on the information available in your profile. It can help identify areas to improve and suggest practical next steps for your career preparation.",
    },
    {
        question: "What is the Career Roadmap feature?",
        answer:
            "The Career Roadmap feature helps you organize your learning and career preparation into a structured path. It can provide recommended skills, learning areas, projects, and preparation steps based on your career direction.",
    },
    {
        question: "Can I practice technical interviews?",
        answer:
            "Yes. SkillBridge AI includes an AI Mock Interview feature that helps you practice interview questions and receive feedback so you can improve your interview preparation.",
    },
    {
        question: "Can I track my job applications?",
        answer:
            "Yes. The Job Application Tracker lets you record applications and track their progress through stages such as Applied, Shortlisted, Interview, Selected, or Rejected.",
    },
    {
        question: "Can I manage my resume and certificates?",
        answer:
            "Yes. Your SkillBridge AI profile can be used to organize your resume, certificates, projects, and skills so your career information stays available in one place.",
    },
    {
        question: "Is SkillBridge AI free?",
        answer:
            "SkillBridge AI currently provides access to its available platform features according to the current product setup. Any future premium features, plans, or usage limits will be clearly communicated on the platform.",
    },
    {
        question: "Do I need an account to use SkillBridge AI?",
        answer:
            "Some public resources can be accessed without an account. An account is required for personalized features such as managing your profile, resume, skills, projects, career tools, and application tracking.",
    },
    {
        question: "Is SkillBridge AI only for developers?",
        answer:
            "The platform is initially focused on students and freshers, especially those preparing for technology careers. More career paths and resources can be supported as the platform grows.",
    },
    {
        question: "Where can I find career resources?",
        answer:
            "You can visit the SkillBridge AI Resources section for guides covering ATS-friendly resumes, technical interview preparation, MERN Stack development, internships, job searching, and career preparation.",
    },
    {
        question: "How can I contact SkillBridge AI?",
        answer:
            "You can contact the SkillBridge AI team through the Contact page. For questions, feedback, or other inquiries, use the contact options provided there.",
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <SEO
                title="Frequently Asked Questions — SkillBridge AI"
                description="Find answers to common questions about SkillBridge AI, its AI-powered career tools, resume analysis, career guidance, job matching, mock interviews, and student career resources."
                canonical="https://skill-bridge-ai-sage.vercel.app/faq"
            />

            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-14 text-white md:py-18">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <div className="mb-5 inline-flex items-center rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
                        SkillBridge AI • FAQ
                    </div>

                    <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        Frequently Asked{" "}
                        <span className="text-green-400">Questions.</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                        Everything you need to know about SkillBridge AI, its career
                        tools, resources, and how the platform can help students and
                        freshers prepare for their careers.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Student Focused
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            AI Powered
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Career Ready
                        </span>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 py-16 md:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                            Have Questions?
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                            Everything You Need to Know
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                            Explore the answers below to understand how SkillBridge AI works
                            and which features are available for your career preparation.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${isOpen
                                            ? "border-green-300 shadow-lg shadow-green-100"
                                            : "border-slate-200 shadow-sm"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-base font-bold text-slate-900 md:text-lg">
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-medium transition-all ${isOpen
                                                    ? "bg-green-600 text-white"
                                                    : "bg-green-50 text-green-700"
                                                }`}
                                        >
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-slate-100 px-5 pb-6 pt-4 md:px-6">
                                            <p className="leading-7 text-slate-600">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Resources CTA */}
            <section className="bg-slate-950 px-6 py-16 text-white">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                        Keep Learning
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                        Explore Our Career Resources
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                        Learn how to build an ATS-friendly resume, prepare for technical
                        interviews, learn MERN Stack development, and improve your
                        internship and job-search strategy.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/resources"
                            className="rounded-xl bg-green-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-green-400"
                        >
                            Explore Resources →
                        </Link>

                        <Link
                            to="/contact"
                            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default FAQ;