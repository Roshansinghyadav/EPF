import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className = "", glow = false }: CardProps) {
  return (
    <div
      className={`glass-panel-interactive rounded-luxury p-8 relative overflow-hidden flex flex-col justify-between ${
        glow ? "blue-glow" : ""
      } ${className}`}
    >
      {/* Decorative corner accent */}
      <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-brand-blue/30 rounded-tr-[8px] pointer-events-none group-hover:border-brand-blue transition-colors duration-300" />
      {/* Shine overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_ease-in-out] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
}
