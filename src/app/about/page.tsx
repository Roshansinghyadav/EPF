import React from "react";
import { INTRO_ABOUT_CONTENT, ABOUT_CONTENT, HISTORY_CONTENT, JOURNEY_IN_BRIEF_CONTENT } from "@/constants/content";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-[90vh] bg-white text-black font-sans pb-24">
      {/* Background Mesh */}
      <div className="bg-mesh top-10 left-10 bg-brand-blue/5" />
      <div className="bg-mesh bottom-10 right-10 bg-brand-blue/5" />

      {/* SECTION 1 – ABOUT US HERO */}
      <div className="relative z-10 border-b border-brand-gray-border bg-white pt-10 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
            ABOUT US
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black font-serif leading-tight max-w-3xl">
            Built to make PF-related processes easier to understand.
          </h1>
          <div className="w-16 h-1 bg-brand-blue rounded-full mt-4" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-6 flex flex-col gap-24 mt-12">
        
        {/* SECTION 2 – ABOUT CONTENT CARD */}
        <section className="w-full">
          <div className="border border-brand-gray-border bg-brand-gray-light p-8 md:p-12 rounded-luxury flex flex-col gap-8 shadow-sm hover:border-brand-blue transition-colors duration-300">
            {INTRO_ABOUT_CONTENT.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-black/95 text-base md:text-lg leading-relaxed font-sans border-l-2 border-brand-blue/30 pl-6 hover:border-brand-blue transition-colors duration-300"
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* SECTION 3 – TEAM & HISTORY */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              TEAM & HISTORY
            </span>
            <div className="w-12 h-1 bg-brand-blue rounded-full mt-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Team Information */}
            <div className="border border-brand-gray-border bg-white p-8 rounded-luxury shadow-sm hover:border-brand-blue transition-colors duration-300 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-black font-serif pb-2 border-b border-brand-gray-border">
                Team Information
              </h3>
              <div className="flex flex-col gap-4 text-black/85 text-base leading-relaxed font-sans">
                {ABOUT_CONTENT.paragraphs.map((para, i) => (
                  <p key={i} className="pl-3 border-l border-brand-blue/20">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Card 2: Company History */}
            <div className="border border-brand-gray-border bg-white p-8 rounded-luxury shadow-sm hover:border-brand-blue transition-colors duration-300 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-black font-serif pb-2 border-b border-brand-gray-border">
                Company History
              </h3>
              <div className="flex flex-col gap-4 text-black/85 text-base leading-relaxed font-sans">
                {HISTORY_CONTENT.paragraphs.map((para, idx) => (
                  <p key={idx} className="pl-3 border-l border-brand-blue/20">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 – YEAR ESTABLISHED */}
        <section className="flex flex-col gap-6 items-center text-center py-4">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
            YEAR ESTABLISHED
          </span>
          <div className="w-16 h-[1px] bg-brand-blue/30 rounded-full" />
          
          <div className="max-w-md w-full mt-4 px-4">
            <div className="border border-brand-gray-border bg-brand-gray-light p-10 rounded-luxury text-center flex flex-col justify-center items-center gap-5 shadow-sm hover:border-brand-blue hover:shadow-md hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group">
              {/* Timeline-style visual element above the year */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-blue/80" />
                <div className="w-10 h-[2px] bg-brand-blue/30" />
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="w-10 h-[2px] bg-brand-blue/30" />
                <div className="w-2 h-2 rounded-full bg-brand-blue/80" />
              </div>
              
              <span className="text-6xl md:text-7xl font-extrabold text-brand-blue font-serif tracking-tight">
                {HISTORY_CONTENT.yearEstablished}
              </span>
              
              <span className="text-sm font-semibold tracking-wide text-black/75">
                Founded in 2019
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 5 – JOURNEY IN BRIEF */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              JOURNEY IN BRIEF
            </span>
            <div className="w-12 h-1 bg-brand-blue rounded-full mt-2" />
          </div>
          
          <div className="border border-brand-gray-border bg-brand-gray-light p-8 md:p-12 rounded-luxury shadow-sm hover:border-brand-blue transition-colors duration-300">
            <p className="text-black/85 text-base md:text-lg leading-relaxed pl-3 border-l-2 border-brand-blue/30 font-sans">
              {JOURNEY_IN_BRIEF_CONTENT.content}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
