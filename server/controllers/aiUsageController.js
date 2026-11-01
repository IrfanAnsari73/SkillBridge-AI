
const {
    FREE_LIMITS,
    PRO_LIMITS,
    getLimitForUser,
    getUsage,
} = require("../services/aiUsageService");

// Features that actually use AI
const AI_FEATURES = [
    "resume-analyzer",
    "career-advisor",
    "career-roadmap",
    "job-matcher",
    "mock-interview",
];

const getMyAIUsage = async (req, res) => {
    try {
        const user = req.user;

        const usageDetails = await Promise.all(
            AI_FEATURES.map(async (feature) => {
                const usage = await getUsage(
                    user._id,
                    feature
                );

                const limit = getLimitForUser(
                    user,
                    feature
                );

                return {
                    feature,
                    usageCount: usage.usageCount,
                    limit,
                    remaining: Math.max(
                        limit - usage.usageCount,
                        0
                    ),
                    percentage: Math.min(
                        Math.round(
                            (usage.usageCount / limit) * 100
                        ),
                        100
                    ),
                };
            })
        );

        return res.status(200).json({
            success: true,
            plan: user.plan || "free",
            period: "monthly",
            usage: usageDetails,
        });
    } catch (error) {
        console.error(
            "Get AI Usage Error:",
            error.message
        );

        return res.status(500).json({
            success: false,
            message: "Failed to fetch AI usage.",
        });
    }
};

module.exports = {
    getMyAIUsage,
};
