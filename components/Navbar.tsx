import React from "react";

const Navbar = () => {
  return (
    <header className="mt-16">
      <nav>
        <ul className="flex flex-col text-text-brown gap-y-5 uppercase text-xs tracking-wider font-bold">
          <li>
            <a href="#home" className=" hover:text-text-white">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className=" hover:text-text-white">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className=" hover:text-text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
