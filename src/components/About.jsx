import { motion } from 'framer-motion';
import { aboutSections, summary } from '../data/resume';

export default function About() {
  return (
    <section id="about" className="section-alt py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="section-label mb-3">About</p>
            <h2 className="heading-lg mb-6">Who I Am</h2>

            <div className="code-block overflow-hidden">
              <div className="code-block-header">
                <div className="code-dot" style={{ background: '#ef4444' }} />
                <div className="code-dot" style={{ background: '#eab308' }} />
                <div className="code-dot" style={{ background: '#22c55e' }} />
                <span className="ml-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                  summary.md
                </span>
              </div>
              <p className="p-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {summary}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3 space-y-5"
          >
            {aboutSections.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="leading-relaxed text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                {paragraph}
              </motion.p>
            ))}

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="badge-pill">📍 Islamabad, Pakistan</span>
              <span className="badge-pill">💬 English · Urdu</span>
              <span className="badge-pill">☁️ Microsoft Azure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
