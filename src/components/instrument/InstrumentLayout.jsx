import { Link } from 'react-router-dom';
import InstrumentNav from './InstrumentNav.jsx';
import { INSTRUMENT } from '../../content/instrumentCopy.js';

const InstrumentLayout = ({ children }) => (
  <div className="min-h-screen bg-[#050505] text-white font-instrument selection:bg-brand-orange selection:text-black">
    <a
      href="#main-content"
      className="skip-link focus-visible:!bg-brand-orange focus-visible:!text-black"
    >
      Skip to main content
    </a>
    <InstrumentNav />
    <main id="main-content" tabIndex={-1}>
      {children}
    </main>
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-instrument-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
          On-prem appraisal · custody never transfers
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {INSTRUMENT.footer.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-instrument-mono text-[10px] uppercase tracking-[0.16em] text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  </div>
);

export default InstrumentLayout;
