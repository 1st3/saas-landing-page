import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Shield,
  Users,
  TrendingUp,
  Award,
  MapPin,
  CheckCircle,
  Calendar,
  Globe,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-600">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Willis Brown</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-sm font-medium hover:text-slate-600 transition-colors">
              About
            </Link>
            <Link href="/#portfolio" className="text-sm font-medium hover:text-slate-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/#approach" className="text-sm font-medium hover:text-slate-600 transition-colors">
              Our Approach
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-slate-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700">
              <Link href="/contact">Get in Touch</Link>
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
              Delaware Corporation • Founded via Stripe Atlas
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {" "}
                Willis Brown
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              We are a technology investment and development company committed to building the next generation 
              of innovative SaaS solutions. Our mission is to transform visionary ideas into market-leading products.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Willis Brown was founded as a Delaware corporation through Stripe Atlas, reflecting our commitment 
                  to building a technology company with a solid legal and operational foundation from day one.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our approach combines strategic vision with hands-on technical expertise. We don't just invest in 
                  ideas – we actively participate in building them into scalable, market-ready solutions.
                </p>
                <p className="text-lg text-gray-600">
                  As a parent company, we provide our portfolio companies with access to shared resources, 
                  technical expertise, and strategic guidance that would typically be available only to much 
                  larger organizations.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="h-6 w-6 text-blue-600" />
                      <h3 className="font-semibold">Delaware Incorporation</h3>
                    </div>
                    <p className="text-gray-600">
                      Legally incorporated in Delaware, providing the strong corporate governance framework 
                      expected by entrepreneurs and investors.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="h-6 w-6 text-green-600" />
                      <h3 className="font-semibold">Stripe Atlas Partnership</h3>
                    </div>
                    <p className="text-gray-600">
                      Founded through Stripe Atlas, ensuring best practices in corporate structure, 
                      compliance, and growth readiness from inception.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our investment decisions and partnership approach
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Focus on Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We invest in and build solutions that solve real problems and create meaningful value 
                  for users and businesses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Partnership Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We believe in true partnerships where success is shared. Our portfolio companies 
                  benefit from collective knowledge and resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Long-term Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We take a patient approach to building sustainable businesses that can thrive 
                  and grow over decades, not just quarters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Technical Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every solution we build is architected for scale, security, and maintainability 
                  using modern best practices and technologies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 mb-4">
                  <Globe className="h-6 w-6 text-slate-600" />
                </div>
                <CardTitle>Global Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We build for global markets from day one, considering international scalability, 
                  compliance, and user experience requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Ethical Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We maintain the highest standards of business ethics, data privacy, and 
                  responsible technology development in all our ventures.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Structure */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Corporate Structure</h2>
              <p className="text-lg text-gray-600">
                Built on a foundation of legal compliance and operational excellence
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5" />
                    <span>Delaware LLC</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">Incorporated in Delaware for optimal corporate governance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">Full compliance with state and federal regulations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">Professional registered agent and office</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">Annual reporting and filings maintained</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Stripe Atlas Foundation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">Founded through Stripe Atlas program</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">Access to banking and financial infrastructure</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">Best-practice legal and tax setup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">Investment-ready structure from inception</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-800 to-slate-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to explore a partnership?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're an entrepreneur with a vision or a SaaS company looking for strategic growth, 
              we'd love to hear from you and explore how we can work together.
            </p>
            <Button asChild size="lg" className="bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer (simplified) */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-600">
                <Building2 className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold">Willis Brown</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Willis Brown, LLC. Delaware Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}