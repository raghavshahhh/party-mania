import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

// Lazy-load below-fold sections for faster initial load
const Services = dynamic(() => import('@/components/sections/Services'))
const WhyUs = dynamic(() => import('@/components/sections/WhyUs'))
const Process = dynamic(() => import('@/components/sections/Process'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const CTA = dynamic(() => import('@/components/sections/CTA'))

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
