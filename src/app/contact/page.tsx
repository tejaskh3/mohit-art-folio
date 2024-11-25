import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#E5E1EA]">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Section - Hero */}
        <div className="relative flex items-center justify-center bg-[#2D3250] p-16">
          <div className="relative z-10 text-center text-[#F5E9CF]">
            <h1 className="text-4xl font-bold mb-2">Hello!</h1>
            <p className="text-2xl">
              Let's work together
              <br />
              on your next project.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
            alt="Contact hero image"
            width={600}
            height={400}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            priority
          />
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex flex-col justify-center p-8 lg:p-16">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-5 w-5" />
                <h2 className="text-lg font-semibold">For inquiries, please email:</h2>
              </div>
              <Link
                href="mailto:your-email@example.com"
                className="text-[#2D3250] hover:underline"
              >
                your-email@example.com
              </Link>
              <p className="text-sm text-gray-600 mt-2">or Send a message via this form</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="FIRST NAME" className="bg-transparent border-b border-gray-400" />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="LAST NAME" className="bg-transparent border-b border-gray-400" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input id="email" type="email" placeholder="EMAIL" className="bg-transparent border-b border-gray-400" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Write a message
                </label>
                <Textarea
                  id="message"
                  placeholder="WRITE A MESSAGE"
                  className="bg-transparent border-b border-gray-400 min-h-[100px]"
                />
              </div>
              <Button className="w-full bg-[#2D3250] hover:bg-[#2D3250]/90 text-[#F5E9CF]">SUBMIT</Button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-lg text-[#2D3250]">
                Follow along on Instagram
                <br />
                for the latest projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
