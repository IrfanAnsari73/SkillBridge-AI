const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Certificate = require("../models/Certificate");
const Resume = require("../models/Resume");

const fs = require("fs");
const path = require("path");

const { PDFParse } = require("pdf-parse");


// =========================
// GEMINI RETRY HELPER
// =========================

const generateGeminiWithRetry = async (
    ai,
    request,
    maxRetries = 3
) => {

    let lastError = null;

    for (
        let attempt = 1;
        attempt <= maxRetries;
        attempt++
    ) {

        try {

            console.log(
                `Gemini Job Matcher Attempt ${attempt}/${maxRetries}`
            );

            const response =
                await ai.models.generateContent(
                    request
                );

            return response;

        } catch (error) {

            lastError = error;

            const status =
                error?.status ||
                error?.error?.code;

            console.error(
                `Gemini Attempt ${attempt} Failed:`,
                status || error.message
            );


            // Retry temporary errors only

            const shouldRetry =
                status === 503 ||
                status === 429 ||
                status === 500;


            if (
                !shouldRetry ||
                attempt === maxRetries
            ) {
                throw error;
            }


            // Wait before retry

            const delay =
                attempt * 2000;


            console.log(
                `Retrying Gemini in ${delay / 1000
                } seconds...`
            );


            await new Promise(
                (resolve) =>
                    setTimeout(
                        resolve,
                        delay
                    )
            );
        }
    }


    throw lastError;
};


// =========================
// AI JOB MATCHER
// =========================

const getJobMatch = async (req, res) => {

    let parser = null;

    try {

        // =========================
        // CHECK GEMINI API KEY
        // =========================

        if (!process.env.GEMINI_API_KEY) {

            return res.status(500).json({
                message:
                    "Gemini API key is not configured on the server.",
            });

        }


        // =========================
        // LOGGED-IN USER
        // =========================

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


        const certificates =
            await Certificate.find({
                user: userId,
            }).select(
                "title issuer issueDate description credentialUrl"
            );


        const resume =
            await Resume.findOne({
                user: userId,
            });


        // =========================
        // EXTRACT RESUME TEXT
        // =========================

        let resumeText = "";


        if (
            resume &&
            resume.mimeType ===
            "application/pdf"
        ) {

            const filePath =
                path.join(
                    __dirname,
                    "../uploads",
                    resume.fileName
                );


            if (
                fs.existsSync(
                    filePath
                )
            ) {

                const pdfBuffer =
                    fs.readFileSync(
                        filePath
                    );


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
        // USER CAREER PROFILE
        // =========================

        const careerProfile = {

            skills: skills.map(
                (skill) => ({
                    name: skill.name,
                    category:
                        skill.category,
                    level:
                        skill.level,
                    percentage:
                        skill.percentage,
                })
            ),

            projects: projects.map(
                (project) => ({
                    title:
                        project.title,
                    description:
                        project.description,
                    technologies:
                        project.technologies,
                    githubUrl:
                        project.githubUrl,
                    liveUrl:
                        project.liveUrl,
                })
            ),

            certificates:
                certificates.map(
                    (certificate) => ({
                        title:
                            certificate.title,
                        issuer:
                            certificate.issuer,
                        issueDate:
                            certificate.issueDate,
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
            await import(
                "@google/genai"
            );


        const ai = new GoogleGenAI({
            apiKey:
                process.env.GEMINI_API_KEY,
        });


        // =========================
        // AI PROMPT
        // =========================

        const prompt = `
You are an expert AI Job Matching Assistant.

Analyze the student's career profile below.

${JSON.stringify(
            careerProfile,
            null,
            2
        )}

Your task is to identify the most suitable entry-level
technology job roles for this student.

IMPORTANT RULES:

1. Use ONLY the information provided.
2. Do not invent skills, projects, certificates or experience.
3. Focus on realistic entry-level roles.
4. Compare the student's existing skills with typical
   requirements of the suggested roles.
5. Identify missing or weak skills.
6. Give a realistic job match score from 0 to 100.
7. Explain why each role is suitable.
8. Suggest what the student should improve to become
   more job-ready.
9. Keep recommendations practical for a student.

Return ONLY valid JSON.
`;


        // =========================
        // GEMINI REQUEST WITH RETRY
        // =========================

        const response =
            await generateGeminiWithRetry(
                ai,
                {

                    model:
                        "gemini-3.6-flash",

                    contents:
                        prompt,

                    config: {

                        responseMimeType:
                            "application/json",

                        responseSchema: {

                            type: "object",

                            properties: {

                                overallMatchScore: {
                                    type: "integer",
                                    minimum: 0,
                                    maximum: 100,
                                },


                                overallRecommendation: {
                                    type: "string",
                                },


                                recommendedRoles: {

                                    type: "array",

                                    items: {

                                        type: "object",

                                        properties: {

                                            role: {
                                                type: "string",
                                            },

                                            matchScore: {
                                                type: "integer",
                                                minimum: 0,
                                                maximum: 100,
                                            },

                                            reason: {
                                                type: "string",
                                            },

                                            requiredSkills: {

                                                type: "array",

                                                items: {
                                                    type: "string",
                                                },

                                            },

                                            missingSkills: {

                                                type: "array",

                                                items: {
                                                    type: "string",
                                                },

                                            },

                                        },

                                        required: [
                                            "role",
                                            "matchScore",
                                            "reason",
                                            "requiredSkills",
                                            "missingSkills",
                                        ],

                                    },

                                },


                                resumeMatch: {

                                    type: "object",

                                    properties: {

                                        score: {
                                            type: "integer",
                                            minimum: 0,
                                            maximum: 100,
                                        },

                                        feedback: {
                                            type: "string",
                                        },

                                    },

                                    required: [
                                        "score",
                                        "feedback",
                                    ],

                                },


                                profileStrengths: {

                                    type: "array",

                                    items: {
                                        type: "string",
                                    },

                                },


                                skillsToImprove: {

                                    type: "array",

                                    items: {
                                        type: "string",
                                    },

                                },


                                recommendedActions: {

                                    type: "array",

                                    items: {
                                        type: "string",
                                    },

                                },

                            },


                            required: [

                                "overallMatchScore",

                                "overallRecommendation",

                                "recommendedRoles",

                                "resumeMatch",

                                "profileStrengths",

                                "skillsToImprove",

                                "recommendedActions",

                            ],

                        },


                        temperature: 0.3,

                        maxOutputTokens: 4000,

                    },

                }
            );


        // =========================
        // GEMINI RESPONSE
        // =========================

        const aiText =
            response.text;


        console.log(
            "Job Matcher Gemini Response:",
            aiText
        );


        if (!aiText) {

            return res.status(500).json({

                message:
                    "Gemini returned an empty job matching result.",

            });

        }


        // =========================
        // PARSE JSON
        // =========================

        let jobMatch;


        try {

            jobMatch =
                JSON.parse(aiText);

        } catch (parseError) {

            console.error(
                "Job Matcher JSON Parse Error:",
                parseError
            );

            console.error(
                "Job Matcher Raw Response:",
                aiText
            );


            return res.status(500).json({

                message:
                    "AI returned an invalid job matching format.",

            });

        }


        // =========================
        // SAFE DEFAULTS
        // =========================

        jobMatch.overallMatchScore =
            typeof jobMatch.overallMatchScore ===
                "number"
                ? jobMatch.overallMatchScore
                : 0;


        jobMatch.overallRecommendation =
            typeof jobMatch.overallRecommendation ===
                "string"
                ? jobMatch.overallRecommendation
                : "";


        jobMatch.recommendedRoles =
            Array.isArray(
                jobMatch.recommendedRoles
            )
                ? jobMatch.recommendedRoles
                : [];


        jobMatch.resumeMatch =
            jobMatch.resumeMatch &&
                typeof jobMatch.resumeMatch ===
                "object"
                ? jobMatch.resumeMatch
                : {
                    score: 0,
                    feedback: "",
                };


        jobMatch.profileStrengths =
            Array.isArray(
                jobMatch.profileStrengths
            )
                ? jobMatch.profileStrengths
                : [];


        jobMatch.skillsToImprove =
            Array.isArray(
                jobMatch.skillsToImprove
            )
                ? jobMatch.skillsToImprove
                : [];


        jobMatch.recommendedActions =
            Array.isArray(
                jobMatch.recommendedActions
            )
                ? jobMatch.recommendedActions
                : [];


        // =========================
        // SUCCESS RESPONSE
        // =========================

        return res.status(200).json({

            message:
                "AI job matching generated successfully.",

            jobMatch,

        });


    } catch (error) {

        console.error(
            "Job Matcher Error:",
            error
        );


        // =========================
        // USER-FRIENDLY ERROR
        // =========================

        if (
            error?.status === 503 ||
            error?.status === 429
        ) {

            return res.status(503).json({

                message:
                    "AI service is temporarily busy. Please try again in a few seconds.",

            });

        }


        return res.status(500).json({

            message:
                "Failed to generate AI job matching.",

        });

    } finally {

        if (parser) {

            try {

                await parser.destroy();

            } catch (destroyError) {

                console.error(
                    "Job Matcher PDF Parser Cleanup Error:",
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
    getJobMatch,
};