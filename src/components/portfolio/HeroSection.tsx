import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { AuroraBackground } from '../ui/aurora-background';
import { TypingText } from '../ui/typing-text';
import { ShineButton } from '../ui/shine-button';

const HeroSection: React.FC = () => {
  return (
    <AuroraBackground className="min-h-screen">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-24 text-center z-10"
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black dark:text-white mb-4">
          Hi, I'm Alex Johnson
        </h1>
        <TypingText
          text="A UI/UX Designer crafting intuitive and beautiful digital experiences."
          className="font-extralight text-base md:text-xl dark:text-neutral-200 text-neutral-600 max-w-3xl mx-auto mb-8"
        />
        <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 max-w-4xl mx-auto mb-10 leading-relaxed">
          With a keen eye for aesthetics and a deep understanding of user psychology, I transform complex challenges into elegant, accessible, and enjoyable digital products. My process involves thorough user research, iterative prototyping, and pixel-perfect design execution to deliver solutions that truly resonate with users.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="#portfolio" passHref>
            <ShineButton className="w-full sm:w-auto px-8 py-3 text-lg font-medium">
              View My Portfolio
            </ShineButton>
          </Link>
          <Link href="#contact" passHref>
            <ShineButton className="w-full sm:w-auto px-8 py-3 text-lg font-medium">
              Let's Connect
            </ShineButton>
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default HeroSection;
