import Image from "next/image"

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative w-full h-[calc(100vh-5rem)]">  {/* 5rem accounts for navbar height */}
        <Image 
          src="/home-banner.jpeg" 
          alt="Home Image" 
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}
