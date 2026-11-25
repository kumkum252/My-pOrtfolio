import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: 'Web Development Intern',
    company: 'NIELET Buxar',
    duration: '22 Dec 2025 – 4 Jan 2026 (2 Weeks)',
    points: [
      'Completed a 2-week winter internship in Web Development at NIELET Buxar.',
      'Built responsive web pages and strengthened frontend skills in HTML, CSS, and JavaScript.',
      'Gained practical exposure to structured coding workflows, debugging, and problem-solving.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional <span className="text-cyan-neon">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative border-l-2 border-cyan-neon/30 pl-8 ml-4 md:ml-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.duration}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${index < experienceData.length - 1 ? 'mb-10' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-dark border-4 border-cyan-neon shadow-[0_0_10px_#00EEFF]"></div>

              <div className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="text-cyan-neon shrink-0" size={16} />
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-cyan-neon font-medium mt-1">{exp.company}</h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/5">
                    {exp.duration}
                  </span>
                </div>
                <ul className="text-gray-400 mt-4 list-disc pl-4 space-y-2 text-sm md:text-base">
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
};

export default Experience;
