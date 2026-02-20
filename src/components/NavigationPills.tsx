"use client";

import { useState } from "react";
import { navigationPills } from "@/data/cardData";

export default function NavigationPills() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="flex gap-2 lg:gap-3 overflow-x-auto hide-scrollbar py-3 px-4 lg:py-3 lg:px-6 bg-white rounded-2xl"
      style={{
        boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.25)",
      }}
    >
      {navigationPills.map((pill, index) => (
        <button
          key={pill}
          onClick={() => setActiveIndex(index)}
          className={`
            shrink-0 rounded-2xl whitespace-nowrap transition-colors cursor-pointer
            px-3 py-2 text-xs font-semibold leading-4
            lg:px-5 lg:py-3 lg:text-sm lg:leading-5
            ${
              index === activeIndex
                ? "bg-black text-white"
                : "bg-white text-[#0064e0] border border-[rgba(0,100,224,0.2)]"
            }
          `}
        >
          {pill}
        </button>
      ))}
    </div>
  );
}
