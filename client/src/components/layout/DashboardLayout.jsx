import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen overflow-hidden bg-gray-100">

            {/* =========================
                FIXED SIDEBAR
            ========================= */}

            <aside className="fixed left-0 top-0 bottom-0 w-64 z-50">
                <Sidebar />
            </aside>


            {/* =========================
                RIGHT SIDE APPLICATION AREA
            ========================= */}

            <div className="ml-64 h-screen min-w-0">

                {/* =========================
                    FIXED TOPBAR
                ========================= */}

                <header className="fixed top-0 left-64 right-0 z-40 bg-gray-100 px-8 pt-8">
                    <Topbar />
                </header>


                {/* =========================
                    SCROLLABLE MAIN CONTENT
                ========================= */}

                <main className="h-screen w-full min-w-0 overflow-y-auto overflow-x-hidden px-8 pt-32 pb-8">

                    {children}

                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;