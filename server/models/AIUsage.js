const mongoose = require("mongoose");

const aiUsageSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        feature: {
            type: String,
            enum: [
                "resume-analyzer",
                "career-advisor",
                "career-roadmap",
                "job-matcher",
                "mock-interview",
                "career-analytics",
                "ai-application-insights",
                "career-action-center",
            ],
            required: true,
        },

        usageCount: {
            type: Number,
            default: 0,
            min: 0,
        },

        periodStart: {
            type: Date,
            required: true,
        },

        periodEnd: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// One usage record per user + feature + billing period
aiUsageSchema.index(
    {
        user: 1,
        feature: 1,
        periodStart: 1,
    },
    {
        unique: true,
    }
);

const AIUsage = mongoose.model("AIUsage", aiUsageSchema);

module.exports = AIUsage;