"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCareer } from "@/app/context/CareerContext";
import { careers } from "@/data/careers";

export const Navbar = () => {
  const { current, setCareer, career } = useCareer();

  const navItems = Object.values(careers);

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07 },
    }),
    hover: { scale: 1.05 },
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 z-50 shadow-sm">
      {/* Brand */}
      <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
        Ali Burak Koyun
      </Link>

      {/* Career selector */}
      <div className="flex space-x-2 sm:space-x-4">
        {navItems.map((c, i) => (
          <motion.button
            key={c.key}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={itemVariants}
            onClick={() => setCareer(c.key)}
            style={{
              color: current === c.key ? c.accentHex : undefined,
              borderColor: current === c.key ? c.accentHex : 'transparent',
            }}
            className={`relative px-3 py-1 font-medium transition-all text-sm sm:text-base border-b-2 ${
              current === c.key
                ? "font-bold"
                : "text-gray-600 hover:text-gray-900 border-transparent"
            }`}
          >
            {c.label}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};
