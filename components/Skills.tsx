"use client";
import { skills } from "@/data/skills";
import { useCareer } from "@/app/context/CareerContext";

export const Skills = () => {
  const { current } = useCareer();
  if (!current) return null;
  const filtered = skills.filter((s) => s.categories.includes(current));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {filtered.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
        >
          <div className="text-3xl mb-2">{skill.icon}</div>
          <span className="font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};
