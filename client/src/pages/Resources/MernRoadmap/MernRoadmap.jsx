import SEO from "../../../components/common/SEO";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import { Link } from "react-router-dom";

const MernRoadmap = () => {
    const roadmapSteps = [
        {
            number: "01",
            title: "HTML & CSS",
            description:
                "Learn semantic HTML, forms, accessibility basics, CSS selectors, box model, Flexbox, Grid, responsive design, and modern layouts.",
            skills: [
                "HTML5",
                "CSS3",
                "Flexbox",
                "CSS Grid",
                "Responsive Design",
            ],
        },
        {
            number: "02",
            title: "JavaScript",
            description:
                "Build a strong JavaScript foundation before moving into React. Focus on syntax, functions, arrays, objects, DOM, ES6+, and asynchronous JavaScript.",
            skills: [
                "ES6+",
                "Functions",
                "Arrays & Objects",
                "DOM",
                "Promises",
                "Async/Await",
            ],
        },
        {
            number: "03",
            title: "Git & GitHub",
            description:
                "Learn version control and use GitHub to manage your projects, collaborate with others, and build a public developer profile.",
            skills: [
                "Git Basics",
                "Branches",
                "Commits",
                "Pull Requests",
                "GitHub Repositories",
            ],
        },
        {
            number: "04",
            title: "React",
            description:
                "Learn component-based frontend development and build interactive interfaces using React.",
            skills: [
                "Components",
                "Props",
                "State",
                "Hooks",
                "React Router",
                "API Integration",
            ],
        },
        {
            number: "05",
            title: "Node.js & Express",
            description:
                "Learn how to build backend applications and REST APIs using Node.js and Express.",
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "Middleware",
                "Error Handling",
            ],
        },
        {
            number: "06",
            title: "MongoDB",
            description:
                "Learn how to store and manage application data using MongoDB and connect it with your Node.js backend.",
            skills: [
                "MongoDB",
                "Collections",
                "Documents",
                "CRUD",
                "Mongoose",
            ],
        },
        {
            number: "07",
            title: "Authentication & Security",
            description:
                "Understand how applications manage users and protect private resources.",
            skills: [
                "JWT",
                "Password Hashing",
                "Protected Routes",
                "Authorization",
                "Environment Variables",
            ],
        },
        {
            number: "08",
            title: "Build Real Projects",
            description:
                "Combine your frontend and backend skills by building projects that solve practical problems.",
            skills: [
                "Portfolio",
                "Job Board",
                "E-commerce",
                "Career Platform",
                "Full Stack Apps",
            ],
        },
        {
            number: "09",
            title: "Deployment",
            description:
                "Learn how to take your application from localhost to a publicly accessible production website.",
            skills: [
                "Frontend Deployment",
                "Backend Deployment",
                "Environment Variables",
                "MongoDB Atlas",
                "Custom Domain",
            ],
        },
    ];

    const projectIdeas = [
        {
            icon: "📝",
            title: "Task Management App",
            description:
                "Build a full-stack task manager with authentication, CRUD operations, filters, and user-specific tasks.",
        },
        {
            icon: "💼",
            title: "Job Board",
            description:
                "Create a platform where users can browse jobs and manage job applications.",
        },
        {
            icon: "🛒",
            title: "E-commerce Platform",
            description:
                "Build product listings, user authentication, cart functionality, and order management.",
        },
        {
            icon: "🎓",
            title: "Student Career Platform",
            description:
                "Create a platform for students to manage skills, projects, resumes, certificates, and career goals.",
        },
    ];

    const jobReadyChecklist = [
        "Strong HTML and CSS fundamentals",
        "Comfortable with modern JavaScript",
        "Can build React applications",
        "Can create REST APIs",
        "Understands MongoDB and Mongoose",
        "Can implement authentication",
        "Uses Git and GitHub",
        "Has 2–4 meaningful projects",
        "Has a professional portfolio",
        "Can explain projects clearly in interviews",
    ];

    return (
        <>
            <SEO
                title="MERN Stack Developer Roadmap for Beginners — SkillBridge AI"
                description="Follow a practical MERN Stack Developer roadmap covering HTML, CSS, JavaScript, Git, React, Node.js, Express, MongoDB, authentication, projects, and deployment."
                canonical="https://skill-bridge-ai-sage.vercel.app/resources/mern-stack-developer-roadmap"
            />

            <Navbar />

            <main className="min-h-screen bg-slate-50 text-slate-900">

                {/* HERO */}
                <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-14 text-white md:py-18">

                    {/* Green Glow */}
                    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-green-500/15 blur-[100px]" />

                    <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-green-400/10 blur-[100px]" />

                    <div className="relative mx-auto max-w-6xl">

                        {/* Navigation Pills */}
                        <div className="mb-6 flex flex-wrap gap-2">

                            <Link
                                to="/resources"
                                className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 transition hover:bg-green-500/20"
                            >
                                ← Back to Resources
                            </Link>

                            <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                                💻 Developer Roadmap
                            </span>

                        </div>

                        {/* Heading */}
                        <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">

                            MERN Stack{" "}

                            <span className="text-green-400">
                                Developer Roadmap
                            </span>{" "}

                            for Beginners

                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                            A practical step-by-step roadmap to learn the MERN Stack,
                            build real-world projects, understand full-stack development,
                            and prepare for entry-level developer opportunities.
                        </p>

                        {/* Info Pills */}
                        <div className="mt-6 flex flex-wrap gap-3">

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                🌱 Beginner Friendly
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                ⏱️ 12–15 min read
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                💻 Full Stack
                            </span>

                        </div>

                    </div>
                </section>


                {/* =========================
                    INTRO
                ========================= */}

                <article className="px-6 py-16 md:py-20">

                    <div className="mx-auto max-w-5xl">

                        <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                What is the MERN Stack?
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                MERN is a JavaScript-based technology stack used
                                to build full-stack web applications. It combines
                                MongoDB, Express.js, React, and Node.js.
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-2">

                                {[
                                    ["M", "MongoDB", "Database"],
                                    ["E", "Express.js", "Backend Framework"],
                                    ["R", "React", "Frontend Library"],
                                    ["N", "Node.js", "JavaScript Runtime"],
                                ].map(([letter, title, description]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl bg-green-50 p-5"
                                    >
                                        <div className="flex items-center gap-4">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-xl font-black text-white">
                                                {letter}
                                            </div>

                                            <div>
                                                <h3 className="font-extrabold text-slate-900">
                                                    {title}
                                                </h3>

                                                <p className="text-sm text-slate-600">
                                                    {description}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* =========================
                            ROADMAP
                        ========================= */}

                        <section className="mt-14">

                            <div className="text-center">

                                <p className="font-bold uppercase tracking-widest text-green-600">
                                    Step-by-Step Roadmap
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                                    Your Path to Full-Stack Development
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                                    Follow the stages in order and build projects
                                    as you learn instead of only watching
                                    tutorials.
                                </p>

                            </div>


                            <div className="mt-10 space-y-6">

                                {roadmapSteps.map((step) => (
                                    <section
                                        key={step.number}
                                        className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                                    >

                                        <div className="flex flex-col gap-6 md:flex-row">

                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-lg font-black text-green-600">
                                                {step.number}
                                            </div>

                                            <div className="flex-1">

                                                <h3 className="text-2xl font-extrabold text-slate-900">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-3 leading-7 text-slate-600">
                                                    {step.description}
                                                </p>

                                                <div className="mt-5 flex flex-wrap gap-2">

                                                    {step.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}

                                                </div>

                                            </div>

                                        </div>

                                    </section>
                                ))}

                            </div>

                        </section>


                        {/* =========================
                            LEARNING STRATEGY
                        ========================= */}

                        <section className="mt-14 rounded-3xl bg-slate-900 p-7 text-white md:p-10">

                            <p className="font-bold uppercase tracking-widest text-green-400">
                                Learning Strategy
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold">
                                Don't Just Watch Tutorials
                            </h2>

                            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                                The fastest way to understand full-stack
                                development is to combine learning with
                                consistent practice and project building.
                            </p>

                            <div className="mt-8 grid gap-4 md:grid-cols-3">

                                {[
                                    ["Learn", "Understand the concept and follow a structured tutorial."],
                                    ["Practice", "Write the code yourself and solve small problems."],
                                    ["Build", "Use the concept in a real project."],
                                ].map(([title, description]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl bg-white/5 p-6"
                                    >
                                        <h3 className="text-xl font-extrabold text-green-400">
                                            {title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-slate-300">
                                            {description}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* =========================
                            PROJECTS
                        ========================= */}

                        <section className="mt-14">

                            <p className="font-bold uppercase tracking-widest text-green-600">
                                Practice Projects
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                                Projects You Can Build
                            </h2>

                            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                                Projects help you turn individual technologies
                                into practical full-stack development skills.
                            </p>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">

                                {projectIdeas.map((project) => (
                                    <div
                                        key={project.title}
                                        className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                                            {project.icon}
                                        </div>

                                        <h3 className="mt-5 text-xl font-extrabold">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-slate-600">
                                            {project.description}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* =========================
                            JOB READY
                        ========================= */}

                        <section className="mt-14 rounded-3xl bg-[#031c13] p-7 text-white md:p-10">

                            <p className="font-bold uppercase tracking-widest text-green-400">
                                Job Preparation
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                                When Are You Ready to Apply?
                            </h2>

                            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                                There is no single point where you know
                                everything. You can start applying when you
                                can build, explain, debug, and improve
                                full-stack applications independently.
                            </p>

                            <div className="mt-8 grid gap-3 md:grid-cols-2">

                                {jobReadyChecklist.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3"
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


                        {/* =========================
                            COMMON MISTAKES
                        ========================= */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold">
                                Common Mistakes to Avoid
                            </h2>

                            <div className="mt-7 space-y-3">

                                {[
                                    "Jumping into React without understanding JavaScript fundamentals.",
                                    "Watching tutorials without writing the code yourself.",
                                    "Building only tutorial projects without adding your own features.",
                                    "Learning too many technologies at the same time.",
                                    "Ignoring Git and GitHub.",
                                    "Avoiding backend development because frontend feels easier.",
                                    "Not learning how APIs and databases work together.",
                                    "Having projects but not being able to explain how they work.",
                                ].map((mistake) => (
                                    <div
                                        key={mistake}
                                        className="flex gap-3 rounded-xl border border-red-100 bg-white px-5 py-4 shadow-sm"
                                    >
                                        <span className="text-red-500">
                                            ✕
                                        </span>

                                        <p className="leading-7 text-slate-600">
                                            {mistake}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* =========================
                            FINAL ROADMAP
                        ========================= */}

                        <section className="mt-14 rounded-3xl bg-green-50 p-7 md:p-10">

                            <h2 className="text-3xl font-extrabold">
                                Simple MERN Learning Order
                            </h2>

                            <div className="mt-7 flex flex-wrap items-center gap-3">

                                {[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "Git",
                                    "React",
                                    "Node.js",
                                    "Express",
                                    "MongoDB",
                                    "Authentication",
                                    "Projects",
                                    "Deployment",
                                ].map((item, index, array) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <span className="rounded-xl bg-white px-4 py-3 font-bold text-slate-800 shadow-sm">
                                            {index + 1}. {item}
                                        </span>

                                        {index < array.length - 1 && (
                                            <span className="hidden text-green-600 md:block">
                                                →
                                            </span>
                                        )}

                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* =========================
                            CTA
                        ========================= */}

                        <section className="mt-16 rounded-3xl bg-[#031c13] p-8 text-center text-white md:p-12">

                            <p className="font-bold uppercase tracking-widest text-green-400">
                                Start Building
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                                Build Your Career with SkillBridge AI
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                                Manage your projects, skills, resume, certificates,
                                career goals, and AI-powered career tools in one
                                place.
                            </p>

                            <Link
                                to="/signup"
                                className="mt-7 inline-flex rounded-xl bg-green-500 px-7 py-3 font-bold text-slate-950 shadow-lg shadow-green-500/20 transition hover:bg-green-400"
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

export default MernRoadmap;