const mongoose = require("mongoose");

const careerGoalSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        targetRole: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        targetDate: {
            type: Date,
            required: true,
        },

        progress: {
            type: Number,
            min: 0,
            max: 100,
            default: 0,
        },

        status: {
            type: String,
            enum: [
                "Not Started",
                "In Progress",
                "Completed",
            ],
            default: "Not Started",
        },
    },
    {
        timestamps: true,
    }
);

const CareerGoal = mongoose.model(
    "CareerGoal",
    careerGoalSchema
);

module.exports = CareerGoal;