import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">

            <Sidebar />

            <div className="flex-1 bg-gray-100 p-8">

                <Topbar />

                {children}

            </div>

        </div>
    );
};

export default DashboardLayout;