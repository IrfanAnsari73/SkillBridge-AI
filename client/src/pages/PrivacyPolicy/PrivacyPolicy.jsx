import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const PrivacyPolicy = () => {
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
                            🔐 Privacy & Trust
                        </div>

                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
                            Privacy Policy
                            <span className="text-green-500">.</span>
                        </h1>

                        <p className="mt-5 max-w-3xl text-gray-400 text-base md:text-lg leading-8">
                            Transparency matters. Learn how SkillBridge AI
                            collects, uses, protects, and manages information
                            while you use our career platform.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">

                            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-gray-300">
                                🛡️ Your Privacy Matters
                            </div>

                            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-gray-300">
                                🔒 Secure Platform
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
                                    Privacy Guide
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

                        {/* INTRO */}

                        <section
                            id="section-01"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="01"
                                title="Introduction"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI is an AI-powered career and
                                portfolio management platform designed to help
                                students and job seekers organize their career
                                information, build professional profiles,
                                manage applications, and use AI-powered career
                                tools.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                By using SkillBridge AI, you agree to the
                                practices described in this Privacy Policy.
                            </p>

                        </section>

                        {/* INFORMATION */}

                        <section
                            id="section-02"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="02"
                                title="Information We Collect"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
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

                        {/* ACCOUNT */}

                        <section
                            id="section-03"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="03"
                                title="Account Information"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                When you create an account, we may collect
                                information such as your name, email address,
                                and authentication-related information.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                This information is used to create and maintain
                                your account and provide the services available
                                through SkillBridge AI.
                            </p>

                        </section>

                        {/* RESUME */}

                        <section
                            id="section-04"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="04"
                                title="Resume and Career Data"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                If you upload a resume or provide career-related
                                information, that information may be processed
                                to provide features such as resume analysis,
                                career recommendations, job matching, and
                                other career-related functionality.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                You should only upload information that you have
                                the right to provide and process.
                            </p>

                        </section>

                        {/* AI */}

                        <section
                            id="section-05"
                            className="relative overflow-hidden bg-slate-950 text-white rounded-3xl shadow-xl p-6 md:p-8 scroll-mt-8"
                        >

                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

                            <div className="relative">

                                <SectionHeading
                                    number="05"
                                    title="AI-Powered Features"
                                    dark
                                />

                                <p className="mt-5 text-gray-400 leading-8">
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

                        {/* HOW WE USE */}

                        <section
                            id="section-06"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="06"
                                title="How We Use Information"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
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

                        {/* THIRD PARTY */}

                        <section
                            id="section-07"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="07"
                                title="Third-Party Services"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI may use third-party services to
                                provide infrastructure, authentication,
                                analytics, AI processing, email delivery,
                                hosting, or other functionality.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                These services may process information according
                                to their own privacy policies and terms.
                            </p>

                        </section>

                        {/* COOKIES */}

                        <section
                            id="section-08"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="08"
                                title="Cookies and Similar Technologies"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI may use cookies, local storage,
                                analytics technologies, and similar mechanisms
                                to maintain sessions, remember preferences,
                                understand website usage, and improve the
                                user experience.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                Additional information about cookies and
                                advertising technologies will be provided in
                                our Cookie Policy.
                            </p>

                        </section>

                        {/* ADSENSE */}

                        <section
                            id="section-09"
                            className="relative overflow-hidden bg-green-50 rounded-3xl border border-green-100 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <div className="absolute right-0 top-0 w-40 h-40 bg-green-200/30 rounded-full blur-3xl" />

                            <div className="relative">

                                <SectionHeading
                                    number="09"
                                    title="Advertising and Google AdSense"
                                />

                                <p className="mt-5 text-gray-600 leading-8">
                                    SkillBridge AI may use third-party
                                    advertising services, including Google
                                    AdSense, to display advertisements on
                                    eligible public pages.
                                </p>

                                <p className="mt-4 text-gray-600 leading-8">
                                    Advertising providers may use cookies or
                                    similar technologies to provide, measure,
                                    and improve advertising and may use
                                    information permitted under applicable
                                    policies and laws.
                                </p>

                                <p className="mt-4 text-gray-600 leading-8">
                                    Users may have choices regarding
                                    personalized advertising depending on
                                    their location, applicable laws, and the
                                    controls provided by the advertising
                                    provider.
                                </p>

                                <p className="mt-4 text-gray-600 leading-8">
                                    SkillBridge AI will follow applicable Google
                                    publisher policies and applicable privacy
                                    requirements when advertising services are
                                    enabled.
                                </p>

                            </div>

                        </section>

                        {/* SECURITY */}

                        <section
                            id="section-10"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="10"
                                title="Data Security"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                We take reasonable technical and organizational
                                measures to protect information from unauthorized
                                access, misuse, alteration, disclosure, or
                                destruction.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                However, no online service can guarantee absolute
                                security.
                            </p>

                        </section>

                        {/* RETENTION */}

                        <section
                            id="section-11"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="11"
                                title="Data Retention"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                Information may be retained for as long as
                                reasonably necessary to provide the service,
                                maintain accounts, comply with legal obligations,
                                resolve disputes, enforce agreements, and
                                maintain legitimate business records.
                            </p>

                        </section>

                        {/* RIGHTS */}

                        <section
                            id="section-12"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="12"
                                title="Your Choices and Rights"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                Depending on applicable law, you may have rights
                                relating to your personal information, including
                                requesting access, correction, deletion, or
                                other available privacy choices.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                You can contact SkillBridge AI regarding privacy
                                questions or requests using the contact
                                information provided below.
                            </p>

                        </section>

                        {/* CHILDREN */}

                        <section
                            id="section-13"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="13"
                                title="Children's Privacy"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                SkillBridge AI is intended for users who can
                                legally use the service under applicable laws.
                                We do not knowingly collect personal information
                                from children in violation of applicable privacy
                                laws.
                            </p>

                        </section>

                        {/* CHANGES */}

                        <section
                            id="section-14"
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 scroll-mt-8"
                        >

                            <SectionHeading
                                number="14"
                                title="Changes to This Policy"
                            />

                            <p className="mt-5 text-gray-600 leading-8">
                                We may update this Privacy Policy from time to
                                time as SkillBridge AI develops, new features
                                are introduced, or legal and regulatory
                                requirements change.
                            </p>

                            <p className="mt-4 text-gray-600 leading-8">
                                Any updated version will be posted on this page
                                with an updated revision date.
                            </p>

                        </section>

                        {/* CONTACT */}

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
                                    If you have questions about this Privacy
                                    Policy or how SkillBridge AI handles
                                    information, please contact us.
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
                                        Have a privacy question?
                                    </h2>

                                    <p className="text-green-50 mt-2 leading-6">
                                        We're here to help you understand
                                        how your information is handled.
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
                                to="/"
                                className="font-bold text-gray-600 hover:text-green-600 transition"
                            >
                                ← Back to Home
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

export default PrivacyPolicy;