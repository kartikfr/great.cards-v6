"use client";

import Image from "next/image";
import { BenefitType, benefitIcons } from "@/data/cardData";

interface BenefitIconWebProps {
  type: BenefitType;
  className?: string;
}

export default function BenefitIconWeb({ type, className = "" }: BenefitIconWebProps) {
  const icons = benefitIcons[type];

  return (
    <div className={`relative shrink-0 ${className}`}
      style={{ width: 48, height: 48 }}
    >
      <Image
        src={icons.bg}
        alt=""
        width={48}
        height={48}
        className="absolute inset-0 w-full h-full"
      />
      <Image
        src={icons.icon}
        alt={type.replace(/_/g, " ")}
        width={20}
        height={20}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
