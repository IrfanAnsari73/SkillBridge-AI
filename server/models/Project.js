const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
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

        description: {
            type: String,
            default: "",
            trim: true,
        },

        technologies: {
            type: [String],
            default: [],
        },

        githubUrl: {
            type: String,
            default: "",
        },

        liveUrl: {
            type: String,
            default: "",
        },

        image: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;