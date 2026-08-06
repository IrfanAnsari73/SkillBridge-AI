import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const About = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-5xl font-bold text-green-600">
                    About SkillBridge AI
                </h1>

                <p className="mt-6 max-w-3xl text-lg text-gray-600">
                    SkillBridge AI is a Student Career & Portfolio Management System
                    where students can manage their profile, skills, projects,
                    certificates, resume and portfolio in one place.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default About;