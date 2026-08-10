import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingCertificateId, setEditingCertificateId] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        issuer: "",
        issueDate: "",
        credentialUrl: "",
        description: "",
    });

    // =========================
    // FETCH CERTIFICATES
    // =========================
    const fetchCertificates = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/certificates",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message || "Failed to load certificates."
                );
                return;
            }

            setCertificates(data.certificates || []);
        } catch (error) {
            console.error("Fetch Certificates Error:", error);
            setError("Unable to connect to server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    // =========================
    // INPUT CHANGE
    // =========================
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // =========================
    // RESET FORM
    // =========================
    const resetForm = () => {
        setFormData({
            title: "",
            issuer: "",
            issueDate: "",
            credentialUrl: "",
            description: "",
        });

        setEditingCertificateId(null);
        setShowForm(false);
        setError("");
    };

    // =========================
    // EDIT CERTIFICATE
    // =========================
    const handleEdit = (certificate) => {
        setFormData({
            title: certificate.title || "",
            issuer: certificate.issuer || "",
            issueDate: certificate.issueDate
                ? certificate.issueDate.split("T")[0]
                : "",
            credentialUrl: certificate.credentialUrl || "",
            description: certificate.description || "",
        });

        setEditingCertificateId(certificate._id);
        setShowForm(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // =========================
    // CREATE / UPDATE
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const url = editingCertificateId
                ? `http://localhost:5000/api/certificates/${editingCertificateId}`
                : "http://localhost:5000/api/certificates";

            const method = editingCertificateId
                ? "PUT"
                : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: formData.title,
                    issuer: formData.issuer,
                    issueDate: formData.issueDate,
                    credentialUrl: formData.credentialUrl,
                    description: formData.description,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    `Failed to ${editingCertificateId
                        ? "update"
                        : "create"
                    } certificate.`
                );
                return;
            }

            if (editingCertificateId) {
                setCertificates(
                    certificates.map((certificate) =>
                        certificate._id === editingCertificateId
                            ? data.certificate
                            : certificate
                    )
                );
            } else {
                setCertificates([
                    data.certificate,
                    ...certificates,
                ]);
            }

            resetForm();
        } catch (error) {
            console.error("Certificate Save Error:", error);
            setError("Unable to connect to server.");
        }
    };

    // =========================
    // DELETE CERTIFICATE
    // =========================
    const handleDelete = async (certificateId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this certificate?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `http://localhost:5000/api/certificates/${certificateId}`,
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
                    "Failed to delete certificate."
                );
                return;
            }

            setCertificates(
                certificates.filter(
                    (certificate) =>
                        certificate._id !== certificateId
                )
            );
        } catch (error) {
            console.error(
                "Delete Certificate Error:",
                error
            );

            setError("Unable to connect to server.");
        }
    };

    return (
        <DashboardLayout>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                    <h1 className="text-4xl font-bold text-green-600">
                        My Certificates 📜
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Store all your certificates in one place.
                    </p>
                </div>

                <button
                    onClick={() => {
                        if (showForm) {
                            resetForm();
                        } else {
                            setShowForm(true);
                        }
                    }}
                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
                >
                    {showForm
                        ? "Close Form"
                        : "+ Add Certificate"}
                </button>

            </div>

            {/* Error */}
            {error && (
                <div className="mt-6 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* Add / Edit Form */}
            {showForm && (
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                    <h2 className="text-2xl font-bold text-green-600 mb-6">
                        {editingCertificateId
                            ? "Edit Certificate"
                            : "Add New Certificate"}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Title */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Certificate Name
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Google AI Agents Intensive Course"
                                required
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Issuer */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Issuing Organization
                            </label>

                            <input
                                type="text"
                                name="issuer"
                                value={formData.issuer}
                                onChange={handleChange}
                                placeholder="Google + Kaggle"
                                required
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Issue Date
                            </label>

                            <input
                                type="date"
                                name="issueDate"
                                value={formData.issueDate}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Credential URL */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Credential URL
                            </label>

                            <input
                                type="url"
                                name="credentialUrl"
                                value={formData.credentialUrl}
                                onChange={handleChange}
                                placeholder="https://example.com/certificate"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Successfully completed the course..."
                                rows="4"
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">

                            <button
                                type="submit"
                                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                            >
                                {editingCertificateId
                                    ? "Update Certificate"
                                    : "Save Certificate"}
                            </button>

                            {editingCertificateId && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="border border-gray-400 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                            )}

                        </div>

                    </form>
                </div>
            )}

            {/* Certificates */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                <h2 className="text-2xl font-bold text-green-600 mb-6">
                    Your Certificates
                </h2>

                {loading ? (
                    <p className="text-gray-500">
                        Loading certificates...
                    </p>
                ) : certificates.length === 0 ? (
                    <div className="text-center py-10">

                        <p className="text-gray-500">
                            No certificates added yet.
                        </p>

                        <p className="text-gray-400 mt-2">
                            Click "+ Add Certificate" to add your first certificate.
                        </p>

                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {certificates.map((certificate) => (
                            <div
                                key={certificate._id}
                                className="border rounded-xl p-6 hover:shadow-md transition"
                            >

                                <h3 className="text-xl font-bold text-green-600">
                                    {certificate.title}
                                </h3>

                                <p className="text-gray-700 font-medium mt-2">
                                    {certificate.issuer}
                                </p>

                                {certificate.issueDate && (
                                    <p className="text-gray-500 text-sm mt-2">
                                        Issued on:{" "}
                                        {new Date(
                                            certificate.issueDate
                                        ).toLocaleDateString()}
                                    </p>
                                )}

                                {certificate.description && (
                                    <p className="text-gray-600 mt-4">
                                        {certificate.description}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-3 mt-5">

                                    {certificate.credentialUrl && (
                                        <a
                                            href={certificate.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                        >
                                            View Credential
                                        </a>
                                    )}

                                    <button
                                        onClick={() =>
                                            handleEdit(certificate)
                                        }
                                        className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                certificate._id
                                            )
                                        }
                                        className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </DashboardLayout>
    );
};

export default Certificates;