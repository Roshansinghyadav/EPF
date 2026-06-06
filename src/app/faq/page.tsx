"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/constants/content";

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full pt-10 pb-20 px-6 overflow-hidden bg-white text-black min-h-[85vh]">
      {/* Background Glow */}
      <div className="bg-mesh top-10 right-10 bg-brand-blue/5" />
      <div className="bg-mesh bottom-10 left-10 bg-brand-blue/5" />

      <div className="max-w-4xl mx-auto relative z-10 mt-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
            FAQ
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-black font-serif leading-tight">
            Frequently Asked <span className="blue-text-gradient">Questions</span>
          </h1>
          <p className="text-brand-text-muted text-sm md:text-base max-w-xl font-medium">
            Quick answers to help you understand how EPFGenie works and what is required for PF support.
          </p>
          <div className="w-24 h-1 bg-brand-blue rounded-full" />
        </div>

        {/* Search Input */}
        <div className="w-full max-w-2xl mx-auto mb-12 relative">
          <input
            type="text"
            placeholder="Search FAQs (e.g. documents, EPFO, rejected)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-gray-light border border-brand-gray-border hover:border-brand-blue/30 focus:border-brand-blue rounded-luxury px-6 py-4 text-black focus:outline-none transition-all text-sm md:text-base pl-12 shadow-sm"
          />
          <svg
            className="w-5 h-5 text-brand-blue absolute left-4 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* FAQ List */}
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => {
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
                    <span
                      className={`w-8 h-8 rounded-full bg-brand-gray-bg border border-brand-blue/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 border-brand-blue" : ""
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-brand-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-60 border-t border-brand-gray-border" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 text-sm md:text-base text-black/75 leading-relaxed bg-brand-gray-light/35">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-brand-text-muted">
              No matching FAQs found. Please try another search term.
            </div>
          )}
        </div>

        {/* Upcoming Section Placement */}
        <div className="mt-20 text-center flex flex-col items-center gap-4">
          <span className="text-xs font-bold text-brand-text-muted uppercase tracking-widest block">
            Self-Help Documentation Center
          </span>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/10 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase">
            Knowledge Base Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}
