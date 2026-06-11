import { motion } from 'framer-motion';
import { projects } from '../data/resume';

const accentColors = ['#0d9488', '#6366f1', '#d97706'];

export default function Projects() {
  return (
    <section id="projects" className="section-alt py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="heading-lg mb-3">Featured Projects</h2>
          <p style={{ color: 'var(--text-muted)' }}>Production systems I've built and shipped</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.web.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="card overflow-hidden group"
            >
              <div
                className="project-accent-bar"
                style={{ background: accentColors[index % accentColors.length] }}
              />
              <div className="p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-display font-bold text-lg"
                  style={{
                    background: 'var(--accent-soft)',
                    color: accentColors[index % accentColors.length],
                  }}
                >
                  {project.name.charAt(0)}
                </div>

                <h3
                  className="font-display text-lg font-bold mb-1 group-hover:text-[var(--accent)] transition-colors"
                  style={{ color: 'var(--text)' }}
                >
                  {project.name}
                </h3>
                <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent)' }}>
                  {project.company}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-neutral tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
