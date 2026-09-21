import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/common/SEO";
import { Link } from "react-router-dom";

const FakeJobScamGuide = () => {
    return (
        <>
            <SEO
                title="How to Identify Fake Job & Internship Offers — SkillBridge AI"
                description="Learn how students and freshers can identify fake job and internship offers, recognize common scam signals, verify recruiters, avoid payment requests, and apply safely."
                canonical="https://skill-bridge-ai-sage.vercel.app/blog/how-to-identify-fake-job-internship-offers"
            />

            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 px-6 py-14 text-white md:py-18">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <Link
                        to="/blog"
                        className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300 transition hover:bg-green-400/20"
                    >
                        ← Back to Blog
                    </Link>

                    <div className="mb-5">
                        <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
                            Career Safety Guide
                        </span>
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        How to Identify{" "}
                        <span className="text-green-400">Fake Job & Internship Offers</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                        Learn how students and freshers can identify suspicious job and
                        internship offers, verify recruiters, recognize common scam
                        signals, and protect themselves during the job search.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Student Safety
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Job Search
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            Scam Awareness
                        </span>
                    </div>
                </div>
            </section>

            <main className="bg-white px-6 py-14 text-slate-800">
                <article className="mx-auto max-w-4xl">

                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-3xl font-bold text-slate-900">
                            Why Students Should Be Careful During Job Searches
                        </h2>

                        <p className="mb-4 leading-8">
                            Students and freshers often apply to many internships and jobs
                            while starting their careers. This makes it important to verify
                            opportunities before sharing personal information, completing
                            tasks, or making payments.
                        </p>

                        <p className="leading-8">
                            A professional-looking message or job advertisement does not
                            automatically mean that an opportunity is genuine. Always check
                            the recruiter, company, job description, communication channel,
                            and any unusual requests before proceeding.
                        </p>
                    </section>

                    {/* 1 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            1. Be Careful If a Job Requires Payment
                        </h2>

                        <p className="mb-4 leading-8">
                            One important warning sign is an unexpected request for money
                            during the hiring process.
                        </p>

                        <ul className="list-disc space-y-2 pl-6 leading-8">
                            <li>Registration fees</li>
                            <li>Interview fees</li>
                            <li>Security deposits</li>
                            <li>Training fees presented as mandatory for getting hired</li>
                            <li>Requests to pay for equipment before employment</li>
                        </ul>

                        <div className="mt-5 rounded-xl border border-red-100 bg-red-50 p-5">
                            <p className="font-semibold text-red-800">
                                Important:
                            </p>
                            <p className="mt-2 leading-7 text-slate-700">
                                Do not send money simply because someone claims that payment is
                                required to secure a job or internship. Verify the opportunity
                                independently before taking any action.
                            </p>
                        </div>
                    </section>

                    {/* 2 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            2. Verify the Company's Official Website
                        </h2>

                        <p className="mb-4 leading-8">
                            Search for the company's official website independently instead
                            of relying only on a link provided by a recruiter.
                        </p>

                        <ul className="list-disc space-y-2 pl-6 leading-8">
                            <li>Check whether the company has an established website.</li>
                            <li>Compare the recruiter information with the company website.</li>
                            <li>Look for an official careers or jobs section.</li>
                            <li>Check whether the role appears consistent with the company's work.</li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            3. Check the Recruiter's Email Address
                        </h2>

                        <p className="leading-8">
                            Pay attention to the email address used for communication. A
                            recruiter using a company domain may provide more context than a
                            random personal email address, but an email address alone does
                            not prove that an opportunity is genuine.
                        </p>

                        <p className="mt-4 leading-8">
                            Look carefully for spelling differences, unusual domains, or
                            addresses that imitate a company's name.
                        </p>
                    </section>

                    {/* 4 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            4. Research the Recruiter
                        </h2>

                        <p className="mb-4 leading-8">
                            If someone contacts you about a job, search for their professional
                            profile and compare the information they provide.
                        </p>

                        <ul className="list-disc space-y-2 pl-6 leading-8">
                            <li>Check their LinkedIn profile.</li>
                            <li>Check whether they appear connected to the company.</li>
                            <li>Look at their professional history.</li>
                            <li>Be cautious if their profile contains very little information.</li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            5. Be Careful With Unrealistic Job Offers
                        </h2>

                        <p className="mb-4 leading-8">
                            Be cautious when an offer promises unusually high compensation,
                            guaranteed employment, or fast career growth without a clear
                            selection process.
                        </p>

                        <p className="leading-8">
                            A high salary does not automatically mean an offer is fake, but
                            unrealistic promises combined with pressure, payment requests,
                            or vague job details deserve additional verification.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            6. Read the Job Description Carefully
                        </h2>

                        <p className="mb-4 leading-8">
                            A legitimate job description should normally provide enough
                            information for you to understand the position.
                        </p>

                        <ul className="list-disc space-y-2 pl-6 leading-8">
                            <li>Job title</li>
                            <li>Responsibilities</li>
                            <li>Required skills</li>
                            <li>Location or work arrangement</li>
                            <li>Selection process</li>
                            <li>Company information</li>
                        </ul>

                        <p className="mt-4 leading-8">
                            Extremely vague descriptions or promises with no clear role
                            details should encourage you to investigate further.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            7. Watch Out for Pressure and Urgency
                        </h2>

                        <p className="leading-8">
                            Be cautious when someone pressures you to make a quick payment,
                            immediately share sensitive information, or accept an offer
                            without giving you reasonable time to verify the opportunity.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            8. Never Share Sensitive Information Unnecessarily
                        </h2>

                        <p className="mb-4 leading-8">
                            During a normal application process, companies may ask for
                            information required for recruitment or onboarding. However, you
                            should be careful with highly sensitive information, especially
                            when the source has not been verified.
                        </p>

                        <ul className="list-disc space-y-2 pl-6 leading-8">
                            <li>Passwords</li>
                            <li>One-time passwords</li>
                            <li>Banking credentials</li>
                            <li>Card PINs</li>
                            <li>Unnecessary financial information</li>
                        </ul>

                        <div className="mt-5 rounded-xl border border-red-100 bg-red-50 p-5">
                            <p className="font-semibold text-red-800">
                                Never share passwords or OTPs with a recruiter.
                            </p>
                        </div>
                    </section>

                    {/* 9 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            9. Verify Internship Offers Too
                        </h2>

                        <p className="mb-4 leading-8">
                            Internship scams can look similar to job scams. Before accepting
                            an internship, check:
                        </p>

                        <ul className="list-disc space-y-2 pl-6 leading-8">
                            <li>Company identity</li>
                            <li>Internship role and responsibilities</li>
                            <li>Duration</li>
                            <li>Selection process</li>
                            <li>Work arrangement</li>
                            <li>Stipend information, if applicable</li>
                            <li>Official communication channels</li>
                        </ul>
                    </section>

                    {/* 10 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            10. Check the Offer Letter Carefully
                        </h2>

                        <p className="mb-4 leading-8">
                            If you receive an offer letter, review the information carefully.
                            Look for consistency between the company, role, recruiter,
                            location, compensation, and other details.
                        </p>

                        <p className="leading-8">
                            If something appears unusual, contact the company through an
                            independently verified official channel and ask whether the
                            offer is genuine.
                        </p>
                    </section>

                    {/* 11 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            11. Be Careful With Fake Interview Links
                        </h2>

                        <p className="leading-8">
                            Before opening an unfamiliar interview or assessment link, check
                            where it leads and whether it is consistent with the company's
                            normal recruitment process.
                        </p>

                        <p className="mt-4 leading-8">
                            Avoid entering passwords, payment details, or sensitive
                            information into suspicious websites simply because a message
                            claims that an interview is scheduled.
                        </p>
                    </section>

                    {/* 12 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            12. Common Warning Signs
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                "Unexpected payment request",
                                "Unclear job responsibilities",
                                "Unverified recruiter",
                                "Pressure to respond immediately",
                                "Promises of guaranteed employment",
                                "Suspicious email domain",
                                "Request for passwords or OTPs",
                                "Unprofessional communication",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-medium"
                                >
                                    ⚠️ {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 13 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            13. How to Verify an Opportunity
                        </h2>

                        <ol className="list-decimal space-y-3 pl-6 leading-8">
                            <li>Find the company's official website independently.</li>
                            <li>Check the company's careers page.</li>
                            <li>Verify the recruiter's identity and role.</li>
                            <li>Compare the job details with the official listing.</li>
                            <li>Contact the company through an independently verified channel if necessary.</li>
                            <li>Do not pay money just to secure a job.</li>
                            <li>Do not share passwords, OTPs, or banking credentials.</li>
                        </ol>
                    </section>

                    {/* 14 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            14. What to Do If You Suspect a Scam
                        </h2>

                        <p className="mb-4 leading-8">
                            If an opportunity appears suspicious, stop communicating until
                            you can verify it. Do not send additional money or sensitive
                            information.
                        </p>

                        <p className="leading-8">
                            Keep relevant messages, emails, payment records, and other
                            evidence. If you believe you have been targeted by fraud, use
                            appropriate official reporting channels available in your
                            country or region.
                        </p>
                    </section>

                    {/* Checklist */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            Fake Job & Internship Safety Checklist
                        </h2>

                        <div className="space-y-3">
                            {[
                                "I verified the company independently.",
                                "I checked the recruiter's professional identity.",
                                "I read the complete job description.",
                                "I did not pay an unexpected recruitment fee.",
                                "I did not share passwords or OTPs.",
                                "I checked the sender's email address carefully.",
                                "I verified suspicious links before opening them.",
                                "I reviewed the offer letter carefully.",
                                "I have enough information about the role and company.",
                                "I know where to report suspicious activity if necessary.",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                                >
                                    <span className="font-bold text-green-600">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-3xl font-bold text-slate-900">
                            Final Thoughts
                        </h2>

                        <p className="mb-4 leading-8">
                            Finding your first job or internship is exciting, but it is
                            equally important to stay careful during the process. Take time
                            to verify opportunities instead of making decisions under
                            pressure.
                        </p>

                        <p className="leading-8">
                            A strong job search strategy combines good preparation with
                            sensible verification. Build your resume, improve your skills,
                            research companies, and use trusted job platforms while
                            protecting your personal information.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="rounded-3xl bg-gradient-to-br from-green-950 via-[#03130d] to-slate-950 p-8 text-center text-white md:p-12">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Build a Safer, Smarter Career
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                            Prepare your resume, improve your interview skills, find better
                            opportunities, and manage your career journey with SkillBridge
                            AI.
                        </p>

                        <div className="mt-7 flex flex-wrap justify-center gap-4">
                            <Link
                                to="/blog/fresher-job-search-guide"
                                className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-green-400"
                            >
                                Fresher Job Search Guide
                            </Link>

                            <Link
                                to="/resources/career-guides-for-students"
                                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
                            >
                                Career Guide
                            </Link>
                        </div>
                    </section>

                </article>
            </main>

            <Footer />
        </>
    );
};

export default FakeJobScamGuide;