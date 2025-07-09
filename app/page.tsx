"use client";

import React from "react";
import About from "./(layout)/about";
import Experience from "./(layout)/experience";
import Contact from "./(layout)/contact";
import Homepage from "./(layout)/homepage";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="relative grid grid-cols-1 px-3 lg:px-0 lg:grid-cols-2 mt-20 gap-4 max-w-7xl mx-auto">
        <div className="lg:sticky lg:top-20 lg:h-fit">
          <Homepage />
          <Footer />
        </div>
        <div>
          <About />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
