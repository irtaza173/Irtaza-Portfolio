import { motion } from 'framer-motion';
import { education, certifications, languages } from '../data/resume';

export default function Education() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-6">Education</p>
          <div className="card-raised p-8">
            <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
              {education.degree}
            </h3>
            <p className="font-medium" style={{ color: 'var(--accent)' }}>{education.institution}</p>
            <p className="mt-1" style={{ color: 'var(--text-secondary)' }}>{education.location}</p>
            <p className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>{education.period}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="section-label mb-6">Certifications</p>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="card p-5">
                <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{cert.title}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--accent)' }}>{cert.issuer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="section-label mb-4">Languages</p>
            <div className="flex gap-3">
              {languages.map((lang) => (
                <span key={lang} className="badge-pill">{lang}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
