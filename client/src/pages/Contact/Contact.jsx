import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Contact = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-[80vh] flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-blue-600">
                    Contact Us
                </h1>

                <p className="mt-4 text-gray-600">
                    Email: support@skillbridgeai.com
                </p>

                <p className="text-gray-600">
                    Phone: +91 7376583770
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Contact;