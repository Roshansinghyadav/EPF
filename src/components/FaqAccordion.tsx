"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/constants/content";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="glass-panel rounded-luxury overflow-hidden transition-all duration-300 hover:border-brand-blue/45"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
            >
              <span className="font-semibold text-black md:text-lg transition-colors group-hover:text-brand-blue font-sans pr-4">
                {item.question}
              </span>
              <span className={`w-8 h-8 rounded-full bg-brand-gray-bg border border-brand-blue/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 border-brand-blue" : ""}`}>
                <svg
                  className="w-4 h-4 text-brand-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-60 border-t border-brand-gray-border" : "max-h-0"
              }`}
            >
              <div className="p-6 text-sm md:text-base text-black/75 leading-relaxed bg-brand-gray-light/30">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
