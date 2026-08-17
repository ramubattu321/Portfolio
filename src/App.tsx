import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Research from './components/Research';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Awards />
      <Research />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
