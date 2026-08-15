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
            console.error("Download Resume Error:", error);

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

            setMessage(data.message);
        } catch (error) {
            console.error("Delete Resume Error:", error);

            setError("Unable to connect to server.");
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

            <h1 className="text-4xl font-bold text-green-600">
                My Resume 📄
            </h1>

            <p className="text-gray-600 mt-2">
                Upload and manage your resume.
            </p>

            {/* SUCCESS MESSAGE */}
            {message && (
                <div className="mt-6 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                    {message}
                </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
                <div className="mt-6 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* UPLOAD SECTION */}
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

            {/* CURRENT RESUME */}
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

        </DashboardLayout>
    );
};

export default Resume;