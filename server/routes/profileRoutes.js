const express = require("express");

const {
    getProfile,
    updateProfile,
} = require("../controllers/profileController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// All profile routes require login
router.use(protect);

// Get logged-in user's profile
router.get("/", getProfile);

// Update logged-in user's profile
router.put("/", updateProfile);

module.exports = router;