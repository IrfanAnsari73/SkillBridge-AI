import { useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

const DashboardLayout = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false);

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
                    onClick={() =>
                        setMobileMenuOpen(false)
                    }
                >
                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-black/40" />

                    {/* Mobile Sidebar */}

                    <div
                        className="absolute left-0 top-0 bottom-0 w-64"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
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
                            onClick={() =>
                                setMobileMenuOpen(true)
                            }
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

                <main className="h-screen w-full min-w-0 overflow-y-auto overflow-x-hidden px-4 md:px-8 pt-24 md:pt-32 pb-8">

                    {children}

                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;