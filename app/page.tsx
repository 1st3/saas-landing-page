import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Building2,
  Shield,
  Users,
  BarChart3,
  ArrowRight,
  Menu,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Code,
  Globe,
  TrendingUp,
  Award,
  MapPin,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-600">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Willis Brown</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium hover:text-slate-600 transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-slate-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#approach" className="text-sm font-medium hover:text-slate-600 transition-colors">
              Our Approach
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-slate-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Investor Portal
            </Button>
            <Button className="bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700">
              Get in Touch
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200">
              <MapPin className="h-3 w-3 mr-1" />
              Delaware Corporation • Stripe Atlas Partner
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Building Tomorrow's
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {" "}
                Software
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              Willis Brown is a technology investment and development company that builds, acquires, and scales innovative 
              SaaS solutions. We transform ideas into market-leading digital products.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700 text-lg px-8 py-6"
              >
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Partner With Us
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">Trusted by entrepreneurs • Backed by experience • Built to scale</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="container px-4 md:px-6 mt-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-8 w-8 text-slate-600 mb-2" />
                <p className="text-sm font-medium">Delaware Incorporated</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-8 w-8 text-slate-600 mb-2" />
                <p className="text-sm font-medium">Stripe Atlas Partner</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-8 w-8 text-slate-600 mb-2" />
                <p className="text-sm font-medium">Growth Focused</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Code className="h-8 w-8 text-slate-600 mb-2" />
                <p className="text-sm font-medium">Technology First</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Our Approach to Technology Investment
            </h2>
            <p className="text-lg text-gray-600">
              We combine strategic vision with technical expertise to build and scale software companies that matter
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Product Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Full-stack development capabilities from concept to deployment, using modern technologies and best practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Growth Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Data-driven growth strategies, market analysis, and scalable business model optimization for long-term success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Team Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experienced leadership in assembling world-class teams and fostering cultures of innovation and excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <Shield className="h-6 w-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">Corporate Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Delaware incorporation with Stripe Atlas infrastructure ensures proper legal foundation and growth readiness.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio & Testimonials Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Trusted by Entrepreneurs</h2>
            <p className="text-lg text-gray-600">Hear from the founders and partners who work with Willis Brown</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "Willis Brown's technical expertise and strategic guidance transformed our startup idea into a 
                  market-ready SaaS platform. Their Delaware incorporation process was seamless."
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Alexandra Kim"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">Alexandra Kim</div>
                    <div className="text-sm text-gray-600">Founder, CloudSync Pro</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "Working with Willis Brown gave us access to enterprise-level development capabilities we couldn't 
                  afford on our own. They're true partners in growth."
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Michael Thompson"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">Michael Thompson</div>
                    <div className="text-sm text-gray-600">CEO, DataFlow Analytics</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "From concept to scale, Willis Brown provided the infrastructure and expertise we needed. 
                  Their portfolio approach creates incredible synergies."
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Jennifer Martinez"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">Jennifer Martinez</div>
                    <div className="text-sm text-gray-600">Co-founder, TaskHub Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Partnership Models That Work
            </h2>
            <p className="text-lg text-gray-600">
              We offer flexible engagement models tailored to your needs and growth stage.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Development Partnership */}
            <Card className="border-2 hover:border-slate-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Development Partnership</CardTitle>
                <CardDescription>Full-service product development and launch</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-slate-600">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    End-to-end product development
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Technical architecture & design
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Delaware incorporation setup
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Go-to-market strategy
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Investment Partnership */}
            <Card className="border-2 border-slate-600 relative hover:border-slate-700 transition-colors">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-600">Preferred</Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Investment Partnership</CardTitle>
                <CardDescription>Strategic investment with operational support</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-slate-600">Equity Based</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Capital investment
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Technical team augmentation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Strategic guidance & mentorship
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Network access & partnerships
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Portfolio company synergies
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700">
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            {/* Acquisition */}
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Acquisition</CardTitle>
                <CardDescription>Strategic acquisition of promising SaaS companies</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-slate-600">Market Rate</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Fair market valuation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Founder retention options
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Enhanced growth resources
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Portfolio integration benefits
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Discussion
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-800 to-slate-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Ready to build the future together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're an entrepreneur with a vision, a founder looking to scale, or a SaaS company seeking strategic partnership, 
              Willis Brown provides the expertise and resources to turn ideas into market leaders.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-6">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8 py-6 bg-transparent"
              >
                View Portfolio
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">Delaware Corporation • Trusted by Entrepreneurs • Built to Scale</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-600">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Willis Brown</span>
              </div>
              <p className="text-gray-400">
                A Delaware corporation focused on building and scaling innovative SaaS solutions through strategic investment and development.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Portfolio</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Current Holdings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Investment Criteria
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Willis Brown
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Corporate Structure
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Partnership</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Work With Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Investment Process
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Development Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Strategic Advisory
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Willis Brown, LLC. Delaware Corporation. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Legal Disclosures
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
