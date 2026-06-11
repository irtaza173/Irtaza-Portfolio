import { motion } from 'framer-motion';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="heading-lg">Work Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="card p-6 md:p-8 relative overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ background: 'var(--accent)' }}
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5 pl-3">
                <div>
                  <h3 className="font-display text-xl font-bold" style={{ color: 'var(--text)' }}>
                    {job.title}
                  </h3>
                  <p className="font-medium mt-1" style={{ color: 'var(--accent)' }}>
                    {job.company}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {job.location}
                  </p>
                </div>
                <span
                  className="self-start px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
                  style={{ background: 'var(--warm-soft)', color: 'var(--warm)' }}
                >
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2.5 pl-3">
                {job.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
