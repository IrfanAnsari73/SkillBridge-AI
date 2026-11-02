
const User = require("../models/User");

// =========================
// PLAN CONFIGURATION
// =========================

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

// =========================
// GET SUBSCRIPTION STATUS
// =========================

const getSubscriptionStatus = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    // FREE PLAN
    if (user.plan !== "pro") {
        return {
            plan: "free",
            planName: "Free",
            price: 0,
            subscriptionStatus: user.subscriptionStatus,
            isPro: false,
            proExpiresAt: null,
        };
    }

    // PRO PLAN: Missing expiry date
    if (!user.proExpiresAt) {
        user.plan = "free";
        user.subscriptionStatus = "expired";
        user.proExpiresAt = null;

        await user.save();

        return {
            plan: "free",
            planName: "Free",
            price: 0,
            subscriptionStatus: "expired",
            isPro: false,
            proExpiresAt: null,
        };
    }

    // PRO PLAN: Expired
    if (new Date(user.proExpiresAt) <= new Date()) {
        user.plan = "free";
        user.subscriptionStatus = "expired";
        user.proExpiresAt = null;

        await user.save();

        return {
            plan: "free",
            planName: "Free",
            price: 0,
            subscriptionStatus: "expired",
            isPro: false,
            proExpiresAt: null,
        };
    }

    // PRO PLAN: Active
    return {
        plan: "pro",
        planName: "Pro",
        price: PLANS.pro.price,
        subscriptionStatus: user.subscriptionStatus,
        isPro: true,
        proExpiresAt: user.proExpiresAt,
    };
};

// =========================
// ACTIVATE PRO PLAN
// =========================

const activateProPlan = async (userId, durationDays = 30) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    const now = new Date();

    const hasActivePro =
        user.plan === "pro" &&
        user.proExpiresAt &&
        new Date(user.proExpiresAt) > now;

    const startDate = hasActivePro
        ? new Date(user.proExpiresAt)
        : now;

    const expiryDate = new Date(startDate);
    expiryDate.setDate(expiryDate.getDate() + durationDays);

    user.plan = "pro";
    user.subscriptionStatus = "active";
    user.proExpiresAt = expiryDate;

    await user.save();

    return getSubscriptionStatus(userId);
};

// =========================
// CANCEL PRO PLAN
// =========================

const cancelProPlan = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    if (user.plan === "pro") {
        user.subscriptionStatus = "cancelled";
        await user.save();
    }

    return getSubscriptionStatus(userId);
};

// =========================
// EXPIRE PRO PLAN
// =========================

const expireProPlan = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    user.plan = "free";
    user.subscriptionStatus = "expired";
    user.proExpiresAt = null;

    await user.save();

    return getSubscriptionStatus(userId);
};

// =========================
// EXPORTS
// =========================

module.exports = {
    PLANS,
    getSubscriptionStatus,
    activateProPlan,
    cancelProPlan,
    expireProPlan,
};
