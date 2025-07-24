"use client"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className=" w-full relative" >
        <h1 className="mx-auto text-5xl text-transparent font-extrabold py-4 bg-linear-to-br from-blue-400 to-purple-700/80 w-fit text-clip bg-clip-text ">BitLink</h1>
        <div className="hero">
          <div className="hero-content mt-50 flex flex-col items-center max-w-fit mx-auto p-10 rounded-2xl bg-gray-600/40">
            <h1 className="text-6xl font-extrabold text-neutral-950">Welcome to BitLink</h1>
            <p className="py-6 text-xl max-w-160 font-semi-bold text-center">Shorten your links easily and efficiently with BitLink. Create custom short URLs for better sharing and tracking.</p>
            <Link href="/shorten" className="btn btn-primary font-bold border-2 border-purple-800 px-3 py-1 rounded-lg bg-purple-800 text-white">Get Started</Link>
          </div>
        </div>
        <img className="object-fit w-full absolute top-0 z-[-1] opacity-80 select-none" src="/image_2.jpg" alt="" />
      </div>
    </>
  );
}