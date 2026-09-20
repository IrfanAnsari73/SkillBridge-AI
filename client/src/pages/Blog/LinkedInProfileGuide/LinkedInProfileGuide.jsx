import { Link } from "react-router-dom";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";

function LinkedInProfileGuide() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

            <SEO
                title="LinkedIn Profile Guide for Students & Freshers — SkillBridge AI"
                description="Learn how students and freshers can create a strong LinkedIn profile, write a better headline, showcase projects and skills, build connections, and use LinkedIn for internships and jobs."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/linkedin-profile-guide-for-students"
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
                            LinkedIn Guide
                        </span>

                    </div>

                    <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        How to Build a{" "}
                        <span className="text-green-400">
                            Strong LinkedIn Profile
                        </span>{" "}
                        as a Student or Fresher
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                        Learn how to optimize your LinkedIn profile, showcase
                        your skills and projects, connect with professionals,
                        and use LinkedIn to discover internships and jobs.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">

                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                            🎓 For Students
                        </span>

                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                            💼 Career Branding
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
                        LinkedIn is more than an online resume. For students and
                        freshers, it can become a place to showcase projects,
                        certifications, skills, achievements, and professional
                        interests.
                    </p>

                    <p className="mt-5 leading-8 text-slate-700">
                        A complete and professional profile can also make it
                        easier for recruiters, professionals, alumni, and
                        companies to understand what you are learning and what
                        kind of opportunities you are looking for.
                    </p>


                    {/* 1 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            1. Use a Professional Profile Photo
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Your profile photo is one of the first things people
                            notice. Use a clear, recent, professional-looking
                            photo with good lighting and a simple background.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Use a clear face photo.</li>
                            <li>• Avoid heavily edited images.</li>
                            <li>• Choose good lighting.</li>
                            <li>• Keep the background simple.</li>
                        </ul>

                    </section>


                    {/* 2 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            2. Write a Strong LinkedIn Headline
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Your headline should communicate who you are, what
                            you are learning or building, and the type of work
                            you are interested in.
                        </p>

                        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">

                            <p className="font-bold text-green-950">
                                Example:
                            </p>

                            <p className="mt-3 leading-7 text-green-900">
                                B.Tech CSE Student | Full Stack Developer |
                                React | Node.js | Java | Building Real-World
                                Projects
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-slate-700">
                            Avoid using only a generic title such as
                            “Student”. Add relevant skills and career
                            direction instead.
                        </p>

                    </section>


                    {/* 3 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            3. Create a Useful About Section
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            The About section gives you more space to explain
                            your background, interests, skills, projects, and
                            career goals.
                        </p>

                        <p className="mt-5 leading-8 text-slate-700">
                            A simple structure is:
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Who you are</li>
                            <li>• What you are learning</li>
                            <li>• Technologies you work with</li>
                            <li>• Projects you have built</li>
                            <li>• Career interests</li>
                            <li>• What opportunities you are looking for</li>
                        </ul>

                    </section>


                    {/* 4 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            4. Add Your Education
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Add your college, degree, field of study, and
                            relevant academic information.
                        </p>

                        <p className="mt-5 leading-8 text-slate-700">
                            Students can also mention relevant coursework,
                            achievements, activities, societies, or
                            competitions when they add meaningful context.
                        </p>

                    </section>


                    {/* 5 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            5. Showcase Your Technical Skills
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Add skills that are actually relevant to the type
                            of roles you want.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "Java",
                                "JavaScript",
                                "React",
                                "Node.js",
                                "HTML & CSS",
                                "MongoDB",
                                "Git & GitHub",
                                "SQL",
                            ].map((skill) => (
                                <div
                                    key={skill}
                                    className="rounded-xl border border-slate-200 bg-white p-5 font-semibold shadow-sm"
                                >
                                    {skill}
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 6 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            6. Add Projects to Your Profile
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Projects are one of the most useful sections for
                            students because they demonstrate practical work.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Project name</li>
                            <li>• Problem you solved</li>
                            <li>• Technologies used</li>
                            <li>• Your contribution</li>
                            <li>• Important features</li>
                            <li>• GitHub or live demo link</li>
                        </ul>

                    </section>


                    {/* 7 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            7. Add Certifications and Achievements
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Certifications can provide additional evidence of
                            your learning, especially when you are starting
                            your career.
                        </p>

                        <p className="mt-5 leading-8 text-slate-700">
                            Add relevant certifications, hackathons,
                            competitions, community contributions, and other
                            meaningful achievements.
                        </p>

                    </section>


                    {/* 8 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            8. Build Your Professional Network
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Start connecting with classmates, alumni,
                            developers, recruiters, founders, and professionals
                            working in your target field.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Connect with college alumni.</li>
                            <li>• Follow companies you want to join.</li>
                            <li>• Engage with useful technical posts.</li>
                            <li>• Join relevant professional communities.</li>
                            <li>• Keep conversations professional.</li>
                        </ul>

                    </section>


                    {/* 9 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            9. Share Useful Content
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            You do not need to become an influencer to build
                            your professional presence. Share useful things
                            that you are genuinely learning or building.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {[
                                "Project updates",
                                "Coding learnings",
                                "Certificates",
                                "Internship experiences",
                                "Technical tutorials",
                                "Career preparation",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl bg-white p-5 shadow-sm border border-slate-200"
                                >
                                    <p className="font-semibold">
                                        {item}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </section>


                    {/* 10 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            10. Use LinkedIn to Find Jobs and Internships
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Search for roles using specific keywords related
                            to your target position and experience level.
                        </p>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>• Search for entry-level positions.</li>
                            <li>• Use internship filters.</li>
                            <li>• Follow company career pages.</li>
                            <li>• Turn on relevant job alerts.</li>
                            <li>• Check recruiter posts.</li>
                        </ul>

                        <Link
                            to="/blog/fresher-job-search-guide"
                            className="mt-5 inline-block font-bold text-green-600 hover:text-green-700"
                        >
                            Read the Fresher Job Search Guide →
                        </Link>

                    </section>


                    {/* 11 */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            11. Keep Your Profile Updated
                        </h2>

                        <p className="mt-4 leading-8 text-slate-700">
                            Update your LinkedIn profile whenever you learn a
                            new skill, complete a project, earn a certification,
                            start an internship, or achieve something relevant.
                        </p>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                            <p className="font-bold">
                                Quick monthly check:
                            </p>

                            <ul className="mt-4 space-y-2 leading-7 text-slate-700">
                                <li>✓ Headline</li>
                                <li>✓ About section</li>
                                <li>✓ Skills</li>
                                <li>✓ Projects</li>
                                <li>✓ Certifications</li>
                                <li>✓ Featured links</li>
                            </ul>

                        </div>

                    </section>


                    {/* MISTAKES */}
                    <section className="mt-12">

                        <h2 className="text-3xl font-extrabold">
                            Common LinkedIn Mistakes Students Should Avoid
                        </h2>

                        <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                            <li>❌ Leaving the profile mostly empty</li>
                            <li>❌ Using an unclear headline</li>
                            <li>❌ Adding skills you do not know</li>
                            <li>❌ Copying someone else's About section</li>
                            <li>❌ Having no projects or proof of work</li>
                            <li>❌ Sending random connection requests</li>
                            <li>❌ Posting only promotional content</li>
                        </ul>

                    </section>


                    {/* CHECKLIST */}
                    <section className="mt-14 rounded-3xl bg-green-50 p-7 md:p-10">

                        <h2 className="text-3xl font-extrabold text-green-950">
                            LinkedIn Profile Checklist
                        </h2>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">

                            {[
                                "Professional profile photo",
                                "Clear career-focused headline",
                                "Complete About section",
                                "Education added",
                                "Relevant skills added",
                                "Projects showcased",
                                "Certifications added",
                                "Professional connections built",
                                "Relevant job alerts enabled",
                                "Profile regularly updated",
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
                            Your LinkedIn profile should tell a clear story
                            about what you are learning, what you have built,
                            and where you want to go professionally.
                        </p>

                        <p className="mt-5 leading-8 text-slate-700">
                            Start with the basics, keep your information
                            accurate, showcase real work, and build genuine
                            professional relationships over time.
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

export default LinkedInProfileGuide;