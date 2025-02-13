import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X ,FilePlus,FolderOpen} from "lucide-react"; 

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed lg:relative z-10 w-64 bg-white shadow-md lg:shadow-none border-r transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0`}
      >
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-700">Media Dashboard</h2>
        </div>
        <nav className="space-y-2 px-5">
          <Link
            to="/dashboard/add-media"
            className="flex items-center gap-2 px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
          >
            <FilePlus size={20} /> Add Media File
          </Link>
          <Link
            to="/dashboard/all-media"
            className="flex items-center gap-2 px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
          >
            <FolderOpen size={20} /> See All Media Files
          </Link>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b">
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-gray-500 text-white px-2 py-2 rounded hover:bg-gray-600"
          >
            Logout
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
