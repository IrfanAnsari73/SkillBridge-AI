import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const Resume = () => {
    const [resume, setResume] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // =========================
    // AI ANALYZER STATES
    // =========================

    const [analyzing, setAnalyzing] = useState(false);
    const [analysisStarted, setAnalysisStarted] = useState(false);
    const [analysis, setAnalysis] = useState(null);

    // =========================
    // FETCH RESUME
    // =========================

    const fetchResume = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/resume",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.ok) {
                setResume(data.resume);
            } else if (response.status === 404) {
                setResume(null);
            } else {
                setError(
                    data.message || "Failed to load resume."
                );
            }
        } catch (error) {
            console.error("Fetch Resume Error:", error);
            setError("Unable to connect to server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchResume();
    }, []);

    // =========================
    // SELECT FILE
    // =========================

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            setSelectedFile(null);
            return;
        }

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
            setError(
                "Only PDF, DOC and DOCX files are allowed."
            );
            setSelectedFile(null);
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("File size must be less than 5 MB.");
            setSelectedFile(null);
            return;
        }

        setError("");
        setMessage("");
        setSelectedFile(file);
    };

    // =========================
    // UPLOAD / REPLACE
    // =========================

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            setError("Please select a resume file.");
            return;
        }

        try {
            setUploading(true);
            setMessage("");
            setError("");

            const token = localStorage.getItem("token");

            const formData = new FormData();

            formData.append("resume", selectedFile);

            const response = await fetch(
                "http://localhost:5000/api/resume",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message || "Resume upload failed."
                );
                return;
            }

            setResume(data.resume);
            setSelectedFile(null);
            setMessage(data.message);

            // Reset previous AI analysis
            setAnalysisStarted(false);
            setAnalysis(null);

            const fileInput =
                document.getElementById("resumeFile");

            if (fileInput) {
                fileInput.value = "";
            }
        } catch (error) {
            console.error("Upload Resume Error:", error);
            setError("Unable to connect to server.");
        } finally {
            setUploading(false);
        }
    };

    // =========================
    // DOWNLOAD RESUME
    // =========================

    const handleDownload = async () => {
        try {
            setError("");
            setMessage("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/resume/download",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                let errorMessage = "Download failed.";

                try {
                    const data = await response.json();

                    errorMessage =
                        data.message || errorMessage;
                } catch {
                    // Ignore JSON parsing error
                }

                throw new Error(errorMessage);
            }

            const blob = await response.blob();

            const downloadUrl =
                window.URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = downloadUrl;
            link.download = resume.originalName;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(downloadUrl);

            setMessage(
                "Resume downloaded successfully! 📥"
            );
        } catch (error) {
            console.error(
                "Download Resume Error:",
                error
            );

            setError(
                error.message ||
                "Unable to download resume."
            );
        }
    };

    // =========================
    // DELETE RESUME
    // =========================

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete your resume?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            setError("");
            setMessage("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/resume",
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Failed to delete resume."
                );
                return;
            }

            setResume(null);

            // Reset AI analyzer
            setAnalysisStarted(false);
            setAnalysis(null);

            setMessage(data.message);
        } catch (error) {
            console.error(
                "Delete Resume Error:",
                error
            );

            setError("Unable to connect to server.");
        }
    };

    // =========================
    // AI RESUME ANALYZER
    // =========================

    const handleAnalyzeResume = async () => {
        if (!resume) {
            setError(
                "Please upload a resume before analyzing."
            );
            return;
        }

        try {
            setError("");
            setMessage("");
            setAnalyzing(true);
            setAnalysisStarted(false);
            setAnalysis(null);

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/resume/analyze",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Resume analysis failed."
                );
                return;
            }

            setAnalysis(data.analysis);
            setAnalysisStarted(true);

            setMessage(
                "Resume analyzed successfully! 🤖"
            );
        } catch (error) {
            console.error(
                "Analyze Resume Error:",
                error
            );

            setError(
                "Unable to connect to resume analyzer."
            );
        } finally {
            setAnalyzing(false);
        }
    };

    // =========================
    // FILE SIZE
    // =========================

    const getFileSize = (bytes) => {
        if (!bytes) {
            return "0 KB";
        }

        return `${(bytes / 1024).toFixed(1)} KB`;
    };

    // =========================
    // LOADING
    // =========================

    if (loading) {
        return (
            <DashboardLayout>
                <p className="text-gray-600">
                    Loading resume...
                </p>
            </DashboardLayout>
        );
    }

    // =========================
    // UI
    // =========================

    return (
        <DashboardLayout>

            {/* =========================
                PAGE HEADER
            ========================= */}

            <h1 className="text-4xl font-bold text-green-600">
                My Resume 📄
            </h1>

            <p className="text-gray-600 mt-2">
                Upload and manage your resume.
            </p>


            {/* =========================
                SUCCESS MESSAGE
            ========================= */}

            {message && (
                <div className="mt-6 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                    {message}
                </div>
            )}


            {/* =========================
                ERROR MESSAGE
            ========================= */}

            {error && (
                <div className="mt-6 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}


            {/* =========================
                UPLOAD SECTION
            ========================= */}

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <h2 className="text-2xl font-bold">
                    {resume
                        ? "Replace Resume"
                        : "Upload Resume"}
                </h2>

                <p className="text-gray-500 mt-2">
                    PDF, DOC and DOCX files only.
                    Maximum size: 5 MB.
                </p>

                <form
                    onSubmit={handleUpload}
                    className="mt-6"
                >

                    <input
                        id="resumeFile"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="block w-full border rounded-lg p-3"
                    />

                    {selectedFile && (
                        <p className="mt-3 text-gray-600">
                            Selected: {selectedFile.name}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={uploading}
                        className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
                    >
                        {uploading
                            ? "Uploading..."
                            : resume
                                ? "Replace Resume"
                                : "Upload Resume"}
                    </button>

                </form>

            </div>


            {/* =========================
                CURRENT RESUME
            ========================= */}

            {resume && (
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                    <h2 className="text-2xl font-bold text-green-600">
                        Current Resume
                    </h2>

                    <div className="mt-5 border rounded-xl p-5">

                        <h3 className="text-lg font-semibold">
                            {resume.originalName}
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Size:{" "}
                            {getFileSize(
                                resume.fileSize
                            )}
                        </p>

                        <p className="text-gray-500">
                            Type: {resume.mimeType}
                        </p>

                        <div className="flex flex-wrap gap-3 mt-5">

                            {/* VIEW */}

                            <a
                                href={`http://localhost:5000/uploads/${resume.fileName}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                            >
                                View Resume
                            </a>


                            {/* DOWNLOAD */}

                            <button
                                onClick={handleDownload}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Download
                            </button>


                            {/* DELETE */}

                            <button
                                onClick={handleDelete}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>
            )}


            {/* =========================
                AI RESUME ANALYZER
            ========================= */}

            {resume && (
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                        <div>

                            <h2 className="text-2xl font-bold text-green-600">
                                AI Resume Analyzer 🤖
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Get intelligent insights about your
                                resume and improve your career profile.
                            </p>

                        </div>

                        <button
                            onClick={handleAnalyzeResume}
                            disabled={analyzing}
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50"
                        >
                            {analyzing
                                ? "Analyzing..."
                                : "Analyze Resume 🤖"}
                        </button>

                    </div>


                    {/* =========================
                        ANALYZER PREVIEW
                    ========================= */}

                    {!analysisStarted && !analyzing && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                            <div className="border rounded-xl p-5 bg-blue-50">

                                <div className="text-3xl">
                                    📄
                                </div>

                                <h3 className="font-semibold mt-3">
                                    Resume Summary
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    AI-generated resume overview
                                </p>

                            </div>


                            <div className="border rounded-xl p-5 bg-green-50">

                                <div className="text-3xl">
                                    💻
                                </div>

                                <h3 className="font-semibold mt-3">
                                    Skills Detection
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Identify skills from your resume
                                </p>

                            </div>


                            <div className="border rounded-xl p-5 bg-yellow-50">

                                <div className="text-3xl">
                                    ⭐
                                </div>

                                <h3 className="font-semibold mt-3">
                                    Strengths
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Discover your resume strengths
                                </p>

                            </div>


                            <div className="border rounded-xl p-5 bg-red-50">

                                <div className="text-3xl">
                                    🎯
                                </div>

                                <h3 className="font-semibold mt-3">
                                    Improvements
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Get suggestions to improve your resume
                                </p>

                            </div>

                        </div>
                    )}


                    {/* =========================
                        ANALYZING
                    ========================= */}

                    {analyzing && (
                        <div className="mt-8 border rounded-xl p-8 text-center">

                            <div className="text-5xl">
                                🤖
                            </div>

                            <h3 className="text-xl font-bold mt-4">
                                AI is analyzing your resume...
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Please wait while we prepare your
                                resume insights.
                            </p>

                            <div className="mt-5 w-full bg-gray-200 rounded-full h-3">

                                <div className="bg-purple-600 h-3 rounded-full w-2/3 animate-pulse"></div>

                            </div>

                        </div>
                    )}


                    {/* =========================
                        AI RESULT
                    ========================= */}

                    {analysisStarted &&
                        !analyzing &&
                        analysis && (

                            <div className="mt-8">

                                {/* SCORE */}

                                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">

                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                                        <div>

                                            <h3 className="text-xl font-bold text-purple-700">
                                                🤖 AI Resume Analysis
                                            </h3>

                                            <p className="text-gray-600 mt-2">
                                                Your resume has been analyzed successfully.
                                            </p>

                                        </div>

                                        <div className="text-center">

                                            <div className="text-4xl font-bold text-purple-700">
                                                {analysis.score}/100
                                            </div>

                                            <p className="text-sm text-gray-500">
                                                Resume Score
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* SUMMARY + SKILLS */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                                    {/* SUMMARY */}

                                    <div className="border rounded-xl p-6">

                                        <h3 className="text-lg font-bold">
                                            📄 Resume Summary
                                        </h3>

                                        <p className="text-gray-600 mt-3">
                                            {analysis.summary}
                                        </p>

                                    </div>


                                    {/* SKILLS */}

                                    <div className="border rounded-xl p-6">

                                        <h3 className="text-lg font-bold">
                                            💻 Skills Detected
                                        </h3>

                                        {analysis.skills &&
                                            analysis.skills.length > 0 ? (

                                            <div className="flex flex-wrap gap-2 mt-4">

                                                {analysis.skills.map(
                                                    (skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                                                        >
                                                            {skill}
                                                        </span>
                                                    )
                                                )}

                                            </div>

                                        ) : (

                                            <p className="text-gray-500 mt-3">
                                                No technical skills detected.
                                            </p>

                                        )}

                                    </div>


                                    {/* STRENGTHS */}

                                    <div className="border rounded-xl p-6">

                                        <h3 className="text-lg font-bold">
                                            ⭐ Resume Strengths
                                        </h3>

                                        {analysis.strengths &&
                                            analysis.strengths.length > 0 ? (

                                            <ul className="mt-4 space-y-3">

                                                {analysis.strengths.map(
                                                    (strength, index) => (
                                                        <li
                                                            key={index}
                                                            className="text-gray-600 flex gap-2"
                                                        >
                                                            <span>
                                                                ✅
                                                            </span>

                                                            <span>
                                                                {strength}
                                                            </span>
                                                        </li>
                                                    )
                                                )}

                                            </ul>

                                        ) : (

                                            <p className="text-gray-500 mt-3">
                                                No strengths detected.
                                            </p>

                                        )}

                                    </div>


                                    {/* IMPROVEMENTS */}

                                    <div className="border rounded-xl p-6">

                                        <h3 className="text-lg font-bold">
                                            🎯 Improvement Suggestions
                                        </h3>

                                        {analysis.improvements &&
                                            analysis.improvements.length > 0 ? (

                                            <ul className="mt-4 space-y-3">

                                                {analysis.improvements.map(
                                                    (improvement, index) => (
                                                        <li
                                                            key={index}
                                                            className="text-gray-600 flex gap-2"
                                                        >
                                                            <span>
                                                                💡
                                                            </span>

                                                            <span>
                                                                {improvement}
                                                            </span>
                                                        </li>
                                                    )
                                                )}

                                            </ul>

                                        ) : (

                                            <p className="text-gray-500 mt-3">
                                                No improvement suggestions.
                                            </p>

                                        )}

                                    </div>

                                </div>

                            </div>
                        )}

                </div>
            )}

        </DashboardLayout>
    );
};

export default Resume;