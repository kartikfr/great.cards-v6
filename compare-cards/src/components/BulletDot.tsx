"use client";

interface BulletDotProps {
  color?: string;
  className?: string;
}

export default function BulletDot({ color = "#454545", className = "" }: BulletDotProps) {
  return (
    <span
      className={`inline-block shrink-0 rounded-full mt-[5px] lg:mt-[6px] ${className}`}
      style={{
        width: 5,
        height: 5,
        backgroundColor: color,
      }}
    />
  );
}
