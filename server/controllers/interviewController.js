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
                `Gemini Interview Attempt ${attempt}/${maxRetries}`
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
                `Gemini Interview Attempt ${attempt} Failed:`,
                status || error.message
            );

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
// GET USER CAREER PROFILE
// =========================

const getUserCareerProfile = async (userId) => {

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
            "title issuer issueDate description"
        );


    const resume =
        await Resume.findOne({
            user: userId,
        });


    let resumeText = "";


    // =========================
    // EXTRACT PDF RESUME
    // =========================

    if (
        resume &&
        resume.mimeType === "application/pdf"
    ) {

        const filePath =
            path.join(
                __dirname,
                "../uploads",
                resume.fileName
            );


        if (
            fs.existsSync(filePath)
        ) {

            let parser = null;

            try {

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

            } finally {

                if (parser) {

                    try {

                        await parser.destroy();

                    } catch (error) {

                        console.error(
                            "Resume parser cleanup error:",
                            error
                        );

                    }
                }
            }
        }
    }


    return {

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
};


// =========================
// START MOCK INTERVIEW
// =========================

const startInterview = async (req, res) => {

    try {

        // =========================
        // CHECK API KEY
        // =========================

        if (!process.env.GEMINI_API_KEY) {

            return res.status(500).json({

                message:
                    "Gemini API key is not configured on the server.",

            });
        }


        const userId =
            req.user._id;


        const {
            jobRole,
            interviewType = "Technical",
        } = req.body;


        if (!jobRole) {

            return res.status(400).json({

                message:
                    "Job role is required.",

            });
        }


        // =========================
        // GET PROFILE
        // =========================

        const careerProfile =
            await getUserCareerProfile(
                userId
            );


        // =========================
        // GEMINI
        // =========================

        const { GoogleGenAI } =
            await import(
                "@google/genai"
            );


        const ai =
            new GoogleGenAI({

                apiKey:
                    process.env.GEMINI_API_KEY,

            });


        // =========================
        // PROMPT
        // =========================

        const prompt = `
You are an expert technical interviewer.

Conduct a realistic mock interview for a student.

Target Job Role:
${jobRole}

Interview Type:
${interviewType}

Student Career Profile:

${JSON.stringify(
            careerProfile,
            null,
            2
        )}

Your task is to generate the FIRST interview question.

IMPORTANT RULES:

1. Use the student's actual profile.
2. Do not invent experience.
3. Keep the question suitable for an entry-level candidate.
4. For technical interviews, ask about skills, projects,
   technologies or fundamentals from the profile.
5. For HR interviews, ask relevant career or behavioral questions.
6. For project-based questions, use an actual project from the profile.
7. Do not provide the answer.
8. Ask only ONE question.

Return ONLY valid JSON.
`;


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

                                question: {
                                    type: "string",
                                },

                                category: {
                                    type: "string",
                                },

                                difficulty: {
                                    type: "string",
                                },

                            },

                            required: [
                                "question",
                                "category",
                                "difficulty",
                            ],

                        },

                        temperature: 0.4,

                        maxOutputTokens: 1000,

                    },

                }
            );


        const aiText =
            response.text;


        if (!aiText) {

            return res.status(500).json({

                message:
                    "Gemini returned an empty interview question.",

            });
        }


        let questionData;


        try {

            questionData =
                JSON.parse(aiText);

        } catch (error) {

            console.error(
                "Interview Question JSON Error:",
                error
            );


            return res.status(500).json({

                message:
                    "AI returned an invalid interview question.",

            });
        }


        return res.status(200).json({

            message:
                "Mock interview started successfully.",

            question: questionData,

        });


    } catch (error) {

        console.error(
            "Start Interview Error:",
            error
        );


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
                "Failed to start mock interview.",

        });
    }
};


// =========================
// EVALUATE ANSWER
// =========================

const evaluateAnswer = async (req, res) => {

    try {

        // =========================
        // CHECK API KEY
        // =========================

        if (!process.env.GEMINI_API_KEY) {

            return res.status(500).json({

                message:
                    "Gemini API key is not configured on the server.",

            });
        }


        const {
            jobRole,
            question,
            answer,
            questionNumber = 1,
            totalQuestions = 5,
        } = req.body;


        if (!jobRole) {

            return res.status(400).json({

                message:
                    "Job role is required.",

            });
        }


        if (!question) {

            return res.status(400).json({

                message:
                    "Interview question is required.",

            });
        }


        if (!answer) {

            return res.status(400).json({

                message:
                    "Answer is required.",

            });
        }


        // =========================
        // USER PROFILE
        // =========================

        const userId =
            req.user._id;


        const careerProfile =
            await getUserCareerProfile(
                userId
            );


        // =========================
        // GEMINI
        // =========================

        const { GoogleGenAI } =
            await import(
                "@google/genai"
            );


        const ai =
            new GoogleGenAI({

                apiKey:
                    process.env.GEMINI_API_KEY,

            });


        // =========================
        // PROMPT
        // =========================

        const prompt = `
You are an expert technical interviewer and interview evaluator.

Target Job Role:
${jobRole}

Question Number:
${questionNumber} of ${totalQuestions}

Student Career Profile:

${JSON.stringify(
            careerProfile,
            null,
            2
        )}

Interview Question:
${question}

Student Answer:
${answer}

Evaluate the student's answer fairly.

IMPORTANT RULES:

1. Evaluate only the answer provided.
2. Do not assume experience that is not mentioned.
3. Consider correctness, clarity, technical understanding,
   communication and relevance.
4. Give practical feedback suitable for a student.
5. Score the answer from 0 to 100.
6. Mention what was done well.
7. Mention what should be improved.
8. Provide a better approach or answer tip.
9. If more questions remain, generate ONE next interview question.
10. If this is the final question, do not generate another question.

Return ONLY valid JSON.
`;


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

                                score: {

                                    type: "integer",

                                    minimum: 0,

                                    maximum: 100,

                                },


                                evaluation: {
                                    type: "string",
                                },


                                strengths: {

                                    type: "array",

                                    items: {
                                        type: "string",
                                    },

                                },


                                improvements: {

                                    type: "array",

                                    items: {
                                        type: "string",
                                    },

                                },


                                betterAnswerTip: {
                                    type: "string",
                                },


                                nextQuestion: {
                                    type: "string",
                                },


                                nextQuestionCategory: {
                                    type: "string",
                                },

                            },


                            required: [

                                "score",

                                "evaluation",

                                "strengths",

                                "improvements",

                                "betterAnswerTip",

                                "nextQuestion",

                                "nextQuestionCategory",

                            ],

                        },


                        temperature: 0.4,

                        maxOutputTokens: 1800,

                    },

                }
            );


        const aiText =
            response.text;


        if (!aiText) {

            return res.status(500).json({

                message:
                    "Gemini returned an empty answer evaluation.",

            });
        }


        let evaluation;


        try {

            evaluation =
                JSON.parse(aiText);

        } catch (error) {

            console.error(
                "Interview Evaluation JSON Error:",
                error
            );


            return res.status(500).json({

                message:
                    "AI returned an invalid interview evaluation.",

            });
        }


        // =========================
        // SAFE DEFAULTS
        // =========================

        evaluation.score =
            typeof evaluation.score ===
                "number"
                ? evaluation.score
                : 0;


        evaluation.evaluation =
            typeof evaluation.evaluation ===
                "string"
                ? evaluation.evaluation
                : "";


        evaluation.strengths =
            Array.isArray(
                evaluation.strengths
            )
                ? evaluation.strengths
                : [];


        evaluation.improvements =
            Array.isArray(
                evaluation.improvements
            )
                ? evaluation.improvements
                : [];


        evaluation.betterAnswerTip =
            typeof evaluation.betterAnswerTip ===
                "string"
                ? evaluation.betterAnswerTip
                : "";


        evaluation.nextQuestion =
            typeof evaluation.nextQuestion ===
                "string"
                ? evaluation.nextQuestion
                : "";


        evaluation.nextQuestionCategory =
            typeof evaluation.nextQuestionCategory ===
                "string"
                ? evaluation.nextQuestionCategory
                : "";


        return res.status(200).json({

            message:
                "Interview answer evaluated successfully.",

            evaluation,

        });


    } catch (error) {

        console.error(
            "Evaluate Interview Answer Error:",
            error
        );


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
                "Failed to evaluate interview answer.",

        });
    }
};


// =========================
// EXPORT
// =========================

module.exports = {

    startInterview,

    evaluateAnswer,

};