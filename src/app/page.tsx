import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import { ClientEffects } from '@/components/ui/ClientEffects'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
