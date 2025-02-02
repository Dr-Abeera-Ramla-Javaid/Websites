import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-02%2011.39.58%20-%20A%20futuristic%20and%20sleek%20background%20for%20a%20website%20focused%20on%20AI-driven%20solutions%20and%20intelligent%20agents.%20The%20design%20should%20feature%20abstract%20digital%20wave%20(1)-ALsPcHs1ACnoToTFX8FNgAWekfIqHe.webp"
          alt="AI Network Visualization"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-float font-heading glow text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-500">
          Vertical AI Nexus
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 animate-float animation-delay-300 text-gray-100 cyber-glitch"
          data-text="Empowering the future with Vertical AI Agents"
        >
          Empowering the future with Vertical AI Agents
        </p>
        <Button
          asChild
          size="lg"
          className="bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-700 transition-all duration-300 animate-float animation-delay-600 transform hover:scale-110 hover:rotate-3 neon-glow"
        >
          <Link href="/future">
            Explore the Future <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>

      {/* Gradient overlay at the bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  )
}

