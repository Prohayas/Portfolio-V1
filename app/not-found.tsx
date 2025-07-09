"use client";

import DecryptedText from "@/components/DecryptedText";
import React from "react";

const notFound = () => {
  return (
    <main className="relative flex justify-center items-center min-h-screen px-6 lg:px-8">
      <DecryptedText
        className="text-2xl md:text-5xl font-bold text-text-hover"
        text="404 | Page not found."
        animateOn="view"
        animate
        sequential
        speed={100}
      />
    </main>
  );
};

export default notFound;
