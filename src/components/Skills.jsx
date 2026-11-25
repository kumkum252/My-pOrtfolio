import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-title"
        >
          Technical <span className="text-cyan-neon">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm border border-white/10 bg-white/[0.04] group-hover:scale-110 transition-transform duration-300"
                style={{ color: skill.color }}
              >
                {skill.code}
              </div>
              <h3 className="font-semibold text-base text-white">{skill.name}</h3>
              <div className="w-full bg-dark rounded-full h-1.5 overflow-hidden border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.25 + index * 0.08 }}
                  className="bg-gradient-to-r from-cyan-neon to-blue-500 h-1.5 rounded-full shadow-[0_0_10px_#00EEFF]"
                />
              </div>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
