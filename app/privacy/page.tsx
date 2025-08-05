import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Shield,
  Lock,
  Eye,
  FileText,
  Calendar,
  Mail,
} from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
              <Shield className="h-3 w-3 mr-1" />
              Privacy & Data Protection
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Privacy
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              Your privacy is important to us. This policy explains how Willis Brown collects, 
              uses, and protects your personal information.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Overview */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Willis Brown, LLC ("we," "our," or "us") is committed to protecting your privacy. 
                  As a Delaware corporation focused on technology investment and development, we collect 
                  and process personal information in accordance with applicable data protection laws.
                </p>
                <p>
                  This Privacy Policy applies to information collected through our website, email 
                  communications, and other interactions with Willis Brown. It describes what information 
                  we collect, how we use it, and your rights regarding your personal data.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Personal Information You Provide</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Company information (company name, role, industry)</li>
                    <li>Communication content (messages, inquiries, feedback)</li>
                    <li>Investment or partnership details (business plans, financial information)</li>
                    <li>Professional background and experience</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Information Collected Automatically</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Website usage data (pages visited, time spent, clicks)</li>
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Referral sources and website navigation patterns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Business Operations</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Respond to inquiries and provide customer support</li>
                    <li>Evaluate investment and partnership opportunities</li>
                    <li>Conduct due diligence on potential investments</li>
                    <li>Communicate about our services and portfolio</li>
                    <li>Manage business relationships and contracts</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Website and Service Improvement</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Analyze website usage and improve user experience</li>
                    <li>Develop new features and services</li>
                    <li>Ensure website security and prevent fraud</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We do not sell, rent, or trade your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li><strong>Service Providers:</strong> With trusted partners who assist in business operations (hosting, analytics, legal services)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
                  <li><strong>Portfolio Companies:</strong> With portfolio companies when relevant for business purposes and with appropriate confidentiality</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  While we strive to protect your personal information, no method of transmission 
                  over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                  <li><strong>Objection:</strong> Object to certain processing of your information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <Link href="mailto:privacy@willisbrown.com" className="text-blue-600 hover:underline">privacy@willisbrown.com</Link>.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We retain personal information for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required by law:
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Contact information: Until you request removal or unsubscribe</li>
                  <li>Investment-related information: As required by financial regulations (typically 7+ years)</li>
                  <li>Website usage data: 24 months unless longer retention is justified</li>
                  <li>Communication records: As needed for business relationship management</li>
                </ul>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  As a Delaware corporation with potential international partnerships, your information 
                  may be transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place for such transfers, including:
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Standard contractual clauses approved by relevant authorities</li>
                  <li>Adequacy decisions by competent data protection authorities</li>
                  <li>Binding corporate rules where applicable</li>
                  <li>Your explicit consent when required</li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes and Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Policy Updates and Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Policy Updates</h3>
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices 
                    or legal requirements. We will notify you of any material changes by posting the 
                    updated policy on our website and indicating the revision date.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                  <p>
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> <Link href="mailto:privacy@willisbrown.com" className="text-blue-600 hover:underline">privacy@willisbrown.com</Link></p>
                    <p><strong>Company:</strong> Willis Brown, LLC</p>
                    <p><strong>Address:</strong> Delaware Corporation (Registered via Stripe Atlas)</p>
                    <p><strong>General Contact:</strong> <Link href="mailto:hello@willisbrown.com" className="text-blue-600 hover:underline">hello@willisbrown.com</Link></p>
                  </div>
                </div>
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
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
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