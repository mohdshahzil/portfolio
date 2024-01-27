"use client";
import React, { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const textClass = isExpanded ? "line-clamp-none" : "line-clamp-3";

  return (
    <div className="md:p-14 p-3 flex flex-col gap-6">
      <div className="text-4xl">About</div>
      <div
        className={`text-[#848484] text-2xl text-justify ${textClass}`}
        onClick={toggleExpansion}
      >
        My journey into the vast realm of coding started with a curious mind and
        a passion for turning lines of code into something extraordinary. From
        those early days of HTML and CSS, I've evolved into a full stack
        maestro, bridging the gap between the front-end dazzle and the back-end
        wizardry.
      </div>
    </div>
  );
}
