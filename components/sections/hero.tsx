'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '@/lib/animations';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Welcome to my world
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Curating Elegance, <span className="text-accent">Crafting Stories</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-foreground/70 max-w-lg leading-relaxed mb-8"
            >
              Luxury influencer passionate about authentic storytelling, sustainable fashion, and building meaningful brand partnerships. Welcome to my creative space.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#collaboration"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Start a Collaboration
              </a>
              <a
                href="#blog"
                className="px-8 py-4 border border-border text-foreground rounded-full font-semibold hover:bg-secondary/40 transition-colors text-center"
              >
                Read My Stories
              </a>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-accent/20 flex items-center justify-center">
              <p className="text-foreground/40 text-center px-6">
                Professional Portrait Photography
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground transition-colors"
            aria-label="Scroll to next section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
