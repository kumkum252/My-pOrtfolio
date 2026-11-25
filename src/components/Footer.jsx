import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 text-center text-sm text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-semibold text-white">
          {portfolioData.brand}
          <span className="text-cyan-neon">.</span>
        </p>
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.firstName} {portfolioData.lastName}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
