import React from "react";
import Card from "@/components/Card";
import { SERVICES_CONTENT } from "@/constants/content";

function getServiceIcon(category: string) {
  switch (category) {
    case "PF Claims & Pension":
      return (
        <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12a10.06 10.06 0 0 0-20 0Z" />
          <path d="M12 12v8a2 2 0 0 0 4 0" />
          <path d="M12 2v1" />
        </svg>
      );
    case "UAN & KYC Updates":
      return (
        <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "Profile Corrections":
      return (
        <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "PF Transfers & History":
      return (
        <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}

export default function ServicesPage() {
  // Get unique categories
  const categories = Array.from(new Set(SERVICES_CONTENT.map(s => s.category)));

  return (
    <div className="relative w-full pt-10 pb-20 px-6 overflow-hidden bg-white text-black min-h-[80vh]">
      {/* Background Glow */}
      <div className="bg-mesh top-20 right-20 bg-brand-blue/5" />
      <div className="bg-mesh bottom-20 left-20 bg-brand-blue/5" />

      <div className="max-w-7xl mx-auto relative z-10 mt-0">
        {/* Page Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
            Services
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-black font-serif leading-tight">
            Employee PF & <span className="blue-text-gradient">Pension Services</span>
          </h1>
          <p className="text-brand-text-muted text-sm md:text-base max-w-xl font-medium">
            EPFGenie provides structured support and clear pathways for navigating complex PF-related procedures. We offer guidance on a comprehensive range of 38 specialized services.
          </p>
          <div className="w-24 h-1 bg-brand-blue rounded-full" />
        </div>

        {/* Categorized Services List */}
        <div className="flex flex-col gap-20">
          {categories.map((cat, catIdx) => {
            const catServices = SERVICES_CONTENT.filter(s => s.category === cat);
            const isEven = catIdx % 2 === 0;

            return (
              <div
                key={cat}
                className={`p-8 md:p-12 rounded-luxury-lg border border-brand-gray-border ${
                  isEven ? "bg-brand-gray-light/65" : "bg-white"
                } shadow-sm`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-brand-gray-border pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-luxury bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                      {getServiceIcon(cat)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-black font-serif">
                        {cat}
                      </h2>
                      <p className="text-xs text-brand-text-muted mt-1 uppercase font-semibold tracking-widest">
                        Category {catIdx + 1}
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 text-brand-blue rounded-full text-xs font-bold w-fit">
                    {catServices.length} Specialized Services
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((svc) => (
                    <Card key={svc.id}>
                      <div className="flex flex-col gap-3 h-full justify-between">
                        <div>
                          <h3 className="text-base font-bold text-black group-hover:text-brand-blue font-sans mb-2">
                            {svc.title}
                          </h3>
                          <p className="text-black/70 text-sm leading-relaxed">
                            {svc.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Upcoming Section Placement */}
        <div className="mt-24 text-center flex flex-col items-center gap-4">
          <span className="text-xs font-bold text-brand-text-muted uppercase tracking-widest block">
            Custom Consultation Options
          </span>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/10 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase">
            Additional Support Channels Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}
