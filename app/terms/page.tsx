import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Scale,
  FileText,
  AlertTriangle,
  Shield,
  Calendar,
  Mail,
} from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
              <Scale className="h-3 w-3 mr-1" />
              Legal Terms & Conditions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Terms of
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {" "}
                Service
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              These terms govern your use of Willis Brown's website and services. Please read carefully 
              before engaging with our company.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Acceptance of Terms */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Acceptance of Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By accessing or using the website and services of Willis Brown, LLC ("Willis Brown," "we," "our," or "us"), 
                  you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                  do not use our website or services.
                </p>
                <p>
                  Willis Brown is a Delaware Limited Liability Company incorporated through Stripe Atlas, 
                  engaged in technology investment and development services. These Terms apply to all 
                  interactions with our company, including website usage, communications, and business relationships.
                </p>
              </CardContent>
            </Card>

            {/* Company Services */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Willis Brown provides the following services:
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Technology investment and venture development</li>
                  <li>SaaS product development and technical consulting</li>
                  <li>Strategic business advisory services</li>
                  <li>Portfolio company management and support</li>
                  <li>Digital transformation and technology solutions</li>
                </ul>
                <p>
                  All services are provided subject to separate agreements and these Terms. 
                  Specific service terms may supplement these general Terms.
                </p>
              </CardContent>
            </Card>

            {/* Website Use */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Website Use and Restrictions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Permitted Use</h3>
                  <p>You may use our website for legitimate business purposes, including:</p>
                  <ul className="space-y-2 list-disc list-inside text-gray-600 mt-2">
                    <li>Learning about Willis Brown and our services</li>
                    <li>Contacting us for business inquiries</li>
                    <li>Accessing publicly available information</li>
                    <li>Evaluating potential partnership opportunities</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Prohibited Activities</h3>
                  <p>You agree not to:</p>
                  <ul className="space-y-2 list-disc list-inside text-gray-600 mt-2">
                    <li>Use the website for any unlawful purpose or activity</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the website's functionality or security</li>
                    <li>Copy, distribute, or reproduce website content without permission</li>
                    <li>Use automated systems to scrape or harvest data</li>
                    <li>Submit false or misleading information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Business Relationships */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Business Relationships and Confidentiality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Investment and Partnership Discussions</h3>
                  <p>
                    If you engage with Willis Brown regarding potential investments, partnerships, 
                    or business relationships:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-gray-600 mt-2">
                    <li>All discussions are preliminary until formal agreements are executed</li>
                    <li>No commitment or obligation exists without signed written agreements</li>
                    <li>Due diligence processes may involve detailed information sharing</li>
                    <li>Confidentiality obligations apply to sensitive business information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Confidential Information</h3>
                  <p>
                    Any confidential or proprietary information shared during business discussions 
                    will be protected according to applicable confidentiality agreements. 
                    General business information publicly available is not considered confidential.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Our Content</h3>
                  <p>
                    All content on this website, including text, graphics, logos, images, and software, 
                    is the property of Willis Brown or its licensors and is protected by copyright, 
                    trademark, and other intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Your Content</h3>
                  <p>
                    When you submit information to us (through contact forms, emails, or other communications), 
                    you grant Willis Brown a non-exclusive license to use such information for business purposes, 
                    including evaluation of potential partnerships and investment opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Respect for Third-Party Rights</h3>
                  <p>
                    You warrant that any information you provide does not infringe upon the intellectual 
                    property rights of third parties and that you have the right to share such information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card className="border-0 shadow-lg border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span>Disclaimers and Limitations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Investment Risks</h3>
                  <p className="text-sm">
                    <strong>IMPORTANT:</strong> All investments carry risk. Past performance does not guarantee 
                    future results. Willis Brown's portfolio companies are subject to market risks, and 
                    investments may lose value. No content on this website constitutes investment advice, 
                    and you should consult qualified professionals before making investment decisions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Service Disclaimers</h3>
                  <p>
                    Our website and services are provided "as is" without warranties of any kind. 
                    We disclaim all warranties, express or implied, including merchantability, 
                    fitness for a particular purpose, and non-infringement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by law, Willis Brown shall not be liable for any 
                    indirect, incidental, special, or consequential damages arising from your use of 
                    our website or services, even if we have been advised of the possibility of such damages.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Privacy and Data Protection</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your privacy is important to us. Our collection and use of personal information 
                  is governed by our Privacy Policy, which is incorporated into these Terms by reference. 
                  Please review our Privacy Policy to understand our data practices.
                </p>
                <p>
                  By using our services, you consent to the collection and use of your information 
                  as described in our Privacy Policy and these Terms.
                </p>
                <p>
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    View our Privacy Policy →
                  </Link>
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Governing Law and Jurisdiction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  These Terms are governed by the laws of the State of Delaware, without regard 
                  to conflict of law principles. As a Delaware LLC, Willis Brown operates under 
                  Delaware corporate law and regulations.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of our services shall be 
                  resolved in the appropriate courts of Delaware. You consent to the personal 
                  jurisdiction of such courts.
                </p>
                <p>
                  Where possible, we prefer to resolve disputes through good-faith negotiation 
                  or alternative dispute resolution methods before resorting to litigation.
                </p>
              </CardContent>
            </Card>

            {/* Changes and Termination */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Changes and Termination</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Modifications to Terms</h3>
                  <p>
                    Willis Brown reserves the right to modify these Terms at any time. 
                    Changes will be effective when posted on our website. Continued use 
                    of our services after changes constitutes acceptance of the modified Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Termination</h3>
                  <p>
                    We may terminate or suspend your access to our website and services 
                    at any time for violation of these Terms or for any other reason. 
                    You may discontinue use of our services at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Survival</h3>
                  <p>
                    Provisions regarding intellectual property, confidentiality, disclaimers, 
                    and governing law shall survive termination of these Terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  If you have questions about these Terms of Service or need to contact us 
                  regarding legal matters, please reach out:
                </p>
                <div className="space-y-2">
                  <p><strong>Legal Inquiries:</strong> <Link href="mailto:legal@willisbrown.com" className="text-blue-600 hover:underline">legal@willisbrown.com</Link></p>
                  <p><strong>General Contact:</strong> <Link href="mailto:hello@willisbrown.com" className="text-blue-600 hover:underline">hello@willisbrown.com</Link></p>
                  <p><strong>Company:</strong> Willis Brown, LLC</p>
                  <p><strong>Jurisdiction:</strong> Delaware, United States</p>
                  <p><strong>Formation:</strong> Delaware Corporation via Stripe Atlas</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  For business inquiries and partnership opportunities, please use our 
                  <Link href="/contact" className="text-blue-600 hover:underline ml-1">contact form</Link>.
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
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}