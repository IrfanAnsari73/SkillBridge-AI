import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Certificates from "../pages/Certificates/Certificates";
import Resume from "../pages/Resume/Resume";
import Portfolio from "../pages/Portfolio/Portfolio";
import CareerAdvisor from "../pages/Career/CareerAdvisor";

import PublicPortfolio from "../pages/PublicPortfolio/PublicPortfolio";

import ProtectedRoute from "../components/auth/ProtectedRoute";


const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>

                {/* =========================
                    PUBLIC ROUTES
                ========================= */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />


                {/* =========================
                    PUBLIC PORTFOLIO
                ========================= */}

                <Route
                    path="/portfolio/public/:userId"
                    element={<PublicPortfolio />}
                />


                {/* =========================
                    PROTECTED ROUTES
                ========================= */}

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


                    {/* AI Career Advisor */}

                    <Route
                        path="/career-advisor"
                        element={<CareerAdvisor />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
};


export default AppRoutes;