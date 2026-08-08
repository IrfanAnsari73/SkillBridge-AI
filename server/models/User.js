const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;