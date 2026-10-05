const express = require("express");

const {
    getMySubscription,
    cancelMySubscription,
} = require("../controllers/subscriptionController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// =====================================================
// GET CURRENT SUBSCRIPTION
// GET /api/subscription/status
// =====================================================

router.get(
    "/status",
    protect,
    getMySubscription
);

// =====================================================
// CANCEL SUBSCRIPTION
// POST /api/subscription/cancel
// =====================================================

router.post(
    "/cancel",
    protect,
    cancelMySubscription
);

module.exports = router;