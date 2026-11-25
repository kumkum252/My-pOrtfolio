import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const RESUME_URL =
  'https://drive.google.com/file/d/1MLF79ZdwUjKeONb1jeM37qXNjuY1_1HQ/view?usp=drive_link';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-20 px-6">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="text-xl md:text-2xl text-cyan-neon font-medium mb-2 tracking-wide">
              Hello, I&apos;m
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Kumkum{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-blue-500">
                Kumari
              </span>
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-300 font-semibold mb-3">
              Web Developer | Frontend Developer | CSE Student
            </h3>
            <p className="text-lg text-gray-400 max-w-lg">
              Creating modern, responsive websites with clean design and smooth UI.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Outer decorative neon glow & orbits */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-neon to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-45 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />

            <div
              className="absolute inset-0 rounded-full border border-cyan-neon/20 animate-spin pointer-events-none"
              style={{ animationDuration: '20s' }}
            />
            <div
              className="absolute -inset-4 rounded-full border border-dashed border-cyan-neon/10 animate-spin pointer-events-none"
              style={{ animationDuration: '35s' }}
            />

            {/* Main Circular Profile Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-[#0A0A0A] border-2 border-cyan-neon/40 shadow-[0_0_12px_rgba(0,238,255,0.2)] overflow-hidden flex items-center justify-center">
              <img
                src={profileImg}
                alt="Kumkum Kumari"
                className="w-full h-full object-cover object-top rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                onError={(e) => {
                  e.target.src =
                    'https://ui-avatars.com/api/?name=Kumkum+Kumari&background=0D1117&color=00EEFF&size=512';
                }}
              />
            </div>

            {/* Small floating neon details */}
            <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-cyan-neon flex items-center justify-center shadow-[0_0_12px_rgba(0,238,255,0.35),0_0_30px_rgba(0,238,255,0.15)] animate-float-slow">
              <span className="h-2 w-2 rounded-full bg-dark" />
            </div>
            <div
              className="absolute top-8 left-0 h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-dark" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
