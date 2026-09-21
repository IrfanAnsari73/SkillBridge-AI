import React from "react";
import { Routes, Route } from "react-router-dom";

// ==============================
// Common
// ==============================
import ProtectedRoute from "../components/auth/ProtectedRoute";

// ==============================
// Public Pages
// ==============================
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

// ==============================
// Legal Pages
// ==============================
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "../pages/Terms/Terms";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";

// ==============================
// Public Resources
// ==============================
import Resources from "../pages/Resources/Resources";
import ATSResumeGuide from "../pages/Resources/ATSResumeGuide/ATSResumeGuide";
import TechnicalInterviewGuide from "../pages/Resources/TechnicalInterviewGuide/TechnicalInterviewGuide";
import MernRoadmap from "../pages/Resources/MernRoadmap/MernRoadmap";
import CareerGuide from "../pages/Resources/CareerGuide/CareerGuide";

// ==============================
// FAQ & Blog
// ==============================
import FAQ from "../pages/FAQ/FAQ";
import Blog from "../pages/Blog/Blog";
import InternshipGuide from "../pages/Blog/InternshipGuide/InternshipGuide";
import CampusPlacementGuide from "../pages/Blog/CampusPlacementGuide/CampusPlacementGuide";
import FresherJobSearchGuide from "../pages/Blog/FresherJobSearchGuide/FresherJobSearchGuide";
import LinkedInProfileGuide from "../pages/Blog/LinkedInProfileGuide/LinkedInProfileGuide";
import FirstJobInterviewGuide from "../pages/Blog/FirstJobInterviewGuide/FirstJobInterviewGuide";
import ProjectResumeGuide from "../pages/Blog/ProjectResumeGuide/ProjectResumeGuide";
import GitHubProfileGuide from "../pages/Blog/GitHubProfileGuide/GitHubProfileGuide";
import CodingTestGuide from "../pages/Blog/CodingTestGuide/CodingTestGuide";
import HRInterviewGuide from "../pages/Blog/HRInterviewGuide/HRInterviewGuide";
import FakeJobScamGuide from "../pages/Blog/FakeJobScamGuide/FakeJobScamGuide";

// ==============================
// Public Portfolio
// ==============================
import PublicPortfolio from "../pages/PublicPortfolio/PublicPortfolio";

// ==============================
// Protected Pages
// ==============================
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Certificates from "../pages/Certificates/Certificates";
import Resume from "../pages/Resume/Resume";
import Portfolio from "../pages/Portfolio/Portfolio";

// Career
import CareerAdvisor from "../pages/Career/CareerAdvisor";
import CareerRoadmap from "../pages/Career/CareerRoadmap";
import CareerActionCenter from "../pages/Career/CareerActionCenter";
import CareerGoals from "../pages/Career/CareerGoals";

// Analytics
import CareerAnalytics from "../pages/Analytics/CareerAnalytics";

// Jobs
import JobMatcher from "../pages/Jobs/JobMatcher";
import JobApplications from "../pages/Jobs/JobApplications";
import ApplicationInsights from "../pages/Jobs/ApplicationInsights";

// Interview
import MockInterview from "../pages/Interview/MockInterview";

function AppRoutes() {
    return (
        <Routes>

            {/* =========================================
                PUBLIC ROUTES
            ========================================= */}

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            {/* Legal */}
            <Route
                path="/privacy-policy"
                element={<PrivacyPolicy />}
            />

            <Route
                path="/terms"
                element={<Terms />}
            />

            <Route
                path="/cookie-policy"
                element={<CookiePolicy />}
            />

            {/* Resources */}
            <Route
                path="/resources"
                element={<Resources />}
            />

            <Route
                path="/resources/ats-friendly-resume-for-freshers"
                element={<ATSResumeGuide />}
            />

            <Route
                path="/resources/technical-interview-preparation-for-freshers"
                element={<TechnicalInterviewGuide />}
            />

            <Route
                path="/resources/mern-stack-developer-roadmap"
                element={<MernRoadmap />}
            />

            <Route
                path="/resources/career-guides-for-students"
                element={<CareerGuide />}
            />

            {/* FAQ */}
            <Route
                path="/faq"
                element={<FAQ />}
            />

            {/* Blog */}
            <Route
                path="/blog"
                element={<Blog />}
            />

            <Route
                path="/blog/how-to-find-first-internship-as-a-college-student"
                element={<InternshipGuide />}
            />

            <Route
                path="/blog/how-to-prepare-for-campus-placements"
                element={<CampusPlacementGuide />}
            />

            <Route
                path="/blog/fresher-job-search-guide"
                element={<FresherJobSearchGuide />}
            />

            <Route
                path="/blog/first-job-interview-guide-for-freshers"
                element={<FirstJobInterviewGuide />}
            />

            <Route
                path="/blog/how-to-build-projects-for-resume-as-a-fresher"
                element={<ProjectResumeGuide />}
            />

            <Route
                path="/blog/github-profile-guide-for-students"
                element={<GitHubProfileGuide />}
            />

            <Route
                path="/blog/coding-test-preparation-for-freshers"
                element={<CodingTestGuide />}
            />

            <Route
                path="/blog/hr-interview-questions-for-freshers"
                element={<HRInterviewGuide />}
            />

            <Route
                path="/blog/linkedin-profile-guide-for-students"
                element={<LinkedInProfileGuide />}
            />

            <Route
                path="/blog/how-to-identify-fake-job-internship-offers"
                element={<FakeJobScamGuide />}
            />

            {/* Public Portfolio */}
            <Route
                path="/portfolio/public/:userId"
                element={<PublicPortfolio />}
            />

            {/* =========================================
                PROTECTED ROUTES
            ========================================= */}

            <Route element={<ProtectedRoute />}>

                {/* Dashboard */}
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                {/* Profile */}
                <Route
                    path="/profile"
                    element={<Profile />}
                />

                {/* Skills */}
                <Route
                    path="/skills"
                    element={<Skills />}
                />

                {/* Projects */}
                <Route
                    path="/projects"
                    element={<Projects />}
                />

                {/* Certificates */}
                <Route
                    path="/certificates"
                    element={<Certificates />}
                />

                {/* Resume */}
                <Route
                    path="/resume"
                    element={<Resume />}
                />

                {/* Portfolio */}
                <Route
                    path="/portfolio"
                    element={<Portfolio />}
                />

                {/* Career Advisor */}
                <Route
                    path="/career-advisor"
                    element={<CareerAdvisor />}
                />

                {/* Career Roadmap */}
                <Route
                    path="/career-roadmap"
                    element={<CareerRoadmap />}
                />

                {/* Career Analytics */}
                <Route
                    path="/career-analytics"
                    element={<CareerAnalytics />}
                />

                {/* Career Action Center */}
                <Route
                    path="/career-action-center"
                    element={<CareerActionCenter />}
                />

                {/* Career Goals */}
                <Route
                    path="/career-goals"
                    element={<CareerGoals />}
                />

                {/* Job Matcher */}
                <Route
                    path="/job-matcher"
                    element={<JobMatcher />}
                />

                {/* Job Applications */}
                <Route
                    path="/job-applications"
                    element={<JobApplications />}
                />

                {/* Application Insights */}
                <Route
                    path="/application-insights"
                    element={<ApplicationInsights />}
                />

                {/* Mock Interview */}
                <Route
                    path="/mock-interview"
                    element={<MockInterview />}
                />

            </Route>

        </Routes>
    );
}

export default AppRoutes;