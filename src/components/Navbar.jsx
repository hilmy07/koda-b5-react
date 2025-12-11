import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import bahlil from "../assets/bahliil.jpeg";

function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isLogin = state.isLogin;
  const user = state.user;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/auth/login");
    setOpen(false);
  };

  const navLinks = (
    <>
      <Link
        to="/home"
        className="hover:text-gray-300"
        onClick={() => setOpen(false)}
      >
        About
      </Link>
      <Link
        to="/product"
        className="hover:text-gray-300"
        onClick={() => setOpen(false)}
      >
        Product
      </Link>
      <Link
        to="/characters"
        className="hover:text-gray-300"
        onClick={() => setOpen(false)}
      >
        Character
      </Link>

      {isLogin ? (
        <div className="flex items-center gap-3">
          {user?.profile_photo && (
            <img
              src={bahlil}
              alt="bahlil"
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          <span>{user?.username}</span>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-500 rounded-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/auth/login"
          className="px-3 py-1 bg-blue-500 rounded-md"
          onClick={() => setOpen(false)}
        >
          Login
        </Link>
      )}
    </>
  );

  return (
    <header className="p-5 bg-gray-800 text-white mx-0 mx-12 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Rick & Morty</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 items-center">{navLinks}</nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-6 bg-white rounded transition-transform duration-200 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded transition-transform duration-200 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mt-4 flex flex-col gap-3 md:hidden">{navLinks}</nav>
      )}
    </header>
  );
}

export default Navbar;
