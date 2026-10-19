"use client";
import { useCareer } from "@/app/context/CareerContext";

export const About = () => {
  const { career } = useCareer();
  if (!career) return null;
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-600">{career.description}</p>
    </div>
  );
};
