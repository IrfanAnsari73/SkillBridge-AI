
const express = require("express");

const {
    getMyAIUsage,
} = require("../controllers/aiUsageController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// GET /api/ai-usage
// Protected AI usage details

router.get(
    "/",
    protect,
    getMyAIUsage
);

module.exports = router;
