import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-24 pb-14 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-5"
        >
          <div>
            <p className="text-lg md:text-xl text-cyan-neon font-medium mb-2 tracking-wide">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-3">
              {portfolioData.firstName}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-blue-500">
                {portfolioData.lastName}
              </span>
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-200 font-semibold mb-3">
              {portfolioData.role}
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed">
              {portfolioData.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-cyan-neon via-sky-400 to-blue-600 animate-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-dark-card">
              <img
                src={portfolioData.profileImage}
                alt={`${portfolioData.firstName} ${portfolioData.lastName}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
