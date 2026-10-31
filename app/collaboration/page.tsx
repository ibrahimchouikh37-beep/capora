'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { fadeInUp, containerVariants, itemVariants } from '@/lib/animations';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/sections/contact-form';

export default function CollaborationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-12"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Collaboration
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Let&apos;s Create Together
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl">
                I&apos;m always open to authentic partnerships with brands that align with my values. Whether you have a specific collaboration in mind or want to explore possibilities, I&apos;d love to connect.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-24 bg-secondary/20">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Services & Offerings
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:hello@alexandra.com"
                        className="text-foreground/70 hover:text-accent transition-colors"
                      >
                        hello@alexandra.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-foreground/70 hover:text-accent transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-foreground/70">
                        New York, NY<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-lg bg-secondary/20 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-foreground/70 text-sm">
                    I aim to respond to all collaboration inquiries within 24-48 hours.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
