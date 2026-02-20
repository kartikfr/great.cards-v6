"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* ========== MOBILE Navbar ========== */}
      <nav className="lg:hidden flex items-center justify-between w-full h-6">
        <Image
          src="/assets/ui/back-arrow.svg"
          alt="Back"
          width={24}
          height={24}
          className="w-6 h-6 shrink-0"
        />
        <div className="flex items-center gap-1">
          <span className="font-semibold text-[16px] text-white tracking-[-0.32px] leading-[1.4]">
            Compare Cards
          </span>
        </div>
        <Image
          src="/assets/ui/hamburger.svg"
          alt="Menu"
          width={22}
          height={22}
          className="w-[22px] h-[22px] shrink-0"
        />
      </nav>

      {/* ========== DESKTOP Navbar ========== */}
      <nav className="hidden lg:flex items-center justify-between w-full h-[46px]">
        {/* Left side: Logo + Brand + Breadcrumb */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/ui/logo.svg"
              alt="Great Card"
              width={32}
              height={32}
              className="w-8 h-8 shrink-0"
            />
            <span className="font-semibold text-base text-white">Great Card</span>
          </div>

          {/* Breadcrumb separator */}
          <div className="w-px h-6 bg-white/30" />

          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-white/70 text-sm font-medium">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span className="text-white/50">&gt;</span>
            <span className="hover:text-white cursor-pointer">Credit Card Selection</span>
            <span className="text-white/50">&gt;</span>
            <span className="text-white font-semibold">Compare Cards</span>
          </div>
        </div>

        {/* Right side: search + hamburger */}
        <div className="flex items-center gap-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/80 cursor-pointer hover:text-white">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <Image
            src="/assets/ui/hamburger.svg"
            alt="Menu"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
      </nav>
    </>
  );
}
