import { usePortfolioEffects } from './hooks/usePortfolioEffects';
import BackgroundEffects from './components/BackgroundEffects';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  usePortfolioEffects();

  return (
    <>
      <a className="skip-link" href="#hero">
        Skip to content
      </a>
      <BackgroundEffects />
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
