import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark py-8 mt-12 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold tracking-tighter">
            Kumkum<span className="text-cyan-neon">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-1">Web Developer &bull; Frontend Developer</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/kumkum-kumari-69a732347/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-cyan-neon transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/kumkum252"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-cyan-neon transition-colors"
          >
            <Github size={20} />
          </a>
        </div>

        <div className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Kumkum Kumari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
