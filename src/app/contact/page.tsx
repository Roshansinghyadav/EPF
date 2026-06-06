import React from "react";
import ContactForm from "@/components/ContactForm";
import { CONTACT_DETAILS } from "@/constants/content";

export default function ContactPage() {
  return (
    <div className="relative w-full pt-10 pb-20 px-6 overflow-hidden bg-white text-black min-h-[85vh]">
      {/* Background Glow */}
      <div className="bg-mesh top-20 left-20 bg-brand-blue/5" />
      <div className="bg-mesh bottom-20 right-20 bg-brand-blue/5" />

      <div className="max-w-7xl mx-auto relative z-10 mt-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-black font-serif leading-tight">
            Start Your <span className="blue-text-gradient">Assistance Path</span>
          </h1>
          <p className="text-brand-text-muted text-sm md:text-base max-w-xl font-medium">
            Reach out via our form or WhatsApp to connect with a support representative about your EPF issue.
          </p>
          <div className="w-24 h-1 bg-brand-blue rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-brand-gray-border bg-brand-gray-light p-8 rounded-luxury flex flex-col gap-8 shadow-sm">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-luxury bg-white border border-brand-blue/15 flex items-center justify-center shrink-0">
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
                <div className="w-12 h-12 rounded-luxury bg-white border border-brand-blue/15 flex items-center justify-center shrink-0">
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
                <div className="w-12 h-12 rounded-luxury bg-white border border-brand-blue/15 flex items-center justify-center shrink-0">
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
                <div className="w-12 h-12 rounded-luxury bg-white border border-brand-blue/15 flex items-center justify-center shrink-0">
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

            {/* Google Map Embed */}
            <div className="bg-white p-2 rounded-luxury border border-brand-gray-border overflow-hidden relative group shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Saikrupa%20Mall,%20Opposite%20Dahisar%20Railway%20Station,%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-luxury"
              />
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href={CONTACT_DETAILS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 rounded-luxury text-[10px] font-bold uppercase tracking-wider shadow-md"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
