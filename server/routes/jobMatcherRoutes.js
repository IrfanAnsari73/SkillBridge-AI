const express = require("express");

const {
    getJobMatch,
} = require("../controllers/jobMatcherController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// =========================
// PROTECTED JOB MATCHER
// =========================

router.get(
    "/",
    protect,
    getJobMatch
);


module.exports = router;