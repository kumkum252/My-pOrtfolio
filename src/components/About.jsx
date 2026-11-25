import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ICON_MAP = {
  graduation: GraduationCap,
  award: Award,
  briefcase: Briefcase,
};

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-title"
        >
          About <span className="text-cyan-neon">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 md:p-12 text-center flex flex-col gap-8"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {portfolioData.about.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {portfolioData.about.highlights.map((item) => {
              const Icon = ICON_MAP[item.icon] || Award;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center p-5 bg-white/[0.03] rounded-xl border border-white/10 hover:border-cyan-neon/40 transition-colors"
                >
                  <Icon className="text-cyan-neon mb-3" size={28} />
                  <h3 className="font-semibold text-base text-white">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
