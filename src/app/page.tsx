import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { TechnicalShowcase } from '@/components/TechnicalShowcase'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    <div className="min-h-screen bg-(--color-bg)">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <TechnicalShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
