'use client';

import { useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ImageCard from '@/components/shared/image-card';
import { blogArticles } from '@/lib/data';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const article = useMemo(() => {
    return blogArticles.find((a) => a.slug === params.slug);
  }, [params.slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return blogArticles
      .filter((a) => a.id !== article.id && a.category === article.category)
      .slice(0, 3);
  }, [article]);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Header />
      <main>
        {/* Article Header */}
        <section className="bg-background pt-8 sm:pt-12">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-foreground/50">{formattedDate}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
                {article.title}
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {article.excerpt}
              </p>
            </motion.div>

            {/* Meta Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-wrap gap-8 border-t border-border pt-6 mb-12"
            >
              <div className="flex items-center gap-3">
                <User size={18} className="text-foreground/50" />
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-widest">Author</p>
                  <p className="text-sm font-semibold text-foreground">{article.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-foreground/50" />
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-widest">Published</p>
                  <p className="text-sm font-semibold text-foreground">{formattedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-foreground/50" />
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-widest">Read Time</p>
                  <p className="text-sm font-semibold text-foreground">{article.readTime} min</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 sm:h-[500px] overflow-hidden"
        >
          <div className="relative w-full h-full bg-muted flex items-center justify-center">
            <p className="text-foreground/40 text-center px-6">
              Article Featured Image
            </p>
          </div>
        </motion.section>

        {/* Article Content */}
        <section className="bg-background py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="prose prose-invert max-w-none"
            >
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mt-16 sm:mt-24 pt-12 border-t border-border"
            >
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-secondary/40 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    About the Author
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    {article.author} is a luxury influencer and lifestyle storyteller dedicated to
                    authentic content and meaningful brand partnerships. With a focus on fashion,
                    travel, and sustainable living, she shares insights that inspire and elevate.
                  </p>
                  <a
                    href="https://instagram.com"
                    className="text-accent hover:text-accent/80 transition-colors text-sm font-semibold"
                  >
                    Follow on Instagram →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-secondary/20 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                className="mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Related Articles
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/blog/${relatedArticle.slug}`}
                    className="group"
                  >
                    <ImageCard
                      image={relatedArticle.image}
                      title={relatedArticle.title}
                      description={relatedArticle.excerpt}
                      category={relatedArticle.category}
                    />
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
