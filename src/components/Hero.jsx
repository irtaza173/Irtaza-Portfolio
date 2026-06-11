import { motion } from 'framer-motion';
import { FiLinkedin, FiArrowDown, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/resume';
import ProfilePhoto from './ProfilePhoto';

export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center pt-28 pb-20 px-6">
      <div className="hero-noise" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--accent-glow)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {personalInfo.title}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="heading-xl mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.firstName}</span>
            <br />
            {personalInfo.lastName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg italic mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="leading-relaxed mb-8 max-w-lg text-base"
            style={{ color: 'var(--text-secondary)' }}
          >
            I design and ship scalable web applications with{' '}
            <strong style={{ color: 'var(--text)' }}>C#</strong>,{' '}
            <strong style={{ color: 'var(--text)' }}>.NET Core</strong>,{' '}
            <strong style={{ color: 'var(--text)' }}>Angular</strong>, and{' '}
            <strong style={{ color: 'var(--text)' }}>React.js</strong> — from
            healthcare portals to e-commerce platforms, built for performance
            and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FiDownload size={16} />
              Resume
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <ProfilePhoto />
        </div>
      </div>

      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors hover:text-[var(--accent)]"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <FiArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
