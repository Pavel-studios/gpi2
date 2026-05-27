import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProjectsPreview } from './components/ProjectsPreview';
import { ProductionPreview } from './components/ProductionPreview';
import { AboutSection } from './components/AboutSection';
import { EquipmentSection } from './components/EquipmentSection';
import { ProductionSection } from './components/ProductionSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AdvantagesSection />
              <IndustriesSection />
              <ProjectsPreview />
              <ProductionPreview />
            </>
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