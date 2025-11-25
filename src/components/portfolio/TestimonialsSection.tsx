"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with [Designer's Name] was an absolute pleasure. Their attention to detail and ability to translate complex ideas into intuitive, beautiful designs is unparalleled. Our user engagement has significantly improved!",
    name: 'Sarah Chen',
    title: 'CEO, InnovateTech',
  },
  {
    id: 2,
    quote:
      "[Designer's Name] transformed our app's user experience. The new interface is not only stunning but also incredibly functional. They truly understand modern UX principles and delivered beyond our expectations.",
    name: 'David Lee',
    title: 'Product Manager, Global Solutions',
  },
  {
    id: 3,
    quote:
      "We needed a fresh, modern look for our website, and [Designer's Name] delivered spectacularly. The animated elements and smooth transitions they incorporated made our site stand out. Highly recommend!",
    name: 'Emily White',
    title: 'Marketing Director, Creative Co.',
  },
  {
    id: 4,
    quote:
      "The professionalism and creativity [Designer's Name] brought to our project were outstanding. They took our vague concepts and turned them into a visually appealing and highly usable product. A true UX/UI master.",
    name: 'Michael Brown',
    title: 'Founder, Startup Hub',
  },
  {
    id: 5,
    quote:
      "Our design review process with [Designer's Name] was seamless. They are responsive, insightful, and incredibly skilled. The final product is a testament to their dedication to user-centered design.",
    name: 'Jessica Green',
    title: 'Lead Developer, Tech Innovations',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear directly from the people we've helped create exceptional digital experiences.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full flex flex-col justify-between p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700 rounded-lg">
                  <CardContent className="flex-grow p-0">
                    <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed italic mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </CardContent>
                  <CardHeader className="p-0 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-primarylw dark:text-primarylw/80">
                      {testimonial.title}
                    </p>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
