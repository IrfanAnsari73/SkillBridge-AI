import { useEffect, useState } from "react";

const PublicPortfolio = () => {
    const [portfolio, setPortfolio] = useState(null);
    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const userId = window.location.pathname.split("/").pop();

    // =========================
    // FETCH PUBLIC PORTFOLIO
    // =========================
    const fetchPortfolio = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/portfolio/public/${userId}`
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message || "Portfolio not found."
                );
                return;
            }

            setPortfolio(data);

            // =========================
            // FETCH PUBLIC RESUME
            // =========================
            try {
                const resumeResponse = await fetch(
                    `http://localhost:5000/api/resume/public/${userId}`
                );

                if (resumeResponse.ok) {
                    const resumeData =
                        await resumeResponse.json();

                    setResume(resumeData.resume);
                }
            } catch (resumeError) {
                console.error(
                    "Public Resume Error:",
                    resumeError
                );
            }
        } catch (error) {
            console.error(
                "Public Portfolio Error:",
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
    }, [userId]);

    // =========================
    // LOADING
    // =========================
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-600 text-lg">
                    Loading portfolio...
                </p>
            </div>
        );
    }

    // =========================
    // ERROR
    // =========================
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <h1 className="text-2xl font-bold text-red-500">
                        Portfolio Not Found
                    </h1>

                    <p className="text-gray-600 mt-2">
                        {error}
                    </p>
                </div>
            </div>
        );
    }

    const user = portfolio.portfolio.user;
    const skills = portfolio.skills || [];
    const projects = portfolio.projects || [];
    const certificates =
        portfolio.certificates || [];

    return (
        <div className="min-h-screen bg-gray-100">

            {/* =========================
                HERO SECTION
            ========================= */}

            <section className="bg-green-600 text-white py-16 px-6">

                <div className="max-w-6xl mx-auto text-center">

                    {user.profileImage ? (
                        <img
                            src={user.profileImage}
                            alt={user.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-full mx-auto bg-white text-green-600 flex items-center justify-center text-5xl font-bold">
                            {user.name
                                ?.charAt(0)
                                .toUpperCase()}
                        </div>
                    )}

                    <h1 className="text-5xl font-bold mt-6">
                        {user.name}
                    </h1>

                    <p className="text-xl mt-3">
                        {portfolio.portfolio.title ||
                            "Developer"}
                    </p>

                    {user.location && (
                        <p className="mt-3 text-green-100">
                            📍 {user.location}
                        </p>
                    )}

                    <div className="flex justify-center gap-4 mt-6">

                        {user.github && (
                            <a
                                href={user.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800"
                            >
                                GitHub
                            </a>
                        )}

                        {user.linkedin && (
                            <a
                                href={user.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                            >
                                LinkedIn
                            </a>
                        )}

                    </div>

                </div>

            </section>

            {/* =========================
                MAIN CONTENT
            ========================= */}

            <main className="max-w-6xl mx-auto px-6 py-12">

                {/* =========================
                    ABOUT
                ========================= */}

                <section className="bg-white rounded-xl shadow-lg p-8">

                    <h2 className="text-3xl font-bold text-green-600">
                        About Me
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        {portfolio.portfolio.about ||
                            user.bio ||
                            "No information available."}
                    </p>

                </section>


                {/* =========================
                    EDUCATION
                ========================= */}

                <section className="bg-white rounded-xl shadow-lg p-8 mt-8">

                    <h2 className="text-3xl font-bold text-green-600">
                        Education
                    </h2>

                    <div className="mt-5">

                        <h3 className="text-xl font-semibold">
                            {user.college ||
                                "College not provided"}
                        </h3>

                        <p className="text-gray-600 mt-2">
                            {user.branch ||
                                "Branch not provided"}
                        </p>

                        {user.passingYear && (
                            <p className="text-gray-600 mt-1">
                                Passing Year:{" "}
                                {user.passingYear}
                            </p>
                        )}

                    </div>

                </section>


                {/* =========================
                    SKILLS
                ========================= */}

                <section className="mt-8">

                    <h2 className="text-3xl font-bold text-green-600 mb-5">
                        Skills 💻
                    </h2>

                    {skills.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <p className="text-gray-500">
                                No skills added yet.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {skills.map((skill) => (
                                <div
                                    key={skill._id}
                                    className="bg-white rounded-xl shadow-lg p-6"
                                >

                                    <div className="flex justify-between items-center">

                                        <h3 className="text-xl font-bold">
                                            {skill.name}
                                        </h3>

                                        <span className="text-green-600 font-semibold">
                                            {skill.percentage}%
                                        </span>

                                    </div>

                                    <p className="text-gray-500 mt-2">
                                        {skill.category}
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Level: {skill.level}
                                    </p>

                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-4">

                                        <div
                                            className="bg-green-600 h-2 rounded-full"
                                            style={{
                                                width: `${skill.percentage}%`,
                                            }}
                                        ></div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    )}

                </section>


                {/* =========================
                    PROJECTS
                ========================= */}

                <section className="mt-12">

                    <h2 className="text-3xl font-bold text-green-600 mb-5">
                        Projects 🚀
                    </h2>

                    {projects.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <p className="text-gray-500">
                                No projects added yet.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {projects.map((project) => (
                                <div
                                    key={project._id}
                                    className="bg-white rounded-xl shadow-lg p-6"
                                >

                                    <h3 className="text-2xl font-bold">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        {project.description}
                                    </p>

                                    {project.technologies?.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4">

                                            {project.technologies.map(
                                                (technology, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {technology}
                                                    </span>
                                                )
                                            )}

                                        </div>
                                    )}

                                    <div className="flex gap-3 mt-5">

                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                                            >
                                                GitHub
                                            </a>
                                        )}

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                            >
                                                Live Demo
                                            </a>
                                        )}

                                    </div>

                                </div>
                            ))}

                        </div>
                    )}

                </section>


                {/* =========================
                    CERTIFICATES
                ========================= */}

                <section className="mt-12">

                    <h2 className="text-3xl font-bold text-green-600 mb-5">
                        Certificates 📜
                    </h2>

                    {certificates.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <p className="text-gray-500">
                                No certificates added yet.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {certificates.map(
                                (certificate) => (
                                    <div
                                        key={certificate._id}
                                        className="bg-white rounded-xl shadow-lg p-6"
                                    >

                                        <h3 className="text-xl font-bold">
                                            {certificate.title}
                                        </h3>

                                        <p className="text-green-600 font-semibold mt-2">
                                            {certificate.issuer}
                                        </p>

                                        <p className="text-gray-500 mt-2">
                                            Issue Date:{" "}
                                            {new Date(
                                                certificate.issueDate
                                            ).toLocaleDateString()}
                                        </p>

                                        {certificate.description && (
                                            <p className="text-gray-600 mt-3">
                                                {
                                                    certificate.description
                                                }
                                            </p>
                                        )}

                                        {certificate.credentialUrl && (
                                            <a
                                                href={
                                                    certificate.credentialUrl
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                            >
                                                View Credential
                                            </a>
                                        )}

                                    </div>
                                )
                            )}

                        </div>
                    )}

                </section>


                {/* =========================
                    RESUME
                ========================= */}

                <section className="bg-white rounded-xl shadow-lg p-8 mt-12">

                    <h2 className="text-3xl font-bold text-green-600">
                        Resume 📄
                    </h2>

                    {resume ? (
                        <div className="mt-5">

                            <p className="text-gray-700 font-semibold">
                                {resume.originalName}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-5">

                                <a
                                    href={`http://localhost:5000/uploads/${resume.fileName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
                                >
                                    View Resume
                                </a>

                                <a
                                    href={`http://localhost:5000/api/resume/public/${userId}/download`}
                                    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
                                >
                                    Download Resume
                                </a>

                            </div>

                        </div>
                    ) : (
                        <p className="text-gray-500 mt-4">
                            Resume not available.
                        </p>
                    )}

                </section>


                {/* =========================
                    CONTACT
                ========================= */}

                <section className="bg-white rounded-xl shadow-lg p-8 mt-12">

                    <h2 className="text-3xl font-bold text-green-600">
                        Contact & Links
                    </h2>

                    <div className="flex flex-wrap gap-4 mt-5">

                        {user.github && (
                            <a
                                href={user.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white px-5 py-3 rounded-lg"
                            >
                                GitHub
                            </a>
                        )}

                        {user.linkedin && (
                            <a
                                href={user.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-5 py-3 rounded-lg"
                            >
                                LinkedIn
                            </a>
                        )}

                        {user.email && (
                            <a
                                href={`mailto:${user.email}`}
                                className="bg-green-600 text-white px-5 py-3 rounded-lg"
                            >
                                Email
                            </a>
                        )}

                    </div>

                </section>

            </main>


            {/* =========================
                FOOTER
            ========================= */}

            <footer className="bg-gray-900 text-white text-center py-6 mt-8">

                <p>
                    © {new Date().getFullYear()}{" "}
                    {user.name} — Powered by SkillBridge AI
                </p>

            </footer>

        </div>
    );
};

export default PublicPortfolio;