import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

const DashboardLayout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="h-screen overflow-hidden bg-gray-100">

            {/* =====================================
                DESKTOP SIDEBAR
            ===================================== */}

            <aside className="hidden md:block fixed left-0 top-0 bottom-0 w-64 z-50">
                <Sidebar />
            </aside>

            {/* =====================================
                MOBILE SIDEBAR OVERLAY
            ===================================== */}

            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-50 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/40" />

                    {/* Sidebar */}

                    <div
                        className="absolute left-0 top-0 bottom-0 w-64"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Sidebar />
                    </div>
                </div>
            )}

            {/* =====================================
                MAIN AREA
            ===================================== */}

            <div className="md:ml-64 h-screen min-w-0">

                {/* =================================
                    MOBILE TOP BAR
                ================================= */}

                <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gray-100 px-4 pt-4">

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-3 flex items-center justify-between">

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-600 text-white text-xl"
                            aria-label="Open menu"
                        >
                            ☰
                        </button>

                        <div className="text-center">
                            <h2 className="font-bold text-gray-800">
                                SkillBridge AI
                            </h2>

                            <p className="text-xs text-gray-500">
                                Career & Portfolio
                            </p>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                            IA
                        </div>

                    </div>

                </div>

                {/* =================================
                    DESKTOP TOP BAR
                ================================= */}

                <header className="hidden md:block fixed top-0 left-64 right-0 z-40 bg-gray-100 px-8 pt-8">
                    <Topbar />
                </header>

                {/* =================================
                    PAGE CONTENT
                ================================= */}

                <main className="h-screen w-full min-w-0 overflow-y-auto overflow-x-hidden px-4 md:px-8 pt-24 md:pt-32">

                    {/* Protected page */}

                    <Outlet />

                    {/* =================================
                        DASHBOARD FOOTER
                    ================================= */}

                    <footer className="mt-10 mb-6 border-t border-gray-200 pt-6">

                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                            {/* Brand */}

                            <div>
                                <div className="flex items-center gap-2">

                                    <div className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold shadow-sm">
                                        S
                                    </div>

                                    <span className="font-bold text-gray-900">
                                        SkillBridge AI
                                    </span>

                                </div>

                                <p className="mt-2 text-xs text-gray-500">
                                    Build your career. Showcase your skills.
                                </p>
                            </div>

                            {/* Links */}

                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">

                                <Link
                                    to="/about"
                                    className="text-gray-500 hover:text-green-600 transition"
                                >
                                    About
                                </Link>

                                <Link
                                    to="/resources"
                                    className="text-gray-500 hover:text-green-600 transition"
                                >
                                    Resources
                                </Link>

                                <Link
                                    to="/blog"
                                    className="text-gray-500 hover:text-green-600 transition"
                                >
                                    Blog
                                </Link>

                                <Link
                                    to="/faq"
                                    className="text-gray-500 hover:text-green-600 transition"
                                >
                                    FAQ
                                </Link>

                                <Link
                                    to="/contact"
                                    className="text-gray-500 hover:text-green-600 transition"
                                >
                                    Contact
                                </Link>

                            </div>

                        </div>

                        {/* Bottom Row */}

                        <div className="mt-5 pt-4 border-t border-gray-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                            <p className="text-xs text-gray-500">
                                © {new Date().getFullYear()} SkillBridge AI. All rights reserved.
                            </p>

                            <div className="flex flex-wrap gap-4 text-xs">

                                <Link
                                    to="/privacy-policy"
                                    className="text-gray-500 hover:text-green-600 transition"
                                >
                                    Privacy Policy
                                </Link>

                                <Link
                                    to="/terms"
                                    className="text-gray-500 hover:text-green-600 transition"
                                >
                                    Terms
                                </Link>

                                <Link
                                    to="/cookie-policy"
                                    className="text-gray-500 hover:text-green-600 transition"
                                >
                                    Cookie Policy
                                </Link>

                            </div>

                        </div>

                    </footer>

                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;