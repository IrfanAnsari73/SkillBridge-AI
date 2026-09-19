import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white w-full">

            {/* =========================================
                MAIN FOOTER
            ========================================= */}

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* BRAND */}

                    <div className="lg:col-span-2">

                        <Link
                            to="/"
                            className="inline-flex items-center gap-1 text-2xl md:text-3xl font-black"
                        >
                            <span className="text-white">
                                Skill
                            </span>

                            <span className="text-green-500">
                                Bridge
                            </span>

                            <span className="text-white">
                                AI
                            </span>
                        </Link>

                        <p className="mt-4 max-w-md text-gray-400 leading-7">
                            AI-powered career tools designed to help
                            students and job seekers build stronger
                            profiles, improve their resumes, prepare
                            for interviews, and manage their career
                            journey.
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
                            🤖 Build Your Career Smarter
                        </div>

                    </div>


                    {/* PRODUCT */}

                    <div>

                        <h3 className="text-sm font-black uppercase tracking-[0.16em] text-green-400">
                            Product
                        </h3>

                        <div className="mt-5 space-y-3">

                            <Link
                                to="/"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                About
                            </Link>

                            {/* Resources */}
                            <Link
                                to="/resources"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                Resources
                            </Link>

                            {/* FAQ */}
                            <Link
                                to="/faq"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                FAQ
                            </Link>

                            {/* Blog */}
                            <Link
                                to="/blog"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                Blog
                            </Link>

                            <Link
                                to="/contact"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/signup"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                Get Started
                            </Link>

                        </div>

                    </div>


                    {/* LEGAL */}

                    <div>

                        <h3 className="text-sm font-black uppercase tracking-[0.16em] text-green-400">
                            Legal
                        </h3>

                        <div className="mt-5 space-y-3">

                            <Link
                                to="/privacy-policy"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/terms"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                to="/cookie-policy"
                                className="block text-gray-400 hover:text-white transition"
                            >
                                Cookie Policy
                            </Link>

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================
                BOTTOM BAR
            ========================================= */}

            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                        <p className="text-sm text-gray-500">
                            © 2026 SkillBridge AI. All Rights Reserved.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm">

                            <Link
                                to="/privacy-policy"
                                className="text-gray-500 hover:text-green-400 transition"
                            >
                                Privacy
                            </Link>

                            <Link
                                to="/terms"
                                className="text-gray-500 hover:text-green-400 transition"
                            >
                                Terms
                            </Link>

                            <Link
                                to="/contact"
                                className="text-gray-500 hover:text-green-400 transition"
                            >
                                Contact
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;