const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Certificate = require("../models/Certificate");
const Resume = require("../models/Resume");

const fs = require("fs");
const path = require("path");

const { PDFParse } = require("pdf-parse");


// =====================================================
// AI CAREER ADVISOR
// =====================================================

const getCareerRecommendations = async (req, res) => {
    let parser = null;

    try {

        // =================================================
        // CHECK GEMINI API KEY
        // =================================================

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({
                message:
                    "Gemini API key is not configured on the server.",
            });
        }


        // =================================================
        // GET USER ID
        // =================================================

        const userId = req.user._id;


        // =================================================
        // FETCH USER DATA
        // =================================================

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


        // =================================================
        // EXTRACT RESUME TEXT
        // =================================================

        let resumeText = "";


        if (resume) {

            if (
                resume.mimeType ===
                "application/pdf"
            ) {

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
        }


        // =================================================
        // PREPARE USER PROFILE
        // =================================================

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
                technologies:
                    project.technologies,
                githubUrl: project.githubUrl,
                liveUrl: project.liveUrl,
            })),

            certificates:
                certificates.map((certificate) => ({
                    title: certificate.title,
                    issuer: certificate.issuer,
                    issueDate:
                        certificate.issueDate,
                    description:
                        certificate.description,
                })),

            resume: resumeText,
        };


        // =================================================
        // GEMINI SDK
        // =================================================

        const { GoogleGenAI } =
            await import("@google/genai");


        const ai = new GoogleGenAI({
            apiKey:
                process.env.GEMINI_API_KEY,
        });


        // =================================================
        // AI PROMPT
        // =================================================

        const prompt = `
You are an expert AI Career Advisor for students and early-career software developers.

Analyze the candidate's complete career profile.

Use ONLY the information provided below.

Do not invent skills, projects, certificates, experience, education, internships, jobs or achievements.

==================================================
CANDIDATE PROFILE
==================================================

SKILLS:
${JSON.stringify(
            careerProfile.skills,
            null,
            2
        )}

PROJECTS:
${JSON.stringify(
            careerProfile.projects,
            null,
            2
        )}

CERTIFICATES:
${JSON.stringify(
            careerProfile.certificates,
            null,
            2
        )}

RESUME:
${careerProfile.resume || "No resume uploaded."}

==================================================
END PROFILE
==================================================

Your task is to provide personalized career recommendations.

Analyze:

1. Current technical skill level.
2. Existing projects.
3. Certificates and learning background.
4. Resume content.
5. Strengths of the candidate.
6. Missing or weak skills.
7. Suitable software development career paths.
8. Suitable entry-level job roles.
9. Skills the candidate should learn next.
10. A practical learning roadmap.

Important rules:

- Recommendations must be realistic for a student or early-career developer.
- Do not recommend technologies completely unrelated to the candidate's existing profile.
- Prioritize skills that complement the candidate's existing technologies.
- Do not invent experience.
- Do not claim the candidate has a skill that is not present.
- Keep recommendations actionable.
- Focus on software development careers.
- Prefer internship and entry-level roles where appropriate.
- Mention why each recommended career path is suitable.
- Learning roadmap should be ordered from highest priority to lower priority.
- Skill gaps should identify useful missing skills based on the candidate's current profile.
- Career advice should be specific to this candidate.
`;


        // =================================================
        // GEMINI STRUCTURED OUTPUT
        // =================================================

        const response =
            await ai.models.generateContent({

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

                            recommendedCareer: {
                                type: "string",
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
                                    type: "string",
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

                            "recommendedCareer",

                            "careerReason",

                            "recommendedRoles",

                            "skillGaps",

                            "skillsToLearn",

                            "learningRoadmap",

                            "strengths",

                            "careerAdvice",

                            "nextSteps",

                        ],
                    },

                    temperature: 0.3,

                    maxOutputTokens: 3500,
                },
            });


        // =================================================
        // GEMINI RESPONSE
        // =================================================

        const aiText =
            response.text;


        console.log(
            "Career Advisor Gemini Response:",
            aiText
        );


        if (!aiText) {

            return res.status(500).json({
                message:
                    "Gemini returned an empty career recommendation.",
            });
        }


        // =================================================
        // PARSE JSON
        // =================================================

        let recommendations;


        try {

            recommendations =
                JSON.parse(aiText);

        } catch (parseError) {

            console.error(
                "Career Advisor JSON Parse Error:",
                parseError
            );

            console.error(
                "Career Advisor Raw Response:",
                aiText
            );

            return res.status(500).json({
                message:
                    "AI returned an invalid career recommendation format.",
            });
        }


        // =================================================
        // VALIDATE RESPONSE
        // =================================================

        recommendations.recommendedCareer =
            typeof recommendations.recommendedCareer ===
                "string"
                ? recommendations.recommendedCareer
                : "";


        recommendations.careerReason =
            typeof recommendations.careerReason ===
                "string"
                ? recommendations.careerReason
                : "";


        recommendations.recommendedRoles =
            Array.isArray(
                recommendations.recommendedRoles
            )
                ? recommendations.recommendedRoles
                : [];


        recommendations.skillGaps =
            Array.isArray(
                recommendations.skillGaps
            )
                ? recommendations.skillGaps
                : [];


        recommendations.skillsToLearn =
            Array.isArray(
                recommendations.skillsToLearn
            )
                ? recommendations.skillsToLearn
                : [];


        recommendations.learningRoadmap =
            Array.isArray(
                recommendations.learningRoadmap
            )
                ? recommendations.learningRoadmap
                : [];


        recommendations.strengths =
            Array.isArray(
                recommendations.strengths
            )
                ? recommendations.strengths
                : [];


        recommendations.careerAdvice =
            Array.isArray(
                recommendations.careerAdvice
            )
                ? recommendations.careerAdvice
                : [];


        recommendations.nextSteps =
            Array.isArray(
                recommendations.nextSteps
            )
                ? recommendations.nextSteps
                : [];


        // =================================================
        // SUCCESS
        // =================================================

        return res.status(200).json({

            message:
                "AI career recommendations generated successfully.",

            recommendations,
        });


    } catch (error) {

        console.error(
            "Career Advisor Error:",
            error
        );


        return res.status(500).json({
            message:
                "Failed to generate AI career recommendations.",
        });


    } finally {

        // =================================================
        // CLEAN PDF PARSER
        // =================================================

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


// =====================================================
// EXPORT
// =====================================================

module.exports = {
    getCareerRecommendations,
};