"use client";

import FadeContent from "@/components/FadeContent";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-4 px-5 mt-20 lg:mt-0 ">
      <h2 className=" lg:sr-only block text-text-white text-sm font-bold uppercase tracking-wide">
        About Me
      </h2>
      <FadeContent>
        <p className="text-text-brown text-lg font-light eading-relaxed">
          I&#39;m a <strong>junior</strong> full stack developer passionate
          about building clean, fast, and accessible web applications. My main
          focus is crafting full-featured apps using technologies like{" "}
          <strong>Laravel, React, and Tailwind CSS</strong>.
        </p>
        <p className="text-text-brown text-lg font-light eading-relaxed mt-5">
          I’ve work on my capstone project for the{" "}
          <strong> Office of the Research, Innovation, and Extension </strong>{" "}
          in our{" "}
          <a href="https://www.lnu.edu.ph/" target="_blank">
            <strong className="decoration-dotted underline hover:text-text-white">
              university
            </strong>
          </a>{" "}
          — where I’ve developed both the front-end UI and back-end logic.
        </p>
        <p className="text-text-brown text-lg font-light leading-relaxed mt-5">
          Outside of code, I enjoy exploring minimalist web design, learning new
          tech stacks, and diving into creative side projects. When I&#39;m not
          at my desk, you can probably find me hanging out with my friends, or
          getting way too invested in single-player RPGs.
        </p>
      </FadeContent>

      <a
        href="https://drive.google.com/file/d/12Or_VbCy3zkuCXhjKyddiGOucG7F-UkM/view?usp=sharing"
        target="_blank"
        className="text-text-white flex items-end gap-1 mt-18 group"
      >
        <p className="group-hover:underline hover:text-text-hover">
          View my Résumé
        </p>
        <Icon
          icon="iconamoon:arrow-top-right-1"
          className="size-5 cursor-pointer transition-transform group-hover:text-text-hover group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </section>
  );
};

export default About;
