const User = require("../models/User");

// =====================================================
// PLAN CONFIGURATION
// =====================================================

const PLANS = {
    free: {
        name: "Free",
        price: 0,
        durationDays: null,
    },

    pro: {
        name: "Pro",
        price: 499,
        durationDays: 30,
    },
};

// =====================================================
// GET USER PLAN STATUS
// =====================================================

const getSubscriptionStatus = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    // ---------------------------------------------
    // FREE USER
    // ---------------------------------------------

    if (user.plan !== "pro") {
        return {
            plan: "free",
            planName: PLANS.free.name,
            price: PLANS.free.price,
            subscriptionStatus: user.subscriptionStatus,
            isPro: false,
            proExpiresAt: null,
        };
    }

    // ---------------------------------------------
    // CHECK PRO EXPIRY
    // ---------------------------------------------

    if (
        user.proExpiresAt &&
        new Date(user.proExpiresAt) <= new Date()
    ) {
        user.plan = "free";
        user.subscriptionStatus = "expired";
        user.proExpiresAt = null;

        await user.save();

        return {
            plan: "free",
            planName: PLANS.free.name,
            price: PLANS.free.price,
            subscriptionStatus: "expired",
            isPro: false,
            proExpiresAt: null,
        };
    }

    // ---------------------------------------------
    // ACTIVE PRO USER
    // ---------------------------------------------

    return {
        plan: "pro",
        planName: PLANS.pro.name,
        price: PLANS.pro.price,
        subscriptionStatus:
            user.subscriptionStatus,
        isPro: true,
        proExpiresAt: user.proExpiresAt,
    };
};

// =====================================================
// ACTIVATE PRO PLAN
// =====================================================

const activateProPlan = async (
    userId,
    durationDays = PLANS.pro.durationDays
) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    const now = new Date();

    let startDate = now;

    // ---------------------------------------------
    // EXTEND EXISTING ACTIVE PRO SUBSCRIPTION
    // ---------------------------------------------

    if (
        user.plan === "pro" &&
        user.proExpiresAt &&
        new Date(user.proExpiresAt) > now
    ) {
        startDate = new Date(user.proExpiresAt);
    }

    const expiryDate = new Date(startDate);

    expiryDate.setDate(
        expiryDate.getDate() + durationDays
    );

    user.plan = "pro";
    user.subscriptionStatus = "active";
    user.proExpiresAt = expiryDate;

    await user.save();

    return {
        plan: user.plan,
        subscriptionStatus:
            user.subscriptionStatus,
        proExpiresAt: user.proExpiresAt,
    };
};

// =====================================================
// CANCEL PRO PLAN
// =====================================================

const cancelProPlan = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    // Cancellation does not immediately remove Pro.
    // The user keeps Pro until the expiry date.

    if (user.plan === "pro") {
        user.subscriptionStatus = "cancelled";

        await user.save();
    }

    return {
        plan: user.plan,
        subscriptionStatus:
            user.subscriptionStatus,
        proExpiresAt: user.proExpiresAt,
    };
};

// =====================================================
// FORCE EXPIRE PRO PLAN
// =====================================================

const expireProPlan = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    user.plan = "free";
    user.subscriptionStatus = "expired";
    user.proExpiresAt = null;

    await user.save();

    return {
        plan: user.plan,
        subscriptionStatus:
            user.subscriptionStatus,
        proExpiresAt: null,
    };
};

// =====================================================
// EXPORTS
// =====================================================

module.exports = {
    PLANS,
    getSubscriptionStatus,
    activateProPlan,
    cancelProPlan,
    expireProPlan,
};