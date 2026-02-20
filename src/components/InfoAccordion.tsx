"use client";

import { useState } from "react";
import Image from "next/image";
import { AccordionSection, CardBenefitData } from "@/data/cardData";
import BenefitIcon from "./BenefitIcon";
import BenefitIconWeb from "./BenefitIconWeb";
import BulletDot from "./BulletDot";

interface InfoAccordionProps {
  section: AccordionSection;
  defaultOpen?: boolean;
}

function BenefitCardSide({ data }: { data: CardBenefitData }) {
  return (
    <>
      {/* Subsections (e.g., Flight Benefits, Railway Benefits under Travel) */}
      {data.subsections && data.subsections.length > 0 ? (
        <div className="flex flex-col gap-3 lg:gap-4">
          {data.subsections.map((sub, sIdx) => (
            <div key={sIdx}>
              <p className="text-[10px] lg:text-xs font-medium text-[rgba(76,75,75,0.6)] leading-[1.4] mb-1.5 lg:mb-2">
                {sub.label}
              </p>
              <div className="flex flex-col gap-[6px] lg:gap-2">
                {sub.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-[6px] lg:gap-2">
                    <BulletDot />
                    <span className="text-[10px] lg:text-xs font-medium text-[#404040] leading-[1.4]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Subtitle */}
          {data.subtitle && (
            <p className="text-[10px] lg:text-xs font-medium text-[rgba(76,75,75,0.6)] leading-[1.4] mb-2 lg:mb-3">
              {data.subtitle}
            </p>
          )}

          {/* Content Points */}
          <div className="flex flex-col gap-[6px] lg:gap-2">
            {data.points.map((point, pIdx) => (
              <div key={pIdx} className="flex items-start gap-[6px] lg:gap-2">
                {data.hasCross ? (
                  <Image
                    src="/assets/ui/close-circle.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 mt-[1px] shrink-0"
                  />
                ) : (
                  <BulletDot />
                )}
                <span className="text-[10px] lg:text-xs font-medium text-[#404040] leading-[1.4] whitespace-pre-line">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Tags */}
          {data.tags && (
            <div className="flex flex-wrap gap-1 mt-2">
              {data.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-medium text-[#3c58f9] bg-[#f0f1ff] px-1 py-[2px] rounded-[3.4px]"
                  style={{ border: "0.859px solid rgba(103,157,194,0.09)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default function InfoAccordion({ section, defaultOpen = true }: InfoAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full border-b border-[rgba(0,100,224,0.1)]">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 lg:px-8 bg-[#f3f7fb] h-9 lg:h-[60px] border-b border-[rgba(0,100,224,0.1)] cursor-pointer"
      >
        <span className="font-bold text-[10px] lg:text-xs uppercase tracking-[1px] text-[#343434]">
          {section.title}
        </span>
        <Image
          src="/assets/ui/accordion-chevron.svg"
          alt={isOpen ? "Collapse" : "Expand"}
          width={16}
          height={16}
          className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="w-full">
          {/* Best For Tags Row */}
          {section.bestFor && (
            <div className="flex w-full border-b border-[rgba(0,100,224,0.1)]">
              <div className="flex-1 px-4 py-3 lg:px-8 lg:py-5 border-r border-[#e2edfb]" style={{ borderRightWidth: 0.9 }}>
                <p className="text-[10px] lg:text-xs font-medium text-[rgba(76,75,75,0.6)] leading-[1.4] mb-2">
                  Best For
                </p>
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {section.bestFor.card1Tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] lg:text-xs font-medium text-[#3c58f9] bg-[#f0f1ff] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full leading-[1.4]"
                      style={{ border: "0.859px solid rgba(103,157,194,0.09)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 px-4 py-3 lg:px-8 lg:py-5">
                <p className="text-[10px] lg:text-xs font-medium text-[rgba(76,75,75,0.6)] leading-[1.4] mb-2">
                  Best For
                </p>
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {section.bestFor.card2Tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] lg:text-xs font-medium text-[#3c58f9] bg-[#f0f1ff] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full leading-[1.4]"
                      style={{ border: "0.859px solid rgba(103,157,194,0.09)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Benefits Rows */}
          {section.type === "benefits" && section.benefits?.map((benefit, idx) => (
            <div
              key={idx}
              className="flex w-full border-b border-[rgba(0,100,224,0.1)] last:border-b-0"
            >
              {/* Card 1 Side */}
              <div className="flex-1 px-4 py-3 lg:px-8 lg:py-5 border-r border-[#e2edfb]"
                style={{ borderRightWidth: 0.9 }}
              >
                {/* Benefit Title with Icon */}
                <div className="flex items-center gap-[6px] lg:gap-3 mb-2 lg:mb-3">
                  <div className="lg:hidden">
                    <BenefitIcon type={benefit.type} />
                  </div>
                  <div className="hidden lg:block">
                    <BenefitIconWeb type={benefit.type} />
                  </div>
                  <span className="text-xs lg:text-base font-semibold text-[#4c4b4b] leading-[1.4]">
                    {benefit.title}
                  </span>
                </div>

                <BenefitCardSide data={benefit.card1} />
              </div>

              {/* Card 2 Side */}
              <div className="flex-1 px-4 py-3 lg:px-8 lg:py-5">
                {/* Benefit Title with Icon */}
                <div className="flex items-center gap-[6px] lg:gap-3 mb-2 lg:mb-3">
                  <div className="lg:hidden">
                    <BenefitIcon type={benefit.type} />
                  </div>
                  <div className="hidden lg:block">
                    <BenefitIconWeb type={benefit.type} />
                  </div>
                  <span className="text-xs lg:text-base font-semibold text-[#4c4b4b] leading-[1.4]">
                    {benefit.title}
                  </span>
                </div>

                <BenefitCardSide data={benefit.card2} />
              </div>
            </div>
          ))}

          {/* Fees Rows - 2-column stacked layout matching screenshot */}
          {section.type === "fees" && section.fees?.map((fee, idx) => (
            <div
              key={idx}
              className={`flex w-full border-b border-[rgba(0,100,224,0.1)] last:border-b-0 ${
                idx % 2 === 0 ? "bg-white" : "bg-[#f9fbfe]"
              }`}
            >
              {/* Card 1 Value */}
              <div className="flex-1 px-4 py-3 lg:px-8 lg:py-4 border-r border-[#e2edfb]"
                style={{ borderRightWidth: 0.9 }}
              >
                <p className="text-[10px] lg:text-xs font-medium text-[rgba(76,75,75,0.6)] leading-[1.4] mb-1">
                  {fee.label}
                </p>
                <span className="text-xs lg:text-sm font-semibold text-[#1c2a33] leading-[1.4] whitespace-pre-line">
                  {fee.card1Value}
                </span>
              </div>

              {/* Card 2 Value */}
              <div className="flex-1 px-4 py-3 lg:px-8 lg:py-4">
                <p className="text-[10px] lg:text-xs font-medium text-[rgba(76,75,75,0.6)] leading-[1.4] mb-1">
                  {fee.label}
                </p>
                <span className="text-xs lg:text-sm font-semibold text-[#1c2a33] leading-[1.4] whitespace-pre-line">
                  {fee.card2Value}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
