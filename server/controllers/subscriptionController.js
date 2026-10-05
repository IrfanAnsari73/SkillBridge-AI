const {
    getSubscriptionStatus,
    cancelProPlan,
} = require("../services/subscriptionService");

// =====================================================
// GET CURRENT SUBSCRIPTION STATUS
// =====================================================

const getMySubscription = async (req, res) => {
    try {
        const subscription =
            await getSubscriptionStatus(req.user._id);

        return res.status(200).json({
            success: true,
            subscription,
        });
    } catch (error) {
        console.error(
            "Get Subscription Error:",
            error.message
        );

        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "Failed to get subscription status.",
        });
    }
};

// =====================================================
// CANCEL PRO SUBSCRIPTION
// =====================================================

const cancelMySubscription = async (req, res) => {
    try {
        const subscription =
            await cancelProPlan(req.user._id);

        return res.status(200).json({
            success: true,
            message:
                "Pro subscription cancelled successfully. You can continue using Pro until the expiry date.",
            subscription,
        });
    } catch (error) {
        console.error(
            "Cancel Subscription Error:",
            error.message
        );

        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "Failed to cancel subscription.",
        });
    }
};

// =====================================================
// EXPORTS
// =====================================================

module.exports = {
    getMySubscription,
    cancelMySubscription,
};