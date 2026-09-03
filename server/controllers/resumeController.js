const Resume = require("../models/Resume");
const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");


// =====================================================
// UPLOAD / REPLACE RESUME
// =====================================================

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

        // ---------------------------------------------
        // REPLACE EXISTING RESUME
        // ---------------------------------------------

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

        // ---------------------------------------------
        // NEW RESUME
        // ---------------------------------------------

        const resume = await Resume.create({
            user: req.user._id,
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: req.file.path,
            mimeType: req.file.mimetype,
            fileSize: req.file.size,
        });

        return res.status(201).json({
            message: "Resume uploaded successfully",
            resume,
        });

    } catch (error) {
        console.error(
            "Upload Resume Error:",
            error
        );

        return res.status(500).json({
            message: "Server error",
        });
    }
};


// =====================================================
// GET OWN RESUME
// =====================================================

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

        return res.status(200).json({
            resume,
        });

    } catch (error) {
        console.error(
            "Get Resume Error:",
            error
        );

        return res.status(500).json({
            message: "Server error",
        });
    }
};


// =====================================================
// GET PUBLIC RESUME
// =====================================================

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

        return res.status(200).json({
            resume,
        });

    } catch (error) {
        console.error(
            "Get Public Resume Error:",
            error
        );

        return res.status(500).json({
            message: "Server error",
        });
    }
};


// =====================================================
// DOWNLOAD PUBLIC RESUME
// =====================================================

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

        return res.download(
            filePath,
            resume.originalName,
            (error) => {
                if (error) {
                    console.error(
                        "Public Resume Download Error:",
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

        return res.status(500).json({
            message: "Server error",
        });
    }
};


// =====================================================
// DOWNLOAD OWN RESUME
// =====================================================

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

        return res.download(
            filePath,
            resume.originalName,
            (error) => {
                if (error) {
                    console.error(
                        "Resume Download Error:",
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

        return res.status(500).json({
            message: "Server error",
        });
    }
};


// =====================================================
// DELETE RESUME
// =====================================================

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

        return res.status(200).json({
            message: "Resume deleted successfully",
        });

    } catch (error) {
        console.error(
            "Delete Resume Error:",
            error
        );

        return res.status(500).json({
            message: "Server error",
        });
    }
};


// =====================================================
// AI RESUME ANALYZER - GEMINI
// =====================================================

const analyzeResume = async (req, res) => {

    let parser = null;

    try {

        // ---------------------------------------------
        // CHECK GEMINI API KEY
        // ---------------------------------------------

        if (!process.env.GEMINI_API_KEY) {

            return res.status(500).json({
                message:
                    "Gemini API key is not configured on the server.",
            });
        }


        // ---------------------------------------------
        // FIND USER RESUME
        // ---------------------------------------------

        const resume = await Resume.findOne({
            user: req.user._id,
        });

        if (!resume) {

            return res.status(404).json({
                message:
                    "Please upload a resume first.",
            });
        }


        // ---------------------------------------------
        // PDF ONLY
        // ---------------------------------------------

        if (
            resume.mimeType !==
            "application/pdf"
        ) {

            return res.status(400).json({
                message:
                    "AI Resume Analyzer currently supports PDF resumes only.",
            });
        }


        // ---------------------------------------------
        // RESUME FILE PATH
        // ---------------------------------------------

        const filePath = path.join(
            __dirname,
            "../uploads",
            resume.fileName
        );


        if (!fs.existsSync(filePath)) {

            return res.status(404).json({
                message:
                    "Resume file not found.",
            });
        }


        // ---------------------------------------------
        // READ PDF
        // ---------------------------------------------

        const pdfBuffer =
            fs.readFileSync(filePath);


        // ---------------------------------------------
        // EXTRACT TEXT FROM PDF
        // ---------------------------------------------

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


        console.log(
            "Resume text extracted successfully."
        );


        // ---------------------------------------------
        // LOAD GEMINI SDK
        // ---------------------------------------------

        const { GoogleGenAI } =
            await import("@google/genai");


        // ---------------------------------------------
        // CREATE GEMINI CLIENT
        // ---------------------------------------------

        const ai = new GoogleGenAI({
            apiKey:
                process.env.GEMINI_API_KEY,
        });


        // ---------------------------------------------
        // AI PROMPT
        // ---------------------------------------------

        const prompt = `
You are an expert Resume Analyzer and Career Advisor.

Analyze the following resume carefully.

The candidate is a student or early-career software developer.

=========================
RESUME CONTENT
=========================

${resumeText}

=========================
END RESUME
=========================

Analyze the resume based ONLY on the information present in the resume.

Do not invent any information.

Return a professional resume analysis.

Important rules:

1. score must be between 0 and 100.

2. summary should be a concise professional summary of the candidate.

3. skills should include technical and relevant professional skills actually present in the resume.

4. strengths should contain 3 to 5 specific strengths based on the resume.

5. weaknesses should contain 2 to 5 genuine weaknesses, missing areas, or areas that could be improved.

6. improvements should contain 4 to 6 practical and actionable suggestions.

7. atsKeywords should contain useful ATS keywords relevant to the candidate's existing profile and software development roles.

8. Never invent:
   - degrees
   - jobs
   - internships
   - projects
   - skills
   - certificates
   - achievements
   - technologies

9. Do not give generic motivational statements.

10. Focus on practical career advice.

11. Consider these areas while calculating the score:
   - Resume content quality
   - Technical skills
   - Projects
   - Education
   - Experience
   - Achievements
   - ATS readiness
   - Contact/profile links
   - Formatting
   - Clarity

12. The candidate is applying for internships and entry-level software development jobs.

13. Keep the response concise but useful.
`;


        // ---------------------------------------------
        // GEMINI STRUCTURED RESPONSE
        // ---------------------------------------------

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

                            score: {
                                type: "integer",
                                minimum: 0,
                                maximum: 100,
                            },

                            summary: {
                                type: "string",
                            },

                            skills: {
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

                            weaknesses: {
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

                            atsKeywords: {
                                type: "array",

                                items: {
                                    type: "string",
                                },
                            },
                        },

                        required: [
                            "score",
                            "summary",
                            "skills",
                            "strengths",
                            "weaknesses",
                            "improvements",
                            "atsKeywords",
                        ],
                    },

                    temperature: 0.2,

                    maxOutputTokens: 3000,
                },
            });


        // ---------------------------------------------
        // GET GEMINI RESPONSE
        // ---------------------------------------------

        const aiText =
            response.text;


        console.log(
            "Gemini Response:",
            aiText
        );


        if (!aiText) {

            return res.status(500).json({
                message:
                    "Gemini returned an empty response.",
            });
        }


        // ---------------------------------------------
        // PARSE JSON
        // ---------------------------------------------

        let analysis;


        try {

            analysis =
                JSON.parse(aiText);

        } catch (parseError) {

            console.error(
                "Gemini JSON Parse Error:",
                parseError
            );

            console.error(
                "Gemini Raw Response:",
                aiText
            );

            return res.status(500).json({
                message:
                    "AI returned an invalid analysis format.",
            });
        }


        // ---------------------------------------------
        // VALIDATE SCORE
        // ---------------------------------------------

        analysis.score =
            Number(analysis.score) || 0;


        analysis.score =
            Math.max(
                0,
                Math.min(
                    100,
                    analysis.score
                )
            );


        // ---------------------------------------------
        // VALIDATE SUMMARY
        // ---------------------------------------------

        analysis.summary =
            typeof analysis.summary === "string"
                ? analysis.summary
                : "";


        // ---------------------------------------------
        // VALIDATE SKILLS
        // ---------------------------------------------

        analysis.skills =
            Array.isArray(
                analysis.skills
            )
                ? analysis.skills
                : [];


        // ---------------------------------------------
        // VALIDATE STRENGTHS
        // ---------------------------------------------

        analysis.strengths =
            Array.isArray(
                analysis.strengths
            )
                ? analysis.strengths
                : [];


        // ---------------------------------------------
        // VALIDATE WEAKNESSES
        // ---------------------------------------------

        analysis.weaknesses =
            Array.isArray(
                analysis.weaknesses
            )
                ? analysis.weaknesses
                : [];


        // ---------------------------------------------
        // VALIDATE IMPROVEMENTS
        // ---------------------------------------------

        analysis.improvements =
            Array.isArray(
                analysis.improvements
            )
                ? analysis.improvements
                : [];


        // ---------------------------------------------
        // VALIDATE ATS KEYWORDS
        // ---------------------------------------------

        analysis.atsKeywords =
            Array.isArray(
                analysis.atsKeywords
            )
                ? analysis.atsKeywords
                : [];


        // ---------------------------------------------
        // SUCCESS RESPONSE
        // ---------------------------------------------

        return res.status(200).json({

            message:
                "AI resume analysis completed successfully.",

            analysis,
        });


    } catch (error) {

        console.error(
            "Analyze Resume Error:",
            error
        );


        return res.status(500).json({

            message:
                "Failed to analyze resume with AI.",
        });


    } finally {

        // ---------------------------------------------
        // CLEAN PDF PARSER
        // ---------------------------------------------

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


// =====================================================
// EXPORTS
// =====================================================

module.exports = {

    uploadResume,

    getResume,

    getPublicResume,

    downloadPublicResume,

    downloadResume,

    deleteResume,

    analyzeResume,
};