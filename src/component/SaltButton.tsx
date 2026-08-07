"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SaltButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
}

// Organic Salt Crystal Landed Coordinates (Neatly clustered along the right edge)
const saltCrystals = [
  { id: 1, x: 2, landY: 8, delay: 0.0, size: 3.5 },
  { id: 2, x: 7, landY: 14, delay: 0.04, size: 3 },
  { id: 3, x: 12, landY: 10, delay: 0.08, size: 4 },
  { id: 4, x: 16, landY: 20, delay: 0.12, size: 3 },
  { id: 5, x: 5, landY: 24, delay: 0.06, size: 3.5 },
  { id: 6, x: 10, landY: 28, delay: 0.15, size: 2.8 },
  { id: 7, x: 15, landY: 32, delay: 0.18, size: 3.8 },
  { id: 8, x: 20, landY: 16, delay: 0.10, size: 3.2 },
  { id: 9, x: 8, landY: 36, delay: 0.22, size: 4 },
  { id: 10, x: 14, landY: 40, delay: 0.25, size: 3 },
];

export default function SaltButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  onClick,
  ...props
}: SaltButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Variant Styles
  const variantStyles = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20 hover:shadow-lg",
    secondary:
      "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-50",
    white:
      "bg-white text-red-600 hover:bg-red-50 shadow-md hover:shadow-lg",
  };

  // Size Styles
  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold rounded-full",
    md: "px-6 py-3 text-sm font-semibold rounded-full",
    lg: "px-8 py-3.5 text-base font-semibold rounded-full",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={`
          relative z-10 inline-flex items-center justify-center gap-2
          transition-all duration-200 cursor-pointer group select-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.button>

      {/* Elegant Salt Sprinkle Particles (Pour once & nestle cleanly on right edge) */}
      <AnimatePresence>
        {isHovered && (
          <div className="absolute -right-1 top-0 bottom-0 w-8 pointer-events-none z-20 overflow-visible">
            {saltCrystals.map((p) => (
              <motion.span
                key={p.id}
                initial={{
                  opacity: 0,
                  y: -10,
                  x: p.x - 3,
                  scale: 0.3,
                }}
                animate={{
                  opacity: [0, 1, 0.95],
                  y: p.landY,
                  x: p.x,
                  scale: 1,
                  rotate: [0, 30, 60],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.2,
                  y: p.landY + 4,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  duration: 0.35,
                  delay: p.delay,
                  ease: "easeOut",
                }}
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                className="absolute rounded-full bg-white border border-gray-200/80 shadow-xs shadow-white/90"
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
