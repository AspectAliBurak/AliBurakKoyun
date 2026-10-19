import React from 'react';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  imgSrc: string;
  github?: string;
  demo?: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tech,
  imgSrc,
  github,
  demo,
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg"
  >
    <img src={imgSrc} alt={title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-gray-100 rounded text-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);
