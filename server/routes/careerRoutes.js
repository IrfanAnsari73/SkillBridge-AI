const express = require("express");

const {
    getCareerRecommendations,
} = require("../controllers/careerController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// =====================================================
// AI CAREER ADVISOR
// =====================================================

router.get(
    "/recommendations",
    protect,
    getCareerRecommendations
);


module.exports = router;