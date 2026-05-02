import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
