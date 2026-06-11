import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiPhone, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/resume';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Works', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '/resume.html', external: true },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-bold tracking-tight" style={{ color: 'var(--text)' }}>
          Irtaza<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <div className="hidden lg:flex items-center gap-5 text-sm" style={{ color: 'var(--text-muted)' }}>
          <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
            <FiPhone size={13} />
            {personalInfo.phone}
          </a>
          <span style={{ color: 'var(--border-strong)' }}>|</span>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
            <FiMail size={13} />
            {personalInfo.email}
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--text)' }}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base font-medium transition-colors hover:text-[var(--accent)]"
                  style={{ color: 'var(--text)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
