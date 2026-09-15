import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

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

const SectionHeading = ({ number, title, dark = false }) => (
    <div className="flex items-start gap-4">
        <div
            className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-black ${dark
                    ? "bg-green-500/10 border border-green-400/20 text-green-400"
                    : "bg-green-50 border border-green-100 text-green-600"
                }`}
        >
            {number}
        </div>

        <div>
            <p
                className={`text-[10px] uppercase tracking-[0.2em] font-black ${dark ? "text-green-400" : "text-green-600"
                    }`}
            >
                SkillBridge AI
            </p>

            <h2
                className={`text-2xl md:text-3xl font-black mt-1 ${dark ? "text-white" : "text-slate-950"
                    }`}
            >
                {title}
            </h2>
        </div>
    </div>
);

const InfoList = ({ items }) => (
    <div className="mt-6 grid md:grid-cols-2 gap-3">
        {items.map((item, index) => (
            <div
                key={index}
                className="flex items-start gap-3 rounded-2xl bg-gray-50 border border-gray-100 p-4 hover:border-green-200 hover:bg-green-50/40 transition"
            >
                <span className="w-7 h-7 shrink-0 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-black text-sm">
                    ✓
                </span>

                <span className="text-gray-600 leading-6 text-sm md:text-base">
                    {item}
                </span>
            </div>
        ))}
    </div>
);

const Terms = () => {
    return (
        <div className="min-h-screen bg-[#f5f7f6] text-gray-800">
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#07130f] text-white">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-bold">
                            📋 Terms & Trust
                        </div>

                        <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                            Terms & Conditions
                            <span className="text-green-400">.</span>
                        </h1>

                        <p className="mt-6 max-w-3xl text-gray-300 text-base md:text-lg leading-8">
                            These terms explain the rules and conditions that
                            apply when you access or use SkillBridge AI.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                                🤝 Fair Use
                            </div>

                            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                                🛡️ User Protection
                            </div>

                            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                                📅 Updated Sep 14, 2026
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid lg:grid-cols-[270px_minmax(0,1fr)] gap-8">

                    {/* TOC */}
                    <aside className="lg:sticky lg:top-6 lg:self-start">
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                            <div className="bg-[#07130f] p-6 text-white">
                                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-green-400">
                                    On This Page
                                </p>

                                <h2 className="text-xl font-black mt-2">
                                    Terms Guide
                                </h2>

                                <p className="text-xs text-gray-500 mt-2">
                                    15 sections
                                </p>
                            </div>

                            <div className="p-3 max-h-[65vh] overflow-y-auto">
                                {sections.map(([number, title]) => (
                                    <a
                                        key={number}
                                        href={`#section-${number}`}
                                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-green-50 group transition"
                                    >
                                        <span className="text-[11px] font-black text-green-600 w-6">
                                            {number}
                                        </span>

                                        <span className="text-sm text-gray-600 group-hover:text-green-700 font-semibold">
                                            {title}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* DOCUMENT */}
                    <div className="space-y-6">

                        {/* 01 */}
                        <section id="section-01" className="legal-card">
                            <SectionHeading number="01" title="Acceptance of Terms" />

                            <p className="legal-text">
                                By accessing or using SkillBridge AI, you
                                acknowledge that you have read, understood,
                                and agree to be bound by these Terms &
                                Conditions and our Privacy Policy.
                            </p>

                            <p className="legal-text">
                                If you do not agree with these terms, please
                                do not use the SkillBridge AI platform.
                            </p>
                        </section>

                        {/* 02 */}
                        <section id="section-02" className="legal-card">
                            <SectionHeading number="02" title="About SkillBridge AI" />

                            <p className="legal-text">
                                SkillBridge AI is an AI-powered career and
                                portfolio management platform designed to
                                help students and job seekers organize their
                                professional information and use career
                                support tools.
                            </p>

                            <p className="legal-text">
                                Features may include resume management,
                                portfolio management, career recommendations,
                                job matching, interview preparation,
                                application tracking, analytics, and other
                                career-related tools.
                            </p>
                        </section>

                        {/* 03 */}
                        <section id="section-03" className="legal-card">
                            <SectionHeading number="03" title="User Accounts" />

                            <p className="legal-text">
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
                        <section id="section-04" className="legal-card">
                            <SectionHeading number="04" title="User Responsibilities" />

                            <p className="legal-text">
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
                        <section id="section-05" className="legal-card">
                            <SectionHeading
                                number="05"
                                title="Career Information & Resumes"
                            />

                            <p className="legal-text">
                                Users may provide resumes, skills, projects,
                                certificates, career goals, job applications,
                                and other professional information.
                            </p>

                            <p className="legal-text">
                                You are responsible for ensuring that the
                                information you provide is accurate and that
                                you have the necessary rights or permissions
                                to submit any uploaded material.
                            </p>
                        </section>

                        {/* 06 */}
                        <section
                            id="section-06"
                            className="relative overflow-hidden bg-[#07130f] text-white rounded-3xl shadow-xl p-7 md:p-9"
                        >
                            <SectionHeading
                                number="06"
                                title="AI-Powered Features"
                                dark
                            />

                            <p className="mt-6 text-gray-400 leading-8">
                                SkillBridge AI may use artificial intelligence
                                to provide career recommendations, resume
                                insights, interview feedback, job matching,
                                application insights, and other automated
                                assistance.
                            </p>

                            <div className="mt-6 rounded-2xl border border-green-400/10 bg-green-500/5 p-5">
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
                        </section>

                        {/* 07 */}
                        <section id="section-07" className="legal-card">
                            <SectionHeading number="07" title="Job Applications" />

                            <p className="legal-text">
                                SkillBridge AI may provide tools for tracking
                                and managing job applications.
                            </p>

                            <p className="legal-text">
                                SkillBridge AI does not guarantee that a user
                                will receive an interview, job offer,
                                employment, or any particular hiring outcome.
                            </p>
                        </section>

                        {/* 08 */}
                        <section id="section-08" className="legal-card">
                            <SectionHeading number="08" title="Third-Party Services" />

                            <p className="legal-text">
                                SkillBridge AI may integrate or rely on
                                third-party services for hosting, databases,
                                AI processing, email delivery, analytics,
                                authentication, payments, or other
                                functionality.
                            </p>

                            <p className="legal-text">
                                Your use of third-party services may also be
                                subject to their respective terms and privacy
                                policies.
                            </p>
                        </section>

                        {/* 09 */}
                        <section id="section-09" className="legal-card">
                            <SectionHeading number="09" title="Intellectual Property" />

                            <p className="legal-text">
                                The SkillBridge AI platform, including its
                                branding, interface, original software,
                                design elements, text, graphics, and other
                                proprietary materials, may be protected by
                                applicable intellectual property laws.
                            </p>

                            <p className="legal-text">
                                You may not copy, reproduce, modify,
                                distribute, sell, or exploit proprietary
                                SkillBridge AI materials without appropriate
                                authorization.
                            </p>
                        </section>

                        {/* 10 */}
                        <section id="section-10" className="legal-card">
                            <SectionHeading number="10" title="Prohibited Use" />

                            <p className="legal-text">
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
                            className="bg-green-50 rounded-3xl border border-green-100 shadow-xl p-7 md:p-9"
                        >
                            <SectionHeading number="11" title="Disclaimer" />

                            <p className="legal-text">
                                SkillBridge AI provides career tools and
                                information for general informational and
                                educational purposes.
                            </p>

                            <p className="legal-text">
                                Career recommendations, AI-generated
                                suggestions, job matches, interview feedback,
                                resume analysis, and other results should not
                                be treated as professional, legal, financial,
                                or employment guarantees.
                            </p>
                        </section>

                        {/* 12 */}
                        <section id="section-12" className="legal-card">
                            <SectionHeading number="12" title="Limitation of Liability" />

                            <p className="legal-text">
                                To the extent permitted by applicable law,
                                SkillBridge AI and its operators shall not be
                                responsible for indirect, incidental,
                                consequential, or special losses resulting
                                from the use of or inability to use the
                                platform.
                            </p>

                            <p className="legal-text">
                                Nothing in these terms is intended to exclude
                                or limit liability where such exclusion or
                                limitation is not permitted by applicable law.
                            </p>
                        </section>

                        {/* 13 */}
                        <section id="section-13" className="legal-card">
                            <SectionHeading
                                number="13"
                                title="Account Suspension or Termination"
                            />

                            <p className="legal-text">
                                We may suspend, restrict, or terminate access
                                to an account when reasonably necessary to
                                protect the platform, users, third parties,
                                or comply with applicable laws or policies.
                            </p>

                            <p className="legal-text">
                                Users may also stop using the service at any
                                time, subject to any applicable obligations.
                            </p>
                        </section>

                        {/* 14 */}
                        <section id="section-14" className="legal-card">
                            <SectionHeading number="14" title="Changes to These Terms" />

                            <p className="legal-text">
                                SkillBridge AI may update these Terms &
                                Conditions as the platform evolves, new
                                features are introduced, or applicable
                                requirements change.
                            </p>

                            <p className="legal-text">
                                Updated terms will be published on this page
                                with a revised update date.
                            </p>
                        </section>

                        {/* 15 */}
                        <section
                            id="section-15"
                            className="relative overflow-hidden rounded-3xl bg-[#07130f] text-white shadow-xl p-7 md:p-9"
                        >
                            <SectionHeading
                                number="15"
                                title="Contact Us"
                                dark
                            />

                            <p className="mt-6 text-gray-400 leading-8">
                                If you have questions about these Terms &
                                Conditions, please contact SkillBridge AI.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mt-7">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-xs uppercase tracking-widest font-black text-green-400">
                                        Email
                                    </p>

                                    <p className="mt-2 font-semibold break-all">
                                        support@skillbridgeai.com
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-xs uppercase tracking-widest font-black text-green-400">
                                        Location
                                    </p>

                                    <p className="mt-2 font-semibold">
                                        Lucknow, Uttar Pradesh, India
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <section className="rounded-3xl bg-green-500 p-7 md:p-9 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] font-black text-green-950">
                                        SkillBridge AI
                                    </p>

                                    <h2 className="text-2xl md:text-3xl font-black text-black mt-2">
                                        Need help understanding our terms?
                                    </h2>

                                    <p className="text-green-950/70 mt-2">
                                        Contact us if you have questions about
                                        using the SkillBridge AI platform.
                                    </p>
                                </div>

                                <Link
                                    to="/contact"
                                    className="inline-flex justify-center bg-black text-white px-7 py-3.5 rounded-xl font-bold hover:bg-gray-900 transition"
                                >
                                    Contact Us →
                                </Link>
                            </div>
                        </section>

                        <div className="flex flex-wrap justify-between gap-4 px-2">
                            <Link
                                to="/privacy-policy"
                                className="font-bold text-gray-500 hover:text-green-600 transition"
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

export default Terms;