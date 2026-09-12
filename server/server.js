const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const profileRoutes = require("./routes/profileRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const careerRoutes = require("./routes/careerRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const jobMatcherRoutes = require("./routes/jobMatcherRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const jobApplicationRoutes = require("./routes/jobApplicationRoutes");
const applicationInsightsRoutes = require("./routes/applicationInsightsRoutes");

const app = express();

// =========================
// Middleware
// =========================
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =========================
// MongoDB
// =========================
connectDB();

// =========================
// Routes
// =========================
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/job-matcher", jobMatcherRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/job-applications", jobApplicationRoutes);
app.use("/api/application-insights", applicationInsightsRoutes);

// =========================
// Test Route
// =========================
app.get("/", (req, res) => {
    res.send("🚀 SkillBridge AI Backend is Running...");
});

// =========================
// Server
// =========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});