const Features = () => {
    const features = [
        {
            title: "Resume Management",
            description: "Upload and manage your resume easily."
        },
        {
            title: "Project Showcase",
            description: "Display all your projects in one place."
        },
        {
            title: "Certificate Storage",
            description: "Store and organize your certificates."
        },
        {
            title: "Skill Tracking",
            description: "Keep your technical skills updated."
        },
        {
            title: "AI Career Guidance",
            description: "Get future AI-powered career suggestions."
        }
    ];

    return (
        <section className="py-20 bg-gray-100">

            <h2 className="text-4xl font-bold text-center mb-12">
                Our Features
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-semibold text-green-600">
                            {feature.title}
                        </h3>

                        <p className="mt-3 text-gray-600">
                            {feature.description}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default Features;