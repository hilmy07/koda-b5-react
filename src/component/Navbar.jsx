import React from "react";

function Navbar() {
  return (
    <>
      <header className="p-5 bg-gray-800 text-white flex justify-between items-center my-8 mx-12 rounded-2xl">
        <h1 className="font-medium">Hilmy</h1>
        <nav className="flex gap-4">
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
