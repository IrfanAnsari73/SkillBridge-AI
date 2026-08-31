import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center mb-8">

            {/* Search */}
            <input
                type="text"
                placeholder="🔍 Search..."
                className="border border-gray-300 rounded-lg px-4 py-2 w-72 outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* User Info + Logout */}
            <div className="flex items-center gap-5">

                <div className="text-right">
                    <h3 className="font-semibold text-lg">
                        Irfan Ansari
                    </h3>

                    <p className="text-sm text-gray-500">
                        Student
                    </p>
                </div>

                <img
                    src="https://ui-avatars.com/api/?name=Irfan+Ansari&background=16a34a&color=fff"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />

                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Logout
                </button>

            </div>

        </div>
    );
};

export default Topbar;