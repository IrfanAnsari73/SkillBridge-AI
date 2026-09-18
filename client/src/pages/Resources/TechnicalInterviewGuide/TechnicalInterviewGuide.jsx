import SEO from "../../../components/common/SEO";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import { Link } from "react-router-dom";

const TechnicalInterviewGuide = () => {
    const topics = [
        {
            number: "01",
            title: "Programming Fundamentals",
            description:
                "Revise variables, data types, operators, conditions, loops, functions, arrays, strings, and basic problem-solving.",
        },
        {
            number: "02",
            title: "Data Structures & Algorithms",
            description:
                "Practice arrays, strings, linked lists, stacks, queues, sorting, searching, recursion, and basic time-complexity concepts.",
        },
        {
            number: "03",
            title: "Object-Oriented Programming",
            description:
                "Understand classes, objects, inheritance, polymorphism, abstraction, encapsulation, constructors, and interfaces.",
        },
        {
            number: "04",
            title: "DBMS & SQL",
            description:
                "Prepare database concepts, keys, normalization, relationships, joins, aggregate functions, GROUP BY, subqueries, and common SQL queries.",
        },
        {
            number: "05",
            title: "Operating Systems",
            description:
                "Review processes, threads, scheduling, memory management, deadlocks, synchronization, and basic operating-system concepts.",
        },
        {
            number: "06",
            title: "Computer Networks",
            description:
                "Understand OSI and TCP/IP models, HTTP/HTTPS, IP addresses, DNS, TCP vs UDP, and common networking concepts.",
        },
    ];

    const commonQuestions = [
        "Explain OOP concepts with real-world examples.",
        "What is the difference between an array and a linked list?",
        "What is the difference between stack and queue?",
        "What is time complexity and why is it important?",
        "What is the difference between primary key and foreign key?",
        "Explain INNER JOIN and LEFT JOIN.",
        "What is the difference between process and thread?",
        "Explain TCP vs UDP.",
        "What happens when you enter a URL in a browser?",
        "Explain one of your projects and your contribution to it.",
    ];

    const checklist = [
        "Revise your strongest programming language.",
        "Practice basic DSA problems regularly.",
        "Revise OOP concepts.",
        "Practice SQL queries.",
        "Review DBMS fundamentals.",
        "Understand OS and networking basics.",
        "Read your resume carefully.",
        "Be ready to explain every project on your resume.",
        "Prepare a short self-introduction.",
        "Practice solving problems without immediately looking at the solution.",
    ];

    return (
        <>
            <SEO
                title="How to Prepare for a Technical Interview as a Fresher — SkillBridge AI"
                description="Learn how to prepare for technical interviews as a fresher with practical guidance on programming, DSA, OOP, DBMS, SQL, operating systems, computer networks, projects, and common interview questions."
                canonical="https://skill-bridge-ai-sage.vercel.app/resources/technical-interview-preparation-for-freshers"
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
                                🎯 Interview Guide
                            </span>

                        </div>

                        {/* Heading */}
                        <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">

                            How to Prepare for a{" "}

                            <span className="text-green-400">
                                Technical Interview
                            </span>{" "}

                            as a Fresher

                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                            A practical roadmap for students and freshers to prepare for
                            technical interviews, revise important CS fundamentals,
                            practice coding, and confidently explain their projects.
                        </p>

                        {/* Info Pills */}
                        <div className="mt-6 flex flex-wrap gap-3">

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                🎓 For Freshers
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                ⏱️ 10–12 min read
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                💻 Technical Interview
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

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                Getting Started
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Technical interviews can feel difficult when
                                you are attending your first interview.
                                The good news is that you do not need to know
                                everything to prepare effectively.
                            </p>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                A strong preparation strategy focuses on
                                programming fundamentals, problem-solving,
                                computer-science concepts, projects, and the
                                ability to explain your thinking clearly.
                            </p>

                        </section>


                        {/* Preparation Strategy */}

                        <section className="mt-12">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                How to Start Your Preparation
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Instead of trying to study every computer-science
                                topic at once, divide your preparation into
                                smaller areas and revise them consistently.
                            </p>

                            <div className="mt-7 grid gap-5 md:grid-cols-2">

                                {topics.map((topic) => (
                                    <div
                                        key={topic.number}
                                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >

                                        <div className="flex items-start gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 font-bold text-green-600">
                                                {topic.number}
                                            </div>

                                            <div>

                                                <h3 className="text-lg font-extrabold text-slate-900">
                                                    {topic.title}
                                                </h3>

                                                <p className="mt-2 leading-7 text-slate-600">
                                                    {topic.description}
                                                </p>

                                            </div>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* Programming */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                1. Strengthen Your Programming Fundamentals
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Choose one programming language that you are
                                comfortable with and understand its fundamentals
                                properly.
                            </p>

                            <div className="mt-7 rounded-2xl bg-slate-900 p-7 text-white">

                                <h3 className="text-xl font-extrabold">
                                    Important areas to revise
                                </h3>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                                    {[
                                        "Variables & Data Types",
                                        "Operators",
                                        "if/else Conditions",
                                        "Loops",
                                        "Functions",
                                        "Arrays",
                                        "Strings",
                                        "Exception Handling",
                                        "Basic Input & Output",
                                        "Problem Solving",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-xl bg-white/5 px-4 py-3 text-slate-200"
                                        >
                                            <span className="mr-2 text-green-400">
                                                ✓
                                            </span>
                                            {item}
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </section>


                        {/* DSA */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                2. Practice Data Structures & Algorithms
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Many technical interviews include coding or
                                problem-solving questions. Start with fundamental
                                data structures before moving to more complex
                                problems.
                            </p>

                            <div className="mt-7 space-y-4">

                                {[
                                    ["Arrays", "Searching, sorting, frequency counting, and two-pointer problems."],
                                    ["Strings", "Character counting, reversing, palindrome, and substring problems."],
                                    ["Linked Lists", "Traversal, insertion, deletion, and basic linked-list problems."],
                                    ["Stacks & Queues", "Understand LIFO and FIFO concepts and common use cases."],
                                    ["Searching & Sorting", "Know basic searching and sorting techniques and their complexity."],
                                    ["Recursion", "Understand the base case, recursive case, and how recursive calls work."],
                                ].map(([title, description]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                    >
                                        <h3 className="text-lg font-extrabold text-slate-900">
                                            {title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-slate-600">
                                            {description}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* OOP */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                3. Revise Object-Oriented Programming
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                OOP is commonly discussed in software-development
                                interviews, especially when the role involves
                                languages such as Java, C++, or C#.
                            </p>

                            <div className="mt-7 grid gap-5 sm:grid-cols-2">

                                {[
                                    ["Encapsulation", "Keeping data and related methods together while controlling access."],
                                    ["Inheritance", "Creating a new class based on the properties and behaviour of another class."],
                                    ["Polymorphism", "Allowing the same interface or method concept to behave differently in different situations."],
                                    ["Abstraction", "Showing essential behaviour while hiding unnecessary implementation details."],
                                ].map(([title, description]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-green-100 bg-green-50 p-6"
                                    >
                                        <h3 className="text-lg font-extrabold text-slate-900">
                                            {title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-slate-600">
                                            {description}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* DBMS SQL */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                4. Prepare DBMS & SQL
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Database questions are common in fresher
                                technical interviews. Focus on both concepts
                                and practical SQL queries.
                            </p>

                            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                                <h3 className="text-xl font-extrabold text-slate-900">
                                    Topics to Practice
                                </h3>

                                <div className="mt-5 grid gap-3 md:grid-cols-2">

                                    {[
                                        "Primary Key & Foreign Key",
                                        "Normalization",
                                        "Database Relationships",
                                        "SELECT & WHERE",
                                        "ORDER BY & LIMIT",
                                        "Aggregate Functions",
                                        "GROUP BY & HAVING",
                                        "INNER JOIN",
                                        "LEFT JOIN",
                                        "Subqueries",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-xl bg-slate-50 px-4 py-3 font-semibold text-slate-700"
                                        >
                                            <span className="mr-2 text-green-600">
                                                ✓
                                            </span>
                                            {item}
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </section>


                        {/* OS */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                5. Revise Operating Systems
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                You do not necessarily need to study every
                                operating-system topic in depth. Start with
                                the fundamentals and understand the concepts
                                clearly.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">

                                {[
                                    "Process",
                                    "Thread",
                                    "CPU Scheduling",
                                    "Deadlock",
                                    "Memory Management",
                                    "Synchronization",
                                    "Virtual Memory",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </section>


                        {/* Networks */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                6. Understand Computer Networks
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                Networking basics can help you answer common
                                conceptual questions and understand how
                                applications communicate over the internet.
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-2">

                                {[
                                    "OSI Model",
                                    "TCP/IP Model",
                                    "HTTP & HTTPS",
                                    "DNS",
                                    "IP Address",
                                    "TCP vs UDP",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-800 shadow-sm"
                                    >
                                        <span className="mr-2 text-green-600">
                                            ✓
                                        </span>
                                        {item}
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* Projects */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                7. Be Ready to Explain Your Projects
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                One of the most important parts of a fresher
                                interview can be the projects listed on the
                                resume.
                            </p>

                            <div className="mt-7 rounded-3xl bg-green-50 p-7 md:p-8">

                                <h3 className="text-xl font-extrabold text-slate-900">
                                    Use this simple project explanation format
                                </h3>

                                <div className="mt-6 space-y-4">

                                    {[
                                        ["Problem", "What problem were you trying to solve?"],
                                        ["Solution", "What did you build to solve the problem?"],
                                        ["Technology", "Which technologies and tools did you use?"],
                                        ["Contribution", "What exactly did you build or implement?"],
                                        ["Challenges", "What technical challenge did you face?"],
                                        ["Result", "What was the outcome of the project?"],
                                    ].map(([title, description]) => (
                                        <div
                                            key={title}
                                            className="rounded-xl bg-white p-4"
                                        >
                                            <span className="font-extrabold text-slate-900">
                                                {title}:
                                            </span>{" "}
                                            <span className="text-slate-600">
                                                {description}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </section>


                        {/* Common Questions */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                8. Common Technical Interview Questions
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                Practice explaining your answers in your own
                                words instead of memorizing definitions.
                            </p>

                            <div className="mt-7 space-y-3">

                                {commonQuestions.map((question, index) => (
                                    <div
                                        key={question}
                                        className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                    >
                                        <span className="font-extrabold text-green-600">
                                            Q{index + 1}
                                        </span>

                                        <p className="font-semibold text-slate-700">
                                            {question}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* Interview Strategy */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                How to Answer Technical Questions
                            </h2>

                            <div className="mt-7 rounded-3xl bg-slate-900 p-7 text-white md:p-9">

                                <div className="space-y-6">

                                    <div>
                                        <h3 className="font-extrabold text-green-400">
                                            1. Understand the question
                                        </h3>

                                        <p className="mt-2 leading-7 text-slate-300">
                                            Do not rush into an answer. Make sure
                                            you understand what the interviewer
                                            is asking.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-extrabold text-green-400">
                                            2. Think aloud
                                        </h3>

                                        <p className="mt-2 leading-7 text-slate-300">
                                            Explain your approach while solving
                                            a problem so the interviewer can
                                            understand your reasoning.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-extrabold text-green-400">
                                            3. Be honest
                                        </h3>

                                        <p className="mt-2 leading-7 text-slate-300">
                                            If you do not know something, say so
                                            and explain what you do understand.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* Checklist */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                Technical Interview Checklist
                            </h2>

                            <div className="mt-7 grid gap-3 md:grid-cols-2">

                                {checklist.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                                    >
                                        <span className="text-green-600">
                                            ✓
                                        </span>

                                        <p className="text-slate-600">
                                            {item}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* Final Tips */}

                        <section className="mt-14">

                            <h2 className="text-3xl font-extrabold text-slate-900">
                                Final Preparation Tips
                            </h2>

                            <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-7 md:p-9">

                                <ul className="space-y-4 leading-7 text-slate-700">

                                    <li>
                                        <strong>Practice consistently:</strong>{" "}
                                        30–60 minutes of focused practice can
                                        be more useful than last-minute study.
                                    </li>

                                    <li>
                                        <strong>Know your resume:</strong>{" "}
                                        Be prepared to discuss every important
                                        skill, project, and certification you
                                        mention.
                                    </li>

                                    <li>
                                        <strong>Practice explaining:</strong>{" "}
                                        Technical knowledge is more useful when
                                        you can communicate it clearly.
                                    </li>

                                    <li>
                                        <strong>Review mistakes:</strong>{" "}
                                        When you get a coding problem wrong,
                                        understand why before moving on.
                                    </li>

                                </ul>

                            </div>

                        </section>


                        {/* CTA */}

                        <section className="mt-16 rounded-3xl bg-[#031c13] p-8 text-center text-white md:p-12">

                            <p className="font-bold uppercase tracking-widest text-green-400">
                                Prepare Smarter
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                                Build Your Career with SkillBridge AI
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                                Prepare for interviews, manage your career
                                profile, track your goals, and use AI-powered
                                career tools in one place.
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

export default TechnicalInterviewGuide;