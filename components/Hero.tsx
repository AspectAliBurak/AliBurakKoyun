"use client";

import { motion } from "framer-motion";
import { useCareer } from "@/app/context/CareerContext";

export const Hero = () => {
  const { career } = useCareer();
  if (!career) return null;

  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12 py-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold">
            Hi, I am <span style={{ color: career.accentHex }}>Ali Burak Koyun.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">{career.tagline}</p>
          <p className="mt-2 text-gray-500 max-w-md">{career.description}</p>
        </div>
      </div>
    </section>
  );
};
