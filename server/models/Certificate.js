const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
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

        issuer: {
            type: String,
            required: true,
            trim: true,
        },

        issueDate: {
            type: Date,
        },

        credentialUrl: {
            type: String,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Certificate = mongoose.model(
    "Certificate",
    certificateSchema
);

module.exports = Certificate;