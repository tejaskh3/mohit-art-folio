'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Trash2, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from 'next/link'
interface Artwork {
  id: number
  title: string
  description: string
  story?: string
  price: number
  imageUrl: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Artwork[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cart')
    if (savedCart && savedCart !== '[]') {
      setCartItems(JSON.parse(savedCart))
    } else {
      // TODO: Replace mock data with actual API integration for cart management
      const mockCartItems: Artwork[] = [
        { 
          id: 1, 
          title: "Starry Night", 
          description: "A beautiful night sky", 
          price: 100, 
          imageUrl: "/placeholder.svg?height=200&width=200" 
        },
        { 
          id: 2, 
          title: "Sunset Beach", 
          description: "Relaxing beach scene", 
          price: 80, 
          imageUrl: "/placeholder.svg?height=200&width=200" 
        },
        { 
          id: 3, 
          title: "Mountain Landscape", 
          description: "Majestic mountain view", 
          price: 120, 
          imageUrl: "/placeholder.svg?height=200&width=200" 
        },
      ]
      setCartItems(mockCartItems)
      localStorage.setItem('cart', JSON.stringify(mockCartItems))
    }
  }, [])

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    setTotal(newTotal)
    // Save to localStorage whenever cart changes
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cart')
  }

  const handleCheckout = () => {
    const orderSummary = cartItems.map(item => `${item.title} - $${item.price}`).join('\n')
    const message = encodeURIComponent(`Hello, I'd like to place an order for:\n\n${orderSummary}\n\nTotal: $${total}`)
    window.open(`https://wa.me/+1234567890?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#E5E1EA] py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#424769] mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <ShoppingCart className="mx-auto h-12 w-12 text-[#424769]" />
            <p className="mt-4 text-xl font-semibold text-[#424769]">Your cart is empty</p>
            <div className="mt-2 text-[#424769]/80 hover:text-[#424769]">
              <span>Add some beautiful </span><Link href="/artworks" className="underline hover:cursor-pointer hover:text-[#424769]"> artworks</Link> to get started!
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-[#424769]">{item.title}</h3>
                  <p className="text-[#424769]/80">{item.description}</p>
                  <p className="text-lg font-medium text-[#424769]">${item.price.toFixed(2)}</p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.title} from cart`}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-[#424769]">Total</span>
                <span className="text-2xl font-bold text-[#424769]">${total.toFixed(2)}</span>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-[#424769] hover:bg-[#424769]/90 text-white" onClick={handleCheckout}>
                  Checkout via WhatsApp
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full border-[#424769] text-[#424769]">
                      Clear Cart
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will remove all items from your cart. This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={clearCart}>Clear Cart</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}