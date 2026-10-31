'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ImageCard from '@/components/shared/image-card';
import { portfolioItems } from '@/lib/data';
import { motion } from 'framer-motion';
import { fadeInUp, containerVariants, itemVariants } from '@/lib/animations';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(portfolioItems.map((item) => item.category)));
    return cats;
  }, []);

  const filteredItems = useMemo(() => {
    if (!selectedCategory) return portfolioItems;
    return portfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Header />
      <main>
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            {/* Header */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-12"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Brand Collaborations
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl">
                A curated collection of luxury brand partnerships, editorial work, and exclusive content creation collaborations.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-wrap gap-3 mb-16"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedCategory === null
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-foreground hover:bg-secondary/40'
                }`}
              >
                All Projects
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border text-foreground hover:bg-secondary/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Portfolio Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <ImageCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                  />
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">
                      {item.year}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-2 mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredItems.length === 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-center py-12"
              >
                <p className="text-foreground/60 mb-4">
                  No projects found in this category.
                </p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  View all projects
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-secondary/20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Ready to Collaborate?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                If you have a brand collaboration in mind or want to discuss new opportunities, I&apos;d love to hear from you.
              </p>
              <a
                href="/collaboration"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
