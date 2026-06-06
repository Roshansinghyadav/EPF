import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_DETAILS, FOOTER_CONTENT } from "@/constants/content";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-brand-gray-border pt-16 pb-8 overflow-hidden text-black">
      {/* Background glow mesh */}
      <div className="bg-mesh -bottom-60 -right-60 bg-brand-blue/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                  src="/EPFGenieLogo.jpeg"
                  alt="EPFGenie Logo"
                  width={150}
                  height={44}
                  className="h-[44px] w-auto object-contain rounded-md"
                />
              </div>
            </Link>
            <p className="text-black/70 text-sm max-w-sm leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider text-brand-blue uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black/70 hover:text-brand-blue text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-brand-blue uppercase mb-6">
                Contact Information
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-black/70">
                  <svg
                    className="w-5 h-5 text-brand-blue shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{CONTACT_DETAILS.address}</span>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="flex items-center gap-3 text-sm text-black/70 hover:text-brand-blue transition-colors group"
                  >
                    <svg
                      className="w-5 h-5 text-brand-blue shrink-0 transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{CONTACT_DETAILS.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-sm text-black/70 hover:text-brand-blue transition-colors group"
                  >
                    <svg
                      className="w-5 h-5 text-brand-blue shrink-0 transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{CONTACT_DETAILS.phone}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="border-t border-brand-gray-border pt-8 pb-4 mt-4">
          <div className="p-6 border border-brand-gray-border bg-brand-gray-light rounded-luxury mb-8">
            <h5 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Disclaimer
            </h5>
            <p className="text-xs text-black/65 leading-relaxed">
              {FOOTER_CONTENT.disclaimer}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-black/55">
              &copy; {currentYear} {FOOTER_CONTENT.brandName}. All rights reserved.
            </p>
            <p className="text-xs text-black/55 flex items-center gap-1">
              Developed to support and simplify EPF awareness.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
