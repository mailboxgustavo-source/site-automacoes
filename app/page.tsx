// src/app/page.tsx
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Automacoes } from '@/components/Automacoes'   // ← nome correto do arquivo
import { CTABanner } from '@/components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Automacoes />
      <CTABanner />
    </>
  )
}
