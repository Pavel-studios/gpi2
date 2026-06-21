import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AboutSection } from './components/AboutSection';
import { EquipmentSection } from './components/EquipmentSection';
import { ProductionSection } from './components/ProductionSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';
import { RouteMeta } from './components/RouteMeta';
import { LandingPage } from './components/LandingPage';
import { HeroSection } from './components/HeroSection';
import { IndustriesSection } from './components/IndustriesSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ProjectsPreview } from './components/ProjectsPreview';
import { ProductionPreview } from './components/ProductionPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <RouteMeta />
      <PageLoader />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={
            <LandingPage />
          } />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/equipment" element={<EquipmentSection />} />
          <Route path="/production" element={<ProductionSection />} />
          <Route path="/contacts" element={<ContactsSection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
