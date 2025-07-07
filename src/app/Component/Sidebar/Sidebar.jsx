 https://flowbite.com/docs/components/sidebar/

 "use client";
import React, { useState } from "react";
import { Home, User, Settings } from "lucide-react"; // or use your icon library
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-screen bg-gray-800 text-white p-4 transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 focus:outline-none"
      >
        ☰
      </button>

      {/* Sidebar Items */}
      <div className="space-y-4">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
            <Home size={20} />
            {isOpen && <span>Home</span>}
          </div>
        </Link>

        <Link href="/profile">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
            <User size={20} />
            {isOpen && <span>Profile</span>}
          </div>
        </Link>

        <Link href="/settings">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
            <Settings size={20} />
            {isOpen && <span>Settings</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};



    


export default Sidebar  

