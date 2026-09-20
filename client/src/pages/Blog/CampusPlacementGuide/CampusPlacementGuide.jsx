import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";
import { Link } from "react-router-dom";

const CampusPlacementGuide = () => {
    return (
        <>
            <SEO
                title="How to Prepare for Campus Placements as a College Student — SkillBridge AI"
                description="Learn how college students can prepare for campus placements with a strong resume, coding practice, aptitude preparation, technical interviews, HR interviews, projects, and a practical 30-day placement plan."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/how-to-prepare-for-campus-placements"
            />

            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-14 text-white md:py-18">
                <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-green-500/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl">
                    <div className="mb-5 flex flex-wrap gap-3">
                        <Link
                            to="/blog"
                            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-green-300 transition hover:bg-white/10"
                        >
                            ← Back to Blog
                        </Link>

                        <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
                            Placement Guide
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        How to Prepare for{" "}
                        <span className="text-green-400">Campus Placements</span> as a
                        College Student
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                        A practical guide to preparing for campus placements, from building
                        your resume and improving coding skills to cracking technical and
                        HR interviews.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                            🎓 For College Students
                        </span>
                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                            💼 Placement Preparation
                        </span>
                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                            🚀 Fresher Friendly
                        </span>
                    </div>
                </div>
            </section>

            {/* Article */}
            <main className="bg-white px-6 py-14">
                <article className="mx-auto max-w-4xl">
                    {/* Introduction */}
                    <section className="mb-12">
                        <p className="text-lg leading-8 text-slate-700">
                            Campus placements can feel stressful, especially when multiple
                            companies start visiting your college and you are not sure where
                            to begin. The good news is that placement preparation becomes
                            much easier when you divide it into clear steps.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-700">
                            You do not need to know everything before your first placement
                            drive. What matters is building strong fundamentals, practicing
                            consistently, preparing your resume, and becoming comfortable
                            explaining your projects and skills.
                        </p>
                    </section>

                    {/* Table of Contents */}
                    <section className="mb-14 rounded-2xl border border-green-100 bg-green-50 p-6">
                        <h2 className="text-2xl font-bold text-slate-900">
                            📚 In This Guide
                        </h2>

                        <ol className="mt-5 grid gap-3 text-green-700 md:grid-cols-2">
                            <li>1. What Are Campus Placements?</li>
                            <li>2. When Should You Start Preparing?</li>
                            <li>3. Understand the Placement Process</li>
                            <li>4. Build a Strong Resume</li>
                            <li>5. Prepare Core CS Subjects</li>
                            <li>6. Learn DSA & Coding</li>
                            <li>7. Prepare Aptitude & Reasoning</li>
                            <li>8. Prepare for Technical Interviews</li>
                            <li>9. Prepare for HR Interviews</li>
                            <li>10. Build Projects & GitHub</li>
                            <li>11. Improve LinkedIn Profile</li>
                            <li>12. Common Placement Mistakes</li>
                            <li>13. 30-Day Preparation Plan</li>
                            <li>14. Final Placement Checklist</li>
                        </ol>
                    </section>

                    {/* Section 1 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            1. What Are Campus Placements?
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Campus placements are recruitment opportunities where companies
                            visit colleges to hire students for internships, graduate roles,
                            or entry-level positions.
                        </p>

                        <p className="mt-4 leading-8 text-slate-700">
                            The exact process differs between companies, but a placement
                            drive commonly includes several stages such as:
                        </p>

                        <ul className="mt-5 space-y-3 text-slate-700">
                            <li>✓ Eligibility and registration</li>
                            <li>✓ Resume screening or shortlisting</li>
                            <li>✓ Aptitude or online assessment</li>
                            <li>✓ Coding or technical assessment</li>
                            <li>✓ Technical interview</li>
                            <li>✓ HR or managerial interview</li>
                            <li>✓ Final selection</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            2. When Should You Start Preparing?
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Ideally, placement preparation should not begin only when the
                            first company arrives on campus. Starting early gives you enough
                            time to improve gradually.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 p-5">
                                <h3 className="font-bold text-slate-900">Early Stage</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Build programming fundamentals, explore development, and
                                    start small projects.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 p-5">
                                <h3 className="font-bold text-slate-900">Preparation Stage</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Practice DSA, aptitude, CS subjects, projects, and resume
                                    preparation.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 p-5">
                                <h3 className="font-bold text-slate-900">Placement Stage</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Focus on company-specific preparation, mock tests, and
                                    interview practice.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            3. Understand the Placement Process
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Before preparing, understand how companies visiting your college
                            usually recruit students. Check the eligibility criteria,
                            required skills, selection rounds, job role, location, and
                            compensation information provided in the official job
                            description.
                        </p>

                        <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                            <h3 className="text-xl font-bold text-slate-900">
                                Before Every Placement Drive
                            </h3>

                            <ul className="mt-4 space-y-3 text-slate-700">
                                <li>✓ Check eligibility criteria</li>
                                <li>✓ Read the job description carefully</li>
                                <li>✓ Understand the selection rounds</li>
                                <li>✓ Research the company and role</li>
                                <li>✓ Prepare according to the required skills</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            4. Build a Strong Resume
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Your resume is often one of the first things recruiters see.
                            Keep it clear, relevant, concise, and easy to scan.
                        </p>

                        <h3 className="mt-7 text-xl font-bold text-slate-900">
                            Your resume can include:
                        </h3>

                        <ul className="mt-4 space-y-3 text-slate-700">
                            <li>✓ Education</li>
                            <li>✓ Technical skills</li>
                            <li>✓ Projects</li>
                            <li>✓ Internships or relevant experience</li>
                            <li>✓ Certifications</li>
                            <li>✓ Achievements</li>
                            <li>✓ Relevant links such as GitHub or LinkedIn</li>
                        </ul>

                        <div className="mt-7 rounded-2xl border border-green-100 bg-green-50 p-6">
                            <h3 className="text-xl font-bold text-slate-900">
                                Want to improve your resume?
                            </h3>

                            <p className="mt-2 text-slate-700">
                                Read our detailed guide for creating an ATS-friendly fresher
                                resume.
                            </p>

                            <Link
                                to="/resources/ats-friendly-resume-for-freshers"
                                className="mt-4 inline-block font-semibold text-green-700 hover:text-green-800"
                            >
                                Read the ATS Resume Guide →
                            </Link>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            5. Prepare Core CS Subjects
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Many technical interviews for computer science students include
                            questions from fundamental subjects. Focus on understanding the
                            concepts instead of memorizing definitions.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {[
                                ["OOP", "Classes, objects, inheritance, polymorphism, abstraction and encapsulation."],
                                ["DBMS", "Keys, normalization, transactions, SQL, joins and database concepts."],
                                ["Operating Systems", "Processes, threads, scheduling, memory and synchronization."],
                                ["Computer Networks", "OSI model, TCP/IP, HTTP, DNS and networking fundamentals."],
                            ].map(([title, description]) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-slate-200 p-5"
                                >
                                    <h3 className="font-bold text-slate-900">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            6. Learn DSA & Coding
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Coding assessments are common in many technical recruitment
                            processes. You should become comfortable solving programming
                            problems and explaining your approach.
                        </p>

                        <h3 className="mt-7 text-xl font-bold text-slate-900">
                            Start with:
                        </h3>

                        <ul className="mt-4 space-y-3 text-slate-700">
                            <li>✓ Arrays and strings</li>
                            <li>✓ Searching and sorting</li>
                            <li>✓ Hashing</li>
                            <li>✓ Linked lists</li>
                            <li>✓ Stacks and queues</li>
                            <li>✓ Recursion</li>
                            <li>✓ Trees and graphs</li>
                            <li>✓ Basic dynamic programming</li>
                        </ul>

                        <p className="mt-5 leading-8 text-slate-700">
                            Choose one programming language and become comfortable writing
                            solutions in it. Consistent practice is more useful than trying
                            to learn many languages at the same time.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            7. Prepare Aptitude & Reasoning
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Some campus recruitment assessments include quantitative
                            aptitude, logical reasoning, and verbal ability.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            {[
                                ["Quantitative", "Percentages, ratios, averages, profit and loss, time and work."],
                                ["Reasoning", "Series, puzzles, coding-decoding, arrangements and logical patterns."],
                                ["Verbal", "Grammar, vocabulary, reading comprehension and sentence correction."],
                            ].map(([title, description]) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-slate-200 p-5"
                                >
                                    <h3 className="font-bold text-slate-900">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            8. Prepare for Technical Interviews
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            A technical interview tests how well you understand programming,
                            computer science fundamentals, problem solving, and your own
                            projects.
                        </p>

                        <h3 className="mt-7 text-xl font-bold text-slate-900">
                            Be ready to explain:
                        </h3>

                        <ul className="mt-4 space-y-3 text-slate-700">
                            <li>✓ Your programming language fundamentals</li>
                            <li>✓ Data structures and algorithms</li>
                            <li>✓ OOP concepts</li>
                            <li>✓ DBMS and SQL</li>
                            <li>✓ Operating systems</li>
                            <li>✓ Computer networks</li>
                            <li>✓ Your projects and technical decisions</li>
                        </ul>

                        <div className="mt-7 rounded-2xl border border-green-100 bg-green-50 p-6">
                            <h3 className="text-xl font-bold text-slate-900">
                                Prepare for technical interviews
                            </h3>

                            <p className="mt-2 text-slate-700">
                                Use our detailed technical interview preparation guide.
                            </p>

                            <Link
                                to="/resources/technical-interview-preparation-for-freshers"
                                className="mt-4 inline-block font-semibold text-green-700 hover:text-green-800"
                            >
                                Read the Technical Interview Guide →
                            </Link>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            9. Prepare for HR Interviews
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            HR interviews help recruiters understand your communication,
                            motivation, career goals, and overall fit for the role.
                        </p>

                        <h3 className="mt-7 text-xl font-bold text-slate-900">
                            Practice questions such as:
                        </h3>

                        <ul className="mt-4 space-y-3 text-slate-700">
                            <li>• Tell me about yourself.</li>
                            <li>• Why do you want to join this company?</li>
                            <li>• What are your strengths?</li>
                            <li>• What is one area you are working to improve?</li>
                            <li>• Tell me about one of your projects.</li>
                            <li>• Where do you see yourself in the next few years?</li>
                        </ul>

                        <p className="mt-5 leading-8 text-slate-700">
                            Keep your answers honest and structured. Avoid memorizing a
                            scripted answer word-for-word.
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            10. Build Projects & GitHub
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Projects give you an opportunity to demonstrate that you can
                            apply what you have learned. Try to build projects that solve
                            real problems instead of creating only tutorial-based copies.
                        </p>

                        <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                            <h3 className="text-xl font-bold text-slate-900">
                                A good project should show:
                            </h3>

                            <ul className="mt-4 space-y-3 text-slate-700">
                                <li>✓ Clear problem statement</li>
                                <li>✓ Technologies used</li>
                                <li>✓ Your contribution</li>
                                <li>✓ Important features</li>
                                <li>✓ GitHub repository</li>
                                <li>✓ Live demo when possible</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            11. Improve Your LinkedIn Profile
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Your online professional presence can support your job search.
                            Keep your LinkedIn profile updated with your education, skills,
                            projects, certifications, achievements, and relevant activities.
                        </p>

                        <h3 className="mt-7 text-xl font-bold text-slate-900">
                            Focus on these areas:
                        </h3>

                        <ul className="mt-4 space-y-3 text-slate-700">
                            <li>✓ Professional headline</li>
                            <li>✓ About section</li>
                            <li>✓ Skills</li>
                            <li>✓ Projects</li>
                            <li>✓ Certifications</li>
                            <li>✓ GitHub and portfolio links</li>
                            <li>✓ Relevant posts and activity</li>
                        </ul>
                    </section>

                    {/* Section 12 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            12. Common Campus Placement Mistakes
                        </h2>

                        <div className="mt-6 space-y-4">
                            {[
                                "Starting preparation only a few days before placements.",
                                "Ignoring aptitude because you are focused only on coding.",
                                "Adding skills to your resume that you cannot explain.",
                                "Copying projects without understanding how they work.",
                                "Using the same resume for every role without checking the job description.",
                                "Ignoring communication and interview practice.",
                                "Not researching the company before an interview.",
                            ].map((mistake, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 rounded-xl border border-slate-200 p-4"
                                >
                                    <span className="font-bold text-green-600">0{index + 1}</span>
                                    <p className="text-slate-700">{mistake}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            13. A Practical 30-Day Placement Preparation Plan
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            If your placement season is approaching, you can divide your
                            preparation into four focused weeks.
                        </p>

                        <div className="mt-7 space-y-5">
                            <div className="rounded-2xl border border-slate-200 p-6">
                                <h3 className="text-xl font-bold text-green-700">
                                    Week 1 — Fundamentals
                                </h3>
                                <ul className="mt-3 space-y-2 text-slate-700">
                                    <li>✓ Revise one programming language</li>
                                    <li>✓ Start basic DSA</li>
                                    <li>✓ Revise OOP</li>
                                    <li>✓ Start aptitude practice</li>
                                    <li>✓ Review your resume</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-slate-200 p-6">
                                <h3 className="text-xl font-bold text-green-700">
                                    Week 2 — Core Preparation
                                </h3>
                                <ul className="mt-3 space-y-2 text-slate-700">
                                    <li>✓ Practice arrays, strings and searching</li>
                                    <li>✓ Revise DBMS and SQL</li>
                                    <li>✓ Practice reasoning</li>
                                    <li>✓ Improve your projects</li>
                                    <li>✓ Update GitHub</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-slate-200 p-6">
                                <h3 className="text-xl font-bold text-green-700">
                                    Week 3 — Interview Preparation
                                </h3>
                                <ul className="mt-3 space-y-2 text-slate-700">
                                    <li>✓ Revise OS and Computer Networks</li>
                                    <li>✓ Practice coding questions</li>
                                    <li>✓ Prepare project explanations</li>
                                    <li>✓ Practice technical interview questions</li>
                                    <li>✓ Practice HR questions</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-slate-200 p-6">
                                <h3 className="text-xl font-bold text-green-700">
                                    Week 4 — Mock Placement
                                </h3>
                                <ul className="mt-3 space-y-2 text-slate-700">
                                    <li>✓ Take mock aptitude tests</li>
                                    <li>✓ Solve timed coding problems</li>
                                    <li>✓ Conduct mock interviews</li>
                                    <li>✓ Research target companies</li>
                                    <li>✓ Finalize resume and LinkedIn</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            14. Final Campus Placement Checklist
                        </h2>

                        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">
                            <ul className="space-y-3 text-slate-700">
                                <li>☐ Resume is updated and reviewed</li>
                                <li>☐ GitHub profile is organized</li>
                                <li>☐ LinkedIn profile is complete</li>
                                <li>☐ At least 2–3 projects are ready to explain</li>
                                <li>☐ One programming language is strong</li>
                                <li>☐ DSA fundamentals are practiced</li>
                                <li>☐ OOP, DBMS, OS and CN are revised</li>
                                <li>☐ Aptitude and reasoning are practiced</li>
                                <li>☐ Technical interview questions are prepared</li>
                                <li>☐ HR questions are practiced</li>
                                <li>☐ Company research is done before interviews</li>
                            </ul>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Final Thoughts
                        </h2>

                        <p className="mt-5 leading-8 text-slate-700">
                            Campus placement preparation is not about trying to become an
                            expert in everything. It is about building strong fundamentals,
                            practicing consistently, understanding your projects, and being
                            able to communicate what you know.
                        </p>

                        <p className="mt-4 leading-8 text-slate-700">
                            Start with the basics, create a realistic daily routine, track
                            your progress, and improve one area at a time. Even a few focused
                            hours of preparation every day can make your preparation much
                            more organized.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="rounded-3xl bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 p-8 text-white md:p-10">
                        <h2 className="text-3xl font-bold">
                            Prepare Smarter With SkillBridge AI
                        </h2>

                        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                            Organize your skills, projects, certificates, resume and career
                            preparation in one place with SkillBridge AI.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-4">
                            <Link
                                to="/signup"
                                className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-green-400"
                            >
                                Get Started →
                            </Link>

                            <Link
                                to="/resources"
                                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Explore Resources
                            </Link>
                        </div>
                    </section>
                </article>
            </main>

            <Footer />
        </>
    );
};

export default CampusPlacementGuide;