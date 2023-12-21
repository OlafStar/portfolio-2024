import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from '~components/organisms/HeroSection'
import AboutSection from '~components/organisms/AboutSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
    </main>
  )
}
