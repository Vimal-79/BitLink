"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='bg-purple-700 flex px-4 sm:px-8 py-2 sm:py-4 justify-between items-center relative'>
            <Link href="/" className='font-bold text-xl sm:text-2xl text-white'>BitLink</Link>
            
            {/* Desktop Menu */}
            <section className='hidden md:flex gap-2 sm:gap-3 items-center text-white text-sm sm:text-base'>
                <span><Link href="/shorten">Shorten</Link></span>
                <span className='border-x-2 px-2 sm:px-3 border-black'> <Link href="/about">About Us</Link></span>
                <span className='border-r-2 pr-2 sm:pr-3 border-black'><Link href="/contact">Contact Us</Link></span>
                <span><Link href="/shorten" className='border-2 border-white font-semibold px-2 sm:px-3 py-1 rounded-lg cursor-pointer'>Try it</Link></span>
                <span><Link target='_blank' href="https://github.com/Vimal-79" className='border-2 border-white font-semibold px-2 sm:px-3 py-1 rounded-lg cursor-pointer'>Git Hub</Link></span>
            </section>

            {/* Mobile Menu */}
            <section className='md:hidden flex gap-2 items-center text-white'>
                <span><Link href="/shorten" className='border-2 border-white font-semibold px-2 py-1 rounded-lg cursor-pointer text-sm'>Try it</Link></span>
                <span><Link target='_blank' href="https://github.com/Vimal-79" className='border-2 border-white font-semibold px-2 py-1 rounded-lg cursor-pointer text-sm'>Git Hub</Link></span>
                <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>
            </section>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className='md:hidden absolute top-full left-0 right-0 bg-purple-800 text-white shadow-lg z-50'>
                    <div className='flex flex-col py-2'>
                        <Link href="/shorten" className='px-4 py-2 hover:bg-purple-600' onClick={() => setIsOpen(false)}>Shorten</Link>
                        <Link href="/about" className='px-4 py-2 hover:bg-purple-600' onClick={() => setIsOpen(false)}>About Us</Link>
                        <Link href="/contact" className='px-4 py-2 hover:bg-purple-600' onClick={() => setIsOpen(false)}>Contact Us</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
