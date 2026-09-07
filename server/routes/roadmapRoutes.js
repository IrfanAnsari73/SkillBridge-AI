const express = require("express");

const {
    getCareerRoadmap,
} = require("../controllers/roadmapController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// =========================
// PROTECTED CAREER ROADMAP
// =========================

router.get(
    "/",
    protect,
    getCareerRoadmap
);


module.exports = router;