import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Github, Smartphone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-title"
        >
          Featured <span className="text-cyan-neon">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col md:col-span-2 lg:col-span-1 lg:col-start-2"
            >
              {/* Stylized dark cyan preview banner */}
              <div className="relative h-44 bg-gradient-to-br from-cyan-neon/15 via-blue-600/10 to-dark-card border-b border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,238,255,0.22),transparent_65%)] group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10 flex flex-col items-center gap-2 text-cyan-neon">
                  <div className="w-14 h-14 rounded-2xl bg-dark/70 border border-cyan-neon/35 flex items-center justify-center shadow-[0_0_20px_rgba(0,238,255,0.2)]">
                    <Smartphone size={28} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold">
                    {project.title}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-neon transition-colors flex items-center gap-2">
                  <FolderGit2 size={18} className="text-cyan-neon shrink-0" />
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-neon transition-colors"
                    >
                      <Github size={16} />
                      View Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-neon transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
