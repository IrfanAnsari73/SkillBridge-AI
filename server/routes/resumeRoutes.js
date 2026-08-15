const express = require("express");

const {
    uploadResume,
    getResume,
    downloadResume,
    deleteResume,
} = require("../controllers/resumeController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// All resume routes require login
router.use(protect);

// Upload / Replace Resume
router.post("/", upload.single("resume"), uploadResume);

// Get Resume
router.get("/", getResume);

// Download Resume
router.get("/download", downloadResume);

// Delete Resume
router.delete("/", deleteResume);

module.exports = router;