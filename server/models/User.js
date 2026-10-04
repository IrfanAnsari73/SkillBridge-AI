const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        // =========================
        // BASIC USER INFORMATION
        // =========================
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 8,
        },

        phone: {
            type: String,
            default: "",
        },

        college: {
            type: String,
            default: "",
        },

        branch: {
            type: String,
            default: "",
        },

        passingYear: {
            type: Number,
            default: null,
        },

        location: {
            type: String,
            default: "",
        },

        bio: {
            type: String,
            default: "",
        },

        // =========================
        // SOCIAL / PORTFOLIO
        // =========================
        github: {
            type: String,
            default: "",
        },

        linkedin: {
            type: String,
            default: "",
        },

        portfolio: {
            type: String,
            default: "",
        },

        profileImage: {
            type: String,
            default: "",
        },

        // =========================
        // ACCOUNT & BUSINESS
        // =========================

        // User's current subscription plan
        plan: {
            type: String,
            enum: ["free", "pro"],
            default: "free",
        },

        // User role for future admin panel
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

        // Account status
        accountStatus: {
            type: String,
            enum: ["active", "suspended"],
            default: "active",
        },

        // Subscription status
        subscriptionStatus: {
            type: String,
            enum: ["none", "active", "cancelled", "expired"],
            default: "none",
        },

        // For Pro subscription expiry
        // Will be used when Razorpay/subscription system is added
        proExpiresAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;