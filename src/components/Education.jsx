import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-title"
        >
          Academic <span className="text-cyan-neon">Education</span>
        </motion.h2>

        <div className="relative border-l-2 border-cyan-neon/30 pl-7 ml-3 md:ml-6 space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-6 h-4 w-4 rounded-full bg-dark border-4 border-cyan-neon shadow-[0_0_10px_#00EEFF]"
              />
              <div className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <GraduationCap size={18} className="text-cyan-neon shrink-0" />
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-neon font-medium text-sm md:text-base mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-200 border border-white/10">
                      {edu.period}
                    </span>
                    {edu.score && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/25">
                        {edu.score}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
