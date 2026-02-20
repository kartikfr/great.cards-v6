"use client";

import Image from "next/image";

interface CardToCompareProps {
  name: string;
  image: string;
  shine: string;
  bestFor?: string[];
}

export default function CardToCompare({ name, image, shine, bestFor }: CardToCompareProps) {
  return (
    <div className="flex items-center gap-2 lg:gap-4 flex-1 min-w-0">
      {/* Card image with skew effect */}
      <div
        className="relative shrink-0 rounded-md overflow-hidden w-12 h-8 lg:w-[80px] lg:h-[52px]"
        style={{
          transform: "skewY(-0.27deg)",
          border: "0.2px solid rgba(255,255,255,0.2)",
        }}
      >
        <Image
          src={image}
          alt={name}
          width={80}
          height={52}
          className="w-full h-full object-cover"
          style={{ transform: "skewY(0.27deg)" }}
        />
        <Image
          src={shine}
          alt=""
          width={90}
          height={45}
          className="absolute inset-0 w-full h-full object-cover mix-blend-plus-lighter"
          style={{ transform: "skewY(0.27deg)" }}
        />
      </div>

      {/* Card name + Best For */}
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-[10px] font-medium text-white leading-[1.4] line-clamp-2 max-w-[94px] lg:max-w-none lg:text-sm lg:font-semibold">
          {name}
        </span>

        {/* Best For tags - Desktop only */}
        {bestFor && bestFor.length > 0 && (
          <div className="hidden lg:flex flex-wrap gap-1">
            {bestFor.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium text-white/80 bg-white/15 px-2 py-[1px] rounded-full leading-[1.4]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
