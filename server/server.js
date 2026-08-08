const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// =========================
// Middleware
// =========================
app.use(cors());
app.use(express.json());

// =========================
// MongoDB
// =========================
connectDB();

// =========================
// Routes
// =========================
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

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