import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SEO from "../../components/common/SEO";

const sections = [
    ["01", "Introduction"],
    ["02", "Information We Collect"],
    ["03", "Account Information"],
    ["04", "Resume & Career Data"],
    ["05", "AI-Powered Features"],
    ["06", "How We Use Information"],
    ["07", "Third-Party Services"],
    ["08", "Cookies"],
    ["09", "Advertising & AdSense"],
    ["10", "Data Security"],
    ["11", "Data Retention"],
    ["12", "Your Rights"],
    ["13", "Children's Privacy"],
    ["14", "Changes"],
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

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#f5f7f6] text-gray-800">

            {/* ================= SEO ================= */}
            <SEO
                title="Privacy Policy — SkillBridge AI"
                description="Read the SkillBridge AI Privacy Policy to understand how we collect, use, protect, and manage information when you use our AI-powered career platform."
                canonical="https://skill-bridge-ai-sage.vercel.app/privacy-policy"
            />

            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#07130f] text-white">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">
                    <div className="max-w-4xl">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-bold">
                            <span>🔐</span>
                            Privacy & Trust
                        </div>

                        <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                            Privacy Policy
                            <span className="text-green-400">.</span>
                        </h1>

                        <p className="mt-6 max-w-3xl text-gray-300 text-base md:text-lg leading-8">
                            Transparency matters. Learn how SkillBridge AI
                            collects, uses, protects, and manages information
                            while you use our career platform.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                                🛡️ Your Privacy Matters
                            </div>

                            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                                🔒 Secure Platform
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
                                    Privacy Guide
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
                            <SectionHeading
                                number="01"
                                title="Introduction"
                            />

                            <p className="legal-text">
                                SkillBridge AI is an AI-powered career and
                                portfolio management platform designed to help
                                students and job seekers organize their career
                                information, build professional profiles,
                                manage applications, and use AI-powered career
                                tools.
                            </p>

                            <p className="legal-text">
                                By using SkillBridge AI, you agree to the
                                practices described in this Privacy Policy.
                            </p>
                        </section>

                        {/* 02 */}
                        <section id="section-02" className="legal-card">
                            <SectionHeading
                                number="02"
                                title="Information We Collect"
                            />

                            <p className="legal-text">
                                Depending on how you use SkillBridge AI, we may
                                collect information such as:
                            </p>

                            <InfoList
                                items={[
                                    "Name and account information",
                                    "Email address",
                                    "Profile and career information",
                                    "Skills and professional interests",
                                    "Projects and certificates",
                                    "Resume information and uploaded files",
                                    "Job application information",
                                    "Career goals and progress information",
                                    "Information submitted through contact forms",
                                ]}
                            />
                        </section>

                        {/* 03 */}
                        <section id="section-03" className="legal-card">
                            <SectionHeading
                                number="03"
                                title="Account Information"
                            />

                            <p className="legal-text">
                                When you create an account, we may collect
                                information such as your name, email address,
                                and authentication-related information.
                            </p>

                            <p className="legal-text">
                                This information is used to create and maintain
                                your account and provide the services available
                                through SkillBridge AI.
                            </p>
                        </section>

                        {/* 04 */}
                        <section id="section-04" className="legal-card">
                            <SectionHeading
                                number="04"
                                title="Resume and Career Data"
                            />

                            <p className="legal-text">
                                If you upload a resume or provide career-related
                                information, that information may be processed
                                to provide features such as resume analysis,
                                career recommendations, job matching, and
                                other career-related functionality.
                            </p>

                            <p className="legal-text">
                                You should only upload information that you have
                                the right to provide and process.
                            </p>
                        </section>

                        {/* 05 */}
                        <section
                            id="section-05"
                            className="relative overflow-hidden bg-[#07130f] text-white rounded-3xl shadow-xl p-7 md:p-9"
                        >
                            <div className="absolute -right-20 -top-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                            <div className="relative">
                                <SectionHeading
                                    number="05"
                                    title="AI-Powered Features"
                                    dark
                                />

                                <p className="mt-6 text-gray-400 leading-8">
                                    SkillBridge AI provides features that use
                                    artificial intelligence to generate career
                                    suggestions, resume insights, interview
                                    feedback, job matching results, and other
                                    recommendations.
                                </p>

                                <p className="mt-4 text-gray-400 leading-8">
                                    AI-generated information is provided for
                                    informational and career-support purposes
                                    and should not be considered a guarantee of
                                    employment, interviews, selection, or any
                                    specific career outcome.
                                </p>
                            </div>
                        </section>

                        {/* 06 */}
                        <section id="section-06" className="legal-card">
                            <SectionHeading
                                number="06"
                                title="How We Use Information"
                            />

                            <p className="legal-text">
                                Information may be used to:
                            </p>

                            <InfoList
                                items={[
                                    "Create and manage user accounts",
                                    "Provide career and portfolio features",
                                    "Process resumes and career information",
                                    "Generate AI-powered recommendations",
                                    "Track job applications and career goals",
                                    "Improve platform functionality",
                                    "Respond to support and contact requests",
                                    "Maintain platform security",
                                    "Detect and prevent misuse of the service",
                                ]}
                            />
                        </section>

                        {/* 07 */}
                        <section id="section-07" className="legal-card">
                            <SectionHeading
                                number="07"
                                title="Third-Party Services"
                            />

                            <p className="legal-text">
                                SkillBridge AI may use third-party services to
                                provide infrastructure, authentication,
                                analytics, AI processing, email delivery,
                                hosting, or other functionality.
                            </p>

                            <p className="legal-text">
                                These services may process information according
                                to their own privacy policies and terms.
                            </p>
                        </section>

                        {/* 08 */}
                        <section id="section-08" className="legal-card">
                            <SectionHeading
                                number="08"
                                title="Cookies and Similar Technologies"
                            />

                            <p className="legal-text">
                                SkillBridge AI may use cookies, local storage,
                                analytics technologies, and similar mechanisms
                                to maintain sessions, remember preferences,
                                understand website usage, and improve the
                                user experience.
                            </p>

                            <p className="legal-text">
                                Additional information about cookies and
                                advertising technologies will be provided in
                                our Cookie Policy.
                            </p>
                        </section>

                        {/* 09 */}
                        <section
                            id="section-09"
                            className="relative overflow-hidden bg-green-50 rounded-3xl border border-green-100 shadow-xl p-7 md:p-9"
                        >
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-200/40 rounded-full blur-3xl" />

                            <div className="relative">
                                <SectionHeading
                                    number="09"
                                    title="Advertising and Google AdSense"
                                />

                                <p className="legal-text">
                                    SkillBridge AI may use third-party
                                    advertising services, including Google
                                    AdSense, to display advertisements on
                                    eligible public pages.
                                </p>

                                <p className="legal-text">
                                    Advertising providers may use cookies or
                                    similar technologies to provide, measure,
                                    and improve advertising and may use
                                    information permitted under applicable
                                    policies and laws.
                                </p>

                                <p className="legal-text">
                                    Users may have choices regarding
                                    personalized advertising depending on
                                    their location, applicable laws, and the
                                    controls provided by the advertising
                                    provider.
                                </p>

                                <p className="legal-text">
                                    SkillBridge AI will follow applicable Google
                                    publisher policies and applicable privacy
                                    requirements when advertising services are
                                    enabled.
                                </p>
                            </div>
                        </section>

                        {/* 10 */}
                        <section id="section-10" className="legal-card">
                            <SectionHeading
                                number="10"
                                title="Data Security"
                            />

                            <p className="legal-text">
                                We take reasonable technical and organizational
                                measures to protect information from unauthorized
                                access, misuse, alteration, disclosure, or
                                destruction.
                            </p>

                            <p className="legal-text">
                                However, no online service can guarantee absolute
                                security.
                            </p>
                        </section>

                        {/* 11 */}
                        <section id="section-11" className="legal-card">
                            <SectionHeading
                                number="11"
                                title="Data Retention"
                            />

                            <p className="legal-text">
                                Information may be retained for as long as
                                reasonably necessary to provide the service,
                                maintain accounts, comply with legal obligations,
                                resolve disputes, enforce agreements, and
                                maintain legitimate business records.
                            </p>
                        </section>

                        {/* 12 */}
                        <section id="section-12" className="legal-card">
                            <SectionHeading
                                number="12"
                                title="Your Choices and Rights"
                            />

                            <p className="legal-text">
                                Depending on applicable law, you may have rights
                                relating to your personal information, including
                                requesting access, correction, deletion, or
                                other available privacy choices.
                            </p>

                            <p className="legal-text">
                                You can contact SkillBridge AI regarding privacy
                                questions or requests using the contact
                                information provided below.
                            </p>
                        </section>

                        {/* 13 */}
                        <section id="section-13" className="legal-card">
                            <SectionHeading
                                number="13"
                                title="Children's Privacy"
                            />

                            <p className="legal-text">
                                SkillBridge AI is intended for users who can
                                legally use the service under applicable laws.
                                We do not knowingly collect personal information
                                from children in violation of applicable privacy
                                laws.
                            </p>
                        </section>

                        {/* 14 */}
                        <section id="section-14" className="legal-card">
                            <SectionHeading
                                number="14"
                                title="Changes to This Policy"
                            />

                            <p className="legal-text">
                                We may update this Privacy Policy from time to
                                time as SkillBridge AI develops, new features
                                are introduced, or legal and regulatory
                                requirements change.
                            </p>

                            <p className="legal-text">
                                Any updated version will be posted on this page
                                with an updated revision date.
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
                                If you have questions about this Privacy Policy
                                or how SkillBridge AI handles information,
                                please contact us.
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
                                        Have a privacy question?
                                    </h2>

                                    <p className="text-green-950/70 mt-2">
                                        We're here to help you understand how
                                        your information is handled.
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
                                to="/"
                                className="font-bold text-gray-500 hover:text-green-600 transition"
                            >
                                ← Back to Home
                            </Link>

                            <Link
                                to="/terms"
                                className="font-bold text-green-600 hover:text-green-700 transition"
                            >
                                Terms & Conditions →
                            </Link>

                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;