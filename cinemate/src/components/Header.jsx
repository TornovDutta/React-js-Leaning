import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; 

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Movie Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold tracking-wide">
            Movie<span className="text-red-500">Flix</span>
          </span>
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:block flex-1 mx-8">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white 
                       placeholder-gray-400 focus:outline-none 
                       focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-300 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-300 hover:text-white"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-300 hover:text-white"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Search Bar (Mobile) */}
      <div className="md:hidden px-6 pb-4">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white 
                     placeholder-gray-400 focus:outline-none 
                     focus:ring-2 focus:ring-red-500"
        />
      </div>
    </header>
  );
}
