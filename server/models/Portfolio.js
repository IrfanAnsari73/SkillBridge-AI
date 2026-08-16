const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        title: {
            type: String,
            default: "",
            trim: true,
        },

        about: {
            type: String,
            default: "",
            trim: true,
        },

        portfolioUrl: {
            type: String,
            default: "",
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Portfolio = mongoose.model(
    "Portfolio",
    portfolioSchema
);

module.exports = Portfolio;