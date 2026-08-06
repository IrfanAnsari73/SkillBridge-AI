import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">SkillBridge AI</h1>

                <ul className="flex gap-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;