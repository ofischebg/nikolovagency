import { MapPin, Phone, Mail, Clock, Truck, Shield, DollarSign, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialCard from "@/components/testimonial-card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Map from "@/components/map"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section with CTA */}
      <section className="relative bg-gray-900 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Trucking fleet"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Specialized Insurance for <span className="text-blue-400">Trucking Professionals</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Protecting your fleet with comprehensive coverage tailored to the unique needs of the trucking industry.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Coverage Options
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">About Our Company</h2>
            <div className="mx-auto h-1 w-24 bg-blue-600"></div>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="About our company"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-bold">Trusted Insurance Partner Since 1995</h3>
              <p className="mb-6 text-gray-600">
                With over 25 years of experience in the trucking insurance industry, we understand the unique challenges
                faced by trucking companies and owner-operators. Our specialized knowledge allows us to provide tailored
                insurance solutions that protect your business, your drivers, and your cargo.
              </p>
              <p className="mb-8 text-gray-600">
                We work with the nation's top insurance carriers to ensure you receive comprehensive coverage at
                competitive rates. Our dedicated team of insurance professionals is committed to providing exceptional
                service and support when you need it most.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span>Industry Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Comprehensive Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <span>Competitive Rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>Award-Winning Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="services" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Insurance Solutions</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We offer a comprehensive range of insurance products designed specifically for the trucking industry.
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-blue-600"></div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Commercial Auto Liability",
                description:
                  "Protection against bodily injury and property damage claims resulting from accidents involving your trucks.",
                icon: <Truck className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "Physical Damage Coverage",
                description:
                  "Covers repair or replacement costs for your trucks and trailers due to collision, theft, or other covered perils.",
                icon: <Shield className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "Cargo Insurance",
                description: "Protects the freight you're hauling against loss, damage, or theft during transport.",
                icon: <DollarSign className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "General Liability",
                description: "Coverage for non-auto related incidents that may occur during your business operations.",
                icon: <Award className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "Workers' Compensation",
                description: "Provides benefits to drivers and employees who are injured on the job.",
                icon: <Shield className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "Umbrella Insurance",
                description: "Additional liability coverage that extends beyond the limits of your primary policies.",
                icon: <Truck className="h-10 w-10 text-blue-600" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:translate-y-[-5px]"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h2>
            <div className="mx-auto h-1 w-24 bg-blue-600"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              name="Michael Johnson"
              company="Johnson Trucking LLC"
              quote="We've been with this insurance company for over 10 years. Their understanding of the trucking industry and personalized service is unmatched."
              rating={5}
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Sarah Williams"
              company="Williams Transport Inc."
              quote="When we had an accident last year, their claims process was quick and painless. They really took care of us during a difficult time."
              rating={5}
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Robert Davis"
              company="Davis Logistics"
              quote="Their rates are competitive and the coverage is comprehensive. I've recommended them to several other owner-operators."
              rating={4}
              imageSrc="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section id="contact" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Have questions or ready for a quote? Reach out to our team of trucking insurance specialists.
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-blue-600"></div>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ContactForm />
            </div>
            <div className="flex flex-col">
              <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-bold">Our Office</h3>
                <div className="mb-4 flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p>123 Trucking Way, Logistics City, TC 12345</p>
                </div>
                <div className="mb-4 flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="mb-4 flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p>info@truckinginsurance.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="h-[300px] overflow-hidden rounded-lg shadow-lg">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
