import { Link } from "react-router-dom";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";

function FirstJobInterviewGuide() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <SEO
                title="First Job Interview Guide for Freshers — SkillBridge AI"
                description="Learn how freshers can prepare for their first job interview, answer common HR questions, explain projects, prepare for technical interviews, and avoid common interview mistakes."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/first-job-interview-guide-for-freshers"
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
                            Interview Guide
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        First Job Interview Guide for{" "}
                        <span className="text-green-400">
                            Freshers
                        </span>
                        : How to Prepare and Succeed
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                        Learn how to prepare for your first job interview,
                        answer common questions, explain your projects,
                        handle technical and HR rounds, and build confidence.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                            🎓 For Freshers
                        </span>

                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                            💼 Interview Preparation
                        </span>

                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                            🚀 Job Ready
                        </span>
                    </div>
                </div>
            </section>

            {/* ARTICLE */}
            <main className="px-6 py-14 md:py-20">
                <article className="mx-auto max-w-4xl">

                    <p className="text-lg leading-8 text-slate-700">
                        Getting your first interview after college can feel
                        exciting and stressful at the same time. The good news
                        is that most fresher interviews follow a fairly
                        understandable structure.
                    </p>

                    <p className="mt-5 leading-8 text-slate-700">
                        With the right preparation, you can explain your
                        background clearly, discuss your projects confidently,
                        solve technical questions, and handle HR conversations
                        professionally.
                    </p>

                    {/* 1 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            1. Understand the Interview Process
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Fresher hiring processes can differ between
                            companies, but many include some combination of
                            these stages:
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Online assessment</li>
                            <li>• Coding or technical assessment</li>
                            <li>• Technical interview</li>
                            <li>• Managerial or discussion round</li>
                            <li>• HR interview</li>
                        </ul>

                        <p className="mt-5 leading-8 text-slate-700">
                            Check the job description and communication from
                            the company so you know which stages you should
                            prepare for.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            2. Prepare Your Introduction
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            One of the most common opening questions is:
                        </p>

                        <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-6">
                            <p className="font-bold text-green-950">
                                “Tell me about yourself.”
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-slate-700">
                            Keep your answer focused on your education, key
                            skills, projects, relevant achievements, and the
                            type of role you are targeting.
                        </p>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="font-bold">
                                Simple structure:
                            </p>

                            <p className="mt-3 leading-7 text-slate-700">
                                Education → Skills → Projects → Achievements →
                                Career interest
                            </p>
                        </div>
                    </section>

                    {/* 3 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            3. Know Your Resume Completely
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Interviewers may ask questions from anything you
                            mention on your resume.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Technical skills</li>
                            <li>• Projects</li>
                            <li>• Certifications</li>
                            <li>• Internships or experience</li>
                            <li>• Achievements</li>
                            <li>• Education</li>
                        </ul>

                        <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
                            <p className="font-semibold text-yellow-900">
                                Important:
                            </p>

                            <p className="mt-2 leading-7 text-yellow-800">
                                Never add a technology or experience you cannot
                                explain during an interview.
                            </p>
                        </div>

                        <Link
                            to="/resources/ats-friendly-resume-for-freshers"
                            className="mt-5 inline-block font-bold text-green-600 hover:text-green-700"
                        >
                            Read the ATS Resume Guide →
                        </Link>
                    </section>

                    {/* 4 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            4. Prepare to Explain Your Projects
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Freshers are often asked about their academic or
                            personal projects.
                        </p>

                        <p className="mt-5 leading-8 text-slate-700">
                            Be ready to explain:
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• What problem does the project solve?</li>
                            <li>• Why did you build it?</li>
                            <li>• Which technologies did you use?</li>
                            <li>• What was your contribution?</li>
                            <li>• What challenges did you face?</li>
                            <li>• How did you solve those challenges?</li>
                            <li>• What would you improve?</li>
                        </ul>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="font-bold">
                                Project explanation formula:
                            </p>

                            <p className="mt-3 leading-7 text-slate-700">
                                Problem → Solution → Technology → Your Role →
                                Challenge → Result
                            </p>
                        </div>
                    </section>

                    {/* 5 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            5. Revise Technical Fundamentals
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Depending on the role, revise the fundamentals
                            commonly associated with your target position.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {[
                                "Programming fundamentals",
                                "Data Structures & Algorithms",
                                "Object-Oriented Programming",
                                "DBMS & SQL",
                                "Operating Systems",
                                "Computer Networks",
                                "Git & GitHub",
                                "Web Development",
                            ].map((topic) => (
                                <div
                                    key={topic}
                                    className="rounded-xl border border-slate-200 bg-white p-5 font-semibold shadow-sm"
                                >
                                    {topic}
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/resources/technical-interview-preparation-for-freshers"
                            className="mt-6 inline-block font-bold text-green-600 hover:text-green-700"
                        >
                            Read the Technical Interview Guide →
                        </Link>
                    </section>

                    {/* 6 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            6. Practice Coding Questions
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            For developer roles, regular coding practice can
                            help you become more comfortable with technical
                            assessments and interview questions.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Arrays and strings</li>
                            <li>• Searching and sorting</li>
                            <li>• Linked lists</li>
                            <li>• Stacks and queues</li>
                            <li>• Hashing</li>
                            <li>• Recursion</li>
                            <li>• Basic trees and graphs</li>
                            <li>• Time and space complexity</li>
                        </ul>
                    </section>

                    {/* 7 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            7. Prepare Common HR Questions
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            HR questions are often used to understand your
                            communication, motivation, career goals, and
                            working style.
                        </p>

                        <div className="mt-6 space-y-4">
                            {[
                                "Tell me about yourself.",
                                "Why do you want to join our company?",
                                "Why should we hire you?",
                                "What are your strengths?",
                                "What is one area you are improving?",
                                "Where do you see yourself in a few years?",
                                "Why did you choose your degree?",
                                "Are you comfortable working from another location?",
                            ].map((question) => (
                                <div
                                    key={question}
                                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <p className="font-semibold">
                                        {question}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 8 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            8. Research the Company
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Before the interview, understand the company and
                            the role you applied for.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• What the company does</li>
                            <li>• Products or services</li>
                            <li>• Role responsibilities</li>
                            <li>• Required skills</li>
                            <li>• Recent company information</li>
                        </ul>

                        <p className="mt-5 leading-8 text-slate-700">
                            This preparation can also help you ask meaningful
                            questions when the interviewer gives you an
                            opportunity to do so.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            9. Practice Mock Interviews
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Practicing aloud is different from simply reading
                            interview questions. Mock interviews can help you
                            improve clarity, confidence, and response structure.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Practice your introduction.</li>
                            <li>• Explain at least two projects.</li>
                            <li>• Practice technical questions.</li>
                            <li>• Practice HR questions.</li>
                            <li>• Record yourself when possible.</li>
                        </ul>
                    </section>

                    {/* 10 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            10. Ask Good Questions
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            If the interviewer asks whether you have questions,
                            prepare a few beforehand.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• What does the first few months in this role look like?</li>
                            <li>• What skills are most important for this position?</li>
                            <li>• How does the team collaborate?</li>
                            <li>• What does the learning process look like for freshers?</li>
                        </ul>
                    </section>

                    {/* 11 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            11. Interview Day Checklist
                        </h2>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                            {[
                                "Check interview time",
                                "Test internet and device",
                                "Keep resume ready",
                                "Keep job description available",
                                "Choose a quiet place",
                                "Dress professionally",
                                "Join a few minutes early",
                                "Keep a notebook nearby",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl bg-white p-4 font-medium shadow-sm border border-slate-200"
                                >
                                    ✓ {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 12 */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-extrabold">
                            Common Interview Mistakes Freshers Should Avoid
                        </h2>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>❌ Memorizing answers without understanding them</li>
                            <li>❌ Claiming skills you do not know</li>
                            <li>❌ Not knowing your own projects</li>
                            <li>❌ Giving extremely long answers</li>
                            <li>❌ Speaking negatively about previous experiences</li>
                            <li>❌ Not researching the company</li>
                            <li>❌ Joining late</li>
                            <li>❌ Giving up after one difficult question</li>
                        </ul>
                    </section>

                    {/* CHECKLIST */}
                    <section className="mt-14 rounded-3xl bg-green-50 p-7 md:p-10">
                        <h2 className="text-3xl font-extrabold text-green-950">
                            First Interview Preparation Checklist
                        </h2>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                            {[
                                "Resume reviewed",
                                "Introduction prepared",
                                "Projects prepared",
                                "Technical fundamentals revised",
                                "Coding practice completed",
                                "HR questions practiced",
                                "Company researched",
                                "Mock interview completed",
                                "Questions prepared for interviewer",
                                "Interview-day setup checked",
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
                            Your first interview does not have to be perfect.
                            Treat preparation as a process of learning how to
                            communicate your skills and experiences clearly.
                        </p>

                        <p className="mt-5 leading-8 text-slate-700">
                            Prepare your fundamentals, understand your
                            projects, practice common questions, research the
                            company, and keep improving after every interview.
                        </p>
                    </section>

                </article>
            </main>

            {/* CTA */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-5xl rounded-3xl bg-green-500 px-6 py-12 text-center shadow-xl md:px-10">
                    <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
                        Prepare Smarter With SkillBridge AI
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-900/80">
                        Organize your resume, skills, projects, career goals,
                        and interview preparation in one place.
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

export default FirstJobInterviewGuide;
