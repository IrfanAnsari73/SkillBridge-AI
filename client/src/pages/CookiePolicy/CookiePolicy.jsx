import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const sections = [
    ["01", "Introduction"],
    ["02", "What Are Cookies?"],
    ["03", "How We Use Cookies"],
    ["04", "Essential Cookies"],
    ["05", "Analytics & Performance"],
    ["06", "Advertising Cookies"],
    ["07", "Google AdSense"],
    ["08", "Third-Party Services"],
    ["09", "Local Storage"],
    ["10", "Managing Cookies"],
    ["11", "Changes to This Policy"],
    ["12", "Contact Us"],
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

const CookiePolicy = () => {
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
                            🍪 Cookies & Transparency
                        </div>

                        <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                            Cookie Policy
                            <span className="text-green-400">.</span>
                        </h1>

                        <p className="mt-6 max-w-3xl text-gray-300 text-base md:text-lg leading-8">
                            Learn how SkillBridge AI uses cookies, local storage,
                            analytics technologies, and advertising technologies
                            to improve your experience.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                                🍪 Cookie Transparency
                            </div>

                            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                                🔐 Privacy Focused
                            </div>

                            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                                📅 Updated Sep 14, 2026
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MAIN ================= */}
            <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">

                <div className="grid lg:grid-cols-[270px_minmax(0,1fr)] gap-8">

                    {/* ================= TOC ================= */}
                    <aside className="lg:sticky lg:top-6 lg:self-start">

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">

                            <div className="bg-[#07130f] p-6 text-white">

                                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-green-400">
                                    On This Page
                                </p>

                                <h2 className="text-xl font-black mt-2">
                                    Cookie Guide
                                </h2>

                                <p className="text-xs text-gray-500 mt-2">
                                    12 sections
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

                    {/* ================= CONTENT ================= */}
                    <div className="space-y-6">

                        {/* 01 */}
                        <section id="section-01" className="legal-card">

                            <SectionHeading
                                number="01"
                                title="Introduction"
                            />

                            <p className="legal-text">
                                This Cookie Policy explains how SkillBridge AI
                                may use cookies and similar technologies when
                                you visit or use our website and services.
                            </p>

                            <p className="legal-text">
                                This policy should be read together with our
                                Privacy Policy and Terms & Conditions.
                            </p>

                        </section>

                        {/* 02 */}
                        <section id="section-02" className="legal-card">

                            <SectionHeading
                                number="02"
                                title="What Are Cookies?"
                            />

                            <p className="legal-text">
                                Cookies are small text files that may be stored
                                on your device when you visit a website. They
                                can help websites remember information, maintain
                                sessions, understand usage, and provide relevant
                                functionality.
                            </p>

                            <p className="legal-text">
                                Similar technologies may include browser storage,
                                pixels, tags, and other mechanisms used for
                                similar purposes.
                            </p>

                        </section>

                        {/* 03 */}
                        <section id="section-03" className="legal-card">

                            <SectionHeading
                                number="03"
                                title="How We Use Cookies"
                            />

                            <p className="legal-text">
                                Depending on the features enabled on the
                                platform, SkillBridge AI may use cookies and
                                similar technologies to:
                            </p>

                            <InfoList
                                items={[
                                    "Maintain user sessions",
                                    "Remember user preferences",
                                    "Support authentication",
                                    "Improve website functionality",
                                    "Understand website usage",
                                    "Measure performance",
                                    "Improve user experience",
                                    "Support advertising functionality",
                                ]}
                            />

                        </section>

                        {/* 04 */}
                        <section id="section-04" className="legal-card">

                            <SectionHeading
                                number="04"
                                title="Essential Cookies"
                            />

                            <p className="legal-text">
                                Some cookies or similar technologies may be
                                necessary for the website or application to
                                function properly.
                            </p>

                            <p className="legal-text">
                                These technologies may support features such as
                                authentication, security, session management,
                                and basic platform functionality.
                            </p>

                        </section>

                        {/* 05 */}
                        <section id="section-05" className="legal-card">

                            <SectionHeading
                                number="05"
                                title="Analytics & Performance"
                            />

                            <p className="legal-text">
                                SkillBridge AI may use analytics and performance
                                technologies to understand how visitors use the
                                website and to identify opportunities to improve
                                the platform.
                            </p>

                            <InfoList
                                items={[
                                    "Understand page visits",
                                    "Measure website performance",
                                    "Identify navigation patterns",
                                    "Improve content and user experience",
                                    "Detect technical issues",
                                ]}
                            />

                        </section>

                        {/* 06 */}
                        <section id="section-06" className="legal-card">

                            <SectionHeading
                                number="06"
                                title="Advertising Cookies"
                            />

                            <p className="legal-text">
                                If advertising is enabled, advertising providers
                                may use cookies or similar technologies to
                                display, measure, and improve advertisements.
                            </p>

                            <p className="legal-text">
                                Advertising technologies may operate according
                                to the policies and settings of the relevant
                                advertising provider.
                            </p>

                        </section>

                        {/* 07 */}
                        <section
                            id="section-07"
                            className="relative overflow-hidden bg-green-50 rounded-3xl border border-green-100 shadow-xl p-7 md:p-9"
                        >

                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-200/40 rounded-full blur-3xl" />

                            <div className="relative">

                                <SectionHeading
                                    number="07"
                                    title="Google AdSense"
                                />

                                <p className="legal-text">
                                    SkillBridge AI may use Google AdSense or
                                    other advertising services on eligible
                                    public pages.
                                </p>

                                <p className="legal-text">
                                    Google and its partners may use cookies or
                                    similar technologies in connection with
                                    advertising, measurement, personalization,
                                    and related services.
                                </p>

                                <div className="mt-6 rounded-2xl bg-white border border-green-100 p-5">

                                    <p className="font-black text-slate-950">
                                        Advertising Transparency
                                    </p>

                                    <p className="mt-2 text-sm text-gray-600 leading-7">
                                        SkillBridge AI intends to follow
                                        applicable Google publisher policies,
                                        advertising requirements, and privacy
                                        obligations when advertisements are
                                        enabled.
                                    </p>

                                </div>

                            </div>

                        </section>

                        {/* 08 */}
                        <section id="section-08" className="legal-card">

                            <SectionHeading
                                number="08"
                                title="Third-Party Services"
                            />

                            <p className="legal-text">
                                SkillBridge AI may use third-party services for
                                analytics, hosting, authentication, AI
                                processing, email delivery, advertising, or
                                other functionality.
                            </p>

                            <p className="legal-text">
                                These third parties may use their own cookies
                                or similar technologies according to their
                                respective policies.
                            </p>

                        </section>

                        {/* 09 */}
                        <section id="section-09" className="legal-card">

                            <SectionHeading
                                number="09"
                                title="Local Storage"
                            />

                            <p className="legal-text">
                                SkillBridge AI may use browser local storage or
                                similar browser-based storage technologies for
                                purposes such as maintaining application state,
                                storing preferences, or supporting functionality.
                            </p>

                            <p className="legal-text">
                                Local storage is different from traditional
                                cookies but can provide similar functionality.
                            </p>

                        </section>

                        {/* 10 */}
                        <section id="section-10" className="legal-card">

                            <SectionHeading
                                number="10"
                                title="Managing Cookies"
                            />

                            <p className="legal-text">
                                Most modern web browsers allow users to control
                                or delete cookies through their browser settings.
                            </p>

                            <InfoList
                                items={[
                                    "View stored cookies",
                                    "Delete existing cookies",
                                    "Block certain cookies",
                                    "Restrict third-party cookies",
                                    "Change browser privacy settings",
                                ]}
                            />

                            <p className="mt-5 text-sm text-gray-500 leading-7">
                                Disabling certain cookies may affect some
                                website features or functionality.
                            </p>

                        </section>

                        {/* 11 */}
                        <section id="section-11" className="legal-card">

                            <SectionHeading
                                number="11"
                                title="Changes to This Policy"
                            />

                            <p className="legal-text">
                                SkillBridge AI may update this Cookie Policy as
                                the platform develops, new technologies are
                                introduced, advertising services are enabled,
                                or legal requirements change.
                            </p>

                            <p className="legal-text">
                                Updated versions will be published on this page
                                with a revised update date.
                            </p>

                        </section>

                        {/* 12 */}
                        <section
                            id="section-12"
                            className="relative overflow-hidden rounded-3xl bg-[#07130f] text-white shadow-xl p-7 md:p-9"
                        >

                            <SectionHeading
                                number="12"
                                title="Contact Us"
                                dark
                            />

                            <p className="mt-6 text-gray-400 leading-8">
                                If you have questions about this Cookie Policy
                                or how SkillBridge AI uses cookies and similar
                                technologies, please contact us.
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

                        {/* ================= CTA ================= */}
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
                                        Contact us if you have questions about
                                        cookies, advertising, or privacy.
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

                        {/* ================= NAVIGATION ================= */}
                        <div className="flex flex-wrap justify-between gap-4 px-2">

                            <Link
                                to="/privacy-policy"
                                className="font-bold text-gray-500 hover:text-green-600 transition"
                            >
                                ← Privacy Policy
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

export default CookiePolicy;