"use client";
import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

type NavbarProps = {
  activeSection: string;
};
const Navbar = ({ activeSection }: NavbarProps) => {
  return (
    <header className="mt-16">
      <nav>
        <ul className="flex flex-col text-text-brown gap-y-5 uppercase text-xs tracking-wider font-bold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`flex items-center gap-3 transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-text-white"
                    : "hover:text-text-hover"
                }`}
              >
                <span
                  className={`w-2 h-px transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "bg-text-white w-8"
                      : "bg-transparent"
                  }`}
                />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
