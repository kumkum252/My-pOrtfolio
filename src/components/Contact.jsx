import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', text: '' });

    try {
      if (portfolioData.contact.web3FormsKey) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: portfolioData.contact.web3FormsKey,
            ...form,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setStatus({ type: 'success', text: 'Message sent successfully!' });
          setForm({ name: '', email: '', message: '' });
        } else {
          setStatus({ type: 'error', text: data.message || 'Could not send message.' });
        }
      } else {
        // Fallback when no backend key is configured yet
        setStatus({
          type: 'success',
          text: `Thanks ${form.name}! Your message has been prepared. Add your email or Web3Forms key in portfolioData.js to receive submissions directly.`,
        });
        setForm({ name: '', email: '', message: '' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-title"
        >
          Get In <span className="text-cyan-neon">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {portfolioData.contact.heading}
              </h3>
              <p className="text-gray-400 leading-relaxed">{portfolioData.contact.description}</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-300 text-sm md:text-base">
                  {portfolioData.contact.location}
                </span>
              </div>

              {portfolioData.contact.email && (
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                    {portfolioData.contact.email}
                  </span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              {portfolioData.contact.github && (
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-neon hover:text-dark hover:border-cyan-neon transition-all"
                >
                  <Github size={18} />
                </a>
              )}
              {portfolioData.contact.linkedin && (
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-neon hover:text-dark hover:border-cyan-neon transition-all"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 flex flex-col gap-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl bg-dark/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-neon transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-xl bg-dark/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-neon transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2.5 rounded-xl bg-dark/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-neon transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full mt-1 disabled:opacity-60"
            >
              <Send size={16} />
              {submitting ? 'Sending...' : 'Send Message'}
            </button>

            {status.text && (
              <p
                className={`text-xs md:text-sm flex items-start gap-2 mt-1 ${
                  status.type === 'error' ? 'text-red-400' : 'text-cyan-neon'
                }`}
              >
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                <span>{status.text}</span>
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
