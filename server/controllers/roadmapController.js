const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Certificate = require("../models/Certificate");
const Resume = require("../models/Resume");

const fs = require("fs");
const path = require("path");

const { PDFParse } = require("pdf-parse");


// =========================
// GET AI CAREER ROADMAP
// =========================

const getCareerRoadmap = async (req, res) => {
    let parser = null;

    try {

        // Check Gemini API key
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({
                message:
                    "Gemini API key is not configured on the server.",
            });
        }


        // Logged-in user
        const userId = req.user._id;


        // =========================
        // GET USER DATA
        // =========================

        const skills = await Skill.find({
            user: userId,
        }).select(
            "name category level percentage"
        );


        const projects = await Project.find({
            user: userId,
        }).select(
            "title description technologies githubUrl liveUrl"
        );


        const certificates = await Certificate.find({
            user: userId,
        }).select(
            "title issuer issueDate description credentialUrl"
        );


        const resume = await Resume.findOne({
            user: userId,
        });


        // =========================
        // EXTRACT RESUME TEXT
        // =========================

        let resumeText = "";


        if (resume && resume.mimeType === "application/pdf") {

            const filePath = path.join(
                __dirname,
                "../uploads",
                resume.fileName
            );


            if (fs.existsSync(filePath)) {

                const pdfBuffer =
                    fs.readFileSync(filePath);

                parser = new PDFParse({
                    data: pdfBuffer,
                });


                const pdfData =
                    await parser.getText();


                resumeText =
                    pdfData.text.trim();
            }
        }


        // =========================
        // CAREER PROFILE
        // =========================

        const careerProfile = {

            skills: skills.map((skill) => ({
                name: skill.name,
                category: skill.category,
                level: skill.level,
                percentage: skill.percentage,
            })),

            projects: projects.map((project) => ({
                title: project.title,
                description: project.description,
                technologies: project.technologies,
                githubUrl: project.githubUrl,
                liveUrl: project.liveUrl,
            })),

            certificates: certificates.map(
                (certificate) => ({
                    title: certificate.title,
                    issuer: certificate.issuer,
                    issueDate: certificate.issueDate,
                    description:
                        certificate.description,
                })
            ),

            resume: resumeText,
        };


        // =========================
        // GEMINI AI
        // =========================

        const { GoogleGenAI } =
            await import("@google/genai");


        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });


        // =========================
        // AI PROMPT
        // =========================

        const prompt = `
You are an expert AI Career Advisor for students.

Analyze the following student's career profile:

${JSON.stringify(
            careerProfile,
            null,
            2
        )}

Create a personalized career roadmap.

IMPORTANT RULES:

1. Use ONLY the information provided.
2. Do not invent skills, projects, certificates or experience.
3. Identify the most suitable career path.
4. Suggest realistic job roles.
5. Identify skill gaps.
6. Suggest skills the student should learn next.
7. Create a practical learning roadmap.
8. Identify the student's strengths.
9. Give useful career advice.
10. Give clear next steps.
11. Calculate an estimated job readiness score from 0 to 100 based on the available profile.
12. Suggest practical projects that would improve the student's profile.

Return ONLY valid JSON.
`;


        // =========================
        // GEMINI REQUEST
        // =========================

        const response =
            await ai.models.generateContent({

                model: "gemini-3.6-flash",

                contents: prompt,

                config: {

                    responseMimeType:
                        "application/json",

                    responseSchema: {

                        type: "object",

                        properties: {

                            careerGoal: {
                                type: "string",
                            },

                            jobReadinessScore: {
                                type: "integer",
                                minimum: 0,
                                maximum: 100,
                            },

                            careerReason: {
                                type: "string",
                            },

                            recommendedRoles: {
                                type: "array",
                                items: {
                                    type: "string",
                                },
                            },

                            skillGaps: {
                                type: "array",
                                items: {
                                    type: "object",

                                    properties: {

                                        skill: {
                                            type: "string",
                                        },

                                        priority: {
                                            type: "string",
                                        },

                                        reason: {
                                            type: "string",
                                        },

                                    },

                                    required: [
                                        "skill",
                                        "priority",
                                        "reason",
                                    ],
                                },
                            },

                            skillsToLearn: {
                                type: "array",
                                items: {
                                    type: "string",
                                },
                            },

                            learningRoadmap: {
                                type: "array",
                                items: {
                                    type: "object",

                                    properties: {

                                        phase: {
                                            type: "string",
                                        },

                                        duration: {
                                            type: "string",
                                        },

                                        topics: {
                                            type: "array",
                                            items: {
                                                type: "string",
                                            },
                                        },

                                    },

                                    required: [
                                        "phase",
                                        "duration",
                                        "topics",
                                    ],
                                },
                            },

                            recommendedProjects: {
                                type: "array",
                                items: {
                                    type: "string",
                                },
                            },

                            strengths: {
                                type: "array",
                                items: {
                                    type: "string",
                                },
                            },

                            careerAdvice: {
                                type: "array",
                                items: {
                                    type: "string",
                                },
                            },

                            nextSteps: {
                                type: "array",
                                items: {
                                    type: "string",
                                },
                            },

                        },

                        required: [
                            "careerGoal",
                            "jobReadinessScore",
                            "careerReason",
                            "recommendedRoles",
                            "skillGaps",
                            "skillsToLearn",
                            "learningRoadmap",
                            "recommendedProjects",
                            "strengths",
                            "careerAdvice",
                            "nextSteps",
                        ],
                    },

                    temperature: 0.3,

                    maxOutputTokens: 4000,
                },
            });


        // =========================
        // AI RESPONSE
        // =========================

        const aiText = response.text;

        console.log(
            "Career Roadmap Gemini Response:",
            aiText
        );


        if (!aiText) {

            return res.status(500).json({
                message:
                    "Gemini returned an empty career roadmap.",
            });
        }


        // =========================
        // PARSE JSON
        // =========================

        let roadmap;

        try {

            roadmap = JSON.parse(aiText);

        } catch (parseError) {

            console.error(
                "Career Roadmap JSON Parse Error:",
                parseError
            );

            console.error(
                "Career Roadmap Raw Response:",
                aiText
            );

            return res.status(500).json({
                message:
                    "AI returned an invalid career roadmap format.",
            });
        }


        // =========================
        // SAFE DEFAULTS
        // =========================

        roadmap.careerGoal =
            typeof roadmap.careerGoal === "string"
                ? roadmap.careerGoal
                : "";


        roadmap.jobReadinessScore =
            typeof roadmap.jobReadinessScore === "number"
                ? roadmap.jobReadinessScore
                : 0;


        roadmap.careerReason =
            typeof roadmap.careerReason === "string"
                ? roadmap.careerReason
                : "";


        roadmap.recommendedRoles =
            Array.isArray(
                roadmap.recommendedRoles
            )
                ? roadmap.recommendedRoles
                : [];


        roadmap.skillGaps =
            Array.isArray(
                roadmap.skillGaps
            )
                ? roadmap.skillGaps
                : [];


        roadmap.skillsToLearn =
            Array.isArray(
                roadmap.skillsToLearn
            )
                ? roadmap.skillsToLearn
                : [];


        roadmap.learningRoadmap =
            Array.isArray(
                roadmap.learningRoadmap
            )
                ? roadmap.learningRoadmap
                : [];


        roadmap.recommendedProjects =
            Array.isArray(
                roadmap.recommendedProjects
            )
                ? roadmap.recommendedProjects
                : [];


        roadmap.strengths =
            Array.isArray(
                roadmap.strengths
            )
                ? roadmap.strengths
                : [];


        roadmap.careerAdvice =
            Array.isArray(
                roadmap.careerAdvice
            )
                ? roadmap.careerAdvice
                : [];


        roadmap.nextSteps =
            Array.isArray(
                roadmap.nextSteps
            )
                ? roadmap.nextSteps
                : [];


        // =========================
        // SUCCESS RESPONSE
        // =========================

        return res.status(200).json({

            message:
                "AI career roadmap generated successfully.",

            roadmap,

        });


    } catch (error) {

        console.error(
            "Career Roadmap Error:",
            error
        );


        return res.status(500).json({

            message:
                "Failed to generate AI career roadmap.",

        });


    } finally {

        if (parser) {

            try {

                await parser.destroy();

            } catch (destroyError) {

                console.error(
                    "Career PDF Parser Cleanup Error:",
                    destroyError
                );

            }
        }
    }
};


// =========================
// EXPORT
// =========================

module.exports = {
    getCareerRoadmap,
};