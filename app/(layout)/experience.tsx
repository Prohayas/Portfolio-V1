import ExperienceCard from "@/components/ExperienceCard";
import { experienceData } from "@/constants/data";
import React from "react";

const Experience = () => {
  return (
    <section className="mt-20">
      <ExperienceCard {...experienceData[0]} />
    </section>
  );
};

export default Experience;
