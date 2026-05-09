"use client"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="w-full relative min-h-screen flex flex-col justify-center" >
        <h1 className="mx-auto text-3xl sm:text-4xl md:text-5xl text-transparent font-extrabold py-4 bg-linear-to-br from-blue-400 to-purple-700/80 w-fit text-clip bg-clip-text ">BitLink</h1>
        <div className="hero flex-1 flex items-center">
          <div className="hero-content flex flex-col items-center max-w-full sm:max-w-fit mx-auto p-6 sm:p-10 rounded-2xl bg-gray-600/40">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-950 text-center">Welcome to BitLink</h1>
            <p className="py-4 sm:py-6 text-base sm:text-lg md:text-xl max-w-full sm:max-w-160 font-semi-bold text-center px-4">Shorten your links easily and efficiently with BitLink. Create custom short URLs for better sharing and tracking.</p>
            <Link href="/shorten" className="btn btn-primary font-bold border-2 border-purple-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-purple-800 text-white text-sm sm:text-base">Get Started</Link>
          </div>
        </div>
        <img className="object-cover w-full h-full absolute top-0 z-[-1] opacity-80 select-none" src="/image_2.jpg" alt="" />
      </div>
    </>
  );
}