"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SparkleParticles } from "@/components/ui/sparkle-particles";
import { Brain, Code, Palette, Search } from "lucide-react"; // Icons for categories

interface Skill {
  name: string;
  proficiency: number; // 0-100
}

interface SkillCategory {
  category: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "UI Design",
    icon: Palette,
    skills: [
      { name: "Figma", proficiency: 95 },
      { name: "Sketch", proficiency: 85 },
      { name: "Adobe XD", proficiency: 90 },
      { name: "Prototyping", proficiency: 92 },
      { name: "Design Systems", proficiency: 88 },
    ],
  },
  {
    category: "UX Research",
    icon: Search,
    skills: [
      { name: "User Interviews", proficiency: 90 },
      { name: "Usability Testing", proficiency: 88 },
      { name: "Wireframing", proficiency: 93 },
      { name: "Information Architecture", proficiency: 85 },
      { name: "Journey Mapping", proficiency: 87 },
    ],
  },
  {
    category: "Cognitive & Soft Skills",
    icon: Brain,
    skills: [
      { name: "Problem Solving", proficiency: 95 },
      { name: "Critical Thinking", proficiency: 92 },
      { name: "Communication", proficiency: 90 },
      { name: "Team Collaboration", proficiency: 93 },
    ],
  },
  {
    category: "Development & Tools",
    icon: Code,
    skills: [
      { name: "HTML/CSS", proficiency: 80 },
      { name: "JavaScript/TypeScript", proficiency: 75 },
      { name: "React", proficiency: 70 },
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "Git", proficiency: 70 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger when 30% of section is visible

  // State to hold animated proficiency values for each skill
  const [animatedProficiencies, setAnimatedProficiencies] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (isInView) {
      skillsData.forEach(category => {
        category.skills.forEach(skill => {
          let current = 0;
          const duration = 1000; // 1 second animation
          const steps = 60; // Approximate steps for animation (for ~60fps)
          const increment = skill.proficiency / steps;
          let stepCount = 0;

          const timer = setInterval(() => {
            current = Math.min(current + increment, skill.proficiency);
            setAnimatedProficiencies(prev => ({
              ...prev,
              [skill.name]: current,
            }));
            stepCount++;
            if (current >= skill.proficiency || stepCount >= steps) {
              clearInterval(timer);
            }
          }, duration / steps);
        });
      });
    }
  }, [isInView]);

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden bg-background">
      <SparkleParticles
        className="absolute inset-0 w-full h-full z-0"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={50}
        animationDuration={8000}
        color="#a78bfa" // A nice purple for sparkle
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Expertise
        </motion.h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full flex flex-col justify-between bg-card transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 border-purple-300/30 dark:border-purple-700/30">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <category.icon className="w-8 h-8 text-purple-500 group-hover:animate-bounce" />
                  <CardTitle className="text-xl font-semibold text-purple-400">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex flex-col space-y-1">
                        <div className="flex justify-between items-center text-sm font-medium">
                          <span>{skill.name}</span>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: (index * 0.2) + 0.5 }}
                          >
                            {Math.round(animatedProficiencies[skill.name] || 0)}%
                          </motion.span>
                        </div>
                        <Progress
                          value={animatedProficiencies[skill.name] || 0}
                          className="h-2 [&>*]:bg-gradient-to-r [&>*]:from-purple-400 [&>*]:to-pink-500"
                        />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
