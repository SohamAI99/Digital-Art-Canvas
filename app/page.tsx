import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brush, Download, Layers, Undo2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in">
                  Unleash Your Creativity with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    Canvas
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] mx-auto">
                  A powerful digital art canvas where your imagination comes to life. Draw, sketch, and create with
                  intuitive tools and a seamless experience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/draw">
                  <Button size="lg" className="group">
                    Start Drawing Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/help">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Animated Canvas Background */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <CanvasBackground />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Brush className="h-10 w-10 text-primary" />}
                title="Advanced Brushes"
                description="Choose from a variety of brushes with customizable size, opacity, and flow settings."
              />
              <FeatureCard
                icon={<Layers className="h-10 w-10 text-primary" />}
                title="Layer Support"
                description="Create complex artwork with multiple layers for more control over your creations."
              />
              <FeatureCard
                icon={<Undo2 className="h-10 w-10 text-primary" />}
                title="Unlimited History"
                description="Undo and redo your actions with an extensive history tracking system."
              />
              <FeatureCard
                icon={<Download className="h-10 w-10 text-primary" />}
                title="Export Options"
                description="Save your artwork in multiple formats including PNG, JPG, and SVG."
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="21.17" y1="8" x2="12" y2="8" />
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                  </svg>
                }
                title="Color Management"
                description="Access a comprehensive color picker with saved palettes and color history."
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="15" y1="3" x2="15" y2="21" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="3" y1="15" x2="21" y2="15" />
                  </svg>
                }
                title="Responsive Design"
                description="Create art on any device with a fully responsive interface that adapts to your screen."
              />
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">See It In Action</h2>
                <p className="text-muted-foreground text-lg">
                  Our intuitive interface makes digital art creation simple and enjoyable. Watch how easy it is to
                  create stunning artwork with our tools.
                </p>
                <Link href="/draw">
                  <Button size="lg" className="mt-4">
                    Try It Yourself
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl border border-border">
                <div className="aspect-video bg-card relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-pulse">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-lg font-medium">Demo Animation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Brush className="h-5 w-5" />
              <span className="font-semibold">Canvas</span>
            </div>
            <div className="flex gap-6">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                Help
              </Link>
              <Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
                Settings
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Canvas. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function CanvasBackground() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-pink-500/30 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-500/30 animate-float-delay" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-blue-500/30 animate-float-delay-long" />
    </div>
  )
}

