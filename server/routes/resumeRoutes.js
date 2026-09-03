const express = require("express");

const {
    uploadResume,
    getResume,
    getPublicResume,
    downloadPublicResume,
    deleteResume,
    analyzeResume,
} = require("../controllers/resumeController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();


// =========================
// PUBLIC RESUME
// =========================

router.get(
    "/public/:userId",
    getPublicResume
);

router.get(
    "/public/:userId/download",
    downloadPublicResume
);


// =========================
// PROTECTED RESUME
// =========================

router.use(protect);


// AI RESUME ANALYZER
router.post(
    "/analyze",
    analyzeResume
);


// GET OWN RESUME
router.get(
    "/",
    getResume
);


// UPLOAD / REPLACE RESUME
router.post(
    "/",
    upload.single("resume"),
    uploadResume
);


// DELETE RESUME
router.delete(
    "/",
    deleteResume
);


module.exports = router;