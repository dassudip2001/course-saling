import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="bg-gray-900 text-white w-64 min-h-screen">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <ul className="mt-4">
            <li className="py-2">
              <Link
                to="/dashboard"
                className="block text-gray-400 hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li className="py-2">
            <Link
                to="/course"
                className="block text-gray-400 hover:text-white"
              >
                Course
              </Link>
            </li>
            <li className="py-2">
              <a href="#" className="block text-gray-400 hover:text-white">
                Customers
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="block text-gray-400 hover:text-white">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
