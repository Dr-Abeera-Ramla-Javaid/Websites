import type { Metadata } from "next"
import About from "@/components/About"

export const metadata: Metadata = {
  title: "About Vertical AI Nexus",
  description: "Learn more about Vertical AI Nexus and our mission to revolutionize AI technology.",
}

export default function AboutPage() {
  return (
    <div className="overflow-y-auto pt-20">
      <About />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
        <p className="text-gray-300 mb-6">
          At Vertical AI Nexus, our mission is to empower businesses and developers with cutting-edge AI technology that
          can be seamlessly integrated into various applications and industries. We are committed to pushing the
          boundaries of what's possible with artificial intelligence, focusing on creating specialized AI agents that
          cater to specific industry needs.
        </p>
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Team</h2>
        <p className="text-gray-300 mb-6">
          Founded by a team of AI enthusiasts and industry experts, Vertical AI Nexus brings together diverse talents
          and experiences to drive innovation in the field of AI. Our team is passionate about creating AI solutions
          that make a real difference in how businesses operate and how people interact with technology.
        </p>
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Approach</h2>
        <p className="text-gray-300">
          We believe in the power of collaboration and continuous learning. At Vertical AI Nexus, we work closely with
          our clients and partners to understand their unique challenges and develop tailored AI solutions that drive
          innovation and growth. Our focus on vertical markets allows us to create highly specialized and effective AI
          agents that can transform industries.
        </p>
      </div>
    </div>
  )
}

