import Link from "next/link"
import Image from "next/image"

const features = [
  "Specialized AI agents for various industries",
  "Seamless integration into existing systems",
  "Continuous learning and improvement",
  "Customizable to specific business needs",
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-stars">
      <div className="content-overlay absolute inset-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400 glow font-heading">
          About Vertical AI Nexus
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              At Vertical AI Nexus, we're pioneering the development of Vertical AI Agents as Components. Our focus is
              on creating intelligent, specialized agents that can be seamlessly integrated into various applications
              and industries.
            </p>
            <p className="text-lg text-gray-300">
              We're currently in the learning phase, mastering the art of building AI Agents as components with a
              horizontal focus. This approach allows us to create versatile agents that can be adapted to multiple use
              cases.
            </p>
            <p className="text-lg text-gray-300">
              Our goal is to empower developers and businesses to leverage the power of agentic AI, revolutionizing how
              we interact with technology and solve complex problems.
            </p>
            <Link
              href="https://github.com/panaversity/learn-agentic-ai/blob/main/AGENTIA_PROJECTS/readme.md"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 neon-glow"
            >
              Learn more about our Agentia Projects
            </Link>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/images/about-image.jpg"
              alt="AI Integration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

