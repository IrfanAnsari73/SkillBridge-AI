const express = require("express");

const {
    getCareerGoals,
    createCareerGoal,
    updateCareerGoal,
    deleteCareerGoal,
} = require("../controllers/careerGoalController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ===============================
// GET ALL CAREER GOALS
// ===============================

router.get(
    "/",
    protect,
    getCareerGoals
);

// ===============================
// CREATE CAREER GOAL
// ===============================

router.post(
    "/",
    protect,
    createCareerGoal
);

// ===============================
// UPDATE CAREER GOAL
// ===============================

router.put(
    "/:id",
    protect,
    updateCareerGoal
);

// ===============================
// DELETE CAREER GOAL
// ===============================

router.delete(
    "/:id",
    protect,
    deleteCareerGoal
);

module.exports = router;