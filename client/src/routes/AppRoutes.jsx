import { Routes, Route } from "react-router-dom";

// ===============================
// PUBLIC PAGES
// ===============================

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "../pages/Terms/Terms";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";

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
import CareerActionCenter from "../pages/Career/CareerActionCenter";
import CareerGoals from "../pages/Career/CareerGoals";

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

            {/* =================================
                PUBLIC ROUTES
            ================================= */}

            {/* Home */}
            <Route
                path="/"
                element={<Home />}
            />

            {/* About */}
            <Route
                path="/about"
                element={<About />}
            />

            {/* Contact */}
            <Route
                path="/contact"
                element={<Contact />}
            />

            {/* Privacy Policy */}
            <Route
                path="/privacy-policy"
                element={<PrivacyPolicy />}
            />

            {/* Terms & Conditions */}
            <Route
                path="/terms"
                element={<Terms />}
            />

            {/* CookiePolicy */}
            <Route
                path="/cookie-policy"
                element={<CookiePolicy />}
            />

            {/* Login */}
            <Route
                path="/login"
                element={<Login />}
            />

            {/* Signup */}
            <Route
                path="/signup"
                element={<Signup />}
            />

            {/* Public Portfolio */}
            <Route
                path="/portfolio/public/:userId"
                element={<PublicPortfolio />}
            />


            {/* =================================
                PROTECTED ROUTES
            ================================= */}

            <Route element={<ProtectedRoute />}>

                {/* =========================
                    DASHBOARD
                ========================= */}

                <Route
                    path="/dashboard"
                    element={
                        <DashboardLayout>
                            <Dashboard />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    PROFILE
                ========================= */}

                <Route
                    path="/profile"
                    element={
                        <DashboardLayout>
                            <Profile />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    SKILLS
                ========================= */}

                <Route
                    path="/skills"
                    element={
                        <DashboardLayout>
                            <Skills />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    PROJECTS
                ========================= */}

                <Route
                    path="/projects"
                    element={
                        <DashboardLayout>
                            <Projects />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    CERTIFICATES
                ========================= */}

                <Route
                    path="/certificates"
                    element={
                        <DashboardLayout>
                            <Certificates />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    RESUME
                ========================= */}

                <Route
                    path="/resume"
                    element={
                        <DashboardLayout>
                            <Resume />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    PORTFOLIO
                ========================= */}

                <Route
                    path="/portfolio"
                    element={
                        <DashboardLayout>
                            <Portfolio />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    CAREER ADVISOR
                ========================= */}

                <Route
                    path="/career-advisor"
                    element={
                        <DashboardLayout>
                            <CareerAdvisor />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    CAREER ROADMAP
                ========================= */}

                <Route
                    path="/career-roadmap"
                    element={
                        <DashboardLayout>
                            <CareerRoadmap />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    CAREER ACTION CENTER
                ========================= */}

                <Route
                    path="/career-actions"
                    element={
                        <DashboardLayout>
                            <CareerActionCenter />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    CAREER GOALS
                ========================= */}

                <Route
                    path="/career-goals"
                    element={
                        <DashboardLayout>
                            <CareerGoals />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    JOB MATCHER
                ========================= */}

                <Route
                    path="/job-matcher"
                    element={
                        <DashboardLayout>
                            <JobMatcher />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    MOCK INTERVIEW
                ========================= */}

                <Route
                    path="/mock-interview"
                    element={
                        <DashboardLayout>
                            <MockInterview />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    CAREER ANALYTICS
                ========================= */}

                <Route
                    path="/career-analytics"
                    element={
                        <DashboardLayout>
                            <CareerAnalytics />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    JOB APPLICATIONS
                ========================= */}

                <Route
                    path="/job-applications"
                    element={
                        <DashboardLayout>
                            <JobApplications />
                        </DashboardLayout>
                    }
                />


                {/* =========================
                    AI APPLICATION INSIGHTS
                ========================= */}

                <Route
                    path="/application-insights"
                    element={
                        <DashboardLayout>
                            <ApplicationInsights />
                        </DashboardLayout>
                    }
                />

            </Route>


            {/* =================================
                FALLBACK
            ================================= */}

            <Route
                path="*"
                element={<Home />}
            />

        </Routes>
    );
};


export default AppRoutes;