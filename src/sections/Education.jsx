import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech) - CSE',
    institution: 'Katihar Engineering College, Katihar',
    period: '2025 - 2028 (Pursuing)',
    score: null,
  },
  {
    degree: 'Diploma - Computer Science Engineering (CSE)',
    institution: 'New Government Polytechnic, Patna 13',
    period: '2022 - 2025',
    score: 'CGPA: 8.38',
    },
  {
    degree: 'Secondary School (10th Grade)',
    institution: 'Mahadeva High School, Khusrupur, Patna',
    period: '2022',
    score: 'Score: 89.6%',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="text-cyan-neon">Education</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative border-l-2 border-cyan-neon/30 pl-8 ml-4 md:ml-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${index < educationData.length - 1 ? 'mb-10' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-dark border-4 border-cyan-neon shadow-[0_0_10px_#00EEFF]"></div>

              <div className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <FaGraduationCap className="text-cyan-neon text-sm shrink-0" />
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-gray-300 font-medium mt-1">{edu.institution}</h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/5 shrink-0">
                    {edu.period}
                  </span>
                </div>
                {edu.details && (
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-2">
                    {edu.details}
                  </p>
                )}
                {edu.score && <p className="text-cyan-neon font-semibold mt-3">{edu.score}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
