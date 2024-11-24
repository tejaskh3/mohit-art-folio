"use client"
 
import { useState } from "react"
import Image from "next/image";
import { Logo } from "../../public/logo";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            {/* <Image src={Logo} alt="Logo" width={100} height={100} /> */}
            <Logo />
          </div>
 
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="/" className="relative px-4 py-2 text-base font-medium transition-colors hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-600 after:transition-all hover:after:w-full">
                Home
              </a>
              <a href="/about" className="relative px-4 py-2 text-base font-medium transition-colors hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-600 after:transition-all hover:after:w-full">
                About
              </a>
              <a href="/artworks" className="relative px-4 py-2 text-base font-medium transition-colors hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-600 after:transition-all hover:after:w-full">
                Artworks
              </a>
              <a href="/contact" className="relative px-4 py-2 text-base font-medium transition-colors hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-600 after:transition-all hover:after:w-full">
                Contact
              </a>
            </div>
          </div>
 
          <div className="flex-shrink-0 hidden md:block">
            <span className="invisible">Logo</span>
          </div>
 
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
 
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-2 px-4 pb-4 pt-2">
            <a
              href="/"
              className="block rounded-md px-4 py-3 text-base font-medium hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="/about"
              className="block rounded-md px-4 py-3 text-base font-medium hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="/artworks"
              className="block rounded-md px-4 py-3 text-base font-medium hover:bg-gray-100"
            >
              Artworks
            </a>
            <a
              href="/contact"
              className="block rounded-md px-4 py-3 text-base font-medium hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}