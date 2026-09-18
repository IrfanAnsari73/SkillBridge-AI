import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="bg-white text-slate-900 border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap"
                    >
                        <span className="text-slate-900">Skill</span>
                        <span className="text-green-600">Bridge AI</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-7">

                        <Link
                            to="/"
                            className="font-medium text-green-600 hover:text-green-700 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="font-medium text-slate-600 hover:text-green-600 transition"
                        >
                            About
                        </Link>

                        <Link
                            to="/resources"
                            className="font-medium text-slate-600 hover:text-green-600 transition"
                        >
                            Resources
                        </Link>

                        <Link
                            to="/contact"
                            className="font-medium text-slate-600 hover:text-green-600 transition"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/login"
                            className="font-medium text-slate-600 hover:text-green-600 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md shadow-green-600/20"
                        >
                            Get Started
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-green-600 text-white text-xl"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-gray-100 py-4">

                        <div className="flex flex-col gap-2">

                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="px-4 py-3 rounded-lg font-medium text-green-600 hover:bg-green-50"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className="px-4 py-3 rounded-lg font-medium text-slate-700 hover:bg-green-50 hover:text-green-600"
                            >
                                About
                            </Link>

                            <Link
                                to="/resources"
                                onClick={closeMenu}
                                className="px-4 py-3 rounded-lg font-medium text-slate-700 hover:bg-green-50 hover:text-green-600"
                            >
                                Resources
                            </Link>

                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="px-4 py-3 rounded-lg font-medium text-slate-700 hover:bg-green-50 hover:text-green-600"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="px-4 py-3 rounded-lg font-medium text-slate-700 hover:bg-green-50 hover:text-green-600"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                onClick={closeMenu}
                                className="mt-2 text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-xl"
                            >
                                Get Started 🚀
                            </Link>

                        </div>

                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;