import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
