"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/components/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GradientButton } from "@/components/ui/gradient-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { toast } from "react-toastify";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    initial: { scale: 1, borderColor: "hsl(var(--input))" },
    focus: {
      scale: 1.02,
      borderColor: "hsl(var(--primary))",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden bg-background"
    >
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          "absolute inset-0 z-0 opacity-40 dark:opacity-20"
        )}
      />
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind or just want to say hello? I'd love to hear
          from you!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-6 p-8 bg-card border border-border rounded-xl shadow-lg relative z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={inputVariants} whileFocus="focus">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-input focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              />
            </motion.div>
            <motion.div variants={inputVariants} whileFocus="focus">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-input focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              />
            </motion.div>
          </div>
          <motion.div variants={inputVariants} whileFocus="focus">
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-input focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            />
          </motion.div>
          <motion.div variants={inputVariants} whileFocus="focus">
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-input focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-y"
            />
          </motion.div>
          <div className="text-center">
            <GradientButton
              type="submit"
              className="px-8 py-3 text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </GradientButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
