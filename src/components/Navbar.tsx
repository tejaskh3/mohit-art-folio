"use client"
 
import { useState, useEffect } from "react"
import Image from "next/image";
import { Logo } from "../../public/logo";
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(2)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
  return (
    <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 bg-white/50 backdrop-blur-sm`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between text-black font-semibold">
          <div className="flex-shrink-0">
            <Logo />
          </div>
 
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="/" className="relative px-4 py-2 text-lg font-bold transition-colors hover:text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">
                Home
              </a>
              <a href="/about" className="relative px-4 py-2 text-lg font-bold transition-colors hover:text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">
                About
              </a>
              <a href="/artworks" className="relative px-4 py-2 text-lg font-bold transition-colors hover:text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">
                Artworks
              </a>
              <a href="/contact" className="relative px-4 py-2 text-lg font-bold transition-colors hover:text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">
                Contact
              </a>
            </div>
          </div>
 
          <div className="flex-shrink-0 flex items-center">
            <button 
              className="relative p-2 hover:bg-black/10 rounded-full transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-7 w-7" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
 
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black/10 transition-colors"
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
            className="md:hidden bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="space-y-2 px-4 pb-4 pt-2">
              <motion.a
                href="/"
                className="block rounded-md px-4 py-3 text-base font-medium text-white hover:bg-white/10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Home
              </motion.a>
              <motion.a
                href="/about"
                className="block rounded-md px-4 py-3 text-base font-medium text-white hover:bg-white/10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                About
              </motion.a>
              <motion.a
                href="/artworks"
                className="block rounded-md px-4 py-3 text-base font-medium text-white hover:bg-white/10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Artworks
              </motion.a>
              <motion.a
                href="/contact"
                className="block rounded-md px-4 py-3 text-base font-medium text-white hover:bg-white/10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Contact
              </motion.a>
              <div className="px-4 pb-4">
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}