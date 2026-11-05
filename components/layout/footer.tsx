'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, Youtube, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: POP.pink },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: POP.cyan },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: POP.yellow },
    { icon: Mail, href: 'mailto:contact@casacap.ma', label: 'Email', color: POP.purple },
  ];

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Collection', href: '/collection' },
    { label: 'Meilleures Ventes', href: '/meilleures-ventes' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t-[3px] border-black"
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

      {/* Formes géométriques */}
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full border-[6px] border-black"
        style={{ background: POP.pink, opacity: 0.12 }}
      />

      {/* ===== GROS MOT "CAPORA MA" EN OUTLINE — signature Pop Parade ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-['Inter_Tight'] font-black uppercase leading-[0.8] tracking-tighter text-center select-none"
          style={{
            fontSize: 'clamp(2.5rem, 13vw, 11rem)',
            WebkitTextStroke: '2px #000',
            color: 'transparent',
          }}
        >
          CAPORA MA
        </motion.h2>
      </div>

      {/* ===== Contenu principal ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[3px_3px_0_#000]"
                style={{ background: POP.yellow }}
              >
                <Sparkles className="w-3 h-3" />
                Est. 2026
              </span>
            </div>

            {/* ✅ LOGO IMAGE à la place du texte "Brandcap" */}
            <div className="mb-4 inline-flex items-center">
              <Image
                src="/images/logocapora55.png"
                alt="Capora MA"
                width={200}
                height={64}
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-black/60 leading-relaxed max-w-xs">
              Premium caps, crafted identity. Bold colors, custom designs,
              and a community of creators who refuse to follow trends.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-black mb-4">
              Navigation
            </h4>
            <div className="space-y-2.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
                >
                  <span className="w-4 h-px bg-black/30 group-hover:bg-black group-hover:w-6 transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-black mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@casacap.ma"
                className="group inline-flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
              >
                contact@capora.ma
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </a>
              <p className="text-sm text-black/60">
                Based in Morocco 🇲🇦
              </p>
              <p className="text-[11px] text-black/40 font-medium">
                Lun - Ven : 9h - 19h
              </p>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-black mb-4">
              Follow
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="p-2.5 border-2 border-black text-black transition-all duration-300 shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000]"
                  style={{ background: color }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-[11px] text-black/40 font-medium mt-4">
              Join the movement →
            </p>
          </motion.div>
        </div>

        {/* ===== Bottom ===== */}
        <div className="border-t-2 border-black/15 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-black/50 font-medium uppercase tracking-wider text-center sm:text-left">
              &copy; {currentYear} CAPORA MA. All rights reserved.
            </p>

            {/* ===== Developed by ===== */}
            <a
              href="https://ibrahimchouikh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-black/50 hover:text-black transition-colors"
            >
              <span className="text-[10px] font-medium normal-case tracking-normal text-black/40">
                Developed by
              </span>
              <Image
                src="/images/logodev01.png"
                alt="Ibrahim Chouikh"
                width={160}
                height={44}
                className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
            </a>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-[11px] font-black uppercase tracking-wider text-black/50 hover:text-black transition-colors underline-offset-4 hover:underline decoration-2"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[11px] font-black uppercase tracking-wider text-black/50 hover:text-black transition-colors underline-offset-4 hover:underline decoration-2"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}