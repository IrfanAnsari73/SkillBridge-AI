import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        branch: "",
        passingYear: "",
        location: "",
        bio: "",
        github: "",
        linkedin: "",
        portfolio: "",
        profileImage: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // =========================================
    // FETCH PROFILE
    // =========================================

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Failed to load profile."
                );
                return;
            }

            const user = data.user || data;

            setProfile({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                college: user.college || "",
                branch: user.branch || "",
                passingYear: user.passingYear || "",
                location: user.location || "",
                bio: user.bio || "",
                github: user.github || "",
                linkedin: user.linkedin || "",
                portfolio: user.portfolio || "",
                profileImage: user.profileImage || "",
            });
        } catch (error) {
            console.error(
                "Fetch Profile Error:",
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
        fetchProfile();
    }, []);

    // =========================================
    // HANDLE CHANGE
    // =========================================

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });

        setMessage("");
        setError("");
    };

    // =========================================
    // PROFILE COMPLETION
    // =========================================

    const getProfileCompletion = () => {
        const fields = [
            profile.name,
            profile.email,
            profile.phone,
            profile.college,
            profile.branch,
            profile.passingYear,
            profile.location,
            profile.bio,
            profile.github,
            profile.linkedin,
            profile.portfolio,
            profile.profileImage,
        ];

        const completed =
            fields.filter(
                (field) =>
                    field &&
                    field.toString().trim() !== ""
            ).length;

        return Math.round(
            (completed / fields.length) * 100
        );
    };

    const completion =
        getProfileCompletion();

    // =========================================
    // INITIAL
    // =========================================

    const getInitial = () => {
        if (!profile.name) return "U";

        return profile.name
            .charAt(0)
            .toUpperCase();
    };

    // =========================================
    // UPDATE PROFILE
    // =========================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);
            setMessage("");
            setError("");

            const token =
                localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/profile",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type":
                            "application/json",
                        Authorization:
                            `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        name: profile.name,
                        phone: profile.phone,
                        college:
                            profile.college,
                        branch:
                            profile.branch,
                        passingYear:
                            profile.passingYear
                                ? Number(
                                    profile.passingYear
                                )
                                : null,
                        location:
                            profile.location,
                        bio: profile.bio,
                        github:
                            profile.github,
                        linkedin:
                            profile.linkedin,
                        portfolio:
                            profile.portfolio,
                        profileImage:
                            profile.profileImage,
                    }),
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Failed to update profile."
                );
                return;
            }

            const user =
                data.user || data;

            setProfile({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                college:
                    user.college || "",
                branch:
                    user.branch || "",
                passingYear:
                    user.passingYear || "",
                location:
                    user.location || "",
                bio: user.bio || "",
                github:
                    user.github || "",
                linkedin:
                    user.linkedin || "",
                portfolio:
                    user.portfolio || "",
                profileImage:
                    user.profileImage || "",
            });

            const storedUser =
                localStorage.getItem("user");

            if (storedUser) {
                const oldUser =
                    JSON.parse(storedUser);

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        ...oldUser,
                        ...user,
                    })
                );
            }

            setMessage(
                "Profile updated successfully! 🎉"
            );
        } catch (error) {
            console.error(
                "Update Profile Error:",
                error
            );

            setError(
                "Unable to connect to server."
            );
        } finally {
            setSaving(false);
        }
    };

    // =========================================
    // LOADING
    // =========================================

    if (loading) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-4 border-green-100 border-t-green-600 animate-spin" />

                        <p className="font-semibold text-gray-600">
                            Loading your profile...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto pb-12">

            {/* =========================================
                PAGE BACKGROUND WRAPPER
            ========================================= */}

            <div className="relative">

                {/* Decorative Background */}

                <div className="pointer-events-none absolute -top-20 right-0 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />

                <div className="pointer-events-none absolute top-[500px] -left-32 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl" />

                <div className="relative space-y-7">

                    {/* =================================
                        PAGE HEADER
                    ================================= */}

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

                        <div>
                            <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-green-600">
                                Your Career Identity
                            </p>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-2 tracking-tight">
                                My Profile
                                <span className="text-green-600">
                                    .
                                </span>
                            </h1>

                            <p className="text-gray-500 mt-2 text-base md:text-lg">
                                Build a strong professional
                                profile and showcase your
                                career journey.
                            </p>
                        </div>

                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-2 bg-slate-950 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg"
                        >
                            🌐 View Portfolio
                        </Link>

                    </div>

                    {/* =================================
                        ALERTS
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
                        PROFILE HERO
                    ================================= */}

                    <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                        <div className="absolute -right-24 -top-28 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

                        <div className="absolute -left-24 -bottom-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

                        <div className="relative p-6 md:p-9">

                            <div className="flex flex-col lg:flex-row lg:items-center gap-8">

                                {/* IMAGE */}

                                <div className="flex-shrink-0">

                                    {profile.profileImage ? (
                                        <img
                                            src={
                                                profile.profileImage
                                            }
                                            alt="Profile"
                                            className="w-28 h-28 md:w-36 md:h-36 rounded-3xl object-cover border-4 border-green-400/50 shadow-2xl"
                                        />
                                    ) : (
                                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-5xl font-black shadow-2xl">
                                            {getInitial()}
                                        </div>
                                    )}

                                </div>

                                {/* INFORMATION */}

                                <div className="flex-1">

                                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                                        ✨ Student Career Profile
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-black mt-4">
                                        {profile.name ||
                                            "Your Name"}
                                    </h2>

                                    <p className="text-green-400 font-bold mt-1">
                                        {profile.branch
                                            ? `${profile.branch} Student`
                                            : "Future Professional"}
                                    </p>

                                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-slate-300">

                                        {profile.college && (
                                            <span>
                                                🎓{" "}
                                                {profile.college}
                                            </span>
                                        )}

                                        {profile.location && (
                                            <span>
                                                📍{" "}
                                                {profile.location}
                                            </span>
                                        )}

                                        {profile.passingYear && (
                                            <span>
                                                🎓 Class of{" "}
                                                {profile.passingYear}
                                            </span>
                                        )}

                                    </div>

                                    {profile.bio && (
                                        <p className="mt-5 text-slate-300 max-w-3xl leading-7">
                                            {profile.bio}
                                        </p>
                                    )}

                                </div>

                                {/* PROFILE STRENGTH */}

                                <div className="lg:w-48 flex-shrink-0">

                                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 text-center">

                                        <div
                                            className="mx-auto w-24 h-24 rounded-full flex items-center justify-center"
                                            style={{
                                                background: `conic-gradient(#22c55e ${completion}%, rgba(255,255,255,0.10) ${completion}% 100%)`,
                                            }}
                                        >
                                            <div className="w-[76px] h-[76px] rounded-full bg-slate-950 flex items-center justify-center">
                                                <span className="text-xl font-black">
                                                    {completion}%
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-slate-300 mt-3">
                                            Profile Strength
                                        </p>

                                        <p className="text-xs text-green-400 mt-1 font-semibold">
                                            {completion >= 80
                                                ? "Excellent"
                                                : completion >=
                                                    50
                                                    ? "Keep improving"
                                                    : "Needs attention"}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* =================================
                        QUICK STATS
                    ================================= */}

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                        <div className="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">

                            <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl mb-4">
                                🎓
                            </div>

                            <p className="text-gray-500 text-sm">
                                Education
                            </p>

                            <h3 className="text-lg font-bold text-slate-950 mt-1 line-clamp-2">
                                {profile.branch ||
                                    "Not Added"}
                            </h3>

                            <p className="text-xs text-green-600 mt-2 font-semibold">
                                Academic Profile
                            </p>

                        </div>

                        <div className="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">

                            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-4">
                                📅
                            </div>

                            <p className="text-gray-500 text-sm">
                                Graduation
                            </p>

                            <h3 className="text-2xl font-black text-slate-950 mt-1">
                                {profile.passingYear ||
                                    "—"}
                            </h3>

                            <p className="text-xs text-green-600 mt-2 font-semibold">
                                Target Year
                            </p>

                        </div>

                        <div className="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">

                            <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-xl mb-4">
                                🌐
                            </div>

                            <p className="text-gray-500 text-sm">
                                Social Presence
                            </p>

                            <h3 className="text-2xl font-black text-slate-950 mt-1">
                                {
                                    [
                                        profile.github,
                                        profile.linkedin,
                                        profile.portfolio,
                                    ].filter(Boolean).length
                                }
                                /3
                            </h3>

                            <p className="text-xs text-green-600 mt-2 font-semibold">
                                Profiles Connected
                            </p>

                        </div>

                        <div className="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">

                            <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center text-xl mb-4">
                                ⭐
                            </div>

                            <p className="text-gray-500 text-sm">
                                Profile Status
                            </p>

                            <h3 className="text-xl font-black text-green-600 mt-1">
                                {completion >= 80
                                    ? "Strong"
                                    : completion >=
                                        50
                                        ? "Growing"
                                        : "Incomplete"}
                            </h3>

                            <p className="text-xs text-gray-500 mt-2">
                                Keep improving
                            </p>

                        </div>

                    </div>

                    {/* =================================
                        FORM OUTER CARD
                    ================================= */}

                    <form
                        onSubmit={handleSubmit}
                        className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-xl"
                    >

                        {/* FORM TOP ACCENT */}

                        <div className="h-1.5 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

                        {/* FORM HEADER */}

                        <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/40 border-b border-gray-200">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                                <div>

                                    <p className="text-xs md:text-sm font-black uppercase tracking-[0.18em] text-green-600">
                                        Profile Settings
                                    </p>

                                    <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                        Personal Information
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        Keep your professional
                                        information accurate and
                                        up to date.
                                    </p>

                                </div>

                                <div className="bg-white border border-green-100 rounded-2xl px-5 py-3 shadow-sm">

                                    <p className="text-xs text-gray-500">
                                        Profile Completion
                                    </p>

                                    <div className="flex items-center gap-3 mt-1">

                                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-green-600 rounded-full transition-all"
                                                style={{
                                                    width: `${completion}%`,
                                                }}
                                            />
                                        </div>

                                        <span className="font-black text-green-600">
                                            {completion}%
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* FORM CONTENT */}

                        <div className="p-5 md:p-7 bg-gradient-to-b from-slate-50/80 to-white space-y-6">

                            {/* =================================
                                PERSONAL DETAILS
                            ================================= */}

                            <section className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

                                <div className="px-5 md:px-6 py-5 bg-gradient-to-r from-green-50 to-white border-b border-green-100">

                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center text-xl">
                                            👤
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl text-slate-950">
                                                Personal Details
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Basic information about you
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <div className="p-5 md:p-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                        {/* NAME */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Full Name
                                                <span className="text-green-600 ml-1">
                                                    *
                                                </span>
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                value={
                                                    profile.name
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                        {/* EMAIL */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Email Address
                                            </label>

                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    value={
                                                        profile.email
                                                    }
                                                    readOnly
                                                    className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded-xl px-4 py-3.5 cursor-not-allowed"
                                                />

                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 font-bold">
                                                    ✓
                                                </span>
                                            </div>

                                            <p className="text-xs text-gray-400 mt-1.5">
                                                Email is linked to
                                                your account.
                                            </p>
                                        </div>

                                        {/* PHONE */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                name="phone"
                                                value={
                                                    profile.phone
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                        {/* LOCATION */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Location
                                            </label>

                                            <input
                                                type="text"
                                                name="location"
                                                value={
                                                    profile.location
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="City, State, Country"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                    </div>

                                </div>

                            </section>

                            {/* =================================
                                EDUCATION
                            ================================= */}

                            <section className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

                                <div className="px-5 md:px-6 py-5 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">

                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                                            🎓
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl text-slate-950">
                                                Education
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Add your academic background
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <div className="p-5 md:p-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                        {/* COLLEGE */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                College / University
                                            </label>

                                            <input
                                                type="text"
                                                name="college"
                                                value={
                                                    profile.college
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="Enter college or university"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                        {/* BRANCH */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Branch / Degree
                                            </label>

                                            <input
                                                type="text"
                                                name="branch"
                                                value={
                                                    profile.branch
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="e.g. B.Tech Computer Science"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                        {/* PASSING YEAR */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Passing Year
                                            </label>

                                            <input
                                                type="number"
                                                name="passingYear"
                                                value={
                                                    profile.passingYear
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="e.g. 2027"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                    </div>

                                </div>

                            </section>

                            {/* =================================
                                ONLINE PRESENCE
                            ================================= */}

                            <section className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

                                <div className="px-5 md:px-6 py-5 bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">

                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                                            🌐
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl text-slate-950">
                                                Online Presence
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Connect your professional profiles
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <div className="p-5 md:p-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                        {/* GITHUB */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                GitHub
                                            </label>

                                            <input
                                                type="url"
                                                name="github"
                                                value={
                                                    profile.github
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="https://github.com/username"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                        {/* LINKEDIN */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                LinkedIn
                                            </label>

                                            <input
                                                type="url"
                                                name="linkedin"
                                                value={
                                                    profile.linkedin
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="https://linkedin.com/in/username"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                        {/* PORTFOLIO */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Portfolio Website
                                            </label>

                                            <input
                                                type="url"
                                                name="portfolio"
                                                value={
                                                    profile.portfolio
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="https://yourportfolio.com"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                        {/* IMAGE */}

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Profile Image URL
                                            </label>

                                            <input
                                                type="url"
                                                name="profileImage"
                                                value={
                                                    profile.profileImage
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="https://example.com/image.jpg"
                                                className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                            />
                                        </div>

                                    </div>

                                </div>

                            </section>

                            {/* =================================
                                PROFESSIONAL BIO
                            ================================= */}

                            <section className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

                                <div className="px-5 md:px-6 py-5 bg-gradient-to-r from-yellow-50 to-white border-b border-yellow-100">

                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center text-xl">
                                            ✍️
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl text-slate-950">
                                                Professional Bio
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Tell recruiters and visitors about yourself
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <div className="p-5 md:p-6">

                                    <textarea
                                        name="bio"
                                        value={
                                            profile.bio
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        placeholder="Write a short professional introduction about yourself..."
                                        rows="5"
                                        className="w-full border border-gray-200 bg-slate-50 rounded-xl px-4 py-3.5 outline-none resize-none transition-all hover:border-gray-300 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                                    />

                                    <p className="text-xs text-gray-400 mt-2">
                                        Tip: Mention your skills,
                                        interests, career goals
                                        and what you are building.
                                    </p>

                                </div>

                            </section>

                            {/* =================================
                                SAVE AREA
                            ================================= */}

                            <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-5 md:p-6 shadow-xl">

                                <div className="absolute right-0 top-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />

                                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5">

                                    <div className="text-center sm:text-left">

                                        <p className="text-white font-bold text-lg">
                                            Ready to update your profile?
                                        </p>

                                        <p className="text-slate-400 text-sm mt-1">
                                            Keep your career identity
                                            fresh and professional.
                                        </p>

                                    </div>

                                    <button
                                        type="submit"
                                        disabled={saving}
                                        className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-9 py-3.5 rounded-xl font-bold shadow-lg shadow-green-600/20 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {saving
                                            ? "Saving..."
                                            : "Save Profile ✓"}
                                    </button>

                                </div>

                            </div>

                        </div>
                    </form>

                    {/* =================================
                        LIVE PREVIEW
                    ================================= */}

                    <section className="rounded-[28px] border border-gray-200 bg-white shadow-xl overflow-hidden">

                        <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-white to-green-50/40 border-b border-gray-200">

                            <p className="text-xs md:text-sm font-black uppercase tracking-[0.18em] text-green-600">
                                Live Preview
                            </p>

                            <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-1">
                                How Your Profile Looks
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Preview your professional identity
                                before sharing it.
                            </p>

                        </div>

                        <div className="p-5 md:p-8 bg-slate-50">

                            <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">

                                <div className="absolute right-0 top-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />

                                <div className="relative p-6 md:p-8">

                                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

                                        {profile.profileImage ? (
                                            <img
                                                src={
                                                    profile.profileImage
                                                }
                                                alt="Profile"
                                                className="w-28 h-28 rounded-2xl object-cover border-2 border-green-400 shadow-xl"
                                            />
                                        ) : (
                                            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-4xl font-black shadow-xl">
                                                {getInitial()}
                                            </div>
                                        )}

                                        <div className="flex-1 text-center md:text-left">

                                            <h3 className="text-3xl font-black">
                                                {profile.name ||
                                                    "Your Name"}
                                            </h3>

                                            <p className="text-green-400 font-semibold mt-1">
                                                {profile.branch ||
                                                    "Full Stack Developer"}
                                            </p>

                                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 text-sm text-slate-300">

                                                {profile.college && (
                                                    <span>
                                                        🎓{" "}
                                                        {
                                                            profile.college
                                                        }
                                                    </span>
                                                )}

                                                {profile.location && (
                                                    <span>
                                                        📍{" "}
                                                        {
                                                            profile.location
                                                        }
                                                    </span>
                                                )}

                                            </div>

                                            <p className="text-slate-300 leading-7 mt-5 max-w-2xl">
                                                {profile.bio ||
                                                    "Your professional bio will appear here. Add a short introduction to tell people about your skills, interests and career goals."}
                                            </p>

                                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">

                                                {profile.github && (
                                                    <a
                                                        href={
                                                            profile.github
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-white/10 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
                                                    >
                                                        GitHub ↗
                                                    </a>
                                                )}

                                                {profile.linkedin && (
                                                    <a
                                                        href={
                                                            profile.linkedin
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                                    >
                                                        LinkedIn ↗
                                                    </a>
                                                )}

                                                {profile.portfolio && (
                                                    <a
                                                        href={
                                                            profile.portfolio
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                                    >
                                                        Portfolio ↗
                                                    </a>
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>
            </div>
        </div>
    );
};

export default Profile;