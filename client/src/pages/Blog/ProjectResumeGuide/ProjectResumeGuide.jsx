import { Link } from "react-router-dom";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";

function ProjectResumeGuide() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

            <SEO
                title="How to Build Projects for Your Resume as a Fresher — SkillBridge AI"
                description="Learn how freshers can choose, build, document, and showcase projects on their resume and GitHub to demonstrate practical skills."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/how-to-build-projects-for-resume-as-a-fresher"
            />

            <Navbar />

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-14 text-white md:py-18">

                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl">

                    <Link
                        to="/blog"
                        className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300 transition hover:bg-green-400/20"
                    >
                        ← Back to Blog
                    </Link>

                    <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                        Project & Resume Guide
                    </div>

                    <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        How to Build Projects for Your{" "}
                        <span className="text-green-400">
                            Resume as a Fresher
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                        Learn how to choose useful projects, build them with
                        practical features, showcase them on GitHub, and
                        present them effectively on your resume and in interviews.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Projects
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Resume
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            GitHub
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Freshers
                        </span>

                    </div>

                </div>
            </section>


            {/* ARTICLE */}
            <main className="px-6 py-14 md:py-20">

                <article className="mx-auto max-w-4xl">

                    {/* INTRO */}
                    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">

                        <p className="text-lg leading-8 text-slate-700">
                            For freshers, projects are one of the strongest ways
                            to demonstrate practical skills. A well-built
                            project can show that you understand technology,
                            problem solving, development workflows, and how to
                            turn an idea into a working product.
                        </p>

                        <p className="mt-5 leading-8 text-slate-600">
                            You do not need dozens of projects. A few relevant,
                            properly documented projects are often more useful
                            than a long list of unfinished or copied projects.
                        </p>

                    </section>


                    {/* 1 */}
                    <section className="mt-10">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            1. Why Projects Matter for Freshers
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Students often have limited professional experience.
                            Projects help bridge that gap by giving recruiters
                            something concrete to evaluate.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "Demonstrate practical technical skills",
                                "Show problem-solving ability",
                                "Give interviewers something to discuss",
                                "Demonstrate your development workflow",
                                "Showcase your technology stack",
                                "Provide evidence beyond course certificates",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <p className="font-semibold text-slate-800">
                                        ✓ {item}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 2 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            2. How to Choose the Right Project
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Choose projects that match the type of role you want.
                            Your project should give you an opportunity to use
                            the technologies and concepts relevant to that role.
                        </p>

                        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">

                            <h3 className="text-xl font-bold text-slate-900">
                                A simple rule:
                            </h3>

                            <p className="mt-3 leading-7 text-slate-700">
                                Target role → required skills → project that
                                demonstrates those skills.
                            </p>

                        </div>

                        <div className="mt-6 space-y-4">

                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <h3 className="font-bold text-slate-900">
                                    Full Stack Developer
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    Build a complete web application with frontend,
                                    backend, database, authentication, and APIs.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <h3 className="font-bold text-slate-900">
                                    Java Developer
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    Build an application that demonstrates Java,
                                    OOP, collections, database connectivity, and
                                    backend development.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <h3 className="font-bold text-slate-900">
                                    Python Developer
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    Build a useful application using Python and
                                    relevant libraries or frameworks.
                                </p>
                            </div>

                        </div>

                    </section>


                    {/* 3 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            3. Beginner Project Ideas
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            If you are starting your development journey, begin
                            with projects that solve simple problems and gradually
                            increase their complexity.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            {[
                                ["To-Do Application", "Task management, CRUD operations, local storage or database."],
                                ["Expense Tracker", "Transactions, categories, calculations, charts, and storage."],
                                ["Student Management System", "Student records, authentication, CRUD, and database operations."],
                                ["Job Board", "Job listings, search, filters, applications, and user accounts."],
                                ["Portfolio Website", "Personal branding, projects, skills, certificates, and contact information."],
                                ["Blog Platform", "Posts, categories, authentication, comments, and database integration."],
                            ].map(([title, description]) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-slate-600">
                                        {description}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 4 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            4. MERN Stack Project Ideas
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            MERN projects can demonstrate frontend, backend,
                            database, API, authentication, and deployment skills.
                        </p>

                        <ul className="mt-6 space-y-4">

                            {[
                                "Student Career Management System",
                                "Job Portal",
                                "E-Commerce Application",
                                "Learning Management System",
                                "Expense Management Dashboard",
                                "Event Management Platform",
                                "AI-Powered Career Assistant",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700 shadow-sm"
                                >
                                    <span className="mr-2 text-green-600">✓</span>
                                    {item}
                                </li>
                            ))}

                        </ul>

                    </section>


                    {/* 5 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            5. Java & Python Project Ideas
                        </h2>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Java
                                </h3>

                                <ul className="mt-4 space-y-3 text-slate-600">
                                    <li>• Library Management System</li>
                                    <li>• Banking Application</li>
                                    <li>• Student Management System</li>
                                    <li>• Inventory Management System</li>
                                    <li>• Quiz Application</li>
                                </ul>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Python
                                </h3>

                                <ul className="mt-4 space-y-3 text-slate-600">
                                    <li>• Expense Tracker</li>
                                    <li>• Weather Application</li>
                                    <li>• Student Management System</li>
                                    <li>• Data Analysis Dashboard</li>
                                    <li>• Automation Tools</li>
                                </ul>

                            </div>

                        </div>

                    </section>


                    {/* 6 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            6. What Makes a Good Project?
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            A good project should demonstrate more than a basic
                            user interface. Try to include features that show
                            your understanding of real application development.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "Clear problem statement",
                                "Clean and responsive UI",
                                "Proper project structure",
                                "Database integration",
                                "Authentication where required",
                                "API integration",
                                "Validation and error handling",
                                "Useful real-world features",
                                "README documentation",
                                "Live deployment when possible",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                                >
                                    <span className="font-medium text-slate-700">
                                        ✓ {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 7 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            7. How to Write Projects on Your Resume
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Keep project descriptions short, specific, and
                            focused on what you built and the technologies you used.
                        </p>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">

                            <h3 className="text-xl font-bold text-green-400">
                                Example
                            </h3>

                            <p className="mt-4 font-semibold">
                                SkillBridge AI — Student Career Management Platform
                            </p>

                            <p className="mt-3 leading-7 text-slate-300">
                                Built a full-stack career management platform using
                                React, Node.js, Express, MongoDB, and JWT
                                authentication to help students manage resumes,
                                skills, projects, certificates, and job applications.
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-slate-600">
                            Whenever possible, mention the technology stack,
                            important functionality, and the problem your project
                            solves.
                        </p>

                    </section>


                    {/* 8 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            8. How to Showcase Projects on GitHub
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Your GitHub repository should make it easy for someone
                            to understand what your project does and how it was built.
                        </p>

                        <div className="mt-6 space-y-4">

                            {[
                                "Use a clear repository name.",
                                "Write a useful README.md.",
                                "Explain the project purpose.",
                                "Mention the technology stack.",
                                "Add setup and installation instructions.",
                                "Include screenshots when useful.",
                                "Add the live demo link if available.",
                                "Keep the repository organized.",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                                        {index + 1}
                                    </span>

                                    <p className="leading-7 text-slate-700">
                                        {item}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 9 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            9. How to Explain Your Project in an Interview
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Interviewers may ask detailed questions about projects
                            listed on your resume. Be ready to explain your project
                            clearly.
                        </p>

                        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">

                            <h3 className="text-xl font-bold text-slate-900">
                                Use this simple structure:
                            </h3>

                            <ol className="mt-4 space-y-3 text-slate-700">
                                <li><strong>1. Problem:</strong> What problem does it solve?</li>
                                <li><strong>2. Solution:</strong> What did you build?</li>
                                <li><strong>3. Technology:</strong> Which technologies did you use?</li>
                                <li><strong>4. Features:</strong> What are the important features?</li>
                                <li><strong>5. Challenge:</strong> What technical challenge did you face?</li>
                                <li><strong>6. Learning:</strong> What did you learn?</li>
                                <li><strong>7. Future:</strong> What would you improve next?</li>
                            </ol>

                        </div>

                    </section>


                    {/* 10 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            10. Common Project Mistakes
                        </h2>

                        <div className="mt-6 space-y-4">

                            {[
                                "Adding copied projects without understanding them.",
                                "Listing too many unfinished projects.",
                                "Using technologies without understanding their purpose.",
                                "Having no README or documentation.",
                                "Adding projects that are unrelated to the target role.",
                                "Being unable to explain the project during an interview.",
                                "Keeping broken or outdated GitHub repositories.",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-red-100 bg-red-50 p-5 text-slate-700"
                                >
                                    ⚠️ {item}
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 11 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            11. Fresher Project Checklist
                        </h2>

                        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                            <div className="grid gap-4 md:grid-cols-2">

                                {[
                                    "Project solves a clear problem",
                                    "Technology stack is relevant",
                                    "Code is organized",
                                    "Important features work",
                                    "Responsive UI",
                                    "Error handling included",
                                    "GitHub repository created",
                                    "README added",
                                    "Live demo available",
                                    "Project added to resume",
                                    "Project added to LinkedIn",
                                    "You can explain the project",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-slate-700"
                                    >
                                        <span className="text-lg text-green-600">
                                            ✓
                                        </span>
                                        {item}
                                    </div>
                                ))}

                            </div>

                        </div>

                    </section>


                    {/* 12 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            12. Final Tips
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Focus on building a small number of meaningful projects
                            instead of collecting many basic ones. Your projects
                            should demonstrate what you know and give you useful
                            experiences to discuss during interviews.
                        </p>

                        <p className="mt-5 leading-8 text-slate-600">
                            Start simple, improve the project over time, document
                            your work, publish it on GitHub, and keep your resume
                            focused on projects that match your target role.
                        </p>

                    </section>


                    {/* CTA */}
                    <section className="mt-14 rounded-3xl bg-green-500 px-6 py-12 text-center shadow-xl md:px-10">

                        <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
                            Build Projects That Show What You Can Do
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-900/80">
                            Explore more career resources and prepare your resume,
                            interviews, projects, and job search with SkillBridge AI.
                        </p>

                        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">

                            <Link
                                to="/resources/ats-friendly-resume-for-freshers"
                                className="rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
                            >
                                Resume Guide →
                            </Link>

                            <Link
                                to="/blog"
                                className="rounded-xl border border-slate-950/20 bg-white/20 px-6 py-3 font-bold text-slate-950 transition hover:bg-white/30"
                            >
                                Explore More Articles
                            </Link>

                        </div>

                    </section>

                </article>

            </main>

            <Footer />

        </div>
    );
}

export default ProjectResumeGuide;