const Portfolio = require("../models/Portfolio");

const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Certificate = require("../models/Certificate");


// =========================
// GET PORTFOLIO
// =========================
const getPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({
            user: req.user._id,
        });

        if (!portfolio) {
            return res.status(404).json({
                message: "Portfolio not found",
            });
        }

        res.status(200).json({
            portfolio,
        });
    } catch (error) {
        console.error("Get Portfolio Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// CREATE / UPDATE PORTFOLIO
// =========================
const savePortfolio = async (req, res) => {
    try {
        const {
            title,
            about,
            portfolioUrl,
        } = req.body;

        let portfolio = await Portfolio.findOne({
            user: req.user._id,
        });

        if (portfolio) {
            portfolio.title = title || "";
            portfolio.about = about || "";
            portfolio.portfolioUrl = portfolioUrl || "";

            const updatedPortfolio =
                await portfolio.save();

            return res.status(200).json({
                message: "Portfolio updated successfully",
                portfolio: updatedPortfolio,
            });
        }

        portfolio = await Portfolio.create({
            user: req.user._id,
            title: title || "",
            about: about || "",
            portfolioUrl: portfolioUrl || "",
        });

        res.status(201).json({
            message: "Portfolio created successfully",
            portfolio,
        });
    } catch (error) {
        console.error("Save Portfolio Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// DELETE PORTFOLIO
// =========================
const deletePortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({
            user: req.user._id,
        });

        if (!portfolio) {
            return res.status(404).json({
                message: "Portfolio not found",
            });
        }

        await portfolio.deleteOne();

        res.status(200).json({
            message: "Portfolio deleted successfully",
        });
    } catch (error) {
        console.error(
            "Delete Portfolio Error:",
            error
        );

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET PUBLIC PORTFOLIO
// =========================
const getPublicPortfolio = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Portfolio + User Profile
        const portfolio = await Portfolio.findOne({
            user: userId,
        }).populate(
            "user",
            "name email phone college branch passingYear location bio github linkedin profileImage"
        );

        if (!portfolio) {
            return res.status(404).json({
                message: "Public portfolio not found",
            });
        }

        // Skills
        const skills = await Skill.find({
            user: userId,
        });

        // Projects
        const projects = await Project.find({
            user: userId,
        });

        // Certificates
        const certificates = await Certificate.find({
            user: userId,
        });

        res.status(200).json({
            portfolio,
            skills,
            projects,
            certificates,
        });
    } catch (error) {
        console.error(
            "Get Public Portfolio Error:",
            error
        );

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// EXPORT
// =========================
module.exports = {
    getPortfolio,
    savePortfolio,
    deletePortfolio,
    getPublicPortfolio,
};