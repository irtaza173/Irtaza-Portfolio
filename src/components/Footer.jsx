import { personalInfo } from '../data/resume';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display font-bold text-lg" style={{ color: 'var(--text)' }}>
          Irtaza<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <nav className="flex gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <a href="#projects" className="hover:text-[var(--accent)] transition-colors">Works</a>
          <a href="#experience" className="hover:text-[var(--accent)] transition-colors">Experience</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
        </nav>

        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {year} {personalInfo.firstName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
