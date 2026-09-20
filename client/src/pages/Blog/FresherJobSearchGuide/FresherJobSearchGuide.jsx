import { Link } from "react-router-dom";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";

function FresherJobSearchGuide() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

            <SEO
                title="Fresher Job Search Guide: How to Find Your First Job — SkillBridge AI"
                description="Learn how freshers can find their first job after college using LinkedIn, job portals, networking, referrals, resume customization, and a structured job search strategy."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/fresher-job-search-guide"
            />

            <Navbar />

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-14 text-white md:py-18">

                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl">

                    <div className="mb-5 flex flex-wrap gap-3">
                        <Link
                            to="/blog"
                            className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300 hover:bg-green-400/20"
                        >
                            ← Back to Blog
                        </Link>

                        <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                            Job Search Guide
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        Fresher Job Search Guide:{" "}
                        <span className="text-green-400">
                            Find Your First Job
                        </span>{" "}
                        After College
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                        A practical guide for freshers on finding job
                        opportunities, improving your resume, using LinkedIn,
                        networking, applying strategically, and preparing for
                        interviews.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                            🎓 For Freshers
                        </span>

                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                            💼 Job Search
                        </span>

                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                            🚀 Career Growth
                        </span>
                    </div>

                </div>
            </section>


            {/* ARTICLE */}
            <main className="px-6 py-14 md:py-20">

                <article className="mx-auto max-w-4xl">

                    <p className="text-lg leading-8 text-slate-700">
                        Finding your first job after college can feel
                        overwhelming. There are thousands of job listings,
                        different job portals, multiple technologies to learn,
                        and many application processes.
                    </p>

                    <p className="mt-5 leading-8 text-slate-700">
                        The key is not to apply randomly. A structured job
                        search strategy can help you focus on the right roles,
                        improve your profile, and prepare more effectively.
                    </p>


                    {/* 1 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            1. Decide What Job Role You Want
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Before applying, decide which type of role matches
                            your skills and career goals.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Full Stack Developer</li>
                            <li>• Frontend Developer</li>
                            <li>• Backend Developer</li>
                            <li>• Java Developer</li>
                            <li>• Software Developer</li>
                            <li>• QA / Software Testing</li>
                            <li>• Data or AI-related entry-level roles</li>
                        </ul>

                        <p className="mt-5 leading-8 text-slate-700">
                            Choosing a target role makes it easier to select
                            relevant skills, projects, resume keywords, and job
                            opportunities.
                        </p>
                    </section>


                    {/* 2 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            2. Build a Job-Ready Resume
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Your resume should quickly communicate your skills,
                            projects, education, certifications, and relevant
                            experience.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Keep the structure clean and simple.</li>
                            <li>• Highlight relevant technical skills.</li>
                            <li>• Add practical projects.</li>
                            <li>• Mention certifications that support the role.</li>
                            <li>• Customize important keywords for each job.</li>
                        </ul>

                        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                            <p className="font-semibold text-green-900">
                                Resume Tip
                            </p>

                            <p className="mt-2 leading-7 text-green-800">
                                Focus on what you built and what you achieved,
                                not just a list of technologies.
                            </p>
                        </div>

                        <Link
                            to="/resources/ats-friendly-resume-for-freshers"
                            className="mt-5 inline-block font-bold text-green-600 hover:text-green-700"
                        >
                            Read the ATS Resume Guide →
                        </Link>
                    </section>


                    {/* 3 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            3. Use LinkedIn Effectively
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            LinkedIn can help freshers discover jobs, connect
                            with recruiters, follow companies, and showcase
                            projects.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Use a professional headline.</li>
                            <li>• Add your technical skills.</li>
                            <li>• Showcase important projects.</li>
                            <li>• Add certifications.</li>
                            <li>• Follow companies you want to join.</li>
                            <li>• Connect with recruiters and professionals.</li>
                        </ul>
                    </section>


                    {/* 4 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            4. Find Jobs on Multiple Platforms
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Do not depend on a single platform. Search across
                            multiple sources to discover more relevant
                            opportunities.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "LinkedIn Jobs",
                                "Naukri",
                                "Indeed",
                                "Internshala",
                                "Company Career Pages",
                                "College Placement Cell",
                            ].map((platform) => (
                                <div
                                    key={platform}
                                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <p className="font-bold">
                                        {platform}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </section>


                    {/* 5 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            5. Read the Job Description Carefully
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Before applying, compare your skills with the job
                            description.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Required technical skills</li>
                            <li>• Preferred qualifications</li>
                            <li>• Experience requirements</li>
                            <li>• Location and work mode</li>
                            <li>• Responsibilities</li>
                        </ul>

                        <p className="mt-5 leading-8 text-slate-700">
                            Apply when your background reasonably matches the
                            role instead of applying blindly to every listing.
                        </p>
                    </section>


                    {/* 6 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            6. Customize Your Resume for Important Jobs
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            A single generic resume may not highlight the right
                            skills for every position.
                        </p>

                        <p className="mt-5 leading-8 text-slate-700">
                            For important applications, adjust your skills,
                            project descriptions, and keywords according to the
                            job description while keeping everything accurate.
                        </p>
                    </section>


                    {/* 7 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            7. Build Projects That Prove Your Skills
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Projects are especially useful for freshers because
                            they provide evidence of practical learning.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Build real-world applications.</li>
                            <li>• Upload projects to GitHub.</li>
                            <li>• Write clear README files.</li>
                            <li>• Add live demos when possible.</li>
                            <li>• Explain your contribution clearly.</li>
                        </ul>
                    </section>


                    {/* 8 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            8. Network and Ask for Referrals
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Networking can help you discover opportunities
                            that may not be obvious from job portals.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Connect with alumni.</li>
                            <li>• Talk to working professionals.</li>
                            <li>• Participate in developer communities.</li>
                            <li>• Attend career events and meetups.</li>
                            <li>• Build genuine professional relationships.</li>
                        </ul>
                    </section>


                    {/* 9 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            9. Track Every Application
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Keep a simple record of the companies and positions
                            you apply for.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="grid grid-cols-3 border-b bg-slate-100 p-4 font-bold">
                                <span>Company</span>
                                <span>Role</span>
                                <span>Status</span>
                            </div>

                            <div className="grid grid-cols-3 p-4 text-sm text-slate-600">
                                <span>Example Company</span>
                                <span>Software Developer</span>
                                <span>Applied</span>
                            </div>
                        </div>
                    </section>


                    {/* 10 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            10. Prepare Before Interviews
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Applying is only one part of the process. Once you
                            receive an interview invitation, start preparing
                            immediately.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Programming fundamentals</li>
                            <li>• Data structures and algorithms</li>
                            <li>• OOP concepts</li>
                            <li>• DBMS and SQL</li>
                            <li>• Projects</li>
                            <li>• HR questions</li>
                        </ul>

                        <Link
                            to="/resources/technical-interview-preparation-for-freshers"
                            className="mt-5 inline-block font-bold text-green-600 hover:text-green-700"
                        >
                            Read the Technical Interview Guide →
                        </Link>
                    </section>


                    {/* 11 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            11. Follow a 30-Day Job Search Strategy
                        </h2>

                        <div className="mt-6 space-y-4">

                            <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
                                <strong>Week 1:</strong> Improve resume,
                                LinkedIn, GitHub, and target role.
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
                                <strong>Week 2:</strong> Start applying and
                                practice coding/interview fundamentals.
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
                                <strong>Week 3:</strong> Increase applications,
                                networking, and mock interview practice.
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
                                <strong>Week 4:</strong> Review results,
                                improve weak areas, and continue applying.
                            </div>

                        </div>
                    </section>


                    {/* 12 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            12. Common Fresher Job Search Mistakes
                        </h2>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>❌ Applying without reading the job description</li>
                            <li>❌ Using an outdated resume</li>
                            <li>❌ Having no practical projects</li>
                            <li>❌ Ignoring LinkedIn</li>
                            <li>❌ Applying only to one company or platform</li>
                            <li>❌ Giving up after a few rejections</li>
                            <li>❌ Not preparing for interviews</li>
                        </ul>
                    </section>


                    {/* CHECKLIST */}
                    <section className="mt-14 rounded-3xl bg-green-50 p-7 md:p-10">

                        <h2 className="text-3xl font-extrabold text-green-950">
                            Fresher Job Search Checklist
                        </h2>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">

                            {[
                                "Target role selected",
                                "Resume updated",
                                "LinkedIn profile optimized",
                                "GitHub projects ready",
                                "Job portals configured",
                                "Application tracker created",
                                "Interview preparation started",
                                "Regular applications planned",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl bg-white p-4 font-medium shadow-sm"
                                >
                                    ✓ {item}
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* FINAL */}
                    <section className="mt-14">

                        <h2 className="text-3xl font-extrabold">
                            Final Thoughts
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Getting your first job takes patience,
                            preparation, and consistency. Focus on improving
                            your skills, building proof through projects,
                            applying strategically, and learning from every
                            interview experience.
                        </p>

                        <p className="mt-5 leading-8 text-slate-700">
                            Instead of waiting for the perfect opportunity,
                            build a strong profile and keep taking consistent
                            action.
                        </p>

                    </section>

                </article>

            </main>


            {/* CTA */}
            <section className="px-6 py-16">

                <div className="mx-auto max-w-5xl rounded-3xl bg-green-500 px-6 py-12 text-center shadow-xl md:px-10">

                    <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
                        Build Your Career With SkillBridge AI
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-900/80">
                        Organize your skills, projects, resume, certificates,
                        and career preparation in one place.
                    </p>

                    <Link
                        to="/signup"
                        className="mt-7 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800"
                    >
                        Get Started Free →
                    </Link>

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default FresherJobSearchGuide;