const User = require("../models/User");
const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Certificate = require("../models/Certificate");
const JobApplication = require("../models/JobApplication");

const getCareerActions = async (req, res) => {
    try {
        // ===============================
        // USER ID
        // ===============================

        const userId = req.user._id;

        // ===============================
        // FETCH USER DATA
        // ===============================

        const user = await User.findById(userId);

        const skills = await Skill.find({
            user: userId,
        });

        const projects = await Project.find({
            user: userId,
        });

        const certificates = await Certificate.find({
            user: userId,
        });

        const applications = await JobApplication.find({
            user: userId,
        });

        // ===============================
        // BASIC COUNTS
        // ===============================

        const skillCount = skills.length;
        const projectCount = projects.length;
        const certificateCount = certificates.length;
        const applicationCount = applications.length;

        // ===============================
        // RESUME
        // ===============================

        const resumeUploaded = Boolean(
            user?.resume || user?.resumeUrl
        );

        // ===============================
        // APPLICATION STATS
        // ===============================

        const shortlisted = applications.filter(
            (app) =>
                app.status?.toLowerCase() === "shortlisted"
        ).length;

        const interviews = applications.filter(
            (app) =>
                app.status?.toLowerCase() === "interview"
        ).length;

        const selected = applications.filter(
            (app) =>
                app.status?.toLowerCase() === "selected"
        ).length;

        const rejected = applications.filter(
            (app) =>
                app.status?.toLowerCase() === "rejected"
        ).length;

        // ===============================
        // ACTIONS
        // ===============================

        const actions = [];

        // ===============================
        // RESUME ACTION
        // ===============================

        if (!resumeUploaded) {
            actions.push({
                priority: "High",
                category: "Resume",
                title: "Upload your resume",
                description:
                    "Add your latest resume so recruiters and AI tools can evaluate your profile.",
                action: "Upload Resume",
                icon: "📄",
            });
        } else {
            actions.push({
                priority: "Medium",
                category: "Resume",
                title: "Improve your resume",
                description:
                    "Keep your resume updated with your latest skills, projects and achievements.",
                action: "Analyze Resume",
                icon: "📄",
            });
        }

        // ===============================
        // SKILLS ACTION
        // ===============================

        if (skillCount < 5) {
            actions.push({
                priority: "High",
                category: "Skills",
                title: "Add more relevant skills",
                description:
                    "Build a stronger technical profile by adding skills relevant to your target job roles.",
                action: "Add Skills",
                icon: "🛠️",
            });
        } else {
            actions.push({
                priority: "Medium",
                category: "Skills",
                title: "Strengthen your technical skills",
                description:
                    "Focus on improving advanced-level skills and learning technologies required by your target roles.",
                action: "Improve Skills",
                icon: "🛠️",
            });
        }

        // ===============================
        // PROJECT ACTION
        // ===============================

        if (projectCount < 3) {
            actions.push({
                priority: "High",
                category: "Projects",
                title: "Build more projects",
                description:
                    "Add practical projects that demonstrate your development and problem-solving skills.",
                action: "Add Project",
                icon: "💻",
            });
        } else {
            actions.push({
                priority: "Medium",
                category: "Projects",
                title: "Improve your project portfolio",
                description:
                    "Make your projects stronger by adding GitHub repositories, live demos and clear descriptions.",
                action: "Improve Projects",
                icon: "💻",
            });
        }

        // ===============================
        // CERTIFICATE ACTION
        // ===============================

        if (certificateCount < 2) {
            actions.push({
                priority: "Low",
                category: "Certificates",
                title: "Add relevant certifications",
                description:
                    "Complete certifications that support your target technology stack and career goals.",
                action: "Add Certificate",
                icon: "🏆",
            });
        }

        // ===============================
        // JOB APPLICATION ACTION
        // ===============================

        if (applicationCount === 0) {
            actions.push({
                priority: "High",
                category: "Jobs",
                title: "Start applying for jobs",
                description:
                    "Begin tracking relevant jobs and internships instead of waiting until your profile is perfect.",
                action: "Add Application",
                icon: "📋",
            });
        } else if (applicationCount < 5) {
            actions.push({
                priority: "High",
                category: "Jobs",
                title: "Increase job applications",
                description:
                    "Apply consistently to relevant internships and entry-level positions.",
                action: "Apply More",
                icon: "📋",
            });
        } else {
            actions.push({
                priority: "Medium",
                category: "Jobs",
                title: "Review your application strategy",
                description:
                    "Analyze your application results and focus on roles where your profile has the strongest match.",
                action: "Analyze Applications",
                icon: "📋",
            });
        }

        // ===============================
        // INTERVIEW ACTION
        // ===============================

        if (interviews === 0) {
            actions.push({
                priority: "Medium",
                category: "Interview",
                title: "Practice mock interviews",
                description:
                    "Regular interview practice can improve confidence and technical interview performance.",
                action: "Start Mock Interview",
                icon: "🎤",
            });
        }

        // ===============================
        // REJECTION ACTION
        // ===============================

        if (rejected > 0 && selected === 0) {
            actions.push({
                priority: "High",
                category: "Strategy",
                title: "Improve your application conversion",
                description:
                    "Review your resume, job matching and interview preparation to improve your conversion rate.",
                action: "Review Career Strategy",
                icon: "📈",
            });
        }

        // ===============================
        // INTERVIEW PREPARATION
        // ===============================

        if (shortlisted > 0 || interviews > 0) {
            actions.push({
                priority: "High",
                category: "Interview",
                title: "Prepare for upcoming interviews",
                description:
                    "You have progressed in the hiring process. Focus on role-specific technical and behavioral preparation.",
                action: "Prepare Interview",
                icon: "🎤",
            });
        }

        // ===============================
        // CAREER SCORE
        // ===============================

        let score = 0;

        // Resume = 20
        if (resumeUploaded) {
            score += 20;
        }

        // Skills = 20
        if (skillCount >= 5) {
            score += 20;
        } else {
            score += skillCount * 4;
        }

        // Projects = 20
        if (projectCount >= 3) {
            score += 20;
        } else {
            score += projectCount * 7;
        }

        // Certificates = 10
        if (certificateCount >= 2) {
            score += 10;
        } else {
            score += certificateCount * 5;
        }

        // Applications = 15
        if (applicationCount >= 5) {
            score += 15;
        } else {
            score += applicationCount * 3;
        }

        // Interview / shortlist = 10
        if (interviews > 0 || shortlisted > 0) {
            score += 10;
        }

        // Selection = 5
        if (selected > 0) {
            score += 5;
        }

        score = Math.min(
            Math.round(score),
            100
        );

        // ===============================
        // OVERALL PRIORITY
        // ===============================

        let overallPriority = "Medium";

        if (score < 50) {
            overallPriority = "High";
        } else if (score >= 80) {
            overallPriority = "Low";
        }

        // ===============================
        // RECOMMENDATIONS
        // ===============================

        const recommendations = [];

        if (!resumeUploaded) {
            recommendations.push(
                "Upload your latest resume to improve your career profile."
            );
        }

        if (skillCount < 5) {
            recommendations.push(
                "Add more relevant technical skills for your target roles."
            );
        }

        if (projectCount < 3) {
            recommendations.push(
                "Build at least 3 strong projects with GitHub repositories and live demos."
            );
        }

        if (certificateCount < 2) {
            recommendations.push(
                "Add relevant certifications to strengthen your profile."
            );
        }

        if (applicationCount < 5) {
            recommendations.push(
                "Increase the number of relevant job and internship applications."
            );
        }

        if (interviews === 0) {
            recommendations.push(
                "Practice mock interviews regularly to improve interview readiness."
            );
        }

        // ===============================
        // RESPONSE
        // ===============================

        res.json({
            success: true,

            careerScore: score,

            overallPriority,

            summary: {
                skills: skillCount,
                projects: projectCount,
                certificates: certificateCount,
                applications: applicationCount,
                shortlisted,
                interviews,
                selected,
                rejected,
                resumeUploaded,
            },

            actions,

            recommendations,
        });

    } catch (error) {
        console.error(
            "Career Action Center Error:",
            error
        );

        res.status(500).json({
            success: false,
            message:
                "Failed to generate career actions",
            error: error.message,
        });
    }
};

module.exports = {
    getCareerActions,
};