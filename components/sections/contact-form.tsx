'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { services } from '@/lib/data';
import { Check } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceType: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-accent/10 border border-accent/30 flex items-start gap-3"
        >
          <Check className="text-accent flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-semibold text-accent">Message sent successfully!</p>
            <p className="text-sm text-accent/80">
              Thank you for your inquiry. I&apos;ll be in touch shortly.
            </p>
          </div>
        </motion.div>
      )}

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg bg-secondary/20 border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg bg-secondary/20 border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company (optional)"
          className="w-full px-4 py-3 rounded-lg bg-secondary/20 border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Service Type
        </label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-secondary/20 border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
        >
          <option value="">Select a service type</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell me about your collaboration idea..."
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-secondary/20 border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-primary/50 transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>

      <p className="text-xs text-foreground/50 text-center">
        I&apos;ll respond to your inquiry within 24-48 hours.
      </p>
    </motion.form>
  );
}
