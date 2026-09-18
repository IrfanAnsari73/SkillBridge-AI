import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";

const CareerGuide = () => {
    const sections = [
        {
            number: "01",
            title: "How to Find Internships as a Student",
            content: (
                <>
                    <p>
                        Internships help students gain practical experience and
                        understand how real-world software development teams work.
                        Start applying before your final year instead of waiting
                        until graduation.
                    </p>

                    <h3>Where to look for internships</h3>

                    <ul>
                        <li>College placement and training cells</li>
                        <li>Company career pages</li>
                        <li>LinkedIn job postings</li>
                        <li>Internship and job portals</li>
                        <li>Developer communities and networking</li>
                        <li>Referrals from seniors and professionals</li>
                    </ul>

                    <p>
                        Keep a simple application tracker with the company name,
                        role, application date, status and next action.
                    </p>
                </>
            ),
        },
        {
            number: "02",
            title: "Build a Strong Fresher Resume",
            content: (
                <>
                    <p>
                        A fresher resume should clearly communicate your skills,
                        projects, education and relevant achievements. Keep the
                        content focused on the role you are applying for.
                    </p>

                    <h3>Important sections</h3>

                    <ul>
                        <li>Professional summary</li>
                        <li>Technical skills</li>
                        <li>Projects</li>
                        <li>Education</li>
                        <li>Certifications</li>
                        <li>Achievements</li>
                        <li>Relevant links such as GitHub and LinkedIn</li>
                    </ul>

                    <p>
                        For software development roles, projects can demonstrate
                        practical ability when you do not yet have extensive
                        professional experience.
                    </p>

                    <Link
                        to="/resources/ats-friendly-resume-for-freshers"
                        className="mt-2 inline-flex rounded-xl bg-green-600 px-5 py-3 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
                    >
                        Read ATS Resume Guide →
                    </Link>
                </>
            ),
        },
        {
            number: "03",
            title: "Optimize Your LinkedIn Profile",
            content: (
                <>
                    <p>
                        LinkedIn can help students showcase their work, connect
                        with professionals and discover opportunities.
                    </p>

                    <h3>Profile checklist</h3>

                    <ul>
                        <li>Use a professional profile photo</li>
                        <li>Write a clear headline</li>
                        <li>Add a useful About section</li>
                        <li>List relevant technical skills</li>
                        <li>Add projects and certifications</li>
                        <li>Include GitHub and portfolio links</li>
                        <li>Keep your education information updated</li>
                    </ul>

                    <p>
                        Share useful learning updates and project progress instead
                        of only posting when you are looking for a job.
                    </p>
                </>
            ),
        },
        {
            number: "04",
            title: "How to Apply for Fresher Jobs",
            content: (
                <>
                    <p>
                        A consistent application process is more useful than
                        randomly applying to a large number of jobs.
                    </p>

                    <h3>Simple application process</h3>

                    <ol>
                        <li>Read the job description carefully.</li>
                        <li>Check eligibility and required skills.</li>
                        <li>Customize your resume when necessary.</li>
                        <li>
                            Apply through the official company or trusted portal.
                        </li>
                        <li>Record the application in your tracker.</li>
                        <li>
                            Prepare for the likely assessment or interview.
                        </li>
                    </ol>

                    <p>
                        Pay attention to graduation year, degree requirements,
                        location, technical skills and experience requirements
                        before applying.
                    </p>
                </>
            ),
        },
        {
            number: "05",
            title: "Campus Placement Preparation",
            content: (
                <>
                    <p>
                        Campus placements often include multiple stages such as
                        aptitude tests, coding assessments, technical interviews
                        and HR or managerial discussions.
                    </p>

                    <h3>Prepare these areas</h3>

                    <ul>
                        <li>Quantitative aptitude</li>
                        <li>Logical reasoning</li>
                        <li>Verbal ability</li>
                        <li>Programming fundamentals</li>
                        <li>Data structures and algorithms</li>
                        <li>DBMS and SQL</li>
                        <li>Operating systems</li>
                        <li>Computer networks</li>
                        <li>Projects and resume-based questions</li>
                    </ul>
                </>
            ),
        },
        {
            number: "06",
            title: "Off-Campus Job Search Strategy",
            content: (
                <>
                    <p>
                        Off-campus hiring requires regular searching and timely
                        applications. Create a weekly routine instead of checking
                        job portals only occasionally.
                    </p>

                    <h3>Useful routine</h3>

                    <ul>
                        <li>Check company career pages regularly.</li>
                        <li>Track suitable fresher openings.</li>
                        <li>Apply when you meet the listed requirements.</li>
                        <li>
                            Maintain different resume versions if needed.
                        </li>
                        <li>Practice coding and interview questions.</li>
                        <li>
                            Network with developers and recruiters
                            professionally.
                        </li>
                    </ul>

                    <p>
                        Focus on roles where your current skills and projects
                        match the job requirements.
                    </p>
                </>
            ),
        },
        {
            number: "07",
            title: "Networking for Students",
            content: (
                <>
                    <p>
                        Networking is about building genuine professional
                        relationships. Students can start by connecting with
                        classmates, alumni, developers, recruiters and people
                        working in companies they are interested in.
                    </p>

                    <h3>Good networking practices</h3>

                    <ul>
                        <li>
                            Write a short and respectful connection message.
                        </li>
                        <li>
                            Ask specific questions instead of demanding
                            referrals.
                        </li>
                        <li>
                            Share relevant projects or learning progress.
                        </li>
                        <li>
                            Thank people who provide useful guidance.
                        </li>
                        <li>Maintain professional communication.</li>
                    </ul>
                </>
            ),
        },
        {
            number: "08",
            title: "Prepare for Technical Interviews",
            content: (
                <>
                    <p>
                        Technical interviews usually test your understanding of
                        programming concepts and your ability to explain how you
                        solve problems.
                    </p>

                    <h3>Important preparation areas</h3>

                    <ul>
                        <li>One programming language in depth</li>
                        <li>OOP concepts</li>
                        <li>Arrays, strings and basic DSA</li>
                        <li>SQL and DBMS fundamentals</li>
                        <li>Operating system basics</li>
                        <li>Computer networking basics</li>
                        <li>Your projects and technical decisions</li>
                    </ul>

                    <Link
                        to="/resources/technical-interview-preparation-for-freshers"
                        className="mt-2 inline-flex rounded-xl bg-green-600 px-5 py-3 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
                    >
                        Read Technical Interview Guide →
                    </Link>
                </>
            ),
        },
        {
            number: "09",
            title: "Common Mistakes Students Should Avoid",
            content: (
                <>
                    <ul>
                        <li>Applying without checking eligibility.</li>
                        <li>
                            Using the same poorly targeted resume everywhere.
                        </li>
                        <li>
                            Listing skills without being able to explain them.
                        </li>
                        <li>Ignoring projects and practical experience.</li>
                        <li>
                            Not maintaining an application tracker.
                        </li>
                        <li>
                            Waiting until the final semester to start preparing.
                        </li>
                        <li>
                            Ignoring communication and interview practice.
                        </li>
                        <li>
                            Depending entirely on one job portal.
                        </li>
                    </ul>

                    <p>
                        Consistency matters. Small improvements in skills,
                        projects, applications and interview preparation can
                        compound over time.
                    </p>
                </>
            ),
        },
    ];

    return (
        <>
            <SEO
                title="Career & Internship Guide for Students — SkillBridge AI"
                description="A practical career and internship guide for students covering internships, fresher jobs, resumes, LinkedIn, networking, campus placements, off-campus applications, and interview preparation."
                canonical="https://skill-bridge-ai-sage.vercel.app/resources/career-guides-for-students"
            />

            <Navbar />

            <main className="min-h-screen bg-slate-50">

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
                                🚀 Career Guide
                            </span>

                        </div>

                        {/* Heading */}
                        <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">

                            Build a{" "}
                            <span className="text-green-400">
                                Career
                            </span>{" "}
                            You're Proud Of.

                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                            Practical guidance to help students find internships,
                            prepare for placements, build professional profiles,
                            and take confident steps toward their first job.
                        </p>

                        {/* Info Pills */}
                        <div className="mt-6 flex flex-wrap gap-3">

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                🎓 Student First
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                💼 Career Focused
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                🚀 Job Ready
                            </span>

                        </div>

                    </div>
                </section>

                {/* INTRO */}
                <section className="px-6 py-16">
                    <div className="mx-auto max-w-5xl">

                        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">

                            <p className="text-lg leading-8 text-slate-600">
                                Starting a career can feel confusing when you are
                                trying to manage college, technical skills,
                                projects, resumes and job applications at the
                                same time. The goal of this guide is to provide
                                a structured approach that students can follow.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Use the sections below as a practical checklist
                                while building your skills and searching for
                                opportunities.
                            </p>

                        </div>

                    </div>
                </section>

                {/* QUICK NAVIGATION */}
                <section className="px-6 pb-12">
                    <div className="mx-auto max-w-5xl">

                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">

                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
                                    🧭
                                </div>

                                <h2 className="text-2xl font-extrabold text-slate-900">
                                    Quick Navigation
                                </h2>
                            </div>

                            <div className="mt-7 grid gap-3 md:grid-cols-2">

                                {sections.map((section) => (
                                    <a
                                        key={section.number}
                                        href={`#section-${section.number}`}
                                        className="group rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                                    >
                                        <span className="mr-3 font-extrabold text-green-600">
                                            {section.number}
                                        </span>

                                        {section.title}

                                        <span className="float-right text-green-500 opacity-0 transition group-hover:opacity-100">
                                            →
                                        </span>
                                    </a>
                                ))}

                            </div>

                        </div>

                    </div>
                </section>

                {/* CONTENT */}
                <section className="px-6 pb-20">

                    <div className="mx-auto max-w-5xl space-y-7">

                        {sections.map((section) => (
                            <article
                                key={section.number}
                                id={`section-${section.number}`}
                                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-10"
                            >

                                <div className="flex items-start gap-5">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 font-extrabold text-green-600">
                                        {section.number}
                                    </div>

                                    <div className="min-w-0 flex-1">

                                        <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                                            {section.title}
                                        </h2>

                                        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

                                            <style>
                                                {`
                                                    #section-${section.number} h3 {
                                                        font-size: 1.1rem;
                                                        font-weight: 800;
                                                        color: #0f172a;
                                                        margin-top: 1.5rem;
                                                        margin-bottom: 0.5rem;
                                                    }

                                                    #section-${section.number} ul,
                                                    #section-${section.number} ol {
                                                        padding-left: 1.5rem;
                                                    }

                                                    #section-${section.number} li {
                                                        margin-bottom: 0.5rem;
                                                    }

                                                    #section-${section.number} ul li::marker {
                                                        color: #16a34a;
                                                    }

                                                    #section-${section.number} ol li::marker {
                                                        color: #16a34a;
                                                        font-weight: 800;
                                                    }
                                                `}
                                            </style>

                                            {section.content}

                                        </div>

                                    </div>

                                </div>

                            </article>
                        ))}

                    </div>

                </section>

                {/* FINAL CHECKLIST */}
                <section className="px-6 pb-20">

                    <div className="mx-auto max-w-5xl">

                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-950 via-slate-950 to-green-950 p-8 text-white md:p-12">

                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

                            <div className="relative">

                                <p className="font-bold tracking-wide text-green-400">
                                    FINAL CHECKLIST
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                                    Are you career-ready?
                                </h2>

                                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                                    Before applying for opportunities, make sure
                                    your profile, skills and preparation are ready.
                                </p>

                                <div className="mt-8 grid gap-4 md:grid-cols-2">

                                    {[
                                        "Resume is updated",
                                        "LinkedIn profile is complete",
                                        "GitHub contains useful projects",
                                        "Technical fundamentals are strong",
                                        "Interview preparation is ongoing",
                                        "Job applications are tracked",
                                        "Internship opportunities are being explored",
                                        "Projects can be explained confidently",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200 backdrop-blur"
                                        >
                                            <span className="mr-3 font-bold text-green-400">
                                                ✓
                                            </span>

                                            {item}
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* CTA */}
                <section className="px-6 pb-20">

                    <div className="mx-auto max-w-5xl">

                        <div className="relative overflow-hidden rounded-3xl bg-green-600 px-7 py-14 text-center text-white shadow-xl shadow-green-600/20 md:px-12">

                            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                            <div className="relative">

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                                    🚀
                                </div>

                                <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
                                    Build your career with a clear plan.
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-green-50">
                                    Use SkillBridge AI to organize your profile,
                                    improve your career preparation and keep
                                    track of your professional journey.
                                </p>

                                <Link
                                    to="/signup"
                                    className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-green-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
                                >
                                    Get Started Free →
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
};

export default CareerGuide;