"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import SkillsSection from "@/components/portfolio/SkillsSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-primarylw z-50 transform origin-[0%] rounded-full shadow-lg"
        style={{ scaleX }}
      />

      <motion.section
        id="hero"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <HeroSection />
      </motion.section>

      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 md:py-24"
      >
        <AboutSection />
      </motion.section>

      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 md:py-24"
      >
        <ProjectsGrid />
      </motion.section>

      <motion.section
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 md:py-24"
      >
        <SkillsSection />
      </motion.section>

      <motion.section
        id="testimonials"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 md:py-24"
      >
        <TestimonialsSection />
      </motion.section>

      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 md:py-24"
      >
        <ContactSection />
      </motion.section>
    </div>
  );
}
