import { Routes, Route } from "react-router-dom";

// ===============================
// AUTH
// ===============================

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

// ===============================
// LAYOUT
// ===============================

import DashboardLayout from "../components/layout/DashboardLayout";

// ===============================
// DASHBOARD
// ===============================

import Dashboard from "../pages/Dashboard/Dashboard";

// ===============================
// PROFILE
// ===============================

import Profile from "../pages/Profile/Profile";

// ===============================
// SKILLS
// ===============================

import Skills from "../pages/Skills/Skills";

// ===============================
// PROJECTS
// ===============================

import Projects from "../pages/Projects/Projects";

// ===============================
// CERTIFICATES
// ===============================

import Certificates from "../pages/Certificates/Certificates";

// ===============================
// RESUME
// ===============================

import Resume from "../pages/Resume/Resume";

// ===============================
// PORTFOLIO
// ===============================

import Portfolio from "../pages/Portfolio/Portfolio";
import PublicPortfolio from "../pages/PublicPortfolio/PublicPortfolio";

// ===============================
// CAREER
// ===============================

import CareerAdvisor from "../pages/Career/CareerAdvisor";
import CareerRoadmap from "../pages/Career/CareerRoadmap";

// ===============================
// JOBS
// ===============================

import JobMatcher from "../pages/Jobs/JobMatcher";
import JobApplications from "../pages/Jobs/JobApplications";
import ApplicationInsights from "../pages/Jobs/ApplicationInsights";

// ===============================
// INTERVIEW
// ===============================

import MockInterview from "../pages/Interview/MockInterview";

// ===============================
// ANALYTICS
// ===============================

import CareerAnalytics from "../pages/Analytics/CareerAnalytics";

// ===============================
// PROTECTED ROUTE
// ===============================

import ProtectedRoute from "../components/auth/ProtectedRoute";


const AppRoutes = () => {
    return (
        <Routes>

            {/* ========================= */}
            {/* PUBLIC ROUTES */}
            {/* ========================= */}

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/signup"
                element={<Signup />}
            />

            <Route
                path="/portfolio/public/:userId"
                element={<PublicPortfolio />}
            />


            {/* ========================= */}
            {/* PROTECTED ROUTES */}
            {/* ========================= */}

            <Route element={<ProtectedRoute />}>

                {/* Dashboard */}
                <Route
                    path="/dashboard"
                    element={
                        <DashboardLayout>
                            <Dashboard />
                        </DashboardLayout>
                    }
                />


                {/* Profile */}
                <Route
                    path="/profile"
                    element={
                        <DashboardLayout>
                            <Profile />
                        </DashboardLayout>
                    }
                />


                {/* Skills */}
                <Route
                    path="/skills"
                    element={
                        <DashboardLayout>
                            <Skills />
                        </DashboardLayout>
                    }
                />


                {/* Projects */}
                <Route
                    path="/projects"
                    element={
                        <DashboardLayout>
                            <Projects />
                        </DashboardLayout>
                    }
                />


                {/* Certificates */}
                <Route
                    path="/certificates"
                    element={
                        <DashboardLayout>
                            <Certificates />
                        </DashboardLayout>
                    }
                />


                {/* Resume */}
                <Route
                    path="/resume"
                    element={
                        <DashboardLayout>
                            <Resume />
                        </DashboardLayout>
                    }
                />


                {/* Portfolio */}
                <Route
                    path="/portfolio"
                    element={
                        <DashboardLayout>
                            <Portfolio />
                        </DashboardLayout>
                    }
                />


                {/* Career Advisor */}
                <Route
                    path="/career-advisor"
                    element={
                        <DashboardLayout>
                            <CareerAdvisor />
                        </DashboardLayout>
                    }
                />


                {/* Career Roadmap */}
                <Route
                    path="/career-roadmap"
                    element={
                        <DashboardLayout>
                            <CareerRoadmap />
                        </DashboardLayout>
                    }
                />


                {/* Job Matcher */}
                <Route
                    path="/job-matcher"
                    element={
                        <DashboardLayout>
                            <JobMatcher />
                        </DashboardLayout>
                    }
                />


                {/* Mock Interview */}
                <Route
                    path="/mock-interview"
                    element={
                        <DashboardLayout>
                            <MockInterview />
                        </DashboardLayout>
                    }
                />


                {/* Career Analytics */}
                <Route
                    path="/career-analytics"
                    element={
                        <DashboardLayout>
                            <CareerAnalytics />
                        </DashboardLayout>
                    }
                />


                {/* Job Applications */}
                <Route
                    path="/job-applications"
                    element={
                        <DashboardLayout>
                            <JobApplications />
                        </DashboardLayout>
                    }
                />


                {/* AI Application Insights */}
                <Route
                    path="/application-insights"
                    element={
                        <DashboardLayout>
                            <ApplicationInsights />
                        </DashboardLayout>
                    }
                />

            </Route>


            {/* ========================= */}
            {/* ROOT */}
            {/* ========================= */}

            <Route
                path="/"
                element={
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                }
            />


            {/* ========================= */}
            {/* FALLBACK */}
            {/* ========================= */}

            <Route
                path="*"
                element={<Login />}
            />

        </Routes>
    );
};


export default AppRoutes;