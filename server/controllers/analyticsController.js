const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Certificate = require("../models/Certificate");
const Resume = require("../models/Resume");

const getCareerAnalytics = async (req, res) => {
    try {
        const userId = req.user.id;

        // Fetch user data
        const skills = await Skill.find({ user: userId });
        const projects = await Project.find({ user: userId });
        const certificates = await Certificate.find({ user: userId });
        const resume = await Resume.findOne({ user: userId });

        // Basic counts
        const skillCount = skills.length;
        const projectCount = projects.length;
        const certificateCount = certificates.length;

        const resumeUploaded = resume ? 1 : 0;

        // Profile score
        const skillScore = Math.min(skillCount * 8, 25);
        const projectScore = Math.min(projectCount * 8, 25);
        const certificateScore = Math.min(certificateCount * 5, 15);
        const resumeScore = resumeUploaded ? 20 : 0;

        const profileScore = Math.min(
            skillScore +
            projectScore +
            certificateScore +
            resumeScore,
            100
        );

        // Skill analysis
        const skillAnalysis = skills.map((skill) => ({
            name: skill.name,
            level: skill.level || "Beginner",
        }));

        // Project analysis
        const projectAnalysis = projects.map((project) => ({
            title: project.title,
            technology: project.technology || project.techStack || "Not specified",
        }));

        // Certificate analysis
        const certificateAnalysis = certificates.map((certificate) => ({
            title: certificate.title,
            issuer: certificate.issuer || "Not specified",
        }));

        // Suggestions
        const suggestions = [];

        if (skillCount < 5) {
            suggestions.push(
                "Add more technical skills to strengthen your profile."
            );
        }

        if (projectCount < 3) {
            suggestions.push(
                "Build more real-world projects and add them to your portfolio."
            );
        }

        if (certificateCount < 2) {
            suggestions.push(
                "Complete relevant certifications to improve your profile."
            );
        }

        if (!resumeUploaded) {
            suggestions.push(
                "Upload your latest resume to improve your career readiness."
            );
        }

        if (suggestions.length === 0) {
            suggestions.push(
                "Your profile is looking strong. Focus on improving advanced skills and interview preparation."
            );
        }

        res.status(200).json({
            success: true,

            analytics: {
                overallReadiness: profileScore,

                profile: {
                    skills: skillCount,
                    projects: projectCount,
                    certificates: certificateCount,
                    resumeUploaded: Boolean(resumeUploaded),
                },

                skillAnalysis,

                projectAnalysis,

                certificateAnalysis,

                suggestions,
            },
        });
    } catch (error) {
        console.error("Career Analytics Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate career analytics",
            error: error.message,
        });
    }
};

module.exports = {
    getCareerAnalytics,
};