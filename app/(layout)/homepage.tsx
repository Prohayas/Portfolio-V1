import BlurText from "@/components/BlurText";
import DecryptedText from "@/components/DecryptedText";
import Navbar from "@/components/Navbar";
import React from "react";

const Homepage = () => {
  return (
    <section
      id="home"
      className="flex flex-col px-5 items-start gap-y-4 justify-start max-w-lg"
    >
      <DecryptedText
        text="Melbienri Gabitan"
        className="text-4xl text-text-white font-bold"
        animateOn="view"
        sequential
        speed={100}
        animate
      />
      <DecryptedText
        text="Full Stack Web Developer"
        className="text-2xl text-text-white font-semibold"
        animateOn="view"
        sequential
        speed={100}
        animate
      />

      <BlurText
        animateBy="words"
        text="Junior developer with hands-on experience building dynamic, responsive, and scalable web solutions."
        direction="bottom"
        delay={150}
        className="text-text-brown"
      />

      <div className="hidden lg:block">
        <Navbar />
      </div>
    </section>
  );
};

export default Homepage;
