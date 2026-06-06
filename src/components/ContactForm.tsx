"use client";

import React, { useState } from "react";
import { SERVICES_CONTENT } from "@/constants/content";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate api latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="w-full glass-panel rounded-luxury-lg p-8 md:p-10 relative overflow-hidden">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center text-center py-12 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-brand-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-black mb-3 font-serif">
            Message Sent Successfully
          </h3>
          <p className="text-black/70 text-sm max-w-sm leading-relaxed mb-8">
            Thank you for reaching out to EPFGenie. We have received your request and will review your PF-related concern shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-6 py-2 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 rounded-luxury text-sm font-semibold tracking-wide"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-brand-gray-light border border-brand-gray-border hover:border-brand-blue/30 focus:border-brand-blue rounded-luxury px-4 py-3 text-sm text-black focus:outline-none transition-all"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 99999 99999"
                className="w-full bg-brand-gray-light border border-brand-gray-border hover:border-brand-blue/30 focus:border-brand-blue rounded-luxury px-4 py-3 text-sm text-black focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-brand-gray-light border border-brand-gray-border hover:border-brand-blue/30 focus:border-brand-blue rounded-luxury px-4 py-3 text-sm text-black focus:outline-none transition-all"
              />
            </div>

            {/* Service Interest */}
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Select PF Issue *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-brand-gray-light border border-brand-gray-border hover:border-brand-blue/30 focus:border-brand-blue rounded-luxury px-4 py-3 text-sm text-black focus:outline-none transition-all appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231a6fe6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1em",
                  paddingRight: "2.5rem"
                }}
              >
                <option value="" disabled className="text-black/50 bg-white">Select a category</option>
                {SERVICES_CONTENT.map((svc) => (
                  <option key={svc.id} value={svc.title} className="text-black bg-white">
                    {svc.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Describe your PF issue *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share details such as error codes or delay periods..."
              className="w-full bg-brand-gray-light border border-brand-gray-border hover:border-brand-blue/30 focus:border-brand-blue rounded-luxury px-4 py-3 text-sm text-black focus:outline-none transition-all resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-luxury text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 font-sans shadow-lg ${
              isSubmitting
                ? "bg-brand-blue/50 cursor-not-allowed"
                : "bg-brand-blue hover:bg-brand-blue-hover hover:shadow-brand-blue/25 active:scale-[0.99]"
            }`}
          >
            {isSubmitting ? "Sending Request..." : "Submit Inquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
