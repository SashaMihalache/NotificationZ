import { HeroSection } from "@/components/sections/HeroSection"
import { DemoSection } from "@/components/sections/DemoSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { BentoGrid } from "@/components/BentoGrid"

const Page = () => {
  return (
    <>
      <HeroSection />
      <DemoSection />
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <BentoGrid />
      </section>
      <TestimonialsSection />
    </>
  )
}

export default Page
