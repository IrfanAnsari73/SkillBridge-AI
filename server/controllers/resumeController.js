const Resume = require("../models/Resume");
const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");


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

            existingResume.originalName =
                req.file.originalname;

            existingResume.fileName =
                req.file.filename;

            existingResume.filePath =
                req.file.path;

            existingResume.mimeType =
                req.file.mimetype;

            existingResume.fileSize =
                req.file.size;

            const updatedResume =
                await existingResume.save();

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
        console.error(
            "Upload Resume Error:",
            error
        );

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET OWN RESUME
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
        console.error(
            "Get Resume Error:",
            error
        );

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// GET PUBLIC RESUME
// =========================

const getPublicResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            user: req.params.userId,
        }).select(
            "originalName fileName mimeType fileSize"
        );

        if (!resume) {
            return res.status(404).json({
                message: "Public resume not found",
            });
        }

        res.status(200).json({
            resume,
        });
    } catch (error) {
        console.error(
            "Get Public Resume Error:",
            error
        );

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// DOWNLOAD PUBLIC RESUME
// =========================

const downloadPublicResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            user: req.params.userId,
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

        res.download(
            filePath,
            resume.originalName,
            (error) => {
                if (error) {
                    console.error(
                        "Download Resume Error:",
                        error
                    );
                }
            }
        );
    } catch (error) {
        console.error(
            "Download Public Resume Error:",
            error
        );

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// DOWNLOAD OWN RESUME
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

        res.download(
            filePath,
            resume.originalName,
            (error) => {
                if (error) {
                    console.error(
                        "Download Resume Error:",
                        error
                    );
                }
            }
        );
    } catch (error) {
        console.error(
            "Download Resume Error:",
            error
        );

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
        console.error(
            "Delete Resume Error:",
            error
        );

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// AI RESUME ANALYZER
// =========================

const analyzeResume = async (req, res) => {
    let parser = null;

    try {
        // Find user's resume
        const resume = await Resume.findOne({
            user: req.user._id,
        });

        if (!resume) {
            return res.status(404).json({
                message:
                    "Please upload a resume first.",
            });
        }

        // PDF only for analyzer
        if (resume.mimeType !== "application/pdf") {
            return res.status(400).json({
                message:
                    "AI Resume Analyzer currently supports PDF resumes only.",
            });
        }

        // Resume file path
        const filePath = path.join(
            __dirname,
            "../uploads",
            resume.fileName
        );

        // Check file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                message:
                    "Resume file not found.",
            });
        }

        // Read PDF
        const pdfBuffer =
            fs.readFileSync(filePath);

        // =========================
        // PDF TEXT EXTRACTION
        // =========================

        parser = new PDFParse({
            data: pdfBuffer,
        });

        const pdfData =
            await parser.getText();

        const resumeText =
            pdfData.text.trim();

        if (!resumeText) {
            return res.status(400).json({
                message:
                    "Could not extract text from this resume PDF.",
            });
        }

        // =========================
        // BASIC ANALYSIS
        // =========================

        const text =
            resumeText.toLowerCase();

        // Common technical skills
        const commonSkills = [
            "java",
            "python",
            "javascript",
            "react",
            "node.js",
            "node",
            "express",
            "mongodb",
            "mysql",
            "html",
            "css",
            "git",
            "github",
            "sql",
            "c++",
            "c",
            "php",
            "laravel",
            "typescript",
            "tailwind",
            "vite",
            "bootstrap",
            "django",
            "spring boot",
            "figma",
        ];

        const detectedSkills =
            commonSkills.filter(
                (skill) =>
                    text.includes(skill)
            );

        // =========================
        // STRENGTHS
        // =========================

        const strengths = [];

        // Projects
        if (
            text.includes("project") ||
            text.includes("projects")
        ) {
            strengths.push(
                "Resume includes project experience."
            );
        }

        // GitHub / LinkedIn
        if (
            text.includes("github") ||
            text.includes("linkedin")
        ) {
            strengths.push(
                "Professional social/profile links are included."
            );
        }

        // Experience
        if (
            text.includes("experience") ||
            text.includes("internship")
        ) {
            strengths.push(
                "Resume contains professional experience or internship information."
            );
        }

        // Education
        if (
            text.includes("education") ||
            text.includes("b.tech") ||
            text.includes("bachelor") ||
            text.includes("degree")
        ) {
            strengths.push(
                "Educational background is included."
            );
        }

        // Skills
        if (detectedSkills.length > 0) {
            strengths.push(
                `Technical skills detected: ${detectedSkills
                    .slice(0, 10)
                    .join(", ")}.`
            );
        }

        // =========================
        // IMPROVEMENTS
        // =========================

        const improvements = [];

        if (
            !text.includes("project") &&
            !text.includes("projects")
        ) {
            improvements.push(
                "Add relevant academic or personal projects."
            );
        }

        if (
            !text.includes("github") &&
            !text.includes("linkedin")
        ) {
            improvements.push(
                "Add GitHub and LinkedIn profile links."
            );
        }

        if (
            !text.includes("experience") &&
            !text.includes("internship")
        ) {
            improvements.push(
                "Add internship, training, or practical experience if available."
            );
        }

        if (detectedSkills.length === 0) {
            improvements.push(
                "Clearly mention your technical skills."
            );
        }

        if (
            !text.includes("summary") &&
            !text.includes("objective") &&
            !text.includes("profile")
        ) {
            improvements.push(
                "Consider adding a concise professional summary."
            );
        }

        if (
            !text.includes("achievement") &&
            !text.includes("achievements")
        ) {
            improvements.push(
                "Add measurable achievements or accomplishments where possible."
            );
        }

        // =========================
        // RESUME SCORE
        // =========================

        let score = 40;

        // Technical skills
        if (detectedSkills.length >= 3) {
            score += 15;
        }

        if (detectedSkills.length >= 6) {
            score += 10;
        }

        // Projects
        if (
            text.includes("project") ||
            text.includes("projects")
        ) {
            score += 10;
        }

        // Social links
        if (
            text.includes("github") ||
            text.includes("linkedin")
        ) {
            score += 10;
        }

        // Education
        if (
            text.includes("education") ||
            text.includes("b.tech") ||
            text.includes("bachelor") ||
            text.includes("degree")
        ) {
            score += 10;
        }

        // Experience
        if (
            text.includes("experience") ||
            text.includes("internship")
        ) {
            score += 5;
        }

        if (score > 100) {
            score = 100;
        }

        // =========================
        // SUMMARY
        // =========================

        const summary =
            `Your resume has been analyzed successfully. ` +
            `We detected ${detectedSkills.length} relevant technical skills ` +
            `and your current resume score is ${score}/100.`;

        // =========================
        // RESPONSE
        // =========================

        return res.status(200).json({
            message:
                "Resume analyzed successfully",

            analysis: {
                score,
                summary,
                skills: detectedSkills,
                strengths,
                improvements,
            },
        });

    } catch (error) {
        console.error(
            "Analyze Resume Error:",
            error
        );

        return res.status(500).json({
            message:
                "Failed to analyze resume.",
        });

    } finally {
        // Destroy PDF parser
        if (parser) {
            try {
                await parser.destroy();
            } catch (destroyError) {
                console.error(
                    "PDF Parser Cleanup Error:",
                    destroyError
                );
            }
        }
    }
};


// =========================
// EXPORTS
// =========================

module.exports = {
    uploadResume,
    getResume,
    getPublicResume,
    downloadPublicResume,
    downloadResume,
    deleteResume,
    analyzeResume,
};