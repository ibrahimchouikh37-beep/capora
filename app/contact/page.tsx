'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Send,
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  RotateCcw,
} from 'lucide-react'

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

// Form subjects
const subjects = [
  'Custom order',
  'Order tracking',
  'Collaboration & Press',
  'Other question',
]

// Quick FAQ
const faqs = [
  {
    q: 'Do you deliver everywhere in Morocco?',
    a: 'Yes, express delivery in 24h to 48h in Casablanca and 48h to 72h anywhere in Morocco (Rabat, Marrakech, Tangier, Fes, etc.).',
    icon: Truck,
    color: POP.pink,
  },
  {
    q: 'Can I pay on delivery?',
    a: 'Absolutely! Cash on Delivery in Dirhams (MAD) is available for all orders.',
    icon: ShieldCheck,
    color: POP.cyan,
  },
  {
    q: 'Can I customize my cap?',
    a: 'Yes, we create exclusive embroideries and patches on request from our workshop in Casablanca.',
    icon: Sparkles,
    color: POP.yellow,
  },
  {
    q: 'What is your exchange policy?',
    a: 'You have 7 days after receiving your order to request a free exchange if the size or model does not suit you.',
    icon: RotateCcw,
    color: POP.purple,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjects[0],
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: POP.cream }}>
      {/* ============================================ */}
      {/* ========== HERO CONTACT ========== */}
      {/* ============================================ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-black">
        {/* Trame halftone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Cercles déco animés */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[8px] border-white/10"
          style={{ background: POP.cyan, opacity: 0.25 }}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-[8%] w-20 h-20 border-[4px] border-white/30"
          style={{ background: POP.yellow, rotate: 20, opacity: 0.5 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-white text-black text-[10px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
                style={{ background: POP.yellow }}
              >
                <Sparkles className="w-3 h-3" />
                Contact · Capora MA
              </span>
              <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-bold">
                Get In Touch
              </span>
            </div>

            <h1 className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-white max-w-5xl">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase">
                DROP US
              </span>
              <span
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase italic"
                style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}
              >
                A LINE
              </span>
              <span
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase"
                style={{ color: POP.pink }}
              >
                ANYTIME.
              </span>
            </h1>

            <p className="text-white/60 text-base md:text-lg max-w-2xl mt-8 leading-relaxed font-medium">
              A question about a model, a custom order or a creative project?
              Our team in Casablanca will be happy to answer you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ========== SECTION FORMULAIRE + INFOS ========== */}
      {/* ============================================ */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Trame halftone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Colonne gauche : Formulaire (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white border-[3px] border-black p-6 sm:p-10 relative"
              style={{ boxShadow: '8px 8px 0 #000' }}
            >
              {/* Badge supérieur */}
              <span
                className="absolute -top-3.5 -left-3 z-10 px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000]"
                style={{ background: POP.cyan }}
              >
                Send a message
              </span>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center"
                  >
                    <div
                      className="w-16 h-16 border-[3px] border-black mx-auto flex items-center justify-center mb-6 shadow-[4px_4px_0_#000]"
                      style={{ background: POP.yellow }}
                    >
                      <CheckCircle className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-3">
                      Message received!
                    </h3>
                    <p className="text-black/70 text-sm max-w-md mx-auto leading-relaxed mb-8 font-medium">
                      Thank you <span className="font-bold text-black">{formData.name}</span>.
                      Our team is processing your request and will reply within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: subjects[0],
                          message: '',
                        })
                      }}
                      className="px-6 py-3 border-2 border-black text-[11px] font-black uppercase tracking-wider shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 transition-all"
                      style={{ background: POP.pink, color: '#fff' }}
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6 mt-4">
                    {/* Nom & Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                          Full name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Yassine Benali"
                          className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="yassine@example.com"
                          className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                        />
                      </div>
                    </div>

                    {/* Téléphone & Sujet */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+212 6 XX XX XX XX"
                          className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                          Subject *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black cursor-pointer focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all appearance-none"
                        >
                          {subjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                        Your message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us what you need..."
                        className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full py-4 border-[3px] border-black text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-[5px_5px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-y-0.5 disabled:opacity-50"
                      style={{ background: POP.pink }}
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Colonne droite : Coordonnées & Actions directes (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              {/* WhatsApp Card (Spécifique Maroc) */}
              <div
                className="bg-white border-[3px] border-black p-6 relative transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: `6px 6px 0 ${POP.cyan}` }}
              >
                <span
                  className="absolute -top-3 -right-3 px-2.5 py-0.5 border-2 border-black text-[9px] font-black uppercase tracking-wider shadow-[2px_2px_0_#000]"
                  style={{ background: POP.yellow }}
                >
                  Quick reply
                </span>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 border-2 border-black flex items-center justify-center shrink-0 shadow-[3px_3px_0_#000]"
                    style={{ background: POP.cyan }}
                  >
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase tracking-tight text-black">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-xs text-black/60 font-medium mt-1 leading-relaxed">
                      Need an instant answer? Chat directly with our team.
                    </p>
                    <a
                      href="https://wa.me/212600000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 border-2 border-black text-black text-[11px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] hover:-translate-y-0.5 transition-all"
                      style={{ background: POP.yellow }}
                    >
                      Open WhatsApp
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Coordonnées détaillées */}
              <div
                className="bg-white border-[3px] border-black p-6"
                style={{ boxShadow: '6px 6px 0 #000' }}
              >
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black mb-6">
                  Our Contact Details
                </h3>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0_#000]"
                      style={{ background: POP.purple, color: '#fff' }}
                    >
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-black/40">
                        Email
                      </p>
                      <a
                        href="mailto:contact@casacap.ma"
                        className="text-xs font-black text-black hover:underline"
                      >
                        contact@casacap.ma
                      </a>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0_#000]"
                      style={{ background: POP.pink }}
                    >
                      <Phone className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-black/40">
                        Phone
                      </p>
                      <a
                        href="tel:+212522000000"
                        className="text-xs font-black text-black hover:underline"
                      >
                        +212 5 22 00 00 00
                      </a>
                    </div>
                  </div>

                  {/* Atelier */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0_#000]"
                      style={{ background: POP.yellow }}
                    >
                      <MapPin className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-black/40">
                        Workshop & Showroom
                      </p>
                      <p className="text-xs font-black text-black">
                        Casablanca, Morocco 🇲🇦
                      </p>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0_#000]"
                      style={{ background: POP.cyan }}
                    >
                      <Clock className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-black/40">
                        Support hours
                      </p>
                      <p className="text-xs font-black text-black">
                        Mon - Fri: 09:00 AM - 07:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social media footer card */}
                <div className="border-t-2 border-black/10 mt-6 pt-5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-black/50">
                    Follow us
                  </span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-black hover:underline"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    @capora.ma
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ========== FAQ RAPIDE ========== */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-black">
        {/* Trame halftone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-white text-black text-[10px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
              style={{ background: POP.purple, color: '#fff' }}
            >
              <HelpCircle className="w-3 h-3" />
              Quick FAQ
            </span>

            <h2 className="font-['Inter_Tight'] font-black leading-[0.9] tracking-tight text-white mt-6">
              <span className="block text-3xl sm:text-4xl md:text-5xl uppercase">
                FREQUENTLY
              </span>
              <span
                className="block text-3xl sm:text-4xl md:text-5xl uppercase italic"
                style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}
              >
                ASKED QUESTIONS.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="bg-white border-[3px] border-white p-6 relative transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: `6px 6px 0 ${faq.color}` }}
              >
                <div
                  className="w-10 h-10 border-2 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0_#000]"
                  style={{ background: faq.color }}
                >
                  <faq.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-base font-black text-black uppercase tracking-tight mb-2">
                  {faq.q}
                </h3>
                <p className="text-black/70 text-xs sm:text-sm leading-relaxed font-medium">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/collection"
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-white bg-transparent text-white text-[11px] font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all"
            >
              View the collection
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}