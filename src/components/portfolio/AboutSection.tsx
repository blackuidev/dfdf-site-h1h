import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';
import { Progress } from '../ui/progress'; // Assuming this path
import { ThreeDCard } from '../ui/3d-perspective-card'; // Assuming this path and export name

const designerData = {
  name: "Elara Vance",
  title: "Senior UI/UX Designer",
  bio: "Passionate and innovative Senior UI/UX Designer with over 8 years of experience crafting intuitive, engaging, and visually stunning digital products. Specializing in user-centered design, I bridge the gap between complex ideas and elegant solutions, driving impactful user experiences across various platforms. My expertise lies in interaction design, visual design, user research, and prototyping, always striving to deliver products that resonate with users and achieve business goals.",
  avatar: "https://images.unsplash.com/photo-1599566150163-29194d6b008d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example avatar
  skills: [
    { name: "UI Design", level: 95 },
    { name: "UX Research", level: 90 },
    { name: "Prototyping", level: 88 },
    { name: "Interaction Design", level: 92 },
    { name: "Wireframing", level: 85 },
    { name: "Figma", level: 97 },
    { name: "Adobe XD", level: 80 },
    { name: "Front-end Basics (HTML/CSS)", level: 75 },
  ],
  experience: [
    {
      title: "Senior UI/UX Designer",
      company: "InnovateTech Solutions",
      duration: "2020 - Present",
      description: "Led design initiatives for key product lines, improving user engagement by 25%. Mentored junior designers and established design system guidelines."
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds Agency",
      duration: "2017 - 2020",
      description: "Designed and prototyped user interfaces for various client projects, collaborating closely with development teams to ensure design integrity."
    },
    {
      title: "Junior Graphic Designer",
      company: "Digital Vision Studio",
      duration: "2015 - 2017",
      description: "Assisted in creating visual assets, marketing materials, and early-stage UI concepts for web and mobile applications."
    }
  ]
};

const AboutSection = () => {
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Helper component to animate the Progress bar value using Framer Motion
  const AnimatedProgressBar = ({ value, delay }: { value: number; delay: number }) => {
    const progressValue = useMotionValue(0);
    const scaledProgress = useSpring(progressValue, { stiffness: 100, damping: 30 });

    useEffect(() => {
      const unsubscribe = scaledProgress.onChange((latest) => {
        // This ensures the Progress component receives an updated value
        // The Progress component's internal indicator will transition based on this value
      });

      const timeout = setTimeout(() => {
        animate(progressValue, value, { duration: 1.5, ease: "easeOut" });
      }, delay * 1000); // Convert delay to milliseconds

      return () => {
        clearTimeout(timeout);
        unsubscribe();
      };
    }, [value, delay, progressValue, scaledProgress]);

    return (
      <Progress value={scaledProgress.get()} className="h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
    );
  };

  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-background to-card-background dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primarylw to-greedy dark:from-blue-400 dark:to-purple-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textRevealVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ThreeDCard className="w-full max-w-xs p-6 bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/20 dark:to-gray-700/10 rounded-xl shadow-lg border border-gray-200/20 dark:border-gray-700/30 backdrop-blur-sm">
              <img
                src={designerData.avatar}
                alt={designerData.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primarylw dark:border-greedy shadow-md"
              />
              <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-1">{designerData.name}</h3>
              <p className="text-md text-center text-gray-700 dark:text-gray-300">{designerData.title}</p>
            </ThreeDCard>
          </motion.div>

          {/* Bio and Skills */}
          <div className="lg:col-span-2 space-y-10">
            {/* Bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">A Glimpse into My World</h3>
              <motion.p variants={textRevealVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {designerData.bio}
              </motion.p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Core Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {designerData.skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={textRevealVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    {/* Using AnimatedProgressBar helper */}
                    <AnimatedProgressBar value={skill.level} delay={index * 0.1} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Experience */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designerData.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={textRevealVariants}
                className="bg-white/10 dark:bg-gray-800/30 p-6 rounded-lg shadow-md border border-gray-200/20 dark:border-gray-700/30 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                <p className="text-md font-medium text-primarylw dark:text-greedy mb-1">{exp.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.duration}</p>
                <p className="text-base text-gray-700 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
