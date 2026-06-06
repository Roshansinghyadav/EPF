"use client";

import React, { useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import {
  HERO_CONTENT,
  INTRO_ABOUT_CONTENT,
  ABOUT_CONTENT,
  SERVICES_CONTENT,
  WHY_EPFGENIE_CONTENT,
  PROCESS_STEPS,
  CONTACT_DETAILS,
  CITIES_WE_SERVE,
  PRICING_CONTENT,
  HISTORY_CONTENT,
  JOURNEY_IN_BRIEF_CONTENT,
} from "@/constants/content";

// Helper function to return beautiful inline SVGs for Services
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

// Helper function to return beautiful inline SVGs for Features
function getFeatureIcon(index: number) {
  const icons = [
    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="f1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="f2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>,
    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="f3">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>,
    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="f4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ];
  return icons[index] || icons[3];
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("PF Claims & Pension");

  // Get categories from services list dynamically
  const categories = Array.from(new Set(SERVICES_CONTENT.map(s => s.category)));

  // Filter services by active tab
  const filteredServices = SERVICES_CONTENT.filter(s => s.category === activeCategory);

  return (
    <div className="relative w-full overflow-hidden bg-white text-black">
      {/* Background Mesh Glows */}
      <div className="bg-mesh top-10 left-10 bg-brand-blue/5" />
      <div className="bg-mesh top-[800px] right-20 bg-brand-blue/5" />
      <div className="bg-mesh bottom-40 left-1/4 bg-brand-blue/5" />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-12 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7 flex flex-col gap-8 text-left animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/25 bg-brand-blue/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
                Expert PF Assistance
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black leading-tight font-serif">
              Your PF issue deserves <br className="hidden sm:inline" />
              <span className="blue-text-gradient">a clear answer</span>
            </h1>

            {/* Description */}
            <div className="flex flex-col gap-4 max-w-2xl">
              {HERO_CONTENT.descriptionParagraphs.map((para, i) => (
                <p key={i} className="text-black/80 text-base md:text-lg leading-relaxed font-sans">
                  {para}
                </p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold uppercase tracking-wider text-sm rounded-luxury transition-all duration-300 shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/25 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center min-w-[170px]"
              >
                {HERO_CONTENT.buttons.primary}
              </Link>
              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hello%2C%20I%20have%20an%20EPF%20issue%20and%20would%20like%20guidance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase tracking-wider text-sm rounded-luxury transition-all duration-300 shadow-lg shadow-[#25D366]/15 hover:shadow-[#25D366]/25 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 min-w-[170px]"
              >
                {/* Whatsapp Icon */}
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.484 5.355 1.485 5.293.001 9.598-4.3 9.6-9.594.002-2.566-1.002-4.978-2.827-6.804-1.826-1.827-4.24-2.83-6.812-2.83-5.295 0-9.6 4.303-9.604 9.598-.002 2.146.567 4.2 1.649 5.922L2.99 21.082l4.657-1.228zm12.355-5.748c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.518-.164-.734.164-.216.328-.838 1.066-1.025 1.284-.187.218-.375.246-.703.082-.328-.164-1.385-.51-2.637-1.63-1.012-.903-1.696-2.02-1.895-2.348-.198-.328-.021-.506.143-.67.147-.146.328-.382.492-.573.164-.191.218-.328.328-.546.11-.219.055-.41-.028-.573-.082-.164-.734-1.77-.1-2.59-.283-.68-.55-.589-.734-.589-.187-.006-.4-.006-.618-.006-.218 0-.573.082-.873.41-.3.328-1.146 1.12-1.146 2.73s1.173 3.167 1.337 3.385c.164.218 2.308 3.525 5.59 4.95 2.73 1.185 3.324.963 4.514.853 1.19-.11 2.24-.916 2.557-1.802.316-.887.316-1.648.22-1.802-.096-.153-.328-.246-.656-.41z" />
                </svg>
                {HERO_CONTENT.buttons.secondary}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[380px] lg:h-[450px] w-full flex items-center justify-center">
            {/* Visual Abstract Graphic */}
            <div className="w-[300px] h-[300px] rounded-full border border-brand-blue/20 flex items-center justify-center relative bg-brand-gray-bg/50 backdrop-blur-sm animate-[pulse_6s_infinite]">
              <div className="absolute inset-0 border-t-2 border-brand-blue rounded-full rotate-45" />
              <div className="w-[200px] h-[200px] rounded-full border border-brand-blue/30 flex items-center justify-center bg-white shadow-md">
                <div className="absolute inset-4 border-b-2 border-brand-blue rounded-full -rotate-45" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-blue-hover via-brand-blue to-brand-blue/70 flex items-center justify-center shadow-2xl shadow-brand-blue/30">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US / TEAM SECTION */}
      <section className="py-24 px-6 bg-brand-gray-light border-t border-brand-gray-border relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* New About Intro Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
                {INTRO_ABOUT_CONTENT.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight font-serif">
                {INTRO_ABOUT_CONTENT.heading}
              </h2>
              <div className="w-20 h-1 bg-brand-blue rounded-full mt-2" />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 text-black/85">
              {INTRO_ABOUT_CONTENT.paragraphs.map((para, idx) => (
                <p key={idx} className="text-base md:text-lg leading-relaxed font-sans border-l-2 border-brand-blue/20 pl-6 hover:border-brand-blue transition-colors duration-300">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Divider line between Intro and Team info */}
          <div className="border-t border-brand-gray-border/70 my-2" />

          {/* Existing Team Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
                About Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight font-serif">
                {ABOUT_CONTENT.title}
              </h2>
              <div className="w-20 h-1 bg-brand-blue rounded-full mt-2" />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 text-black/85">
              {ABOUT_CONTENT.paragraphs.map((para, idx) => (
                <p key={idx} className="text-base md:text-lg leading-relaxed font-sans border-l-2 border-brand-blue/20 pl-6 hover:border-brand-blue transition-colors duration-300">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY HISTORY & YEAR ESTABLISHED */}
      <section className="py-24 px-6 bg-white border-t border-brand-gray-border relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Statistics Box Left */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start justify-center gap-4">
            <div className="p-8 bg-brand-gray-light border border-brand-gray-border rounded-luxury text-center lg:text-left w-full max-w-sm shadow-md">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-text-muted block mb-1">
                Year Established
              </span>
              <span className="text-7xl font-extrabold text-brand-blue font-serif block tracking-tight">
                {HISTORY_CONTENT.yearEstablished}
              </span>
              <p className="text-xs text-black/60 mt-3 font-medium">
                Providing dedicated and specialized employee Provident Fund services across India.
              </p>
            </div>
          </div>

          {/* History Text Right */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
              {HISTORY_CONTENT.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black font-serif">
              Our Journey in PF Welfare
            </h2>
            <div className="w-20 h-1 bg-brand-blue rounded-full" />
            <div className="flex flex-col gap-4 text-black/80 text-base md:text-lg leading-relaxed font-sans">
              {HISTORY_CONTENT.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOURNEY IN BRIEF */}
      <section className="py-16 px-6 bg-brand-gray-light border-t border-brand-gray-border relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 bg-white border border-brand-gray-border rounded-luxury shadow-md hover:border-brand-blue transition-colors duration-300">
            <h3 className="text-2xl font-bold text-black font-serif mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              {JOURNEY_IN_BRIEF_CONTENT.title}
            </h3>
            <p className="text-black/80 text-base md:text-lg leading-relaxed font-sans pl-2 border-l-2 border-brand-blue/30">
              {JOURNEY_IN_BRIEF_CONTENT.content}
            </p>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-24 px-6 relative z-10 border-t border-brand-gray-border bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif">
              Employee PF & Pension Services
            </h2>
            <p className="text-black/75 text-sm md:text-base max-w-xl">
              Professional, structured guidance tailored to solve your EPF struggles with maximum clarity.
            </p>
            <div className="w-20 h-1 bg-brand-blue rounded-full" />
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto w-full border-b border-brand-gray-border pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                    : "bg-brand-gray-bg text-black hover:bg-brand-blue/10 hover:text-brand-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards Grid for Active Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredServices.map((svc) => (
              <Card key={svc.id}>
                <div className="flex flex-col gap-6 h-full">
                  <div className="w-14 h-14 rounded-luxury bg-brand-gray-bg border border-brand-blue/15 flex items-center justify-center shadow-inner">
                    {getServiceIcon(svc.category)}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-black group-hover:text-brand-blue font-sans">
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

          <div className="text-center mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold uppercase tracking-wider text-xs rounded-luxury transition-all duration-300"
            >
              View All 38 Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY EPFGENIE SECTION */}
      <section className="py-24 px-6 bg-brand-gray-light relative z-10 border-t border-brand-gray-border">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
              Our Core Strengths
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif">
              Why EPFGenie
            </h2>
            <p className="text-black/75 text-sm md:text-base max-w-xl">
              We focus on building trust through transparent assistance and straightforward solutions.
            </p>
            <div className="w-20 h-1 bg-brand-blue rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_EPFGENIE_CONTENT.map((feat, i) => (
              <div
                key={feat.id}
                className="flex flex-col gap-4 p-6 bg-white rounded-luxury border border-brand-gray-border hover:border-brand-blue transition-colors duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
                    {getFeatureIcon(i)}
                  </div>
                  <h3 className="text-lg font-bold text-black font-sans">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-black/70 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-24 px-6 relative z-10 border-t border-brand-gray-border bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif">
              Our Process
            </h2>
            <p className="text-black/75 text-sm md:text-base max-w-xl">
              A clear, step-by-step assistance path designed to remove confusion and deliver guidance.
            </p>
            <div className="w-20 h-1 bg-brand-blue rounded-full" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-brand-blue/10 via-brand-blue/30 to-brand-blue/10 z-0" />

            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center gap-6 relative z-10 group">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-blue/40 text-brand-blue flex items-center justify-center font-bold text-xl font-serif shadow-lg group-hover:border-brand-blue group-hover:scale-105 transition-all duration-300">
                  {String(step.step).padStart(2, "0")}
                </div>
                <p className="text-black/80 text-sm md:text-base leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 bg-brand-gray-light relative z-10 border-t border-brand-gray-border">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
              Pricing Details
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif">
              {PRICING_CONTENT.title}
            </h2>
            <p className="text-black/75 text-sm md:text-base max-w-2xl">
              {PRICING_CONTENT.description}
            </p>
            <div className="w-20 h-1 bg-brand-blue rounded-full" />
          </div>

          <div className="max-w-md mx-auto w-full">
            <Card glow={true}>
              <div className="flex flex-col gap-6">
                <div className="text-center pb-6 border-b border-brand-gray-border">
                  <h3 className="text-2xl font-bold text-black font-serif mb-2">
                    {PRICING_CONTENT.cardTitle}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-bold text-brand-blue uppercase tracking-wider">
                    Risk-Free Valuation
                  </div>
                </div>

                <ul className="space-y-4 my-2">
                  {PRICING_CONTENT.points.map((pt, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-black/75">
                      <svg className="w-5 h-5 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="w-full text-center py-4 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold uppercase tracking-wider text-sm rounded-luxury transition-all duration-300 shadow-md shadow-brand-blue/15"
                >
                  {PRICING_CONTENT.ctaText}
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 px-6 bg-white relative z-10 border-t border-brand-gray-border">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-black/75 text-sm md:text-base max-w-xl">
              Find instant, clear answers to common inquiries about our EPF support platform.
            </p>
            <div className="w-20 h-1 bg-brand-blue rounded-full" />
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* CITIES WE SERVE SECTION */}
      <section className="py-24 px-6 bg-brand-gray-light relative z-10 border-t border-brand-gray-border">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
              Coverage Area
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif">
              Cities We Serve
            </h2>
            <div className="w-20 h-1 bg-brand-blue rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
            {CITIES_WE_SERVE.map((city, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-luxury text-center border border-brand-gray-border hover:border-brand-blue hover:scale-[1.03] transition-all duration-300 shadow-sm flex flex-col items-center justify-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <span className="text-black font-semibold tracking-wide text-sm md:text-base">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 relative z-10 border-t border-brand-gray-border bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Left */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
                Connect With Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight font-serif">
                Get in Touch for <br />
                <span className="blue-text-gradient font-semibold">PF Assistance</span>
              </h2>
              <div className="w-20 h-1 bg-brand-blue rounded-full mt-2" />
            </div>

            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-luxury bg-brand-gray-bg border border-brand-blue/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-1">Office Location</h4>
                  <p className="text-black/85 text-sm">{CONTACT_DETAILS.address}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-luxury bg-brand-gray-bg border border-brand-blue/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-1">Working Hours</h4>
                  <p className="text-black/85 text-sm font-semibold">{CONTACT_DETAILS.workingHours}</p>
                  <p className="text-black/85 text-sm font-semibold mt-1">{CONTACT_DETAILS.workingHoursSunday}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-luxury bg-brand-gray-bg border border-brand-blue/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-1">Email Support</h4>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-black/85 text-sm hover:text-brand-blue transition-colors">{CONTACT_DETAILS.email}</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-luxury bg-brand-gray-bg border border-brand-blue/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-1">Call Representative</h4>
                  <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`} className="text-black/85 text-sm hover:text-brand-blue transition-colors">{CONTACT_DETAILS.phone}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>

          {/* Map Embed Row */}
          <div className="lg:col-span-12 mt-8">
            <div className="p-2 bg-white border border-brand-gray-border rounded-luxury shadow-md overflow-hidden relative group">
              <iframe
                src="https://maps.google.com/maps?q=Saikrupa%20Mall,%20Opposite%20Dahisar%20Railway%20Station,%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-luxury"
              />
              <div className="absolute bottom-6 right-6 z-20">
                <a
                  href={CONTACT_DETAILS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 rounded-luxury text-xs font-bold uppercase tracking-wider shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
