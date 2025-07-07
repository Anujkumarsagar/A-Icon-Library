'use client';

import React, { useState } from 'react';
import { Menu, X, Home, Folder, Upload, Info } from 'lucide-react';

const SidebarNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Just the Menu Icon on top-left */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 text-gray-800"
      >
        <Menu size={28} />
      </button>

      {/* Sidebar (No black background) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-3 bg-gray-900">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-4 px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <Home size={18} /> Home
          </a>
          <a href="#" className="flex items-center gap-2">
            <Folder size={18} /> Categories
          </a>
          <a href="#" className="flex items-center gap-2">
            <Upload size={18} /> Upload Icons
          </a>
          <a href="#" className="flex items-center gap-2">
            <Info size={18} /> About
          </a>
        </div>
      </div>

      {/* Optional page content */}
      <div className="pt-20 px-4">
        <p>Page content goes here.</p>
      </div>
    </>
  );
};

export default SidebarNavbar;
