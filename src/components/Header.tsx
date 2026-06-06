"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-lg border-b border-brand-gray-border ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/EPFGenieLogo.jpeg"
              alt="EPFGenie Logo"
              width={180}
              height={52}
              priority
              className="h-[40px] md:h-[52px] w-auto object-contain rounded-md"
            />
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-brand-blue font-semibold"
                    : "text-black/70 hover:text-brand-blue"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Get Started CTA Desktop */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-luxury text-sm font-medium tracking-wide text-white bg-brand-blue hover:bg-brand-blue-hover transition-all duration-300 ease-out font-sans shadow-lg shadow-brand-blue/10 hover:shadow-brand-blue/20 hover:scale-[1.03] active:scale-[0.98] font-bold"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black hover:text-brand-blue focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2 bg-brand-blue" : "bg-black"
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : "bg-black"
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2 bg-brand-blue" : "bg-black"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 w-full bg-white/98 backdrop-blur-xl border-t border-brand-gray-border transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-8 gap-6 justify-center">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xl font-medium tracking-wide border-b border-brand-gray-border pb-4 transition-colors ${
                  isActive ? "text-brand-blue font-bold" : "text-black/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="w-full text-center py-4 bg-brand-blue text-white font-bold rounded-luxury text-lg shadow-md hover:bg-brand-blue-hover mt-4"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
