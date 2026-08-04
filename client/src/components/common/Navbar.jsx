const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">SkillBridge AI</h1>

                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;