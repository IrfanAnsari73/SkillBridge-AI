import { Link } from "react-router-dom";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";

function InternshipGuide() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <SEO
                title="How to Find Your First Internship as a College Student — SkillBridge AI"
                description="Learn how college students can find their first internship, build relevant skills, prepare a strong resume, use LinkedIn, apply strategically, and prepare for internship interviews."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/how-to-find-first-internship-as-a-college-student"
            />

            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-14 text-white md:py-18">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-4xl">
                    <Link
                        to="/blog"
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                    >
                        ← Back to Blog
                    </Link>

                    <div className="mt-7 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
                        Internship Guide
                    </div>

                    <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        How to Find Your First{" "}
                        <span className="text-green-400">Internship</span> as a College
                        Student
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                        A practical guide to finding internships, building relevant
                        skills, preparing your resume, applying strategically, and getting
                        ready for internship interviews.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Student Guide
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Internship Preparation
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Career Growth
                        </span>
                    </div>
                </div>
            </section>

            {/* Article */}
            <main className="px-6 py-14 md:py-20">
                <article className="mx-auto max-w-4xl">
                    {/* Introduction */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                        <p className="text-lg leading-8 text-slate-700">
                            Your first internship can give you practical experience,
                            confidence, project exposure, and a better understanding of how
                            professional teams work. You do not need to know everything
                            before applying. The goal is to build useful skills, create
                            evidence of what you can do, and apply consistently.
                        </p>
                    </section>

                    {/* Table of Contents */}
                    <section className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-6 md:p-8">
                        <h2 className="text-xl font-extrabold text-slate-900">
                            In This Guide
                        </h2>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {[
                                "1. When Should You Start Looking?",
                                "2. Choose a Target Role",
                                "3. Build the Right Skills",
                                "4. Create a Strong Resume",
                                "5. Build Projects",
                                "6. Optimize LinkedIn",
                                "7. Where to Find Internships",
                                "8. How to Apply Strategically",
                                "9. Prepare for Interviews",
                                "10. Common Mistakes",
                            ].map((item) => (
                                <p key={item} className="text-sm font-medium text-slate-700">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* 1 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            1. When Should You Start Looking for an Internship?
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            You can start exploring internships before you feel completely
                            job-ready. Starting early gives you time to understand the
                            market, identify skill gaps, improve your resume, and become
                            comfortable with applications.
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            Instead of waiting until the final semester, begin building your
                            profile while you are still learning. Even small projects,
                            coursework, certifications, and open-source contributions can
                            help demonstrate your interest and consistency.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            2. Choose a Target Internship Role
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Avoid applying randomly to every internship you see. Start by
                            choosing one or two roles that match your interests and current
                            skills.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    title: "Frontend Development",
                                    text: "HTML, CSS, JavaScript, React and responsive UI development.",
                                },
                                {
                                    title: "Backend Development",
                                    text: "Node.js, Express, databases, APIs and server-side development.",
                                },
                                {
                                    title: "Full Stack Development",
                                    text: "Frontend, backend, database and deployment fundamentals.",
                                },
                                {
                                    title: "Data & AI",
                                    text: "Python, data analysis, machine learning and AI fundamentals.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            3. Build the Right Skills
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Once you have selected a target role, focus your learning on the
                            skills commonly required for that role. Avoid trying to learn
                            every technology at the same time.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50 px-5 py-4 font-bold sm:grid-cols-2">
                                <span>Area</span>
                                <span>Examples</span>
                            </div>

                            {[
                                ["Programming", "Java, JavaScript, Python, C/C++"],
                                ["Web Development", "HTML, CSS, JavaScript, React"],
                                ["Backend", "Node.js, Express, APIs"],
                                ["Database", "MySQL, MongoDB, SQL"],
                                ["Tools", "Git, GitHub, VS Code"],
                            ].map(([area, examples]) => (
                                <div
                                    key={area}
                                    className="grid grid-cols-1 gap-2 border-b border-slate-100 px-5 py-4 last:border-0 sm:grid-cols-2"
                                >
                                    <span className="font-semibold text-slate-900">{area}</span>
                                    <span className="text-slate-600">{examples}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            4. Create a Strong Fresher Resume
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Your resume should quickly communicate your education, technical
                            skills, projects, certifications, achievements, and relevant
                            experience.
                        </p>

                        <ul className="mt-5 space-y-3 text-slate-600">
                            <li>• Keep the structure simple and easy to scan.</li>
                            <li>• Highlight skills relevant to the target internship.</li>
                            <li>• Add projects with technologies and your contribution.</li>
                            <li>• Include relevant certifications and achievements.</li>
                            <li>• Check spelling, formatting, links, and contact details.</li>
                        </ul>

                        <Link
                            to="/resources/ats-friendly-resume-for-freshers"
                            className="mt-6 inline-flex font-bold text-green-600 transition hover:text-green-700"
                        >
                            Read the ATS Resume Guide →
                        </Link>
                    </section>

                    {/* 5 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            5. Build Projects That Show Your Skills
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Projects are especially useful for students who do not have
                            professional experience yet. A project gives recruiters
                            something concrete to discuss during the selection process.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {[
                                "Build a responsive web application.",
                                "Create a full-stack project with authentication.",
                                "Build a project using a public API.",
                                "Create a dashboard using real or sample data.",
                                "Contribute to an open-source project.",
                                "Deploy at least one project publicly.",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm"
                                >
                                    ✓ {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 6 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            6. Optimize Your LinkedIn Profile
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            A professional LinkedIn profile can make it easier for
                            recruiters, professionals, and other students to understand what
                            you are learning and building.
                        </p>

                        <ul className="mt-5 space-y-3 text-slate-600">
                            <li>• Use a clear professional headline.</li>
                            <li>• Add your technical skills.</li>
                            <li>• Showcase projects and certifications.</li>
                            <li>• Add a concise About section.</li>
                            <li>• Share useful learning and project updates.</li>
                        </ul>
                    </section>

                    {/* 7 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            7. Where Can You Find Internships?
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Use multiple channels rather than depending on a single platform.
                            Look for opportunities through company career pages, college
                            placement cells, professional networks, internship platforms,
                            referrals, and developer communities.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {[
                                "Company career pages",
                                "College placement opportunities",
                                "Internship platforms",
                                "LinkedIn job listings",
                                "Professional communities",
                                "Referrals and networking",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-5 font-semibold text-slate-800 shadow-sm"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 8 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            8. How to Apply Strategically
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Quality and consistency matter. Read the internship description,
                            understand the required skills, and tailor your application when
                            appropriate.
                        </p>

                        <ol className="mt-5 space-y-4 text-slate-600">
                            <li>
                                <strong className="text-slate-900">1.</strong> Read the job
                                description carefully.
                            </li>
                            <li>
                                <strong className="text-slate-900">2.</strong> Identify the
                                important skills and requirements.
                            </li>
                            <li>
                                <strong className="text-slate-900">3.</strong> Match your
                                resume and projects to the role.
                            </li>
                            <li>
                                <strong className="text-slate-900">4.</strong> Submit the
                                application correctly.
                            </li>
                            <li>
                                <strong className="text-slate-900">5.</strong> Track the
                                application and follow up when appropriate.
                            </li>
                        </ol>
                    </section>

                    {/* 9 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            9. Prepare for Internship Interviews
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Interview preparation depends on the role, but technical
                            internships commonly involve programming fundamentals, problem
                            solving, projects, core computer science concepts, and questions
                            about your resume.
                        </p>

                        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">
                            <h3 className="font-extrabold text-slate-900">
                                Important preparation areas
                            </h3>

                            <ul className="mt-4 space-y-3 text-slate-700">
                                <li>• Programming fundamentals</li>
                                <li>• Data structures and algorithms</li>
                                <li>• Object-oriented programming</li>
                                <li>• DBMS and SQL</li>
                                <li>• Operating systems basics</li>
                                <li>• Computer networks basics</li>
                                <li>• Your projects and technical decisions</li>
                            </ul>
                        </div>

                        <Link
                            to="/resources/technical-interview-preparation-for-freshers"
                            className="mt-6 inline-flex font-bold text-green-600 transition hover:text-green-700"
                        >
                            Read the Technical Interview Guide →
                        </Link>
                    </section>

                    {/* 10 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            10. Common Internship Mistakes to Avoid
                        </h2>

                        <div className="mt-6 space-y-4">
                            {[
                                "Applying without reading the internship requirements.",
                                "Using the same generic resume for every role.",
                                "Listing skills that you cannot explain in an interview.",
                                "Having no projects to demonstrate practical ability.",
                                "Ignoring LinkedIn and professional networking.",
                                "Stopping applications after a few rejections.",
                                "Not preparing for questions about your own projects.",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
                                >
                                    <span className="font-bold text-red-500">Avoid:</span>{" "}
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final Checklist */}
                    <section className="mt-14 rounded-3xl bg-slate-950 p-7 text-white md:p-10">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Final Checklist
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold">
                            Are You Ready to Apply?
                        </h2>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {[
                                "Target role selected",
                                "Relevant skills developed",
                                "Resume updated",
                                "2–3 useful projects ready",
                                "LinkedIn profile updated",
                                "Internship sources identified",
                                "Applications being tracked",
                                "Interview preparation started",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300"
                                >
                                    ✓ {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-12 rounded-3xl bg-green-500 px-6 py-10 text-center md:px-10">
                        <h2 className="text-3xl font-extrabold text-slate-950">
                            Build Your Career With SkillBridge AI
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-900/80">
                            Organize your resume, skills, projects, certificates, career
                            preparation, and job applications in one place.
                        </p>

                        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                to="/signup"
                                className="rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
                            >
                                Get Started Free →
                            </Link>

                            <Link
                                to="/resources"
                                className="rounded-xl border border-slate-950/20 bg-white/20 px-6 py-3 font-bold text-slate-950 transition hover:bg-white/30"
                            >
                                Explore Resources
                            </Link>
                        </div>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}

export default InternshipGuide;