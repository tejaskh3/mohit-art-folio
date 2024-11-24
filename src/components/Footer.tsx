"use client"
import { Instagram, Youtube, Mail, Phone, ExternalLink } from 'lucide-react'
import Link from "next/link"

// TODO: replace instagram, youtube, email, phone, address, quick links with actual values
export default function Footer() {
  return (
    <footer className="bg-[#424769] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Connect With Us</h3>
            <div className="flex items-center gap-4">
              <Link 
                href="https://instagram.com" 
                className="hover:text-[#E5E1EA] transition-colors p-2 rounded-full hover:bg-white/10" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link 
                href="https://youtube.com" 
                className="hover:text-[#E5E1EA] transition-colors p-2 rounded-full hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <Link 
                href="mailto:hello@junedigam.com" 
                className="flex items-center gap-2 hover:text-[#E5E1EA] transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="hover:underline">hello@junedigam.com</span>
              </Link>
              <Link 
                href="tel:+15551234567" 
                className="flex items-center gap-2 hover:text-[#E5E1EA] transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </Link>
            </div>
            <address className="not-italic text-xs md:text-sm text-[#E5E1EA]/80 hover:text-[#E5E1EA] transition-colors">
              123 Creative Street<br />
              Artville, IM 12345<br />
              Imagination Land
            </address>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/services', label: 'Services' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="block hover:text-[#E5E1EA] transition-colors hover:translate-x-1 duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 mt-6 md:mt-8">
          <p className="text-xs md:text-sm text-[#E5E1EA]/80">
            © {new Date().getFullYear()} June Digital. All rights reserved.
          </p>
          <p className="text-xs md:text-sm flex items-center gap-1">
            Crafted with <span className="text-red-400 animate-pulse">❤️</span> by
            <Link 
              href="https://tejaskh3.com" 
              className="font-medium hover:text-[#E5E1EA] transition-colors inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tejas
              <ExternalLink className="h-3 w-3" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}