import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/resume';

const contactItems = [
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'irtaza-nadeem', href: personalInfo.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'irtaza173', href: personalInfo.github },
];

export default function Contact() {
  return (
    <section id="contact" className="section-alt py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="heading-lg">Let's Connect</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const inner = (
              <div className="card p-5 flex items-center gap-4 group">
                <div
                  className="p-3 rounded-xl transition-colors"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {item.label}
                  </p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--text)' }}>
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                ) : inner}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href={`mailto:${personalInfo.email}`} className="btn-primary">
            <FiMail size={18} />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
