const express = require("express");
const protect = require("../middleware/authMiddleware");
const { getCareerActions } = require("../controllers/careerActionController");

const router = express.Router();

router.get("/", protect, getCareerActions);

module.exports = router;