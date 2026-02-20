"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import NavigationPills from "@/components/NavigationPills";
import CardToCompare from "@/components/CardToCompare";
import InfoAccordion from "@/components/InfoAccordion";
import { cards, accordionSections } from "@/data/cardData";

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* ==================== TOP SECTION (Gradient Hero) ==================== */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(116.4deg, rgb(66, 82, 222) 0.78%, rgb(70, 83, 223) 25.57%, rgb(82, 88, 224) 49.4%, rgb(82, 142, 234) 102%)",
        }}
      >
        {/* Diagonal overlay for right side */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(217,217,217,0) 54%, rgba(189,189,189,0.2))",
          }}
        />

        <div className="relative z-10 flex flex-col px-3 py-4 lg:py-0 max-w-[1440px] mx-auto w-full">
          {/* ---- Desktop: Top padded area ---- */}
          <div className="hidden lg:block px-5 pt-8 pb-4">
            <Navbar />
          </div>

          {/* ---- Mobile: Top nav ---- */}
          <div className="lg:hidden mb-3">
            <Navbar />
          </div>

          {/* ---- Page Title (Desktop) ---- */}
          <div className="hidden lg:flex items-center justify-center py-3">
            <h1 className="text-xl font-semibold text-white tracking-[-0.32px]">
              Compare Credit Cards
            </h1>
          </div>

          {/* ---- Navigation Pills ---- */}
          <div className="lg:px-[126px] mb-3 lg:mb-4">
            <NavigationPills />
          </div>

          {/* ---- Cards to Compare ---- */}
          <div className="flex gap-[30px] px-4 pb-4 lg:px-8 lg:pb-8 lg:gap-0">
            <div className="flex-1 flex items-center gap-2 lg:py-3 lg:border-r lg:border-white/15 lg:pr-6">
              <CardToCompare
                name={cards[0].name}
                image={cards[0].image}
                shine={cards[0].shine}
                bestFor={cards[0].bestFor}
              />
            </div>
            <div className="flex-1 flex items-center gap-2 lg:py-3 lg:pl-6">
              <CardToCompare
                name={cards[1].name}
                image={cards[1].image}
                shine={cards[1].shine}
                bestFor={cards[1].bestFor}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==================== COMPARE TABLE ==================== */}
      <div className="w-full pb-[72px] lg:pb-0 max-w-[1440px] mx-auto">
        {accordionSections.map((section, index) => (
          <InfoAccordion
            key={section.id}
            section={section}
            defaultOpen={index < 2}
          />
        ))}
      </div>

      {/* ==================== MOBILE APPLY BUTTONS (fixed bottom bar) ==================== */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 bg-white flex items-center justify-center gap-6 px-4 py-3 z-50"
        style={{
          boxShadow: "0px -2px 8px 0px rgba(0,0,0,0.16)",
        }}
      >
        <button
          className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg font-semibold text-sm text-[#0064e0] bg-[#edf4fd] cursor-pointer"
          style={{ border: "1px solid rgba(0,100,224,0.2)" }}
        >
          <Image
            src="/assets/ui/checkmark.svg"
            alt=""
            width={14}
            height={14}
            className="w-3.5 h-3.5"
          />
          Added
        </button>
        <button
          className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg font-semibold text-sm text-[#0064e0] bg-[#edf4fd] cursor-pointer"
          style={{ border: "1px solid rgba(0,100,224,0.2)" }}
        >
          <Image
            src="/assets/ui/checkmark.svg"
            alt=""
            width={14}
            height={14}
            className="w-3.5 h-3.5"
          />
          Added
        </button>
      </div>
    </div>
  );
}
