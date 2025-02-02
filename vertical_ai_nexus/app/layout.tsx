import "./globals.css"
import { Inter, Raleway } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata = {
  title: "Vertical AI Nexus - Empowering Industries with AI Agents",
  description: "Explore the future of Vertical AI Agents and their transformative impact across industries.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${raleway.variable}`}>
      <body className="font-sans text-white bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow overflow-y-auto">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}

