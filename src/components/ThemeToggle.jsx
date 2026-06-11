import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className={`theme-toggle-icon ${isDark ? 'hidden' : ''}`}>
        <FiMoon size={18} />
      </span>
      <span className={`theme-toggle-icon ${!isDark ? 'hidden' : ''}`}>
        <FiSun size={18} />
      </span>
    </button>
  );
}
