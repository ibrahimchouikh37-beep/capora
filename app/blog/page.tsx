'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ImageCard from '@/components/shared/image-card';
import { blogArticles } from '@/lib/data';
import { motion } from 'framer-motion';
import { fadeInUp, containerVariants, itemVariants } from '@/lib/animations';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogArticles.map((article) => article.category)));
    return cats;
  }, []);

  const filteredArticles = useMemo(() => {
    if (!selectedCategory) return blogArticles;
    return blogArticles.filter((article) => article.category === selectedCategory);
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
                Blog
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Stories & Insights
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl">
                Exploring luxury, authenticity, and the art of intentional living through thoughtful content.
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
                All Articles
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

            {/* Articles Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredArticles.map((article) => (
                <motion.div key={article.id} variants={itemVariants}>
                  <Link href={`/blog/${article.slug}`} className="group">
                    <ImageCard
                      image={article.image}
                      title={article.title}
                      description={article.excerpt}
                      category={article.category}
                    />
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-foreground/60 line-clamp-2 mt-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-foreground/50">
                          {article.readTime} min read
                        </span>
                        <span className="text-xs font-semibold text-accent group-hover:text-accent/80 transition-colors">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {filteredArticles.length === 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-center py-12"
              >
                <p className="text-foreground/60 mb-4">
                  No articles found in this category.
                </p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  View all articles
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
