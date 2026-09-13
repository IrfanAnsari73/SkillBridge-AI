const CareerGoal = require("../models/CareerGoal");

// ===============================
// GET ALL CAREER GOALS
// ===============================

const getCareerGoals = async (req, res) => {
    try {
        const userId = req.user._id;

        const goals = await CareerGoal.find({
            user: userId,
        }).sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            goals,
        });
    } catch (error) {
        console.error(
            "Get Career Goals Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch career goals",
            error: error.message,
        });
    }
};


// ===============================
// CREATE CAREER GOAL
// ===============================

const createCareerGoal = async (req, res) => {
    try {
        const userId = req.user._id;

        const {
            title,
            targetRole,
            description,
            targetDate,
            progress,
            status,
        } = req.body;

        if (!title || !targetRole || !targetDate) {
            return res.status(400).json({
                success: false,
                message:
                    "Title, target role and target date are required.",
            });
        }

        const goal = await CareerGoal.create({
            user: userId,
            title,
            targetRole,
            description: description || "",
            targetDate,
            progress: progress ?? 0,
            status: status || "Not Started",
        });

        res.status(201).json({
            success: true,
            message: "Career goal created successfully",
            goal,
        });
    } catch (error) {
        console.error(
            "Create Career Goal Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to create career goal",
            error: error.message,
        });
    }
};


// ===============================
// UPDATE CAREER GOAL
// ===============================

const updateCareerGoal = async (req, res) => {
    try {
        const userId = req.user._id;
        const { id } = req.params;

        const goal = await CareerGoal.findOne({
            _id: id,
            user: userId,
        });

        if (!goal) {
            return res.status(404).json({
                success: false,
                message: "Career goal not found",
            });
        }

        const {
            title,
            targetRole,
            description,
            targetDate,
            progress,
            status,
        } = req.body;

        if (title !== undefined) {
            goal.title = title;
        }

        if (targetRole !== undefined) {
            goal.targetRole = targetRole;
        }

        if (description !== undefined) {
            goal.description = description;
        }

        if (targetDate !== undefined) {
            goal.targetDate = targetDate;
        }

        if (progress !== undefined) {
            goal.progress = Math.min(
                Math.max(Number(progress), 0),
                100
            );
        }

        if (status !== undefined) {
            goal.status = status;
        }

        // Automatically mark completed
        if (goal.progress === 100) {
            goal.status = "Completed";
        }

        // Automatically mark in progress
        if (
            goal.progress > 0 &&
            goal.progress < 100 &&
            goal.status === "Not Started"
        ) {
            goal.status = "In Progress";
        }

        await goal.save();

        res.json({
            success: true,
            message: "Career goal updated successfully",
            goal,
        });
    } catch (error) {
        console.error(
            "Update Career Goal Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to update career goal",
            error: error.message,
        });
    }
};


// ===============================
// DELETE CAREER GOAL
// ===============================

const deleteCareerGoal = async (req, res) => {
    try {
        const userId = req.user._id;
        const { id } = req.params;

        const goal = await CareerGoal.findOneAndDelete({
            _id: id,
            user: userId,
        });

        if (!goal) {
            return res.status(404).json({
                success: false,
                message: "Career goal not found",
            });
        }

        res.json({
            success: true,
            message: "Career goal deleted successfully",
        });
    } catch (error) {
        console.error(
            "Delete Career Goal Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to delete career goal",
            error: error.message,
        });
    }
};


// ===============================
// EXPORT
// ===============================

module.exports = {
    getCareerGoals,
    createCareerGoal,
    updateCareerGoal,
    deleteCareerGoal,
};