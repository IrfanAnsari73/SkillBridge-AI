const AIUsage = require("../models/AIUsage");

// =====================================================
// FREE PLAN LIMITS
// =====================================================

const FREE_LIMITS = {
    "resume-analyzer": 2,
    "career-advisor": 5,
    "career-roadmap": 3,
    "job-matcher": 5,
    "mock-interview": 2,
    "career-analytics": 3,
    "ai-application-insights": 3,
    "career-action-center": 5,
};

// =====================================================
// PRO PLAN LIMITS
// =====================================================

const PRO_LIMITS = {
    "resume-analyzer": 20,
    "career-advisor": 50,
    "career-roadmap": 20,
    "job-matcher": 50,
    "mock-interview": 20,
    "career-analytics": 20,
    "ai-application-insights": 30,
    "career-action-center": 30,
};

// =====================================================
// GET CURRENT MONTH PERIOD
// =====================================================

const getCurrentPeriod = () => {
    const now = new Date();

    const periodStart = new Date(
        Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            1
        )
    );

    const periodEnd = new Date(
        Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth() + 1,
            1
        )
    );

    return {
        periodStart,
        periodEnd,
    };
};

// =====================================================
// GET LIMIT FOR USER
// =====================================================

const getLimitForUser = (user, feature) => {
    if (!user) {
        throw new Error("User is required");
    }

    const isFreeFeature =
        Object.prototype.hasOwnProperty.call(
            FREE_LIMITS,
            feature
        );

    if (!isFreeFeature) {
        throw new Error(
            `Unknown AI feature: ${feature}`
        );
    }

    if (user.plan === "pro") {
        return PRO_LIMITS[feature];
    }

    return FREE_LIMITS[feature];
};

// =====================================================
// GET OR CREATE CURRENT USAGE
// =====================================================

const getUsage = async (userId, feature) => {
    const {
        periodStart,
        periodEnd,
    } = getCurrentPeriod();

    let usage = await AIUsage.findOne({
        user: userId,
        feature,
        periodStart,
    });

    if (!usage) {
        usage = await AIUsage.create({
            user: userId,
            feature,
            usageCount: 0,
            periodStart,
            periodEnd,
        });
    }

    return usage;
};

// =====================================================
// CHECK AI USAGE
// =====================================================

const checkAIUsage = async (user, feature) => {
    const limit = getLimitForUser(
        user,
        feature
    );

    const usage = await getUsage(
        user._id,
        feature
    );

    return {
        allowed:
            usage.usageCount < limit,

        usageCount:
            usage.usageCount,

        limit,

        remaining: Math.max(
            limit - usage.usageCount,
            0
        ),

        feature,

        plan:
            user.plan || "free",
    };
};

// =====================================================
// CONSUME AI USAGE
// =====================================================

const consumeAIUsage = async (
    user,
    feature
) => {
    const limit = getLimitForUser(
        user,
        feature
    );

    const {
        periodStart,
        periodEnd,
    } = getCurrentPeriod();

    const usage =
        await AIUsage.findOneAndUpdate(
            {
                user: user._id,
                feature,
                periodStart,
            },
            {
                $inc: {
                    usageCount: 1,
                },

                $setOnInsert: {
                    user: user._id,
                    feature,
                    periodStart,
                    periodEnd,
                },
            },
            {
                new: true,
                upsert: true,
            }
        );

    // -------------------------------------------------
    // SAFETY CHECK
    // -------------------------------------------------

    if (usage.usageCount > limit) {
        await AIUsage.findOneAndUpdate(
            {
                user: user._id,
                feature,
                periodStart,
            },
            {
                $inc: {
                    usageCount: -1,
                },
            }
        );

        return {
            allowed: false,

            usageCount:
                usage.usageCount - 1,

            limit,

            remaining: 0,

            feature,

            plan:
                user.plan || "free",
        };
    }

    return {
        allowed: true,

        usageCount:
            usage.usageCount,

        limit,

        remaining: Math.max(
            limit - usage.usageCount,
            0
        ),

        feature,

        plan:
            user.plan || "free",
    };
};

// =====================================================
// REFUND AI USAGE
// =====================================================
// Used when AI credit was consumed but the AI request
// fails afterwards.
//
// Example:
// Credit consumed → Gemini API fails
// → refund one credit
// =====================================================

const refundAIUsage = async (
    user,
    feature
) => {
    if (!user) {
        throw new Error("User is required");
    }

    const {
        periodStart,
    } = getCurrentPeriod();

    const usage =
        await AIUsage.findOneAndUpdate(
            {
                user: user._id,
                feature,
                periodStart,

                // Prevent negative usage
                usageCount: {
                    $gt: 0,
                },
            },
            {
                $inc: {
                    usageCount: -1,
                },
            },
            {
                new: true,
            }
        );

    if (!usage) {
        return {
            refunded: false,

            usageCount: 0,

            limit: getLimitForUser(
                user,
                feature
            ),

            remaining:
                getLimitForUser(
                    user,
                    feature
                ),

            feature,

            plan:
                user.plan || "free",
        };
    }

    const limit =
        getLimitForUser(
            user,
            feature
        );

    return {
        refunded: true,

        usageCount:
            usage.usageCount,

        limit,

        remaining: Math.max(
            limit -
            usage.usageCount,
            0
        ),

        feature,

        plan:
            user.plan || "free",
    };
};

// =====================================================
// EXPORTS
// =====================================================

module.exports = {
    FREE_LIMITS,
    PRO_LIMITS,
    getLimitForUser,
    getUsage,
    checkAIUsage,
    consumeAIUsage,
    refundAIUsage,
};