import Hero from "@/components/Hero"
import About from "@/components/About"
import MarketFocus from "@/components/MarketFocus"
import CTA from "@/components/CTA"
import Testimonials from "@/components/Testimonials"
import LatestBlogPosts from "@/components/LatestBlogPosts"

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Hero />
      <About />
      <MarketFocus />
      <Testimonials />
      <LatestBlogPosts />
      <CTA />
    </div>
  )
}

