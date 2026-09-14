import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Terms = () => {
    const sections = [
        ["01", "Acceptance of Terms"],
        ["02", "About SkillBridge AI"],
        ["03", "User Accounts"],
        ["04", "User Responsibilities"],
        ["05", "Career Information & Resumes"],
        ["06", "AI-Powered Features"],
        ["07", "Job Applications"],
        ["08", "Third-Party Services"],
        ["09", "Intellectual Property"],
        ["10", "Prohibited Use"],
        ["11", "Disclaimer"],
        ["12", "Limitation of Liability"],
        ["13", "Account Suspension"],
        ["14", "Changes to Terms"],
        ["15", "Contact Us"],
    ];

    return (
        <div className="min-h-screen bg-[#f4f7f6] text-gray-800">

            <Navbar />

            {/* =========================================
                HERO
            ========================================= */}

            <section className="relative overflow-hidden bg-slate-950 text-white">

                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />

                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

                    <div className="max-w-4xl">

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-300">
                            📋 Terms & Trust
                        </div>

                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
                            Terms & Conditions
                            <span className="text-green-500">.</span>
                        </h1>

                        <p className="mt-5 max-w-3xl text-gray-400 text-base md:text-lg leading-8">
                            These terms explain the rules and conditions
                            that apply when you access or use SkillBridge AI.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">

                            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-gray-300">
                                🤝 Fair Use
                            </div>

                            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-gray-300">
                                🛡️ User Protection
                            </div>

                            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-gray-300">
                                📅 Updated Sep 14, 2026
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* =========================================
                MAIN
            ========================================= */}

            <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-14">

                <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-7">

                    {/* =========================================
                        TABLE OF CONTENTS
                    ========================================= */}

                    <aside className="lg:sticky lg:top-6 lg:self-start">

                        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">

                            <div className="bg-slate-950 text-white p-5">

                                <p className="text-xs uppercase tracking-[0.18em] font-black text-green-400">
                                    On this page
                                </p>

                                <h2 className="text-lg font-black mt-1">
                                    Terms Guide
                                </h2>

                            </div>

                            <div className="p-3">

                                {sections.map(([number, title]) => (
                                    <a
                                        key={number}
                                        href={`#section-${number}`}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 group transition"
                                    >

                                        <span className="text-[11px] font-black text-green-600 w-6">
                                            {number}
                                        </span>

                                        <span className="text-sm text-gray-600 group-hover:text-green-700 font-medium leading-5">
                                            {title}
                                        </span>

                                    </a>
                                ))}

                            </div>

                        </div>

                    </aside>

                    {/* =========================================
                        CONTENT
                    ========================================= */}

                    <div className="space-y-5">

                        {/* 01 */}

                        <section
                            id="section-01"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="01"
                                title="Acceptance of Terms"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                By accessing or using SkillBridge AI, you
                                acknowledge that you have read, understood,
                                and agree to be bound by these Terms &
                                Conditions and our Privacy Policy.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                If you do not agree with these terms, please
                                do not use the SkillBridge AI platform.
                            </p>

                        </section>

                        {/* 02 */}

                        <section
                            id="section-02"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="02"
                                title="About SkillBridge AI"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI is an AI-powered career and
                                portfolio management platform designed to
                                help students and job seekers organize their
                                professional information and use career
                                support tools.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                Features may include resume management,
                                portfolio management, career recommendations,
                                job matching, interview preparation,
                                application tracking, analytics, and other
                                career-related tools.
                            </p>

                        </section>

                        {/* 03 */}

                        <section
                            id="section-03"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="03"
                                title="User Accounts"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                Some features of SkillBridge AI may require
                                you to create an account.
                            </p>

                            <InfoList
                                items={[
                                    "Provide accurate information when creating an account",
                                    "Keep your login credentials secure",
                                    "Do not share your account credentials with unauthorized users",
                                    "Notify us if you believe your account has been compromised",
                                    "Use the platform only for lawful purposes",
                                ]}
                            />

                        </section>

                        {/* 04 */}

                        <section
                            id="section-04"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="04"
                                title="User Responsibilities"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                You are responsible for the information and
                                content you submit to SkillBridge AI.
                            </p>

                            <InfoList
                                items={[
                                    "Do not submit false or misleading information",
                                    "Do not upload content you do not have permission to use",
                                    "Do not attempt to access another user's account",
                                    "Do not interfere with the operation or security of the platform",
                                    "Do not use the service for unlawful activities",
                                ]}
                            />

                        </section>

                        {/* 05 */}

                        <section
                            id="section-05"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="05"
                                title="Career Information & Resumes"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                Users may provide resumes, skills, projects,
                                certificates, career goals, job applications,
                                and other professional information.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                You are responsible for ensuring that the
                                information you provide is accurate and that
                                you have the necessary rights or permissions
                                to submit any uploaded material.
                            </p>

                        </section>

                        {/* 06 AI */}

                        <section
                            id="section-06"
                            className="relative overflow-hidden bg-slate-950 text-white rounded-3xl shadow-xl p-6 md:p-8 scroll-mt-8"
                        >

                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

                            <div className="relative">

                                <SectionHeading
                                    number="06"
                                    title="AI-Powered Features"
                                    dark
                                />

                                <p className="mt-5 text-gray-400 leading-8">
                                    SkillBridge AI may use artificial
                                    intelligence to provide career
                                    recommendations, resume insights,
                                    interview feedback, job matching,
                                    application insights, and other
                                    automated assistance.
                                </p>

                                <div className="mt-5 rounded-2xl border border-green-400/10 bg-green-500/5 p-5">

                                    <p className="text-green-300 font-bold">
                                        Important
                                    </p>

                                    <p className="mt-2 text-gray-400 leading-7">
                                        AI-generated results are intended as
                                        general career assistance. They may
                                        contain errors or omissions and do not
                                        guarantee employment, interviews,
                                        selection, salary, or any specific
                                        career outcome.
                                    </p>

                                </div>

                            </div>

                        </section>

                        {/* 07 */}

                        <section
                            id="section-07"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="07"
                                title="Job Applications"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI may provide tools for tracking
                                and managing job applications.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                SkillBridge AI does not guarantee that a user
                                will receive an interview, job offer,
                                employment, or any particular hiring outcome.
                            </p>

                        </section>

                        {/* 08 */}

                        <section
                            id="section-08"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="08"
                                title="Third-Party Services"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI may integrate or rely on
                                third-party services for hosting, databases,
                                AI processing, email delivery, analytics,
                                authentication, payments, or other
                                functionality.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                Your use of third-party services may also be
                                subject to their respective terms and privacy
                                policies.
                            </p>

                        </section>

                        {/* 09 */}

                        <section
                            id="section-09"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="09"
                                title="Intellectual Property"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                The SkillBridge AI platform, including its
                                branding, interface, original software,
                                design elements, text, graphics, and other
                                proprietary materials, may be protected by
                                applicable intellectual property laws.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                You may not copy, reproduce, modify,
                                distribute, sell, or exploit proprietary
                                SkillBridge AI materials without appropriate
                                authorization.
                            </p>

                        </section>

                        {/* 10 */}

                        <section
                            id="section-10"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="10"
                                title="Prohibited Use"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                You may not use SkillBridge AI to:
                            </p>

                            <InfoList
                                items={[
                                    "Break applicable laws or regulations",
                                    "Attempt unauthorized access to systems or accounts",
                                    "Distribute malware or harmful software",
                                    "Abuse, overload, or disrupt the platform",
                                    "Submit fraudulent or deceptive information",
                                    "Infringe the rights of other people or organizations",
                                    "Use the service for activities that violate applicable policies",
                                ]}
                            />

                        </section>

                        {/* 11 */}

                        <section
                            id="section-11"
                            className="bg-green-50 rounded-3xl border border-green-100 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="11"
                                title="Disclaimer"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI provides career tools and
                                information for general informational and
                                educational purposes.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                Career recommendations, AI-generated
                                suggestions, job matches, interview feedback,
                                resume analysis, and other results should not
                                be treated as professional, legal, financial,
                                or employment guarantees.
                            </p>

                        </section>

                        {/* 12 */}

                        <section
                            id="section-12"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="12"
                                title="Limitation of Liability"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                To the extent permitted by applicable law,
                                SkillBridge AI and its operators shall not be
                                responsible for indirect, incidental,
                                consequential, or special losses resulting
                                from the use of or inability to use the
                                platform.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                Nothing in these terms is intended to exclude
                                or limit liability where such exclusion or
                                limitation is not permitted by applicable law.
                            </p>

                        </section>

                        {/* 13 */}

                        <section
                            id="section-13"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="13"
                                title="Account Suspension or Termination"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                We may suspend, restrict, or terminate access
                                to an account when reasonably necessary to
                                protect the platform, users, third parties,
                                or comply with applicable laws or policies.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                Users may also stop using the service at any
                                time, subject to any applicable obligations.
                            </p>

                        </section>

                        {/* 14 */}

                        <section
                            id="section-14"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="14"
                                title="Changes to These Terms"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI may update these Terms &
                                Conditions as the platform evolves, new
                                features are introduced, or applicable
                                requirements change.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                Updated terms will be published on this page
                                with a revised update date.
                            </p>

                        </section>

                        {/* 15 */}

                        <section
                            id="section-15"
                            className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl p-6 md:p-8 scroll-mt-8"
                        >

                            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

                            <div className="relative">

                                <SectionHeading
                                    number="15"
                                    title="Contact Us"
                                    dark
                                />

                                <p className="mt-5 text-gray-400 leading-8">
                                    If you have questions about these Terms &
                                    Conditions, please contact SkillBridge AI.
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                        <p className="text-xs uppercase tracking-widest font-black text-green-400">
                                            Email
                                        </p>

                                        <p className="mt-2 text-white font-semibold break-all">
                                            support@skillbridgeai.com
                                        </p>

                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                        <p className="text-xs uppercase tracking-widest font-black text-green-400">
                                            Location
                                        </p>

                                        <p className="mt-2 text-white font-semibold">
                                            Lucknow, Uttar Pradesh, India
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </section>

                        {/* =========================================
                            CTA
                        ========================================= */}

                        <section className="rounded-3xl bg-green-600 text-white p-6 md:p-8 shadow-xl">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.18em] font-black text-green-100">
                                        SkillBridge AI
                                    </p>

                                    <h2 className="text-2xl md:text-3xl font-black mt-1">
                                        Need help understanding our terms?
                                    </h2>

                                    <p className="text-green-50 mt-2 leading-6">
                                        Contact us if you have questions about
                                        using the SkillBridge AI platform.
                                    </p>

                                </div>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center rounded-xl bg-white text-green-700 px-6 py-3 font-black hover:bg-gray-100 transition shrink-0"
                                >
                                    Contact Us →
                                </Link>

                            </div>

                        </section>

                        {/* =========================================
                            NAVIGATION
                        ========================================= */}

                        <div className="flex flex-wrap items-center justify-between gap-4 px-2 pt-2">

                            <Link
                                to="/privacy-policy"
                                className="font-bold text-gray-600 hover:text-green-600 transition"
                            >
                                ← Privacy Policy
                            </Link>

                            <Link
                                to="/contact"
                                className="font-bold text-green-600 hover:text-green-700 transition"
                            >
                                Contact SkillBridge AI →
                            </Link>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
};

/* =========================================
   SECTION HEADING
========================================= */

const SectionHeading = ({
    number,
    title,
    dark = false,
}) => {
    return (
        <div className="flex items-start gap-4">

            <div
                className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center font-black text-sm ${dark
                        ? "bg-green-500/10 border border-green-400/20 text-green-300"
                        : "bg-green-50 border border-green-100 text-green-600"
                    }`}
            >
                {number}
            </div>

            <div className="min-w-0">

                <p
                    className={`text-[11px] uppercase tracking-[0.18em] font-black ${dark
                            ? "text-green-400"
                            : "text-green-600"
                        }`}
                >
                    SkillBridge AI
                </p>

                <h2
                    className={`text-2xl md:text-3xl font-black mt-1 ${dark
                            ? "text-white"
                            : "text-slate-950"
                        }`}
                >
                    {title}
                </h2>

            </div>

        </div>
    );
};

/* =========================================
   INFO LIST
========================================= */

const InfoList = ({ items }) => {
    return (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">

            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 border border-gray-200 p-4"
                >

                    <span className="mt-0.5 w-6 h-6 shrink-0 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-green-600 text-sm font-black">
                        ✓
                    </span>

                    <span className="text-gray-600 leading-6">
                        {item}
                    </span>

                </div>
            ))}

        </div>
    );
};

export default Terms;