'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function CTA() {
  return (
    <section id="collaboration" className="py-20 sm:py-32 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            I&apos;m always interested in exploring authentic partnerships with brands that align with my values. Whether you have a specific collaboration in mind or want to discuss possibilities, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collaboration"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              Start a Collaboration
            </Link>
            <a
              href="mailto:hello@alexandra.com"
              className="px-8 py-4 border border-border text-foreground rounded-full font-semibold hover:bg-secondary/40 transition-colors text-center"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
