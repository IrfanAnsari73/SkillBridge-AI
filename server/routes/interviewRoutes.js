const express = require("express");

const {
    startInterview,
    evaluateAnswer,
} = require("../controllers/interviewController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// =========================
// PROTECTED MOCK INTERVIEW
// =========================

// Start interview
router.post(
    "/start",
    protect,
    startInterview
);


// Evaluate answer
router.post(
    "/evaluate",
    protect,
    evaluateAnswer
);


module.exports = router;