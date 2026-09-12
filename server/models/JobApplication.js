const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        companyName: {
            type: String,
            required: true,
            trim: true,
        },

        jobRole: {
            type: String,
            required: true,
            trim: true,
        },

        appliedDate: {
            type: Date,
            required: true,
            default: Date.now,
        },

        status: {
            type: String,
            enum: [
                "Applied",
                "Shortlisted",
                "Interview",
                "Selected",
                "Rejected",
            ],
            default: "Applied",
        },

        jobType: {
            type: String,
            enum: [
                "Full Time",
                "Part Time",
                "Internship",
                "Remote",
                "Freelance",
            ],
            default: "Full Time",
        },

        location: {
            type: String,
            trim: true,
            default: "",
        },

        notes: {
            type: String,
            trim: true,
            default: "",
        },

        jobLink: {
            type: String,
            trim: true,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "JobApplication",
    jobApplicationSchema
);