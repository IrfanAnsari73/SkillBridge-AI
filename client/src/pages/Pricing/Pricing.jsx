import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SEO from "../../components/common/SEO";

const Pricing = () => {
    // =====================================================
    // FREE FEATURES
    // =====================================================

    const freeFeatures = [
        "Profile management",
        "Skills management",
        "Projects management",
        "Certificates management",
        "Portfolio management",
        "Resume upload & download",
        "Job Applications tracking",
        "2 Resume Analyzer uses / month",
        "5 Career Advisor uses / month",
        "3 Career Roadmap uses / month",
        "5 Job Matcher uses / month",
        "2 Mock Interview uses / month",
    ];

    // =====================================================
    // PRO FEATURES
    // =====================================================

    const proFeatures = [
        "Everything included in Free",
        "20 Resume Analyzer uses / month",
        "50 Career Advisor uses / month",
        "20 Career Roadmap uses / month",
        "50 Job Matcher uses / month",
        "20 Mock Interview uses / month",
        "20 Career Analytics uses / month",
        "30 AI Application Insights / month",
        "30 Career Action Center uses / month",
        "Higher AI usage limits",
        "Ad-free experience",
        "30-day Pro subscription",
    ];

    // =====================================================
    // AI TOOLS
    // =====================================================

    const aiTools = [
        {
            name: "Job Matcher",
            icon: "🎯",
            description: "Compare your profile with job opportunities.",
            free: 5,
            pro: 50,
        },
        {
            name: "Career Advisor",
            icon: "🤖",
            description: "Get AI-powered career guidance.",
            free: 5,
            pro: 50,
        },
        {
            name: "Resume Analyzer",
            icon: "📄",
            description: "Improve your resume with AI insights.",
            free: 2,
            pro: 20,
        },
        {
            name: "Mock Interview",
            icon: "🎤",
            description: "Practice interview questions with AI.",
            free: 2,
            pro: 20,
        },
        {
            name: "Career Roadmap",
            icon: "🗺️",
            description: "Build a structured career learning path.",
            free: 3,
            pro: 20,
        },
        {
            name: "Career Analytics",
            icon: "📊",
            description: "Understand your career progress.",
            free: 3,
            pro: 20,
        },
        {
            name: "Application Insights",
            icon: "💼",
            description: "Get insights into your job applications.",
            free: 3,
            pro: 30,
        },
        {
            name: "Career Action Center",
            icon: "🚀",
            description: "Turn career goals into actionable steps.",
            free: 5,
            pro: 30,
        },
    ];

    // =====================================================
    // COMPARISON
    // =====================================================

    const comparison = [
        ["Profile, Skills & Projects", "✓", "✓"],
        ["Certificates & Portfolio", "✓", "✓"],
        ["Resume Management", "✓", "✓"],
        ["Job Applications", "✓", "✓"],
        ["Resume Analyzer", "2 / month", "20 / month"],
        ["Career Advisor", "5 / month", "50 / month"],
        ["Career Roadmap", "3 / month", "20 / month"],
        ["Job Matcher", "5 / month", "50 / month"],
        ["Mock Interview", "2 / month", "20 / month"],
        ["Career Analytics", "3 / month", "20 / month"],
        ["AI Application Insights", "3 / month", "30 / month"],
        ["Career Action Center", "5 / month", "30 / month"],
        ["Ad-free experience", "—", "✓"],
    ];

    // =====================================================
    // FAQ
    // =====================================================

    const faqs = [
        [
            "Can I use SkillBridge AI for free?",
            "Yes. The Free plan provides core career management features and limited monthly AI usage.",
        ],
        [
            "How long does Pro last?",
            "The current Pro plan is configured for 30 days.",
        ],
        [
            "Do AI limits reset?",
            "Yes. AI usage limits are calculated on a monthly basis.",
        ],
        [
            "Can I upgrade right now?",
            "The Pro payment system is not live yet. Payments will be enabled after the payment integration phase.",
        ],
        [
            "Will I lose my data if I upgrade?",
            "No. Pro is an upgrade to your existing account and does not require creating a separate account.",
        ],
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* =====================================================
          SEO
      ===================================================== */}

            <SEO
                title="Pricing | SkillBridge AI"
                description="Explore SkillBridge AI Free and Pro plans for resume management, AI career guidance, job matching, interview preparation and career tools."
                canonical="https://skill-bridge-ai-sage.vercel.app/pricing"
            />

            {/* =====================================================
          NAVBAR
      ===================================================== */}

            <Navbar />

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="relative overflow-hidden bg-[#031a12] px-6 py-24 sm:py-28">

                {/* Background glow */}

                <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-3xl" />

                <div className="relative mx-auto max-w-6xl text-center">

                    {/* Badge */}

                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">

                        <span className="h-2 w-2 rounded-full bg-green-400" />

                        Simple & Transparent Pricing

                    </div>

                    {/* Heading */}

                    <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">

                        Invest in your{" "}

                        <span className="text-green-400">
                            career growth.
                        </span>

                    </h1>

                    {/* Description */}

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">

                        Start building your career for free. Upgrade to Pro when you need
                        more AI power, deeper insights, and higher usage limits.

                    </p>

                    {/* Highlights */}

                    <div className="mt-8 flex flex-wrap justify-center gap-3">

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                            ✓ Student focused
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                            ✓ AI powered
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                            ✓ Career ready
                        </span>

                    </div>

                </div>
            </section>

            {/* =====================================================
          PRICING CARDS
      ===================================================== */}

            <section className="relative overflow-hidden bg-slate-50 px-6 py-20 sm:py-24">

                <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

                <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">

                    {/* Section heading */}

                    <div className="mb-14 text-center">

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                            Choose your plan
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                            Start free. Upgrade when you need more.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                            Both plans give you the tools to build a stronger career.
                            Pro simply gives you more AI power.
                        </p>

                    </div>

                    {/* Plans */}

                    <div className="grid gap-8 lg:grid-cols-2">

                        {/* =================================================
                FREE PLAN
            ================================================= */}

                        <div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl sm:p-10">

                            {/* Top accent */}

                            <div className="absolute left-0 right-0 top-0 h-1 bg-slate-200 transition-all duration-300 group-hover:bg-green-500" />

                            <div className="flex items-start justify-between gap-5">

                                <div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl">
                                        🌱
                                    </div>

                                    <p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">
                                        Starter
                                    </p>

                                    <h3 className="mt-2 text-3xl font-black text-slate-950">
                                        Free
                                    </h3>

                                    <p className="mt-3 max-w-sm leading-6 text-slate-600">
                                        Everything you need to start organizing your career
                                        journey.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">

                                    <div className="text-3xl font-black text-slate-900">
                                        ₹0
                                    </div>

                                    <div className="text-xs font-medium text-slate-500">
                                        forever
                                    </div>

                                </div>

                            </div>

                            <div className="my-8 h-px bg-slate-200" />

                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                                What's included
                            </h4>

                            <ul className="mt-5 space-y-3">

                                {freeFeatures.map((feature, index) => (

                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                    >

                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-green-700">
                                            ✓
                                        </span>

                                        <span>
                                            {feature}
                                        </span>

                                    </li>

                                ))}

                            </ul>

                            <Link
                                to="/signup"
                                className="mt-9 block w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-6 py-3.5 text-center font-bold text-slate-800 transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700"
                            >
                                Get Started Free →
                            </Link>

                        </div>

                        {/* =================================================
                PRO PLAN
            ================================================= */}

                        <div className="group relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-green-500 bg-[#031a12] p-8 shadow-2xl shadow-green-900/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-900/30 sm:p-10">

                            {/* Glow */}

                            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

                            {/* Recommended badge */}

                            <div className="absolute right-6 top-0">

                                <span className="inline-flex items-center gap-2 rounded-b-2xl bg-green-500 px-5 py-2 text-sm font-black text-black shadow-lg">
                                    ★ Recommended
                                </span>

                            </div>

                            <div className="relative flex items-start justify-between gap-5 pt-5">

                                <div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-xl ring-1 ring-green-500/20">
                                        ⚡
                                    </div>

                                    <p className="mt-5 text-sm font-bold uppercase tracking-wider text-green-400">
                                        For serious career growth
                                    </p>

                                    <h3 className="mt-2 text-3xl font-black text-white">
                                        Pro
                                    </h3>

                                    <p className="mt-3 max-w-sm leading-6 text-slate-300">
                                        More AI power and higher limits to accelerate your career
                                        preparation.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4 text-center">

                                    <div className="text-3xl font-black text-green-400">
                                        ₹499
                                    </div>

                                    <div className="text-xs font-medium text-slate-400">
                                        / 30 days
                                    </div>

                                </div>

                            </div>

                            <div className="relative my-8 h-px bg-white/10" />

                            <h4 className="relative text-sm font-bold uppercase tracking-wider text-green-400">
                                Everything in Free, plus
                            </h4>

                            <ul className="relative mt-5 space-y-3">

                                {proFeatures.map((feature, index) => (

                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                                    >

                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-black text-black">
                                            ✓
                                        </span>

                                        <span>
                                            {feature}
                                        </span>

                                    </li>

                                ))}

                            </ul>

                            <button
                                type="button"
                                disabled
                                className="relative mt-9 w-full cursor-not-allowed rounded-xl bg-green-500 px-6 py-4 font-black text-black opacity-90 shadow-lg shadow-green-500/20"
                            >
                                Upgrade to Pro
                            </button>

                            <p className="relative mt-3 text-center text-xs text-slate-500">
                                Payments will be available soon.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
          AI USAGE
      ===================================================== */}

            <section className="relative overflow-hidden bg-white px-6 py-20 sm:py-24">

                {/* Background */}

                <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

                <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">

                    {/* Heading */}

                    <div className="mx-auto max-w-3xl text-center">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#031a12] text-2xl text-green-400 shadow-xl shadow-green-900/10">
                            ✦
                        </div>

                        <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-green-600">
                            AI Usage
                        </p>

                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                            More AI power.
                            <span className="text-green-600">
                                {" "}More career progress.
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                            Use SkillBridge AI's career tools every month with flexible
                            limits designed for students and job seekers.
                        </p>

                    </div>

                    {/* AI Cards */}

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {aiTools.map((item) => (

                            <div
                                key={item.name}
                                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/10"
                            >

                                {/* Top accent */}

                                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Header */}

                                <div className="flex items-start justify-between">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-2xl ring-1 ring-green-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-100">
                                        {item.icon}
                                    </div>

                                    <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-green-700">
                                        AI Tool
                                    </span>

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-lg font-black text-slate-950">
                                    {item.name}
                                </h3>

                                {/* Description */}

                                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>

                                {/* Divider */}

                                <div className="my-6 h-px bg-slate-100" />

                                {/* Usage */}

                                <div className="grid grid-cols-2 gap-3">

                                    {/* Free */}

                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                        <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                            Free
                                        </p>

                                        <p className="mt-2 text-3xl font-black text-slate-900">
                                            {item.free}
                                        </p>

                                        <p className="mt-1 text-[11px] text-slate-500">
                                            uses / month
                                        </p>

                                    </div>

                                    {/* Pro */}

                                    <div className="rounded-2xl border border-green-200 bg-green-50 p-4">

                                        <div className="flex items-center justify-between">

                                            <p className="text-[10px] font-black uppercase tracking-wider text-green-700">
                                                Pro
                                            </p>

                                            <span className="text-xs text-green-600">
                                                ✦
                                            </span>

                                        </div>

                                        <p className="mt-2 text-3xl font-black text-green-600">
                                            {item.pro}
                                        </p>

                                        <p className="mt-1 text-[11px] text-green-700/70">
                                            uses / month
                                        </p>

                                    </div>

                                </div>

                                {/* Usage bar */}

                                <div className="mt-5">

                                    <div className="mb-2 flex items-center justify-between">

                                        <span className="text-[11px] font-medium text-slate-400">
                                            Monthly capacity
                                        </span>

                                        <span className="text-[11px] font-bold text-green-600">
                                            Pro
                                        </span>

                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500 group-hover:from-green-500 group-hover:to-emerald-500"
                                            style={{
                                                width: `${Math.min(
                                                    (item.pro / item.free) * 10,
                                                    100
                                                )}%`,
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Note */}

                    <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-green-100 bg-green-50 px-5 py-4 text-center">

                        <span className="text-lg">
                            ✨
                        </span>

                        <p className="text-sm font-medium text-green-800">
                            AI usage resets every month. Upgrade to Pro for significantly
                            higher limits.
                        </p>

                    </div>

                </div>

            </section>

            {/* =====================================================
          COMPARISON
      ===================================================== */}

            <section className="bg-slate-50 px-6 py-20 sm:py-24">

                <div className="mx-auto max-w-6xl">

                    <div className="text-center">

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-green-600">
                            Compare plans
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                            Everything clearly laid out.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                            See exactly what you get with Free and what Pro unlocks.
                        </p>

                    </div>

                    <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                        {/* Header */}

                        <div className="grid grid-cols-3 bg-[#031a12] px-5 py-5 text-sm font-bold sm:px-8">

                            <div className="text-white">
                                Feature
                            </div>

                            <div className="text-center text-slate-300">
                                Free
                            </div>

                            <div className="text-center text-green-400">
                                Pro
                            </div>

                        </div>

                        {/* Rows */}

                        {comparison.map((row, index) => (

                            <div
                                key={index}
                                className="grid grid-cols-3 border-t border-slate-100 px-5 py-4 text-sm transition hover:bg-green-50/40 sm:px-8"
                            >

                                <div className="font-medium text-slate-700">
                                    {row[0]}
                                </div>

                                <div className="text-center text-slate-500">
                                    {row[1]}
                                </div>

                                <div className="text-center font-semibold text-green-600">
                                    {row[2]}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* =====================================================
          WHY PRO
      ===================================================== */}

            <section className="bg-white px-6 py-20 sm:py-24">

                <div className="mx-auto max-w-6xl">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        {/* Left */}

                        <div>

                            <p className="text-sm font-black uppercase tracking-[0.2em] text-green-600">
                                Why Pro?
                            </p>

                            <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950">

                                Turn more AI usage into{" "}

                                <span className="text-green-600">
                                    more career progress.
                                </span>

                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-slate-600">
                                Pro is designed for students and job seekers who are actively
                                preparing for internships, placements, interviews and
                                opportunities.
                            </p>

                            <div className="mt-7">

                                <Link
                                    to="/signup"
                                    className="inline-flex items-center rounded-xl bg-[#031a12] px-6 py-3.5 font-bold text-white transition hover:bg-green-600"
                                >
                                    Start Free →
                                </Link>

                            </div>

                        </div>

                        {/* Right cards */}

                        <div className="grid gap-4 sm:grid-cols-2">

                            {[
                                [
                                    "01",
                                    "Higher AI limits",
                                    "Use your career AI tools more often.",
                                ],
                                [
                                    "02",
                                    "Better preparation",
                                    "Practice, analyze and improve continuously.",
                                ],
                                [
                                    "03",
                                    "Career focused",
                                    "Keep your career workflow in one platform.",
                                ],
                                [
                                    "04",
                                    "Ad-free experience",
                                    "Stay focused while using SkillBridge AI.",
                                ],
                            ].map(([number, title, description]) => (

                                <div
                                    key={number}
                                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-lg"
                                >

                                    <span className="text-sm font-black text-green-600">
                                        {number}
                                    </span>

                                    <h3 className="mt-3 font-bold text-slate-950">
                                        {title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
          FAQ
      ===================================================== */}

            <section className="bg-slate-50 px-6 py-20 sm:py-24">

                <div className="mx-auto max-w-4xl">

                    <div className="text-center">

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-green-600">
                            FAQ
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                            Frequently asked questions
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                            Everything you need to know about SkillBridge AI plans.
                        </p>

                    </div>

                    <div className="mt-12 space-y-4">

                        {faqs.map(([question, answer]) => (

                            <details
                                key={question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-green-200 hover:shadow-sm"
                            >

                                <summary className="cursor-pointer list-none font-bold text-slate-950">

                                    <div className="flex items-center justify-between gap-5">

                                        <span>
                                            {question}
                                        </span>

                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-xl font-normal text-green-600 transition group-open:rotate-45">
                                            +
                                        </span>

                                    </div>

                                </summary>

                                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                                    {answer}
                                </p>

                            </details>

                        ))}

                    </div>

                </div>
            </section>

            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section className="bg-white px-6 py-16">

                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-green-500 px-7 py-12 shadow-xl shadow-green-900/10 sm:px-12 sm:py-14">

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        <div className="max-w-2xl">

                            <p className="text-sm font-black uppercase tracking-[0.2em] text-black/70">
                                Build your career smarter
                            </p>

                            <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl">
                                Start building your career today.
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-black/70">
                                Start free and explore everything SkillBridge AI can do for
                                your career journey.
                            </p>

                        </div>

                        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                            <Link
                                to="/signup"
                                className="rounded-xl bg-black px-7 py-4 text-center font-black text-white transition hover:bg-slate-900"
                            >
                                Get Started Free →
                            </Link>

                            <button
                                type="button"
                                disabled
                                className="cursor-not-allowed rounded-xl bg-black/20 px-7 py-4 font-black text-black/60"
                            >
                                Pro Coming Soon
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
          FOOTER
      ===================================================== */}

            <Footer />

        </div>
    );
};

export default Pricing;