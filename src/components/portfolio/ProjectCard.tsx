"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/components/lib/utils";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string; // URL for the thumbnail
    category?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/portfolio/${project.id}`} className="block h-full w-full">
      <motion.div
        className={cn(
          "group relative h-full w-full overflow-hidden rounded-xl border bg-white shadow-lg",
          "dark:bg-neutral-900"
        )}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)", // Cyan glow
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          {project.category && (
            <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {project.category}
            </span>
          )}
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            {project.description}
          </p>
        </div>
        {/* Optional: A subtle border animation on hover for a more pronounced glow */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            border: "1px solid",
            borderColor: "rgba(0, 255, 255, 0.7)", // Cyan border
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
          }}
        />
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
