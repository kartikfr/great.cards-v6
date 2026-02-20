"use client";

import Image from "next/image";
import { BenefitType, benefitIcons } from "@/data/cardData";

interface BenefitIconProps {
  type: BenefitType;
  className?: string;
}

export default function BenefitIcon({ type, className = "" }: BenefitIconProps) {
  const icons = benefitIcons[type];

  return (
    <div className={`relative shrink-0 ${className}`}
      style={{ width: 36, height: 36 }}
    >
      <Image
        src={icons.bg}
        alt=""
        width={36}
        height={36}
        className="absolute inset-0 w-full h-full"
      />
      <Image
        src={icons.icon}
        alt={type.replace(/_/g, " ")}
        width={14}
        height={14}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
