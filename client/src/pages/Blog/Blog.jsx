import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SEO from "../../components/common/SEO";

const blogPosts = [
    {
        category: "Resume",
        title: "How to Create an ATS-Friendly Resume as a Fresher",
        description:
            "Learn how to structure your resume, highlight relevant skills, present projects effectively, and improve your chances of passing ATS screening.",
        link: "/resources/ats-friendly-resume-for-freshers",
    },
    {
        category: "Interview",
        title: "How to Prepare for a Technical Interview as a Fresher",
        description:
            "Understand the important topics freshers should prepare, including programming fundamentals, DSA, OOP, DBMS, SQL, operating systems, and networking.",
        link: "/resources/technical-interview-preparation-for-freshers",
    },
    {
        category: "Development",
        title: "MERN Stack Developer Roadmap for Beginners",
        description:
            "Follow a structured learning path covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, authentication, projects, and deployment.",
        link: "/resources/mern-stack-developer-roadmap",
    },
    {
        category: "Career",
        title: "Career & Internship Guide for Students",
        description:
            "Practical guidance for students on internships, resumes, LinkedIn, campus placements, off-campus applications, networking, and interview preparation.",
        link: "/resources/career-guides-for-students",
    },
];

function Blog() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <SEO
                title="Career Blog for Students & Freshers — SkillBridge AI"
                description="Explore practical career articles and guides on resumes, technical interviews, internships, job preparation, and software development for students and freshers."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog"
            />

            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-14 text-white md:py-18">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <div className="mb-5 inline-flex items-center rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
                        SkillBridge AI • Career Blog
                    </div>

                    <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        Learn. Prepare.{" "}
                        <span className="text-green-400">Grow.</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                        Practical career guidance for students and freshers covering
                        resumes, interviews, internships, development, and job
                        preparation.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Career Tips
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Student Guides
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Job Preparation
                        </span>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="px-6 py-16 md:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                            Latest Guides
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                            Career Resources That Help You Move Forward
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                            Explore practical guides created to help students build stronger
                            profiles, prepare for opportunities, and develop job-ready
                            skills.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {blogPosts.map((post) => (
                            <article
                                key={post.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                            >
                                <div className="mb-5 inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                                    {post.category}
                                </div>

                                <h3 className="text-2xl font-extrabold leading-tight text-slate-900">
                                    {post.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {post.description}
                                </p>

                                <Link
                                    to={post.link}
                                    className="mt-6 inline-flex items-center font-bold text-green-600 transition hover:text-green-700"
                                >
                                    Read Guide →
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Tips */}
            <section className="bg-slate-950 px-6 py-16 text-white">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Career Preparation
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            Build Skills. Build Proof. Build Your Career.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                            Your career journey becomes easier when learning, projects,
                            resumes, applications, and interview preparation work together.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-xl font-bold">Learn</h3>
                            <p className="mt-3 leading-7 text-slate-400">
                                Develop the technical and professional skills required for
                                your target career.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-xl font-bold">Build</h3>
                            <p className="mt-3 leading-7 text-slate-400">
                                Create meaningful projects and organize your achievements into
                                a strong career profile.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-xl font-bold">Apply</h3>
                            <p className="mt-3 leading-7 text-slate-400">
                                Prepare your resume, practice interviews, and apply
                                strategically for internships and jobs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-5xl rounded-3xl bg-green-500 px-6 py-12 text-center shadow-xl md:px-10">
                    <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
                        Ready to Build Your Career?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-900/80">
                        Create your SkillBridge AI profile and bring your resume, skills,
                        projects, certificates, and career preparation together.
                    </p>

                    <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/signup"
                            className="rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
                        >
                            Get Started Free →
                        </Link>

                        <Link
                            to="/faq"
                            className="rounded-xl border border-slate-950/20 bg-white/20 px-6 py-3 font-bold text-slate-950 transition hover:bg-white/30"
                        >
                            View FAQ
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Blog;