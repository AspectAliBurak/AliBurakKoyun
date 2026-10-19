"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Props {
  id: string;
  children: React.ReactNode;
}

export const SectionWrapper = ({ id, children }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section id={id} className="py-16" ref={ref}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants}>
        {children}
      </motion.div>
    </section>
  );
};
