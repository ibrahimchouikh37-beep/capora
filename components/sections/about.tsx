'use client';

import { motion } from 'framer-motion';
import { fadeInUp, containerVariants, itemVariants } from '@/lib/animations';

export default function About() {
  const stats = [
    { number: '500K+', label: 'Engaged Followers' },
    { number: '200+', label: 'Brand Collaborations' },
    { number: '5M+', label: 'Monthly Reach' },
    { number: '10+', label: 'Years in Industry' },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed">
              I&apos;m Alexandra Sterling, a luxury influencer and storyteller dedicated to authenticity, elegance, and meaningful brand connections. With over a decade in the industry, I&apos;ve built a community of engaged followers who trust my recommendations and appreciate my unique perspective on lifestyle and fashion.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed">
              My passion lies in curating content that inspires, educates, and elevates. Whether it&apos;s exploring sustainable luxury, discovering hidden travel gems, or sharing personal insights on building an authentic brand, I approach every project with creativity and intention.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed">
              I believe in the power of collaboration. When I partner with brands, I ensure it&apos;s a genuine fit—one that resonates with my audience and aligns with my values. That&apos;s what makes partnerships meaningful and impactful.
            </motion.p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-accent/20 flex items-center justify-center">
              <p className="text-foreground/40 text-center px-6">
                Portrait Photography
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
