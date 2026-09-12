const JobApplication = require("../models/JobApplication");

// ===============================
// ADD JOB APPLICATION
// ===============================
const addJobApplication = async (req, res) => {
    try {
        const {
            companyName,
            jobRole,
            appliedDate,
            status,
            jobType,
            location,
            notes,
            jobLink,
        } = req.body;

        if (!companyName || !jobRole) {
            return res.status(400).json({
                success: false,
                message: "Company name and job role are required",
            });
        }

        const application = await JobApplication.create({
            user: req.user.id,
            companyName,
            jobRole,
            appliedDate: appliedDate || Date.now(),
            status: status || "Applied",
            jobType: jobType || "Full Time",
            location: location || "",
            notes: notes || "",
            jobLink: jobLink || "",
        });

        res.status(201).json({
            success: true,
            message: "Job application added successfully",
            application,
        });
    } catch (error) {
        console.error("Add Job Application Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to add job application",
            error: error.message,
        });
    }
};


// ===============================
// GET ALL JOB APPLICATIONS
// ===============================
const getJobApplications = async (req, res) => {
    try {
        const applications = await JobApplication.find({
            user: req.user.id,
        }).sort({
            appliedDate: -1,
        });

        res.status(200).json({
            success: true,
            applications,
        });
    } catch (error) {
        console.error("Get Job Applications Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch job applications",
            error: error.message,
        });
    }
};


// ===============================
// GET SINGLE JOB APPLICATION
// ===============================
const getJobApplicationById = async (req, res) => {
    try {
        const application = await JobApplication.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Job application not found",
            });
        }

        res.status(200).json({
            success: true,
            application,
        });
    } catch (error) {
        console.error("Get Job Application Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch job application",
            error: error.message,
        });
    }
};


// ===============================
// UPDATE JOB APPLICATION
// ===============================
const updateJobApplication = async (req, res) => {
    try {
        const application = await JobApplication.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Job application not found",
            });
        }

        const {
            companyName,
            jobRole,
            appliedDate,
            status,
            jobType,
            location,
            notes,
            jobLink,
        } = req.body;

        application.companyName =
            companyName ?? application.companyName;

        application.jobRole =
            jobRole ?? application.jobRole;

        application.appliedDate =
            appliedDate ?? application.appliedDate;

        application.status =
            status ?? application.status;

        application.jobType =
            jobType ?? application.jobType;

        application.location =
            location ?? application.location;

        application.notes =
            notes ?? application.notes;

        application.jobLink =
            jobLink ?? application.jobLink;

        await application.save();

        res.status(200).json({
            success: true,
            message: "Job application updated successfully",
            application,
        });
    } catch (error) {
        console.error("Update Job Application Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update job application",
            error: error.message,
        });
    }
};


// ===============================
// DELETE JOB APPLICATION
// ===============================
const deleteJobApplication = async (req, res) => {
    try {
        const application = await JobApplication.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Job application not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Job application deleted successfully",
        });
    } catch (error) {
        console.error("Delete Job Application Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete job application",
            error: error.message,
        });
    }
};


module.exports = {
    addJobApplication,
    getJobApplications,
    getJobApplicationById,
    updateJobApplication,
    deleteJobApplication,
};