import { Link } from "react-router-dom";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";

function CodingTestGuide() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

            <SEO
                title="How to Prepare for Coding Tests as a Fresher — SkillBridge AI"
                description="Learn how freshers can prepare for coding tests and online assessments with programming fundamentals, DSA, problem-solving practice, time management, and a structured preparation plan."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/coding-test-preparation-for-freshers"
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
                        Coding Test Guide
                    </div>

                    <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        How to Prepare for{" "}
                        <span className="text-green-400">
                            Coding Tests
                        </span>{" "}
                        as a Fresher
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                        Learn how to prepare for coding tests and online
                        assessments with programming fundamentals, DSA,
                        problem-solving practice, time management, and a
                        structured preparation strategy.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Coding
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            DSA
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Online Assessment
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
                            Coding tests are commonly used during software
                            recruitment and internship hiring to evaluate
                            programming knowledge, problem-solving ability,
                            logical thinking, and implementation skills.
                        </p>

                        <p className="mt-5 leading-8 text-slate-600">
                            For freshers, consistent practice is usually more
                            useful than trying to solve hundreds of problems
                            without understanding the underlying concepts.
                        </p>

                    </section>


                    {/* 1 */}
                    <section className="mt-10">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            1. What Are Coding Tests?
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            A coding test is an assessment where candidates solve
                            programming problems within a given time. Companies
                            may use online assessment platforms before technical
                            interviews or as part of the hiring process.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "Programming fundamentals",
                                "Problem-solving ability",
                                "Data structures and algorithms",
                                "Logical reasoning",
                                "Code correctness",
                                "Time and space complexity",
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
                            2. Understand the Online Assessment Pattern
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            The exact assessment pattern varies by company and
                            role. Before preparing for a specific test, read the
                            official assessment instructions and understand the
                            sections, duration, number of questions, and allowed
                            programming languages.
                        </p>

                        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">

                            <h3 className="text-xl font-bold text-slate-900">
                                Check these details first
                            </h3>

                            <ul className="mt-4 space-y-3 text-slate-700">
                                <li>• Number of coding questions</li>
                                <li>• Total time available</li>
                                <li>• Difficulty level</li>
                                <li>• Programming languages supported</li>
                                <li>• Other aptitude or technical sections</li>
                                <li>• Whether negative marking applies</li>
                            </ul>

                        </div>

                    </section>


                    {/* 3 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            3. Choose One Programming Language
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Pick one programming language that you understand
                            well and use it consistently during practice.
                            Switching between languages frequently can slow down
                            your preparation.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">

                            {[
                                ["Java", "OOP, collections, arrays, strings, and strong interview fundamentals."],
                                ["C++", "STL, competitive programming, algorithms, and fast implementation."],
                                ["Python", "Simple syntax, data structures, scripting, and quick problem solving."],
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
                            4. Master the Important DSA Topics
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            You do not need to learn every advanced algorithm
                            before starting coding-test preparation. Build strong
                            fundamentals first.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "Arrays",
                                "Strings",
                                "Searching",
                                "Sorting",
                                "Hashing",
                                "Two Pointers",
                                "Sliding Window",
                                "Stack and Queue",
                                "Linked List",
                                "Recursion",
                                "Trees",
                                "Basic Dynamic Programming",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <span className="font-semibold text-slate-700">
                                        ✓ {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 5 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            5. Start With Arrays and Strings
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Arrays and strings are excellent starting points
                            because they teach many problem-solving patterns that
                            appear in other topics as well.
                        </p>

                        <div className="mt-6 space-y-4">

                            {[
                                "Find maximum and minimum values.",
                                "Reverse an array or string.",
                                "Find duplicate elements.",
                                "Count frequencies.",
                                "Find a missing number.",
                                "Check whether a string is a palindrome.",
                                "Find the longest or shortest relevant sequence.",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <span className="text-green-600">✓</span>{" "}
                                    <span className="text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 6 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            6. Learn Searching and Sorting
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Searching and sorting problems teach important
                            algorithmic thinking and complexity concepts.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Searching
                                </h3>

                                <ul className="mt-4 space-y-3 text-slate-600">
                                    <li>• Linear Search</li>
                                    <li>• Binary Search</li>
                                    <li>• Search in sorted arrays</li>
                                    <li>• Binary search patterns</li>
                                </ul>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Sorting
                                </h3>

                                <ul className="mt-4 space-y-3 text-slate-600">
                                    <li>• Bubble Sort</li>
                                    <li>• Selection Sort</li>
                                    <li>• Insertion Sort</li>
                                    <li>• Merge Sort basics</li>
                                    <li>• Quick Sort basics</li>
                                </ul>

                            </div>

                        </div>

                    </section>


                    {/* 7 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            7. Understand Hashing
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Hashing can make many lookup and frequency-counting
                            problems much easier. Learn how maps and sets work in
                            your chosen programming language.
                        </p>

                        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">

                            <h3 className="text-xl font-bold text-slate-900">
                                Practice problems
                            </h3>

                            <ul className="mt-4 space-y-3 text-slate-700">
                                <li>• Frequency of elements</li>
                                <li>• Two Sum</li>
                                <li>• First unique element</li>
                                <li>• Duplicate detection</li>
                                <li>• Grouping related values</li>
                            </ul>

                        </div>

                    </section>


                    {/* 8 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            8. Learn Stack and Queue
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Stacks and queues are fundamental data structures
                            that also appear in many practical programming problems.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Stack
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Practice parentheses matching, next greater
                                    element, undo-style operations, and basic
                                    stack manipulation.
                                </p>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Queue
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Understand FIFO operations and practice
                                    problems involving processing items in order.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* 9 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            9. Practice Linked Lists
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Once arrays and basic data structures are comfortable,
                            start practicing linked-list problems.
                        </p>

                        <div className="mt-6 space-y-4">

                            {[
                                "Traverse a linked list.",
                                "Reverse a linked list.",
                                "Find the middle node.",
                                "Detect a cycle.",
                                "Merge two sorted linked lists.",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <span className="font-medium text-slate-700">
                                        ✓ {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 10 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            10. Learn Recursion and Basic Dynamic Programming
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Recursion can initially feel difficult. Start with
                            small problems and understand the base case and
                            recursive relationship before moving to more advanced
                            dynamic programming problems.
                        </p>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                            <h3 className="text-xl font-bold text-slate-900">
                                Start with
                            </h3>

                            <ul className="mt-4 space-y-3 text-slate-600">
                                <li>• Factorial</li>
                                <li>• Fibonacci</li>
                                <li>• Sum of numbers</li>
                                <li>• Basic subsequence problems</li>
                                <li>• Simple memoization concepts</li>
                            </ul>

                        </div>

                    </section>


                    {/* 11 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            11. Understand Time and Space Complexity
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Correct code is important, but you should also
                            understand how efficiently it runs.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "O(1) — Constant",
                                "O(log n) — Logarithmic",
                                "O(n) — Linear",
                                "O(n log n) — Linearithmic",
                                "O(n²) — Quadratic",
                                "Space complexity",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <p className="font-semibold text-slate-700">
                                        {item}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 12 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            12. Follow a Coding Test Strategy
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            During an assessment, solving every problem is not
                            always necessary. Use your time carefully.
                        </p>

                        <div className="mt-6 space-y-4">

                            {[
                                "Read all questions before starting.",
                                "Start with the easiest problem.",
                                "Understand the input and output format.",
                                "Test your solution with sample cases.",
                                "Watch the time limit.",
                                "Do not spend too long on one problem.",
                                "Return to difficult questions after easier ones.",
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


                    {/* 13 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            13. Common Coding Test Mistakes
                        </h2>

                        <div className="mt-6 space-y-4">

                            {[
                                "Starting with advanced topics without strong basics.",
                                "Memorizing solutions instead of understanding patterns.",
                                "Practicing only easy questions.",
                                "Ignoring time and space complexity.",
                                "Not testing edge cases.",
                                "Spending too much time on one problem.",
                                "Changing programming languages frequently.",
                                "Not practicing under time limits.",
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


                    {/* 14 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            14. A Practical 30-Day Coding Preparation Plan
                        </h2>

                        <div className="mt-6 space-y-5">

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Days 1–7: Fundamentals
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Revise programming basics, arrays, strings,
                                    functions, loops, and basic problem solving.
                                </p>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Days 8–14: Core DSA
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Practice searching, sorting, hashing, stacks,
                                    queues, and linked lists.
                                </p>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Days 15–21: Problem Solving
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Solve mixed problems and focus on identifying
                                    common problem-solving patterns.
                                </p>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Days 22–30: Mock Tests
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Practice timed coding tests, analyze mistakes,
                                    revise weak topics, and improve speed.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* 15 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            15. Coding Test Checklist
                        </h2>

                        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                            <div className="grid gap-4 md:grid-cols-2">

                                {[
                                    "One programming language mastered",
                                    "Arrays and strings practiced",
                                    "Searching and sorting understood",
                                    "Hashing practiced",
                                    "Stack and queue understood",
                                    "Linked list practiced",
                                    "Recursion basics understood",
                                    "Time complexity understood",
                                    "Regular problem solving",
                                    "Timed mock tests completed",
                                    "Weak topics identified",
                                    "Solutions reviewed after practice",
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


                    {/* FINAL */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            Final Tips
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Coding-test preparation is a gradual process. Focus
                            on understanding patterns instead of memorizing
                            solutions. Practice consistently, review your mistakes,
                            and gradually increase the difficulty of problems.
                        </p>

                        <p className="mt-5 leading-8 text-slate-600">
                            Before a real assessment, practice under a time limit
                            so that solving problems, reading constraints, testing
                            edge cases, and managing time become familiar.
                        </p>

                    </section>


                    {/* CTA */}
                    <section className="mt-14 rounded-3xl bg-green-500 px-6 py-12 text-center shadow-xl md:px-10">

                        <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
                            Prepare Smarter for Your Next Coding Test
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-900/80">
                            Build your technical skills, prepare your resume,
                            practice interviews, and follow a structured career
                            preparation journey with SkillBridge AI.
                        </p>

                        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">

                            <Link
                                to="/resources/technical-interview-preparation-for-freshers"
                                className="rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
                            >
                                Interview Guide →
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

export default CodingTestGuide;