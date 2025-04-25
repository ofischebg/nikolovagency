import Link from "next/link"
import { Truck, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Truck className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">TruckInsure</span>
            </div>
            <p className="mb-4 text-gray-400">
              Providing specialized insurance solutions for the trucking industry since 1995.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 transition-colors hover:text-blue-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Insurance Products</h3>
            <ul className="space-y-2">
              {[
                "Commercial Auto Liability",
                "Physical Damage Coverage",
                "Cargo Insurance",
                "General Liability",
                "Workers' Compensation",
                "Umbrella Insurance",
              ].map((product) => (
                <li key={product}>
                  <Link href="#services" className="text-gray-400 transition-colors hover:text-blue-400">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Trucking Way</p>
              <p className="mb-4">Logistics City, TC 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@truckinginsurance.com</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} TruckInsure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
