const Skill = require("../models/Skill");

// =========================
// CREATE SKILL
// =========================
const createSkill = async (req, res) => {
    try {
        const {
            name,
            category,
            level,
            percentage,
        } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Skill name is required",
            });
        }

        const skill = await Skill.create({
            user: req.user._id,
            name,
            category,
            level,
            percentage,
        });

        res.status(201).json({
            message: "Skill created successfully",
            skill,
        });
    } catch (error) {
        console.error("Create Skill Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET USER SKILLS
// =========================
const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find({
            user: req.user._id,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            skills,
        });
    } catch (error) {
        console.error("Get Skills Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET SINGLE SKILL
// =========================
const getSkill = async (req, res) => {
    try {
        const skill = await Skill.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!skill) {
            return res.status(404).json({
                message: "Skill not found",
            });
        }

        res.status(200).json({
            skill,
        });
    } catch (error) {
        console.error("Get Skill Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// UPDATE SKILL
// =========================
const updateSkill = async (req, res) => {
    try {
        const skill = await Skill.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!skill) {
            return res.status(404).json({
                message: "Skill not found",
            });
        }

        const {
            name,
            category,
            level,
            percentage,
        } = req.body;

        skill.name = name ?? skill.name;
        skill.category = category ?? skill.category;
        skill.level = level ?? skill.level;
        skill.percentage = percentage ?? skill.percentage;

        const updatedSkill = await skill.save();

        res.status(200).json({
            message: "Skill updated successfully",
            skill: updatedSkill,
        });
    } catch (error) {
        console.error("Update Skill Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// DELETE SKILL
// =========================
const deleteSkill = async (req, res) => {
    try {
        const skill = await Skill.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!skill) {
            return res.status(404).json({
                message: "Skill not found",
            });
        }

        await skill.deleteOne();

        res.status(200).json({
            message: "Skill deleted successfully",
        });
    } catch (error) {
        console.error("Delete Skill Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


module.exports = {
    createSkill,
    getSkills,
    getSkill,
    updateSkill,
    deleteSkill,
};