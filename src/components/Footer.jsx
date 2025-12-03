import React from "react";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import vector from "../assets/vector.png";

function Footer() {
  return (
    <>
      <footer className="relative mt-32 pb-72">
        {/* Social Icons */}
        <div className="flex justify-center gap-8 relative z-10 mb-3">
          <a href="https://www.instagram.com/hilmy98/" target="_blank">
            <img
              src={instagram}
              alt="instagram"
              className="w-8 h-8 object-contain hover:scale-110 transition"
            />
          </a>

          <a href="https://www.linkedin.com/in/m-hilmy/" target="_blank">
            <img
              src={linkedin}
              alt="linkedin"
              className="w-8 h-8 object-contain hover:scale-110 transition"
            />
          </a>

          <a href="https://mail.google.com/" target="_blank">
            <img
              src={email}
              alt="mail"
              className="w-8 h-8 object-contain hover:scale-110 transition"
            />
          </a>
        </div>

        {/* Text */}
        <div className="flex justify-center relative z-10">
          <p className="text-gray-700 text-sm">
            Muhammad Hilmy Haidar Aly 2025
          </p>
        </div>

        {/* Footer Wave */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <img src={vector} alt="footer" className="w-full" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
