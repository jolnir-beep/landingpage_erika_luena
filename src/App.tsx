import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmotionalEating } from './components/EmotionalEating';
import { MethodSection } from './components/MethodSection';
import { OnlineTherapy } from './components/OnlineTherapy';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DecorativeElements } from './components/DecorativeElements';

export function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-coral/20 selection:text-brand-coral font-sans antialiased overflow-x-hidden">
      {/* Background discrete decorative elements layer */}
      <DecorativeElements />

      {/* Main Single Page Layout Components */}
      <Header />
      <main className="relative z-10">
        <Hero />
        <EmotionalEating />
        <MethodSection />
        <OnlineTherapy />
        <AboutSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
