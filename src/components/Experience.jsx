import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-title"
        >
          Professional <span className="text-cyan-neon">Experience</span>
        </motion.h2>

        <div className="relative border-l-2 border-cyan-neon/30 pl-7 ml-3 md:ml-6 space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.duration}`}
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
              <div className="glass-card p-6 md:p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase size={18} className="text-cyan-neon shrink-0" />
                      {exp.role}
                    </h3>
                    <p className="text-lg text-cyan-neon font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/10 text-gray-200 text-xs md:text-sm rounded-full border border-white/10 self-start">
                    {exp.duration}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
