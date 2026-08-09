const express = require("express");

const {
    createSkill,
    getSkills,
    getSkill,
    updateSkill,
    deleteSkill,
} = require("../controllers/skillController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// All skill routes require login
router.use(protect);

// Create skill
router.post("/", createSkill);

// Get all skills
router.get("/", getSkills);

// Get single skill
router.get("/:id", getSkill);

// Update skill
router.put("/:id", updateSkill);

// Delete skill
router.delete("/:id", deleteSkill);

module.exports = router;