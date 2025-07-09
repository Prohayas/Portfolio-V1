"use client";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import FadeContent from "./FadeContent";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = ["about", "experience", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useLayoutEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);
  return (
    <header className="mt-16">
      <nav>
        <ul>
          <FadeContent
            duration={1000}
            easing="ease-in-out"
            initialOpacity={0}
            delay={100}
            className="flex flex-col text-text-brown gap-y-5 uppercase text-xs tracking-wider font-bold"
          >
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
          </FadeContent>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
