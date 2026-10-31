'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  Send,
  User,
  Mail,
  Building2,
  MessageSquare,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from 'lucide-react'

// Palette Pop Parade identique au reste du site
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

const services = [
  { id: 1, name: 'Custom cap', icon: '🎨', color: POP.pink },
  { id: 2, name: 'Embroidered customization', icon: '🧵', color: POP.cyan },
  { id: 3, name: 'Capsule collection', icon: '⭐', color: POP.yellow },
  { id: 4, name: 'Style consulting', icon: '✨', color: POP.purple },
  { id: 5, name: 'Workshop & Wholesale', icon: '🏷️', color: POP.pink },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: services[0].name,
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulation d'envoi API
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceType: services[0].name,
        message: '',
      })
    } catch (error) {
      console.error('Error while submitting the form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="relative bg-white border-[3px] border-black p-6 sm:p-8 md:p-10"
      style={{ boxShadow: '8px 8px 0 #000' }}
    >
      {/* Badge sticker décalé au sommet */}
      <span
        className="absolute -top-3.5 -left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000]"
        style={{ background: POP.yellow }}
      >
        <Sparkles className="w-3 h-3 text-black" />
        Direct form
      </span>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          /* ============================================ */
          /* ========== ÉTAT SUCCÈS (NÉO-BRUTAL) ========== */
          /* ============================================ */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-10 text-center"
          >
            <div
              className="w-16 h-16 border-[3px] border-black mx-auto flex items-center justify-center mb-6 shadow-[4px_4px_0_#000]"
              style={{ background: POP.cyan }}
            >
              <Check className="w-8 h-8 text-black" strokeWidth={3} />
            </div>

            <h3 className="font-['Inter_Tight'] text-2xl font-black uppercase tracking-tight text-black mb-3">
              Message sent successfully!
            </h3>
            <p className="text-black/70 text-sm max-w-md mx-auto leading-relaxed font-medium mb-8">
              Thank you for your message. The Capora MA team will get back to
              you within 24 business hours.
            </p>

            <button
              onClick={() => setIsSuccess(false)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-[11px] font-black uppercase tracking-wider text-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 transition-all"
              style={{ background: POP.pink, color: '#fff' }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Send another request
            </button>
          </motion.div>
        ) : (
          /* ============================================ */
          /* ========== FORMULAIRE DE CONTACT ========== */
          /* ============================================ */
          <form key="form" onSubmit={handleSubmit} className="space-y-6">
            {/* Ligne 1 : Nom & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                  <User className="w-3.5 h-3.5" />
                  Full name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Mehdi Alaoui"
                  className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black placeholder:text-black/30 placeholder:font-medium focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                  <Mail className="w-3.5 h-3.5" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="mehdi@example.ma"
                  className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black placeholder:text-black/30 placeholder:font-medium focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>
            </div>

            {/* Ligne 2 : Entreprise (optionnel) */}
            <div>
              <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                <Building2 className="w-3.5 h-3.5" />
                Company / Brand{' '}
                <span className="text-black/40 font-bold lowercase tracking-normal">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your studio, brand or company"
                className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black placeholder:text-black/30 placeholder:font-medium focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
              />
            </div>

            {/* Ligne 3 : Sélection du Service sous forme de puces Pop */}
            <div>
              <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                Desired service *
              </label>

              <div className="flex flex-wrap gap-2">
                {services.map((service) => {
                  const isSelected = formData.serviceType === service.name
                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          serviceType: service.name,
                        }))
                      }
                      className="group px-3 py-2 border-2 border-black text-[10px] sm:text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200"
                      style={{
                        background: isSelected ? service.color : '#fff',
                        boxShadow: isSelected
                          ? '3px 3px 0 #000'
                          : '1px 1px 0 #000',
                        transform: isSelected ? 'translate(-1px, -1px)' : 'none',
                      }}
                    >
                      <span className="text-xs">{service.icon}</span>
                      <span className="text-black">{service.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Ligne 4 : Message */}
            <div>
              <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                Your project / Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your idea, desired quantity, timeline..."
                className="w-full px-4 py-3 border-2 border-black bg-white text-sm font-bold text-black placeholder:text-black/30 placeholder:font-medium focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all resize-none"
              />
            </div>

            {/* Bouton d'envoi néo-brutaliste */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-4 border-[3px] border-black text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-[5px_5px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{ background: POP.pink }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Send request</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {/* Note discrète de réactivité */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full border border-black" style={{ background: POP.cyan }} />
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/50 text-center">
                Guaranteed reply within 24h to 48h · Casablanca Workshop 🇲🇦
              </p>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  )
}