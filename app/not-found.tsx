"use client";

import FuzzyText from "@/components/FuzzyText";
import React from "react";

const notFound = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <FuzzyText
        color="#ff3cac"
        baseIntensity={0.1}
        hoverIntensity={0.2}
        fontSize={72}
      >
        404 | Page not found.
      </FuzzyText>
    </div>
  );
};

export default notFound;
