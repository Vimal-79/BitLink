import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='h-10 bg-purple-700 flex px-8 py-8 justify-between items-center'>
            <Link href="/" className='font-bold text-2xl text-white'>BitLink</Link>
            <section className='flex gap-3 items-center text-white'>
                <span><Link href="/shorten">Shorten</Link></span>
                <span className='border-x-2 px-3 border-black'> <Link href="about">About Us</Link></span>
                <span className='border-r-2 pr-3 border-black'><Link href="/contact">Contact Us</Link></span>
                <span><Link href="/shorten" className='border-2 border-white font-semibold px-3 py-1 rounded-lg cursor-pointer'>Try it</Link></span>
                <span><Link target='_blank' href="https://github.com/Vimal-79" className='border-2 border-white font-semibold px-3 py-1 rounded-lg cursor-pointer'>Git Hub</Link></span>
            </section>
        </div>
    )
}

export default Navbar
