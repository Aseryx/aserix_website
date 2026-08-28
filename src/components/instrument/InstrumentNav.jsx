import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AseryxLogo from '../common/AseryxLogo.jsx';
import { TALLY } from '../../config/tally.js';
import { INSTRUMENT } from '../../content/instrumentCopy.js';

const InstrumentNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="hover:opacity-80 transition-opacity shrink-0">
          <AseryxLogo className="h-5 md:h-6" variant="dark" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {INSTRUMENT.nav.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-instrument-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                isActive(link.to) ? 'text-white' : 'text-white/45 hover:text-white/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={TALLY.appraisal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-instrument-mono text-[11px] uppercase tracking-[0.18em] text-brand-orange hover:text-white transition-colors"
          >
            Request Appraisal
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        <a
          href={TALLY.appraisal}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden inline-flex items-center gap-1 font-instrument-mono text-[10px] uppercase tracking-[0.16em] text-brand-orange"
        >
          Appraisal
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </header>
  );
};

export default InstrumentNav;
