import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="fixed z-15 top-0 w-full bg-blue shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">Hilmy</h1>

      <nav className="flex gap-6">
        <Link
          to="/about"
          className="text-gray-600 hover:text-blue-600 transition font-medium"
        >
          About
        </Link>

        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 transition font-medium"
        >
          Projects
        </Link>

        <Link
          to="/review"
          className="text-gray-600 hover:text-blue-600 transition font-medium"
        >
          Review
        </Link>
      </nav>
    </header>
  );
}

export default Header;
