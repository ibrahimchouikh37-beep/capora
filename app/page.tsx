'use client'

import { Hero } from '@/components/hero'
import { About } from '@/components/about/About'
import BlogPreview from '@/components/blog/BlogPreview'
import PortfolioPreview from '@/components/portfolio/PortfolioPreview'
import Products3D from '@/components/products/Products3D'
import VideoShowcase from '@/components/video/VideoShowcase' 
import { ContactForm } from '@/components/contact/ContactForm'
import { CTA } from '@/components/cta/CTA'
import { Mail, Clock, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
       <VideoShowcase />
      <Products3D />
      <PortfolioPreview />
   

      {/* ========== SECTION CONTACT — Pop Parade ========== */}
      <section
        id="contact"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: POP.cream }}
      >
        {/* Trame halftone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Formes géométriques nettes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-[6px] border-black"
          style={{ background: POP.cyan, opacity: 0.15 }}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -left-8 w-16 h-16 border-[4px] border-black"
          style={{ background: POP.pink, rotate: 25, opacity: 0.6 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Texte */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                  <Sparkles className="w-3 h-3" />
                  Contact
                </span>
                <span className="text-black/40 text-[10px] tracking-[0.25em] uppercase">
                  Response in 24h
                </span>
              </div>

              <h2 className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-black mb-8">
                <span className="block text-4xl sm:text-5xl lg:text-6xl uppercase">
                  GOT A QUESTION?
                </span>
                <span
                  className="block text-4xl sm:text-5xl lg:text-6xl uppercase italic"
                  style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
                >
                  CONTACT US.
                </span>
              </h2>

              <p className="text-black/60 text-base md:text-lg mb-10 leading-relaxed max-w-md">
                Our team is available for any question regarding our products
                or your order.
              </p>

              <div className="space-y-3 max-w-md">
                {/* Carte Email */}
                <motion.a
                  href="mailto:contact@casacap.ma"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 bg-white border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="p-2.5 border-2 border-black shrink-0"
                    style={{ background: POP.yellow }}
                  >
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] text-black/50 tracking-[0.25em] uppercase font-bold mb-0.5">
                      Email
                    </p>
                    <p className="text-sm font-black text-black">
                      contact@casacap.ma
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </motion.a>

                {/* Carte Horaires */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white border-2 border-black shadow-[4px_4px_0_#000]"
                >
                  <div
                    className="p-2.5 border-2 border-black shrink-0"
                    style={{ background: POP.cyan }}
                  >
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] text-black/50 tracking-[0.25em] uppercase font-bold mb-0.5">
                      Opening hours
                    </p>
                    <p className="text-sm font-black text-black">
                      Mon - Fri: 9am - 7pm
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full border border-black animate-pulse"
                      style={{ background: POP.pink }}
                    />
                    <span className="text-[10px] font-bold text-black/60">
                      Live
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — Formulaire (composant inchangé) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}