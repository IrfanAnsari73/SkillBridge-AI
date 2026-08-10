const express = require("express");

const {
    createCertificate,
    getCertificates,
    getCertificate,
    updateCertificate,
    deleteCertificate,
} = require("../controllers/certificateController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// All certificate routes require login
router.use(protect);

// Create certificate
router.post("/", createCertificate);

// Get all certificates
router.get("/", getCertificates);

// Get single certificate
router.get("/:id", getCertificate);

// Update certificate
router.put("/:id", updateCertificate);

// Delete certificate
router.delete("/:id", deleteCertificate);

module.exports = router;