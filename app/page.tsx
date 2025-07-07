import React from "react";
import About from "./(layout)/about";
import Experience from "./(layout)/experience";
import Contact from "./(layout)/contact";

const page = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default page;
