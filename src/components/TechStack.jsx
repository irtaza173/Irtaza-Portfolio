import { techStack } from '../data/resume';

export default function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-14 overflow-hidden" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center section-label">Tech Stack</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 marquee-fade-left z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 marquee-fade-right z-10" />

        <div className="marquee-track">
          {doubled.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="mx-3 px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-full transition-colors"
              style={{
                background: 'var(--surface)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
