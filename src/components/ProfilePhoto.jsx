import { motion } from 'framer-motion';

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      className="profile-frame"
    >
      {/* Decorative background layers */}
      <div className="profile-bg-blob profile-bg-blob-1" />
      <div className="profile-bg-blob profile-bg-blob-2" />
      <div className="profile-bg-blob profile-bg-blob-3" />
      <div className="profile-grid-pattern" />

      {/* Main card */}
      <div className="profile-card">
        <div className="profile-image-wrap">
          <img
            src="/profile-enhanced.webp"
            alt="Irtaza Nadeem — Full Stack Developer"
            className="profile-image"
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = '/profile.png';
            }}
          />
          <div className="profile-image-shine" />
        </div>

        <div className="profile-badge profile-badge-top">
          <span className="profile-badge-dot" />
          Available for work
        </div>
      </div>

      {/* Floating stat chips */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
        className="profile-chip profile-chip-1"
      >
        <span className="profile-chip-num">5+</span>
        <span className="profile-chip-label">Years</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.4 }}
        className="profile-chip profile-chip-2"
      >
        <span className="profile-chip-num">.NET</span>
        <span className="profile-chip-label">+ React</span>
      </motion.div>
    </motion.div>
  );
}
