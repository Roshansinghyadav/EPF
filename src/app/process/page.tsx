import React from "react";
import { PROCESS_STEPS } from "@/constants/content";

export default function ProcessPage() {
  return (
    <div className="relative w-full pt-10 pb-20 px-6 overflow-hidden bg-white text-black min-h-[80vh]">
      {/* Background Glow */}
      <div className="bg-mesh top-20 left-20 bg-brand-blue/5" />
      <div className="bg-mesh bottom-20 right-20 bg-brand-blue/5" />

      <div className="max-w-4xl mx-auto relative z-10 mt-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
            Our Workflow
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-black font-serif leading-tight">
            How We <span className="blue-text-gradient">Guide You</span>
          </h1>
          <p className="text-brand-text-muted text-sm md:text-base max-w-xl font-medium">
            A straightforward process built around clarity, verification, and dedicated follow-up assistance.
          </p>
          <div className="w-24 h-1 bg-brand-blue rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-brand-blue/20 ml-4 md:ml-32 space-y-12 pb-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative pl-8 md:pl-16 group">
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-brand-blue/55 text-brand-blue flex items-center justify-center font-bold text-sm font-serif shadow-lg group-hover:border-brand-blue transition-colors duration-300">
                {step.step}
              </div>

              {/* Box Content */}
              <div className="border border-brand-gray-border bg-brand-gray-light p-6 rounded-luxury transition-transform duration-300 hover:translate-x-2 shadow-sm hover:border-brand-blue">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue block mb-2">
                  Phase {step.step}
                </span>
                <p className="text-black/85 text-base md:text-lg leading-relaxed font-sans font-semibold">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Section Placement */}
        <div className="mt-20 text-center flex flex-col items-center gap-4">
          <span className="text-xs font-bold text-brand-text-muted uppercase tracking-widest block">
            Digital Tracking Dashboard
          </span>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/10 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase">
            Customer Dashboard Updates Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}
