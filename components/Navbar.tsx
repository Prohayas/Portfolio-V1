"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <header className="mt-16">
      <nav>
        <ul className="flex flex-col text-text-brown gap-y-5 uppercase text-xs tracking-wider font-bold">
          <li>
            <a
              href="#about"
              className={`flex items-center gap-3 transition-colors duration-200 ${
                activeSection === "about"
                  ? "text-text-white"
                  : "hover:text-text-hover"
              }`}
              onClick={() => setActiveSection("about")}
            >
              <span
                className={`w-2 h-px transition-all duration-200 ${
                  activeSection === "about"
                    ? "bg-text-white w-8"
                    : "bg-transparent"
                }`}
              />
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`flex items-center gap-3 transition-colors duration-200 ${
                activeSection === "experience"
                  ? "text-text-white"
                  : "hover:text-text-hover"
              }`}
              onClick={() => setActiveSection("experience")}
            >
              <span
                className={`w-2 h-px transition-all duration-200 ${
                  activeSection === "experience"
                    ? "bg-text-white w-8"
                    : "bg-transparent"
                }`}
              />
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`flex items-center gap-3 transition-colors duration-200 ${
                activeSection === "contact"
                  ? "text-text-white"
                  : "hover:text-text-hover"
              }`}
              onClick={() => setActiveSection("contact")}
            >
              <span
                className={`w-2 h-px transition-all duration-200 ${
                  activeSection === "contact"
                    ? "bg-text-white w-8"
                    : "bg-transparent"
                }`}
              />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
