import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
            <Link href="/contact" className="text-sm font-medium text-slate-600">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200">
              <MessageSquare className="h-3 w-3 mr-1" />
              Let's Start a Conversation
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              Whether you're an entrepreneur with a vision, a founder looking to scale, or interested in 
              exploring partnership opportunities, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Send us a message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization</Label>
                      <Input id="company" placeholder="Enter your company name (optional)" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project, idea, or how we can help..."
                        rows={6}
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  please indicate so in your message subject line.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600 mb-2">General inquiries and partnerships</p>
                        <Link href="mailto:hello@willisbrown.com" className="text-blue-600 hover:underline">
                          hello@willisbrown.com
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                        <Building2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Investment Inquiries</h3>
                        <p className="text-gray-600 mb-2">For entrepreneurs and founders</p>
                        <Link href="mailto:invest@willisbrown.com" className="text-blue-600 hover:underline">
                          invest@willisbrown.com
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Corporate Address</h3>
                        <p className="text-gray-600">
                          Willis Brown, LLC<br />
                          Delaware Corporation<br />
                          Registered via Stripe Atlas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                        <Clock className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Response Time</h3>
                        <p className="text-gray-600">
                          We typically respond within 24 hours during business days. 
                          Complex inquiries may require additional time for a thorough response.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Inquiries */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How We Can Help</h2>
            <p className="text-lg text-gray-600">
              We work with different types of partners and projects at various stages
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Early-Stage Startups</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  If you have an innovative SaaS idea and need technical expertise, funding, 
                  or strategic guidance to bring it to market.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Growing Companies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Established SaaS companies looking for strategic investment, 
                  technical augmentation, or acquisition opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>Development Projects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Organizations needing custom SaaS development, technical consulting, 
                  or digital transformation expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span>Strategic Partnerships</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Other investment firms, accelerators, or strategic partners 
                  interested in collaboration opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Talent & Careers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experienced professionals interested in joining our team or 
                  working with our portfolio companies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-slate-600" />
                  <span>General Inquiries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Media inquiries, speaking opportunities, or any other 
                  questions about Willis Brown and our activities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about working with Willis Brown
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">What stage companies do you work with?</h3>
                <p className="text-gray-600">
                  We work with companies at various stages, from early-stage startups with compelling ideas 
                  to established SaaS companies looking to scale. Our approach varies based on the company's 
                  maturity and specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Do you only invest, or do you also build?</h3>
                <p className="text-gray-600">
                  We do both. We actively build our own SaaS products and also invest in and acquire 
                  external companies. Our technical team can provide hands-on development support 
                  regardless of the partnership model.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">What makes Willis Brown different?</h3>
                <p className="text-gray-600">
                  Unlike traditional VCs or development agencies, we combine investment capital with 
                  deep technical expertise and operational support. Our portfolio companies benefit 
                  from shared resources, knowledge, and strategic guidance typically available only 
                  to much larger organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">How long does your evaluation process take?</h3>
                <p className="text-gray-600">
                  Our initial review typically takes 1-2 weeks. For promising opportunities, we conduct 
                  deeper due diligence which can take 2-4 weeks. We believe in moving quickly while 
                  being thorough in our evaluation.
                </p>
              </CardContent>
            </Card>
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