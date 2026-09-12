const express = require("express");

const {
    getApplicationInsights,
} = require("../controllers/applicationInsightsController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// ===============================
// GET APPLICATION INSIGHTS
// ===============================
router.get(
    "/",
    protect,
    getApplicationInsights
);


module.exports = router;