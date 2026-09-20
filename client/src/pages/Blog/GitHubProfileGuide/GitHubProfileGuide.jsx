import { Link } from "react-router-dom";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";

function GitHubProfileGuide() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

            <SEO
                title="How to Build a Strong GitHub Profile as a Fresher — SkillBridge AI"
                description="Learn how students and freshers can build a professional GitHub profile, organize repositories, write better README files, showcase projects, and use GitHub for career opportunities."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/github-profile-guide-for-students"
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
                        GitHub Career Guide
                    </div>

                    <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        How to Build a Strong{" "}
                        <span className="text-green-400">
                            GitHub Profile
                        </span>{" "}
                        as a Fresher
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                        Learn how students and freshers can create a professional
                        GitHub profile, organize repositories, showcase projects,
                        write better README files, and use GitHub effectively
                        for internships and jobs.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            GitHub
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Projects
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Students
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
                            GitHub can act as a public portfolio for developers.
                            Instead of only listing programming skills on a resume,
                            students can use GitHub to show actual projects,
                            source code, documentation, and development activity.
                        </p>

                        <p className="mt-5 leading-8 text-slate-600">
                            A strong GitHub profile does not require hundreds of
                            repositories. A few meaningful projects that are
                            organized, documented, and easy to understand can make
                            your profile much more useful.
                        </p>

                    </section>


                    {/* 1 */}
                    <section className="mt-10">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            1. Why GitHub Matters for Freshers
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Freshers often have limited professional experience.
                            GitHub can help demonstrate practical development work
                            through repositories and projects.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "Show real coding projects",
                                "Demonstrate technical skills",
                                "Provide project source code",
                                "Show development consistency",
                                "Support your resume claims",
                                "Give interviewers projects to discuss",
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
                            2. Create a Professional GitHub Profile
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Your GitHub profile is often the first thing someone
                            sees when they open your account. Keep the profile
                            simple, professional, and focused on your development
                            interests.
                        </p>

                        <div className="mt-6 space-y-4">

                            {[
                                "Use a professional profile picture.",
                                "Write a short and clear bio.",
                                "Mention your main technologies or interests.",
                                "Add your portfolio or personal website.",
                                "Add LinkedIn when appropriate.",
                                "Keep your profile information updated.",
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


                    {/* 3 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            3. Choose a Good GitHub Username
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Your username is part of your public developer identity.
                            If possible, choose something simple and professional.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            <div className="rounded-2xl border border-green-100 bg-green-50 p-6">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Good approach
                                </h3>

                                <p className="mt-3 leading-7 text-slate-700">
                                    Use your name or a simple professional variation
                                    that is easy to remember and share.
                                </p>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Avoid
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Avoid usernames that are difficult to read,
                                    unnecessarily long, or inappropriate for a
                                    professional profile.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* 4 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            4. Write a Strong GitHub Bio
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Your bio should quickly explain who you are and what
                            you are working on.
                        </p>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">

                            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                                Example
                            </p>

                            <p className="mt-4 text-lg leading-8 text-slate-200">
                                B.Tech CSE Student | Full Stack Developer |
                                React • Node.js • MongoDB | Building practical
                                web applications
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-slate-600">
                            Keep your bio short. Focus on your role, technology
                            interests, and what you are currently building or learning.
                        </p>

                    </section>


                    {/* 5 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            5. Add a Profile README
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            A GitHub profile README can act like a small developer
                            introduction page. It can explain your skills, projects,
                            interests, and links.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "Short introduction",
                                "Technical skills",
                                "Current learning goals",
                                "Featured projects",
                                "GitHub or portfolio links",
                                "LinkedIn profile",
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


                    {/* 6 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            6. Organize Your Repositories
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Do not treat your GitHub account as a storage folder.
                            Organize repositories so visitors can quickly understand
                            your work.
                        </p>

                        <div className="mt-6 space-y-4">

                            {[
                                "Use clear repository names.",
                                "Keep one project focused on one purpose.",
                                "Archive outdated projects when appropriate.",
                                "Remove unnecessary test repositories.",
                                "Keep important repositories easy to find.",
                                "Use consistent naming conventions.",
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


                    {/* 7 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            7. Write Better README Files
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            A README should help someone understand your project
                            without needing to inspect every file in the repository.
                        </p>

                        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">

                            <h3 className="text-xl font-bold text-slate-900">
                                Include these sections:
                            </h3>

                            <ul className="mt-4 space-y-3 text-slate-700">
                                <li>• Project title and description</li>
                                <li>• Problem the project solves</li>
                                <li>• Features</li>
                                <li>• Technology stack</li>
                                <li>• Installation instructions</li>
                                <li>• Usage instructions</li>
                                <li>• Screenshots when useful</li>
                                <li>• Live demo link</li>
                                <li>• Future improvements</li>
                            </ul>

                        </div>

                    </section>


                    {/* 8 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            8. Pin Your Best Projects
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            GitHub allows you to highlight repositories on your
                            profile. Use this space to showcase projects that
                            best represent your current skills.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900">
                                    Full Stack Project
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Show frontend, backend, database, and API skills.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900">
                                    Strong Personal Project
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Highlight a project that solves a real problem.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900">
                                    Relevant Practice
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Include useful projects related to your target role.
                                </p>
                            </div>

                        </div>

                    </section>


                    {/* 9 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            9. Keep Your Contribution Activity Healthy
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Consistent development is useful, but do not create
                            meaningless commits simply to make your contribution
                            graph look active.
                        </p>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                            <h3 className="text-xl font-bold text-slate-900">
                                Focus on genuine work
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Work on real projects, fix bugs, improve features,
                                update documentation, and make meaningful changes
                                that reflect your learning.
                            </p>

                        </div>

                    </section>


                    {/* 10 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            10. GitHub Mistakes to Avoid
                        </h2>

                        <div className="mt-6 space-y-4">

                            {[
                                "Uploading copied projects without understanding them.",
                                "Leaving sensitive keys or passwords inside repositories.",
                                "Creating repositories with unclear names.",
                                "Having no README documentation.",
                                "Keeping many unfinished repositories visible.",
                                "Using GitHub only as file storage.",
                                "Making meaningless commits only for activity.",
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
                            11. GitHub Profile Checklist for Freshers
                        </h2>

                        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                            <div className="grid gap-4 md:grid-cols-2">

                                {[
                                    "Professional profile picture",
                                    "Clear GitHub bio",
                                    "Useful profile README",
                                    "Relevant repositories",
                                    "Clear repository names",
                                    "Good README files",
                                    "Important projects pinned",
                                    "Live demo links where available",
                                    "No exposed secrets",
                                    "Clean project structure",
                                    "GitHub link added to resume",
                                    "GitHub link added to LinkedIn",
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
                            12. How to Add GitHub to Your Resume & LinkedIn
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Add your GitHub profile where recruiters can easily
                            find it. Make sure the profile is public and contains
                            projects relevant to the roles you are applying for.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    Resume
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Add GitHub alongside your LinkedIn and portfolio
                                    links in the contact/header section.
                                </p>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                <h3 className="text-xl font-bold text-slate-900">
                                    LinkedIn
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Add your GitHub profile to the appropriate
                                    contact or featured sections of your profile.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* FINAL */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold text-slate-900">
                            Final Thoughts
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            A strong GitHub profile is not about having the highest
                            number of repositories or contributions. It is about
                            showing useful, genuine, and understandable development
                            work.
                        </p>

                        <p className="mt-5 leading-8 text-slate-600">
                            Keep improving your projects, document what you build,
                            protect your credentials, and make your GitHub profile
                            support the skills you mention on your resume.
                        </p>

                    </section>


                    {/* CTA */}
                    <section className="mt-14 rounded-3xl bg-green-500 px-6 py-12 text-center shadow-xl md:px-10">

                        <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
                            Build. Document. Showcase.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-900/80">
                            Build meaningful projects and create a stronger
                            developer profile with SkillBridge AI.
                        </p>

                        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">

                            <Link
                                to="/blog/how-to-build-projects-for-resume-as-a-fresher"
                                className="rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
                            >
                                Project Guide →
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

export default GitHubProfileGuide;