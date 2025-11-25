"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import ProjectDetail from "../../../components/portfolio/ProjectDetail";
import { ThreeDImageGallery } from "../../../components/ui/3d-image-gallery";
import { ImageReveal } from "../../../components/ui/image-reveal";
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Button } from "../../../components/ui/button";
import NotFound from "../../not-found";

// --- Dummy Data (Replace with actual data fetching from a backend or src/data/portfolio.ts) ---
// Assuming src/data/portfolio.ts exists and exports an array like this:
const portfolioProjects = [
  {
    id: "revolutionizing-ecommerce-checkout",
    title: "Revolutionizing E-commerce Checkout",
    tagline: "A case study on improving conversion rates through UX optimization.",
    description: "This project focused on redesigning the checkout flow for a major online retailer, aiming to reduce cart abandonment and enhance user satisfaction.",
    heroImage: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-ecommerce-hero.jpg?alt=media&token=e1c6b1a0-1f2a-4b0d-8c1e-0a1b2c3d4e5f",
    summary: "Redesigned e-commerce checkout flow, leading to a significant increase in conversion rates and improved user experience.",
    sections: [
      {
        type: "problem",
        title: "The Problem",
        content: "Users were experiencing high friction during the checkout process, leading to a 35% cart abandonment rate. Key issues included confusing navigation, excessive form fields, and lack of trust signals."
      },
      {
        type: "solution",
        title: "Our Solution",
        content: "We implemented a streamlined, multi-step checkout with clear progress indicators, optimized form inputs, integrated payment options, and prominent security badges. Personalization and guest checkout options were also enhanced."
      },
      {
        type: "process",
        title: "Design Process",
        subsections: [
          { title: "Discovery & Research", content: "Conducted user interviews, competitor analysis, and heuristic evaluations. Identified pain points through heatmap and session recording analysis." },
          { title: "Ideation & Wireframing", content: "Developed various concepts, sketching low-fidelity wireframes, and mapping out user flows for different scenarios." },
          { title: "Prototyping & Testing", content: "Created interactive prototypes in Figma and conducted usability testing with 20 participants. Iterated based on feedback." },
          { title: "Visual Design & Handoff", content: "Developed high-fidelity mockups, design system components, and prepared detailed specifications for development." }
        ]
      },
      {
        type: "results",
        title: "Results & Impact",
        content: "Post-launch, the cart abandonment rate dropped by 20%, and conversion rates increased by 15%. User feedback indicated a much smoother and more enjoyable experience."
      }
    ],
    imageGallery: [
      { src: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-ecommerce-1.jpg?alt=media&token=f2d3e4c1-5b6a-7d8e-9f0a-1b2c3d4e5f6a", alt: "Checkout Step 1" },
      { src: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-ecommerce-2.jpg?alt=media&token=b3c4d5e2-6c7d-8e9f-0a1b-2c3d4e5f6a7b", alt: "Checkout Step 2" },
      { src: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-ecommerce-3.jpg?alt=media&token=c4d5e6f3-7d8e-9f0a-1b2c-3d4e5f6a7b8c", alt: "Mobile Checkout" },
    ],
    threeDGallery: [
      { src: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-ecommerce-3d-1.jpg?alt=media&token=d5e6f7a4-8e9f-0a1b-2c3d-4e5f6a7b8c9d", alt: "3D View 1" },
      { src: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-ecommerce-3d-2.jpg?alt=media&token=e6f7a8b5-9f0a-1b2c-3d4e-5f6a7b8c9d0e", alt: "3D View 2" },
      { src: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-ecommerce-3d-3.jpg?alt=media&token=f7a8b9c6-0a1b-2c3d-4e5f-6a7b8c9d0e1f", alt: "3D View 3" },
    ],
    videoLinks: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example YouTube embed
    ]
  },
  {
    id: "mobile-app-financial-management",
    title: "Mobile App for Financial Management",
    tagline: "Designing an intuitive interface for personal finance tracking.",
    description: "Developed a user-friendly mobile application to help users track expenses, manage budgets, and achieve financial goals.",
    heroImage: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-finance-hero.jpg?alt=media&token=a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    summary: "Created a personal finance mobile app, simplifying budgeting and expense tracking for users.",
    sections: [
      {
        type: "problem",
        title: "The Challenge",
        content: "Many existing financial apps were overly complex or lacked key features for effective personal finance management. Users needed a simple yet powerful tool."
      },
      {
        type: "solution",
        title: "Our Approach",
        content: "Focused on clean UI, gamified goal setting, intuitive transaction logging, and visual data representation to make finance engaging and easy to understand."
      },
      {
        type: "process",
        title: "Key Design Phases",
        subsections: [
          { title: "User Research", content: "Identified target user personas and their financial habits and needs." },
          { title: "Information Architecture", content: "Structured the app content for easy navigation and discoverability." },
          { title: "UI/UX Design", content: "Designed wireframes, mockups, and interactive prototypes focusing on clarity and ease of use." }
        ]
      },
      {
        type: "results",
        title: "Outcomes",
        content: "Achieved a 4.8-star rating on app stores, with high user retention and positive feedback on the app's intuitive nature and helpful features."
      }
    ],
    imageGallery: [
      { src: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-finance-1.jpg?alt=media&token=b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e", alt: "Dashboard" },
      { src: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/lightswind%2Fportfolio-finance-2.jpg?alt=media&token=c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f", alt: "Budgeting Screen" },
    ],
    threeDGallery: [],
    videoLinks: []
  },
];
// --- End Dummy Data ---

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params;
  const [project, setProject] = useState<any>(null); // Consider defining a proper Project type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      // In a real application, you would fetch this from an API or a database.
      // For now, we simulate fetching from the dummy 'portfolioProjects' array.
      const foundProject = portfolioProjects.find(p => p.id === projectId);
      setProject(foundProject);
      setLoading(false);
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-background text-foreground">
        <div className="loader-3d-spin w-16 h-16 bg-primarylw rounded-lg"></div>
        <p className="mt-4 text-lg">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return <NotFound />;
  }

  // Determine previous and next project for navigation
  const currentIndex = portfolioProjects.findIndex(p => p.id === projectId);
  const prevProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back to Portfolio Button */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Link href="/portfolio" className="inline-flex items-center text-primarylw hover:underline mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold mb-4 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          {project.tagline || project.description}
        </motion.p>

        {/* Hero Image/Video */}
        {project.heroImage && (
          <motion.div
            className="mb-16 rounded-xl overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            <img src={project.heroImage} alt={`${project.title} Hero`} className="w-full h-auto object-cover" />
          </motion.div>
        )}

        {/* Project Overview (using ProjectDetail component) */}
        <ProjectDetail project={project} />

        {/* Dynamic Media Section with Tabs */}
        {(project.imageGallery?.length > 0 || project.videoLinks?.length > 0 || project.threeDGallery?.length > 0) && (
          <section className="my-20">
            <motion.h2
              className="text-4xl font-semibold mb-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              Visual Showcase
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Tabs defaultValue="gallery" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                  {project.imageGallery?.length > 0 && <TabsTrigger value="gallery">Image Gallery</TabsTrigger>}
                  {project.videoLinks?.length > 0 && <TabsTrigger value="videos">Videos</TabsTrigger>}
                  {/* Add 3D Gallery tab if data exists */}
                  {project.threeDGallery?.length > 0 && <TabsTrigger value="3d-gallery">3D Gallery</TabsTrigger>}
                </TabsList>
                {project.imageGallery?.length > 0 && (
                  <TabsContent value="gallery" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {project.imageGallery.map((img: any, index: number) => (
                        <motion.div
                          key={index}
                          className="rounded-lg overflow-hidden shadow-md group relative"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <ImageReveal src={img.src} alt={img.alt} width={600} height={400} className="w-full h-auto object-cover" />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                            {img.alt}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                )}
                {project.videoLinks?.length > 0 && (
                  <TabsContent value="videos" className="mt-8">
                    <div className="grid grid-cols-1 gap-8">
                      {project.videoLinks.map((video: string, index: number) => (
                        <motion.div
                          key={index}
                          className="relative aspect-video rounded-lg overflow-hidden shadow-md"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <iframe
                            src={video}
                            title={`Project Video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                          ></iframe>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                )}
                {project.threeDGallery?.length > 0 && (
                  <TabsContent value="3d-gallery" className="mt-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <ThreeDImageGallery images={project.threeDGallery} />
                    </motion.div>
                  </TabsContent>
                )}
              </Tabs>
            </motion.div>
          </section>
        )}

        {/* Navigation for Next/Previous Projects */}
        <motion.div
          className="flex justify-between items-center mt-20 pt-8 border-t border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          {prevProject ? (
            <Link href={`/portfolio/${prevProject.id}`} className="flex items-center text-primarylw hover:text-primarylw/80 transition-colors group">
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg font-medium">Previous Project</span>
            </Link>
          ) : (
            <span className="opacity-50 cursor-not-allowed flex items-center text-muted-foreground">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">No Previous Project</span>
            </span>
          )}

          {nextProject ? (
            <Link href={`/portfolio/${nextProject.id}`} className="flex items-center text-primarylw hover:text-primarylw/80 transition-colors group">
              <span className="text-lg font-medium">Next Project</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <span className="opacity-50 cursor-not-allowed flex items-center text-muted-foreground">
              <span className="text-lg font-medium">No Next Project</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </span>
          )}
        </motion.div>

        {/* Example of a Dialog usage */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-primarylw border-primarylw hover:bg-primarylw hover:text-white">
                View Project Summary (Dialog)
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <h3 className="text-2xl font-bold mb-4">{project.title} Summary</h3>
              <p className="text-muted-foreground leading-relaxed">{project.summary || project.description}</p>
              {/* More details can be added here */}
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
}
