"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { ProjectCard } from "./ProjectCard";
import { portfolioProjects } from "../../data/portfolio"; // Assuming this file and data structure
import { LayoutDashboard, Palette, Smartphone, Globe, Code, Brain } from "lucide-react";

const ProjectsGrid = () => {
  const icons = [
    <LayoutDashboard key="icon1" className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    <Smartphone key="icon2" className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    <Palette key="icon3" className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    <Code key="icon4" className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    <Brain key="icon5" className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    <Globe key="icon6" className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
  ];

  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Latest UI/UX Projects</h2>
        <BentoGrid className="max-w-7xl mx-auto">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                // These classes control the size of the motion.div wrapper,
                // which then dictates the size of the BentoGridItem inside.
                // Adjust these based on desired layout, e.g., for a 3-column grid:
                i === 0 || i === 3
                  ? "md:col-span-2"
                  : i === 2
                  ? "md:row-span-2"
                  : ""
              }
            >
              <BentoGridItem
                // Pass the ProjectCard as the header, assuming it's the main visual content.
                header={<ProjectCard project={project} />}
                // Optionally, you can still use BentoGridItem's title/description for extra info below the card
                // title={project.title}
                // description={project.description}
                icon={icons[i % icons.length]}
                className="h-full" // Ensure the item takes full height of its grid cell
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default ProjectsGrid;
