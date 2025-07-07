import ExperienceCard from "@/components/ExperienceCard";
import { experienceData } from "@/constants/data";
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="mt-20">
      <h2 className=" lg:sr-only block px-5 text-text-white text-sm font-bold uppercase tracking-wide">
        my experience
      </h2>
      <ol>
        {experienceData.map((item, index) => (
          <li key={index}>
            <ExperienceCard {...item} />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
