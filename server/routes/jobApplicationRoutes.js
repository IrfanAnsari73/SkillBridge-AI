const express = require("express");

const {
    addJobApplication,
    getJobApplications,
    getJobApplicationById,
    updateJobApplication,
    deleteJobApplication,
} = require("../controllers/jobApplicationController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// ===============================
// ADD JOB APPLICATION
// ===============================
router.post(
    "/",
    protect,
    addJobApplication
);


// ===============================
// GET ALL JOB APPLICATIONS
// ===============================
router.get(
    "/",
    protect,
    getJobApplications
);


// ===============================
// GET SINGLE JOB APPLICATION
// ===============================
router.get(
    "/:id",
    protect,
    getJobApplicationById
);


// ===============================
// UPDATE JOB APPLICATION
// ===============================
router.put(
    "/:id",
    protect,
    updateJobApplication
);


// ===============================
// DELETE JOB APPLICATION
// ===============================
router.delete(
    "/:id",
    protect,
    deleteJobApplication
);


module.exports = router;