const Resume = require("../models/Resume");
const fs = require("fs");
const path = require("path");

// =========================
// UPLOAD / REPLACE RESUME
// =========================
const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a resume file.",
            });
        }

        // Check if user already has a resume
        const existingResume = await Resume.findOne({
            user: req.user._id,
        });

        // Delete old file if replacing
        if (existingResume) {
            const oldFilePath = path.join(
                __dirname,
                "../uploads",
                existingResume.fileName
            );

            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
            }

            existingResume.originalName = req.file.originalname;
            existingResume.fileName = req.file.filename;
            existingResume.filePath = req.file.path;
            existingResume.mimeType = req.file.mimetype;
            existingResume.fileSize = req.file.size;

            const updatedResume = await existingResume.save();

            return res.status(200).json({
                message: "Resume replaced successfully",
                resume: updatedResume,
            });
        }

        // Create new resume
        const resume = await Resume.create({
            user: req.user._id,
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: req.file.path,
            mimeType: req.file.mimetype,
            fileSize: req.file.size,
        });

        res.status(201).json({
            message: "Resume uploaded successfully",
            resume,
        });
    } catch (error) {
        console.error("Upload Resume Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET RESUME
// =========================
const getResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            user: req.user._id,
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found",
            });
        }

        res.status(200).json({
            resume,
        });
    } catch (error) {
        console.error("Get Resume Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// DOWNLOAD RESUME
// =========================
const downloadResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            user: req.user._id,
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found",
            });
        }

        const filePath = path.join(
            __dirname,
            "../uploads",
            resume.fileName
        );

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                message: "Resume file not found",
            });
        }

        res.download(filePath, resume.originalName);
    } catch (error) {
        console.error("Download Resume Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// DELETE RESUME
// =========================
const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            user: req.user._id,
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found",
            });
        }

        const filePath = path.join(
            __dirname,
            "../uploads",
            resume.fileName
        );

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await resume.deleteOne();

        res.status(200).json({
            message: "Resume deleted successfully",
        });
    } catch (error) {
        console.error("Delete Resume Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// EXPORT
// =========================
module.exports = {
    uploadResume,
    getResume,
    downloadResume,
    deleteResume,
};