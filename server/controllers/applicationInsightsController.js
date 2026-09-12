const JobApplication = require("../models/JobApplication");

const getApplicationInsights = async (req, res) => {
    try {
        const applications = await JobApplication.find({
            user: req.user.id,
        }).sort({
            appliedDate: -1,
        });

        const totalApplications = applications.length;

        const applied = applications.filter(
            (app) => app.status === "Applied"
        ).length;

        const shortlisted = applications.filter(
            (app) => app.status === "Shortlisted"
        ).length;

        const interviews = applications.filter(
            (app) => app.status === "Interview"
        ).length;

        const selected = applications.filter(
            (app) => app.status === "Selected"
        ).length;

        const rejected = applications.filter(
            (app) => app.status === "Rejected"
        ).length;

        // ===============================
        // CALCULATE RATES
        // ===============================

        const shortlistRate =
            totalApplications > 0
                ? Math.round(
                    ((shortlisted + interviews + selected) /
                        totalApplications) *
                    100
                )
                : 0;

        const interviewRate =
            totalApplications > 0
                ? Math.round(
                    ((interviews + selected) /
                        totalApplications) *
                    100
                )
                : 0;

        const selectionRate =
            totalApplications > 0
                ? Math.round(
                    (selected / totalApplications) * 100
                )
                : 0;

        // ===============================
        // SMART INSIGHTS
        // ===============================

        const insights = [];

        if (totalApplications === 0) {
            insights.push(
                "Start applying to relevant jobs and internships to build your application pipeline."
            );
        } else {
            if (shortlisted > 0) {
                insights.push(
                    `You have been shortlisted for ${shortlisted} application${shortlisted > 1 ? "s" : ""}. Your profile is getting attention from employers.`
                );
            }

            if (interviews > 0) {
                insights.push(
                    `You have ${interviews} application${interviews > 1 ? "s" : ""} at the interview stage. Focus on interview preparation and communication skills.`
                );
            }

            if (selected > 0) {
                insights.push(
                    `Congratulations! You have ${selected} selected application${selected > 1 ? "s" : ""}. Keep building on this success.`
                );
            }

            if (
                totalApplications >= 5 &&
                shortlisted === 0 &&
                interviews === 0
            ) {
                insights.push(
                    "You have submitted several applications but have not reached the shortlist stage yet. Consider improving your resume and targeting jobs that closely match your skills."
                );
            }

            if (rejected > 0 && totalApplications > 0) {
                insights.push(
                    `${rejected} application${rejected > 1 ? "s were" : " was"} rejected. Review the job requirements and improve the skills commonly requested for your target roles.`
                );
            }

            if (totalApplications < 5) {
                insights.push(
                    "Try to maintain a consistent application routine and apply to multiple relevant opportunities each week."
                );
            }
        }

        // ===============================
        // RECOMMENDATIONS
        // ===============================

        const recommendations = [];

        if (totalApplications === 0) {
            recommendations.push(
                "Start tracking every job and internship application."
            );
        }

        if (totalApplications > 0 && shortlistRate < 30) {
            recommendations.push(
                "Improve your resume and tailor it according to each job description."
            );
        }

        if (totalApplications > 0 && interviewRate < 20) {
            recommendations.push(
                "Strengthen your technical skills and highlight relevant projects in your resume."
            );
        }

        if (rejected > selected && totalApplications > 2) {
            recommendations.push(
                "Focus on roles that closely match your current skills and experience."
            );
        }

        if (interviews > 0) {
            recommendations.push(
                "Practice mock interviews regularly to improve your interview performance."
            );
        }

        if (recommendations.length === 0) {
            recommendations.push(
                "Your application pipeline is looking good. Continue applying consistently and keep improving your skills."
            );
        }

        res.status(200).json({
            success: true,

            insights: {
                statistics: {
                    totalApplications,
                    applied,
                    shortlisted,
                    interviews,
                    selected,
                    rejected,
                },

                rates: {
                    shortlistRate,
                    interviewRate,
                    selectionRate,
                },

                insights,

                recommendations,
            },
        });
    } catch (error) {
        console.error(
            "Application Insights Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to generate application insights",
            error: error.message,
        });
    }
};

module.exports = {
    getApplicationInsights,
};