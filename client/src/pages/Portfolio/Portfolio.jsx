import { useEffect, useState } from "react";

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState({
        title: "",
        about: "",
        portfolioUrl: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // =========================
    // FETCH PORTFOLIO
    // =========================

    const fetchPortfolio = async () => {
        try {
            const token =
                localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/portfolio",
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            );

            const data =
                await response.json();

            if (response.ok) {
                setPortfolio({
                    title:
                        data.portfolio?.title ||
                        "",
                    about:
                        data.portfolio?.about ||
                        "",
                    portfolioUrl:
                        data.portfolio
                            ?.portfolioUrl ||
                        "",
                });
            } else if (
                response.status === 404
            ) {
                setPortfolio({
                    title: "",
                    about: "",
                    portfolioUrl: "",
                });
            } else {
                setError(
                    data.message ||
                    "Failed to load portfolio."
                );
            }
        } catch (error) {
            console.error(
                "Fetch Portfolio Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPortfolio();
    }, []);

    // =========================
    // HANDLE INPUT
    // =========================

    const handleChange = (e) => {
        setPortfolio({
            ...portfolio,
            [e.target.name]: e.target.value,
        });

        setMessage("");
        setError("");
    };

    // =========================
    // SAVE PORTFOLIO
    // =========================

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);
            setMessage("");
            setError("");

            const token =
                localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/portfolio",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                        Authorization:
                            `Bearer ${token}`,
                    },
                    body: JSON.stringify(
                        portfolio
                    ),
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Failed to save portfolio."
                );
                return;
            }

            setPortfolio({
                title:
                    data.portfolio?.title ||
                    "",
                about:
                    data.portfolio?.about ||
                    "",
                portfolioUrl:
                    data.portfolio
                        ?.portfolioUrl ||
                    "",
            });

            setMessage(
                data.message ||
                "Portfolio saved successfully! 🎉"
            );
        } catch (error) {
            console.error(
                "Save Portfolio Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        } finally {
            setSaving(false);
        }
    };

    // =========================
    // LOADING
    // =========================

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto flex items-center justify-center py-20">
                <div className="text-center">

                    <div className="w-12 h-12 mx-auto rounded-full border-4 border-green-100 border-t-green-600 animate-spin" />

                    <p className="text-gray-500 mt-4 font-medium">
                        Loading your portfolio...
                    </p>

                </div>
            </div>
        );
    }

    // =========================
    // UI
    // =========================

    return (
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="relative">

                {/* DECORATIVE BACKGROUND */}

                <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

                <div className="pointer-events-none absolute top-[650px] -left-40 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />

                <div className="relative space-y-7">

                    {/* =================================
                        HEADER
                    ================================= */}

                    <div>

                        <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-green-600">
                            Personal Branding
                        </p>

                        <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-2 tracking-tight">
                            My Portfolio
                            <span className="text-green-600">
                                .
                            </span>
                        </h1>

                        <p className="text-gray-500 mt-2 text-base md:text-lg max-w-2xl">
                            Build your professional
                            identity, showcase your
                            skills and share your
                            career story with the world.
                        </p>

                    </div>

                    {/* =================================
                        HERO
                    ================================= */}

                    <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                        <div className="absolute -right-24 -top-28 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

                        <div className="absolute -left-24 -bottom-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

                        <div className="relative p-6 md:p-8">

                            <div className="flex flex-col lg:flex-row lg:items-center gap-8">

                                {/* LEFT */}

                                <div className="flex-1">

                                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                        🌐 Personal Portfolio
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-black mt-4">
                                        Turn your profile
                                        into your personal
                                        brand.
                                    </h2>

                                    <p className="text-slate-400 mt-3 max-w-2xl leading-7">
                                        Create a professional
                                        portfolio that tells
                                        recruiters and
                                        employers who you are,
                                        what you build and
                                        where they can learn
                                        more about you.
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-6">

                                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                            👤 Personal Brand
                                        </div>

                                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                            💼 Career Ready
                                        </div>

                                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
                                            🚀 Shareable
                                        </div>

                                    </div>

                                </div>

                                {/* RIGHT PREVIEW */}

                                <div className="lg:w-80">

                                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                                        <div className="flex items-center gap-4">

                                            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-3xl">
                                                👨‍💻
                                            </div>

                                            <div className="min-w-0">

                                                <p className="text-xs text-slate-400">
                                                    Portfolio Status
                                                </p>

                                                <p className="text-xl font-black text-green-400 mt-1">
                                                    {portfolio.title
                                                        ? "Ready"
                                                        : "Setup Required"}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="mt-6">

                                            <div className="flex justify-between text-xs mb-2">

                                                <span className="text-slate-400">
                                                    Profile Completion
                                                </span>

                                                <span className="text-green-400 font-bold">
                                                    {portfolio.title &&
                                                        portfolio.about &&
                                                        portfolio.portfolioUrl
                                                        ? "100%"
                                                        : portfolio.title ||
                                                            portfolio.about
                                                            ? "67%"
                                                            : "33%"}
                                                </span>

                                            </div>

                                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                                                <div
                                                    className={`h-full rounded-full bg-green-500 ${portfolio.title &&
                                                        portfolio.about &&
                                                        portfolio.portfolioUrl
                                                        ? "w-full"
                                                        : portfolio.title ||
                                                            portfolio.about
                                                            ? "w-2/3"
                                                            : "w-1/3"
                                                        }`}
                                                />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* =================================
                        MESSAGES
                    ================================= */}

                    {message && (
                        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-2xl font-semibold shadow-sm">

                            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                ✓
                            </span>

                            {message}

                        </div>
                    )}

                    {error && (
                        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl font-semibold shadow-sm">

                            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                !
                            </span>

                            {error}

                        </div>
                    )}

                    {/* =================================
                        MAIN GRID
                    ================================= */}

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                        {/* =================================
                            FORM
                        ================================= */}

                        <section className="lg:col-span-3 rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                            <div className="h-1.5 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

                            <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/40 border-b border-gray-200">

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                    Portfolio Builder
                                </p>

                                <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                    Build Your Profile
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Add the information you
                                    want visitors to see.
                                </p>

                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="p-5 md:p-8 bg-slate-50/60"
                            >

                                <div className="space-y-6">

                                    {/* TITLE */}

                                    <div>

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Professional Title
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                                💼
                                            </span>

                                            <input
                                                type="text"
                                                name="title"
                                                value={
                                                    portfolio.title
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="e.g. Full Stack Developer"
                                                required
                                                className="w-full border border-gray-200 bg-white rounded-xl pl-11 pr-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />

                                        </div>

                                        <p className="text-xs text-gray-400 mt-2">
                                            Your professional
                                            headline or primary
                                            role.
                                        </p>

                                    </div>

                                    {/* ABOUT */}

                                    <div>

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            About Me
                                        </label>

                                        <textarea
                                            name="about"
                                            value={
                                                portfolio.about
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            rows="7"
                                            placeholder="Write a short professional introduction about yourself, your skills, interests and career goals..."
                                            required
                                            className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 outline-none resize-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                        />

                                        <div className="flex justify-between mt-2">

                                            <p className="text-xs text-gray-400">
                                                Keep it clear,
                                                professional and
                                                authentic.
                                            </p>

                                            <p className="text-xs text-gray-400">
                                                {
                                                    portfolio.about
                                                        .length
                                                }{" "}
                                                characters
                                            </p>

                                        </div>

                                    </div>

                                    {/* URL */}

                                    <div>

                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Portfolio URL
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                                🔗
                                            </span>

                                            <input
                                                type="url"
                                                name="portfolioUrl"
                                                value={
                                                    portfolio.portfolioUrl
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="https://yourportfolio.com"
                                                className="w-full border border-gray-200 bg-white rounded-xl pl-11 pr-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />

                                        </div>

                                        <p className="text-xs text-gray-400 mt-2">
                                            Add your public
                                            portfolio website
                                            link.
                                        </p>

                                    </div>

                                    {/* SAVE */}

                                    <button
                                        type="submit"
                                        disabled={saving}
                                        className="w-full bg-green-600 text-white py-3.5 rounded-xl font-bold hover:bg-green-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-green-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {saving
                                            ? "Saving Portfolio..."
                                            : "✓ Save Portfolio"}
                                    </button>

                                </div>

                            </form>

                        </section>

                        {/* =================================
                            LIVE PREVIEW
                        ================================= */}

                        <section className="lg:col-span-2 rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                            <div className="h-1.5 bg-gradient-to-r from-slate-950 via-green-600 to-slate-950" />

                            <div className="px-6 py-7 bg-gradient-to-br from-white to-slate-50 border-b border-gray-200">

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                    Live Preview
                                </p>

                                <h2 className="text-2xl font-black text-slate-950 mt-1">
                                    Your Brand
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Preview how your
                                    introduction looks.
                                </p>

                            </div>

                            <div className="p-5 md:p-6">

                                <div className="rounded-3xl bg-slate-950 text-white p-6 min-h-[360px] flex flex-col">

                                    <div className="flex items-center justify-between">

                                        <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-3xl">
                                            👨‍💻
                                        </div>

                                        <span className="text-xs font-bold text-green-400 bg-green-500/10 border border-green-400/20 px-3 py-1.5 rounded-full">
                                            {portfolio.title
                                                ? "PROFILE"
                                                : "PREVIEW"}
                                        </span>

                                    </div>

                                    <div className="mt-8">

                                        <p className="text-green-400 text-sm font-bold">
                                            Hello, I'm
                                        </p>

                                        <h3 className="text-2xl font-black mt-1 break-words">
                                            {portfolio.title ||
                                                "Your Professional Title"}
                                        </h3>

                                        <div className="w-12 h-1 bg-green-500 rounded-full mt-4" />

                                        <p className="text-slate-400 mt-5 leading-7 text-sm">
                                            {portfolio.about ||
                                                "Your professional introduction will appear here. Tell visitors about your skills, experience and career goals."}
                                        </p>

                                    </div>

                                    {portfolio.portfolioUrl && (
                                        <div className="mt-auto pt-7">

                                            <a
                                                href={
                                                    portfolio.portfolioUrl
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-500 transition"
                                            >
                                                🌐 Visit Portfolio
                                            </a>

                                        </div>
                                    )}

                                </div>

                            </div>

                        </section>

                    </div>

                    {/* =================================
                        SHARING / BENEFITS
                    ================================= */}

                    <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                        <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/30 border-b border-gray-200">

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                Why It Matters
                            </p>

                            <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                Make Your Profile Stand Out
                            </h2>

                            <p className="text-gray-500 mt-1">
                                A strong portfolio makes your
                                professional identity easier to
                                discover and remember.
                            </p>

                        </div>

                        <div className="p-5 md:p-8 bg-slate-50/60">

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition">

                                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                                        👀
                                    </div>

                                    <h3 className="font-black text-lg text-slate-950 mt-4">
                                        Better Visibility
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-6 mt-2">
                                        Give recruiters a quick
                                        way to understand your
                                        professional identity.
                                    </p>

                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition">

                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                                        💼
                                    </div>

                                    <h3 className="font-black text-lg text-slate-950 mt-4">
                                        Career Ready
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-6 mt-2">
                                        Present your skills,
                                        projects and career
                                        journey professionally.
                                    </p>

                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition">

                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl">
                                        🚀
                                    </div>

                                    <h3 className="font-black text-lg text-slate-950 mt-4">
                                        Share Anywhere
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-6 mt-2">
                                        Use your portfolio
                                        presence when applying
                                        for jobs or internships.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* =================================
                        TIP
                    ================================= */}

                    <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white p-6 md:p-8 shadow-xl">

                        <div className="absolute right-0 top-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                        <div className="relative flex flex-col md:flex-row md:items-center gap-5">

                            <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                💡
                            </div>

                            <div>

                                <h3 className="text-xl font-black">
                                    Portfolio Tip
                                </h3>

                                <p className="text-slate-400 mt-1 leading-6">
                                    Keep your headline specific,
                                    your introduction concise
                                    and your portfolio link
                                    working. A clean professional
                                    profile creates a stronger
                                    first impression.
                                </p>

                            </div>

                        </div>

                    </section>

                </div>

            </div>

        </div>
    );
};

export default Portfolio;