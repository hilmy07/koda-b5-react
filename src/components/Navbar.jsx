import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="p-5 bg-gray-800 text-white flex justify-between items-center mx-12 rounded-2xl">
        <h1 className="font-medium">Hilmy</h1>
        <nav className="flex gap-4">
          {/* <a href="#about">About</a>
            <a href="/Product">Product</a>
            <a href="#contact">Contact</a> */}
          <Link to="/home">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/characters">Character</Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
