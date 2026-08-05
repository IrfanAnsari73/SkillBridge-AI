const Hero = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">

            <h1 className="text-6xl font-bold text-gray-900">
                Build Your Career with
                <span className="text-blue-600"> SkillBridge AI</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Manage your Resume, Skills, Projects, Certificates and Portfolio
                in one powerful platform.
            </p>

            <div className="mt-10 flex gap-5">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Get Started
                </button>

                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
                    Learn More
                </button>
            </div>

        </div>
    );
};

export default Hero;