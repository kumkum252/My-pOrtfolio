import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

// Add your Web3Forms access key here when ready to receive submissions directly:
const WEB3FORMS_ACCESS_KEY = '';

const CONTACT_INFO = {
  location: 'Khusrupur, Patna, Bihar',
  email: '',
  linkedin: 'https://www.linkedin.com/in/kumkum-kumari-69a732347/',
  github: 'https://github.com/kumkum252',
};

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setResult('Thanks for your message! Configure WEB3FORMS_ACCESS_KEY in src/sections/Contact.jsx to receive submissions.');
      event.target.reset();
      return;
    }

    setResult('Sending....');
    const formData = new FormData(event.target);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        event.target.reset();
      } else {
        setResult(data.message || 'Could not send message.');
      }
    } catch {
      setResult('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In <span className="text-cyan-neon">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Let&apos;s work together!</h3>
              <p className="text-gray-400">
                I&apos;m open to internships, web development collaborations, and exciting frontend
                projects. Feel free to reach out through the form!
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-300">{CONTACT_INFO.location}</span>
              </div>

              {CONTACT_INFO.email && (
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                    <Mail size={18} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </span>
                </a>
              )}

              {CONTACT_INFO.linkedin && (
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                    <Linkedin size={18} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
              )}

              {CONTACT_INFO.github && (
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                    <Github size={18} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    GitHub Profile
                  </span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-all"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full mt-2">
                Send Message
              </button>
              {result && <p className="text-center mt-4 text-cyan-neon text-sm">{result}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
