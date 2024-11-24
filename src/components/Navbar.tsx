"use client"
 
import { useState } from "react"
import Image from "next/image";
import { Logo } from "../../public/logo";
import { motion, AnimatePresence } from "framer-motion"

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
              <div className="relative w-7 h-7">
                <span className={`absolute block h-0.5 w-7 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-3' : 'top-2'}`} />
                <span className={`absolute block h-0.5 w-7 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'top-4'}`} />
                <span className={`absolute block h-0.5 w-7 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-3' : 'top-6'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
 
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="space-y-2 px-4 pb-4 pt-2">
              <motion.a
                href="/"
                className="block rounded-md px-4 py-3 text-base font-medium hover:bg-gray-100"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Home
              </motion.a>
              <motion.a
                href="/about"
                className="block rounded-md px-4 py-3 text-base font-medium hover:bg-gray-100"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                About
              </motion.a>
              <motion.a
                href="/artworks"
                className="block rounded-md px-4 py-3 text-base font-medium hover:bg-gray-100"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Artworks
              </motion.a>
              <motion.a
                href="/contact"
                className="block rounded-md px-4 py-3 text-base font-medium hover:bg-gray-100"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}