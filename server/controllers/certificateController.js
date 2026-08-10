const Certificate = require("../models/Certificate");

// =========================
// CREATE CERTIFICATE
// =========================
const createCertificate = async (req, res) => {
    try {
        const {
            title,
            issuer,
            issueDate,
            credentialUrl,
            description,
        } = req.body;

        if (!title || !issuer) {
            return res.status(400).json({
                message: "Certificate title and issuer are required",
            });
        }

        const certificate = await Certificate.create({
            user: req.user._id,
            title,
            issuer,
            issueDate,
            credentialUrl,
            description,
        });

        res.status(201).json({
            message: "Certificate created successfully",
            certificate,
        });
    } catch (error) {
        console.error("Create Certificate Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET ALL CERTIFICATES
// =========================
const getCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find({
            user: req.user._id,
        }).sort({ issueDate: -1, createdAt: -1 });

        res.status(200).json({
            certificates,
        });
    } catch (error) {
        console.error("Get Certificates Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET SINGLE CERTIFICATE
// =========================
const getCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!certificate) {
            return res.status(404).json({
                message: "Certificate not found",
            });
        }

        res.status(200).json({
            certificate,
        });
    } catch (error) {
        console.error("Get Certificate Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// UPDATE CERTIFICATE
// =========================
const updateCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!certificate) {
            return res.status(404).json({
                message: "Certificate not found",
            });
        }

        const {
            title,
            issuer,
            issueDate,
            credentialUrl,
            description,
        } = req.body;

        certificate.title = title ?? certificate.title;
        certificate.issuer = issuer ?? certificate.issuer;
        certificate.issueDate = issueDate ?? certificate.issueDate;
        certificate.credentialUrl =
            credentialUrl ?? certificate.credentialUrl;
        certificate.description =
            description ?? certificate.description;

        const updatedCertificate = await certificate.save();

        res.status(200).json({
            message: "Certificate updated successfully",
            certificate: updatedCertificate,
        });
    } catch (error) {
        console.error("Update Certificate Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// DELETE CERTIFICATE
// =========================
const deleteCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!certificate) {
            return res.status(404).json({
                message: "Certificate not found",
            });
        }

        await certificate.deleteOne();

        res.status(200).json({
            message: "Certificate deleted successfully",
        });
    } catch (error) {
        console.error("Delete Certificate Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


module.exports = {
    createCertificate,
    getCertificates,
    getCertificate,
    updateCertificate,
    deleteCertificate,
};