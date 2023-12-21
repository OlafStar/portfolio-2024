import HeroSection from '~components/organisms/HeroSection'
import AboutSection from '~components/organisms/AboutSection'
import ServicesSection from '~components/organisms/ServicesSection'
import DescriptionSection from '~components/organisms/DescriptionSection'
import WorksSection from '~components/organisms/WorksSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DescriptionSection />
      <WorksSection />
    </main>
  )
}
