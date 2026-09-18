import SEO from "../../../components/common/SEO";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import { Link } from "react-router-dom";

const ATSResumeGuide = () => {
    return (
        <>
            <SEO
                title="How to Create an ATS-Friendly Resume as a Fresher — SkillBridge AI"
                description="Learn how to create an ATS-friendly resume as a fresher with practical guidance on resume structure, skills, projects, education, certifications, common mistakes, and an ATS checklist."
                canonical="https://skill-bridge-ai-sage.vercel.app/resources/ats-friendly-resume-for-freshers"
            />

            <Navbar />

            <main className="min-h-screen bg-slate-50 text-slate-900">

                {/* HERO */}
                <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-16 text-white md:py-20">

                    {/* Green Glow */}
                    <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-green-500/15 blur-[100px]" />

                    <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-green-400/10 blur-[100px]" />

                    <div className="relative mx-auto max-w-6xl">

                        {/* Top Navigation */}
                        <div className="mb-7 flex flex-wrap gap-2">

                            <Link
                                to="/resources"
                                className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 transition hover:bg-green-500/20"
                            >
                                ← Back to Resources
                            </Link>

                            <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                                📄 Resume Guide
                            </span>

                        </div>

                        {/* Heading */}
                        <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">

                            How to Create an{" "}

                            <span className="text-green-400">
                                ATS-Friendly Resume
                            </span>{" "}

                            as a Fresher

                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            A practical guide for students and freshers who want to create
                            a clear, professional, and ATS-friendly resume for internships
                            and entry-level opportunities.
                        </p>

                        {/* Info Pills */}
                        <div className="mt-7 flex flex-wrap gap-3">

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                🎓 For Freshers
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                ⏱️ 8–10 min read
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                💼 Career Guide
                            </span>

                        </div>

                    </div>

                </section>


                {/* =========================
                    ARTICLE
                ========================= */}

                <article className="px-6 py-16 md:py-20">

                    <div className="mx-auto max-w-5xl">

                        {/* Introduction */}

                        <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">

                            <p className="text-lg leading-8 text-slate-700">
                                Your resume is often the first document a recruiter
                                sees when you apply for an internship or job.
                                For many applications, resumes may also be processed
                                by an Applicant Tracking System (ATS) before a
                                recruiter reviews them.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-slate-700">
                                For a fresher, the goal should be simple:
                                create a resume that is easy to read, clearly
                                communicates your skills, highlights relevant
                                projects, and matches the requirements of the
                                opportunity you are applying for.
                            </p>

                        </section>


                        {/* Table of Contents */}

                        <section className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-7 md:p-8">

                            <h2 className="text-xl font-extrabold text-slate-900">
                                📌 In This Guide
                            </h2>

                            <div className="mt-5 grid gap-3 md:grid-cols-2">

                                {[
                                    "What is an ATS?",
                                    "How to Structure a Fresher Resume",
                                    "Write a Strong Resume Header",
                                    "Add Relevant Technical Skills",
                                    "Showcase Your Projects",
                                    "Education and Certifications",
                                    "Common Resume Mistakes",
                                    "ATS-Friendly Resume Checklist",
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                                    >
                                        <span className="mr-2 text-green-600">
                                            {index + 1}.
                                        </span>
                                        {item}
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* What is ATS */}

                        <section className="mt-12">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                1. What is an ATS?
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                ATS stands for Applicant Tracking System. It is
                                software used by many organizations to help
                                manage and organize job applications.
                            </p>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                An ATS may scan resume content for information
                                such as skills, education, experience, projects,
                                and keywords that are relevant to a job
                                description.
                            </p>

                            <div className="mt-6 rounded-2xl border-l-4 border-green-500 bg-white p-6 shadow-sm">
                                <p className="font-semibold text-slate-800">
                                    💡 Simple rule:
                                </p>

                                <p className="mt-2 leading-7 text-slate-600">
                                    Keep your resume simple, readable, relevant,
                                    and focused on the requirements of the role.
                                </p>
                            </div>

                        </section>


                        {/* Resume Structure */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                2. How to Structure a Fresher Resume
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                A fresher usually does not need a long resume.
                                Focus on the information that demonstrates your
                                education, technical skills, projects,
                                certifications, and relevant achievements.
                            </p>

                            <div className="mt-7 space-y-4">

                                {[
                                    ["01", "Name & Contact Information", "Include your name, phone number, professional email, LinkedIn, GitHub, and portfolio when relevant."],
                                    ["02", "Career Objective or Summary", "Write a short and specific introduction that explains what type of role you are looking for and what you can contribute."],
                                    ["03", "Technical Skills", "List relevant programming languages, frameworks, databases, development tools, and other job-related technologies."],
                                    ["04", "Projects", "Show practical work with technologies used, your contribution, and measurable or meaningful outcomes where possible."],
                                    ["05", "Education", "Mention your degree, institution, graduation year, and relevant academic information."],
                                    ["06", "Certifications & Achievements", "Add relevant certifications, courses, hackathons, coding achievements, or other meaningful accomplishments."],
                                ].map(([number, title, description]) => (
                                    <div
                                        key={number}
                                        className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 font-bold text-green-600">
                                            {number}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-extrabold text-slate-900">
                                                {title}
                                            </h3>

                                            <p className="mt-2 leading-7 text-slate-600">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* Header */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                3. Write a Strong Resume Header
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Your header should make it easy for a recruiter
                                to identify you and find your professional
                                contact information.
                            </p>

                            <div className="mt-7 rounded-2xl bg-slate-900 p-7 text-white">

                                <p className="text-xl font-bold">
                                    Your Name
                                </p>

                                <p className="mt-2 text-slate-300">
                                    Full Stack Developer | Java | React | Node.js
                                </p>

                                <p className="mt-4 text-sm leading-7 text-slate-400">
                                    Email • Phone • LinkedIn • GitHub • Portfolio
                                </p>

                            </div>

                            <p className="mt-5 leading-7 text-slate-600">
                                Use a professional email address and make sure
                                your LinkedIn, GitHub, and portfolio links work
                                before submitting your resume.
                            </p>

                        </section>


                        {/* Skills */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                4. Add Relevant Technical Skills
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Avoid creating a huge list of technologies just
                                to make your resume look impressive. Focus on
                                skills that are relevant to the position.
                            </p>

                            <div className="mt-7 grid gap-5 md:grid-cols-2">

                                {[
                                    ["Programming", "Java, Python, C, JavaScript"],
                                    ["Frontend", "HTML, CSS, React"],
                                    ["Backend", "Node.js, Express, Laravel"],
                                    ["Database", "MySQL, MongoDB"],
                                    ["Tools", "Git, GitHub, VS Code"],
                                    ["Concepts", "OOP, DBMS, REST APIs"],
                                ].map(([title, skills]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                    >
                                        <h3 className="font-extrabold text-slate-900">
                                            {title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-slate-600">
                                            {skills}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* Projects */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                5. Showcase Your Projects
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Projects are especially important for freshers
                                because they demonstrate how you apply what you
                                have learned.
                            </p>

                            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                                <h3 className="text-xl font-extrabold text-slate-900">
                                    Example Project Format
                                </h3>

                                <div className="mt-5 rounded-2xl bg-slate-50 p-6">

                                    <h4 className="font-extrabold text-slate-900">
                                        SkillBridge AI — Student Career Platform
                                    </h4>

                                    <p className="mt-2 font-semibold text-green-600">
                                        React • Node.js • Express • MongoDB
                                    </p>

                                    <ul className="mt-4 space-y-3 text-slate-600">
                                        <li>• Built a career management platform for students.</li>
                                        <li>• Added resume, project, skills, and certificate management.</li>
                                        <li>• Integrated AI-powered career and job assistance features.</li>
                                        <li>• Designed responsive interfaces for desktop and mobile users.</li>
                                    </ul>

                                </div>

                            </div>

                            <div className="mt-6 rounded-2xl bg-green-50 p-6">
                                <p className="font-bold text-slate-900">
                                    💡 Tip:
                                </p>

                                <p className="mt-2 leading-7 text-slate-600">
                                    Whenever possible, explain what you built,
                                    which technologies you used, and what result
                                    or problem your project addressed.
                                </p>
                            </div>

                        </section>


                        {/* Education */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                6. Education and Certifications
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                For freshers, education and certifications can
                                provide useful evidence of your learning and
                                technical preparation.
                            </p>

                            <div className="mt-7 grid gap-6 md:grid-cols-2">

                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-xl font-extrabold">
                                        🎓 Education
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        Degree → College/University → Graduation
                                        Year → Relevant academic details.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-xl font-extrabold">
                                        🏆 Certifications
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        Include certifications that are relevant
                                        to the role and list the issuing
                                        organization when useful.
                                    </p>
                                </div>

                            </div>

                        </section>


                        {/* Mistakes */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                7. Common Resume Mistakes to Avoid
                            </h2>

                            <div className="mt-7 space-y-3">

                                {[
                                    "Using a complicated design with too many graphics.",
                                    "Adding irrelevant skills or technologies.",
                                    "Using spelling or grammar mistakes.",
                                    "Including incorrect contact information.",
                                    "Writing long paragraphs instead of concise bullet points.",
                                    "Adding fake experience, skills, projects, or achievements.",
                                    "Using the same resume for every job without checking the job requirements.",
                                    "Including broken or incorrect LinkedIn, GitHub, or portfolio links.",
                                ].map((mistake) => (
                                    <div
                                        key={mistake}
                                        className="flex gap-3 rounded-xl border border-red-100 bg-white px-5 py-4 shadow-sm"
                                    >
                                        <span className="text-red-500">
                                            ✕
                                        </span>

                                        <p className="text-slate-600">
                                            {mistake}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* Checklist */}

                        <section className="mt-14 rounded-3xl bg-[#031c13] p-7 text-white md:p-10">

                            <h2 className="text-3xl font-extrabold">
                                8. ATS-Friendly Resume Checklist
                            </h2>

                            <p className="mt-4 text-slate-300">
                                Before submitting your resume, quickly check
                                the following:
                            </p>

                            <div className="mt-7 grid gap-3 md:grid-cols-2">

                                {[
                                    "Resume is easy to read.",
                                    "Relevant keywords are naturally included.",
                                    "Job-related skills are clearly listed.",
                                    "Projects have clear descriptions.",
                                    "Education information is complete.",
                                    "Contact details are correct.",
                                    "LinkedIn and GitHub links work.",
                                    "Spelling and grammar are checked.",
                                    "Resume content is relevant to the role.",
                                    "No unnecessary graphics or decorative elements.",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                                    >
                                        <span className="text-green-400">
                                            ✓
                                        </span>

                                        <span className="text-slate-200">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* Final Tips */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                Final Tips for Freshers
                            </h2>

                            <div className="mt-6 space-y-4">

                                <p className="leading-8 text-slate-600">
                                    <strong className="text-slate-900">
                                        1. Keep it relevant:
                                    </strong>{" "}
                                    Prioritize information that supports the
                                    role you are applying for.
                                </p>

                                <p className="leading-8 text-slate-600">
                                    <strong className="text-slate-900">
                                        2. Focus on evidence:
                                    </strong>{" "}
                                    Projects, certifications, and practical work
                                    can demonstrate your skills.
                                </p>

                                <p className="leading-8 text-slate-600">
                                    <strong className="text-slate-900">
                                        3. Keep improving:
                                    </strong>{" "}
                                    Update your resume as you complete new
                                    projects, courses, certifications, or
                                    achievements.
                                </p>

                            </div>

                        </section>


                        {/* CTA */}

                        <section className="mt-16 rounded-3xl bg-green-50 p-8 text-center md:p-12">

                            <p className="font-bold uppercase tracking-widest text-green-600">
                                Ready to Improve Your Career Profile?
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                                Build Your Career Smarter with SkillBridge AI
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                                Manage your resume, skills, projects,
                                certificates, career goals, and AI-powered
                                career tools in one place.
                            </p>

                            <Link
                                to="/signup"
                                className="mt-7 inline-flex rounded-xl bg-green-600 px-7 py-3 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
                            >
                                Get Started Free →
                            </Link>

                        </section>

                    </div>

                </article>

            </main>

            <Footer />
        </>
    );
};

export default ATSResumeGuide;