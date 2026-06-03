import { AboutSection } from './components/home/about-section';
import { HeroSection } from './components/home/hero-section';
import { MenuSection } from './components/home/menu-section';
import { OpeningHoursSection } from './components/home/opening-hours-section';
import { PickupSection } from './components/home/pickup-section';
import { SiteFooter } from './components/home/site-footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <PickupSection />
      <OpeningHoursSection />
      <SiteFooter />
    </main>
  );
}
