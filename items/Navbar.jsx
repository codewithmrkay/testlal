"use client"
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HoverSwapText from './Menu'
import Menu from './Menu'
import { useRouter } from 'next/navigation'
import { useAuth, UserButton } from '@clerk/nextjs'
import GetStartedOrProfile from './getStartedProfile'
import Leo from './leo'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenu = useRef(null)

  // Animate mobile menu when menuOpen changes
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (menuOpen) {
        gsap.to(mobileMenu.current, {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: 'power3.out',
        })
      } else {
        gsap.to(mobileMenu.current, {
          x: '100%',
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power3.in',
        })
      }
    }, mobileMenu)

    return () => ctx.revert()
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 list-none">
          {/* Logo */}
          <Link href="/">
            <li className="text-2xl font-medium text-white">FortQuest</li>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8 list-none text-white">
            <Link href="/"><li><Menu text="Home" /></li></Link>
            <Link href="/explore"><li ><Menu text="Explore" /></li></Link>
            <Link href="/my-trip"><li ><Menu text="My-Trip" /></li></Link>
            <button >EN</button>
            <div className=' flex items-center justify-center'>
              <GetStartedOrProfile/>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-20 ">
            <button
              className='cursor-pointer'
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        ref={mobileMenu}
        className="fixed top-0 right-0 h-full w-full transform translate-x-full opacity-0 md:hidden"
      >
        <div className="flex justify-end">
        </div>
        <nav className="flex flex-col justify-center items-center gap-10 list-none w-full h-screen bg-gray-900 text-5xl text-white">
          <Link href="/"><li onClick={() => setMenuOpen(false)}><Menu text="Home" /></li></Link>
          <Link href="/explore"><li onClick={() => setMenuOpen(false)}><Menu text="Explore" /></li></Link>
          <Link href="/my-trip"><li onClick={() => setMenuOpen(false)}><Menu text="My Trip" /></li></Link>
          <button onClick={() => setMenuOpen(false)}>EN</button>
          <div 
          onClick={() => setMenuOpen(false)}
          className='flex items-center justify-center w-[240px] text-lg text-nowrap font-medium'>
            <GetStartedOrProfile />
            <Leo/>
          </div>
        </nav>
      </div>
    </nav>
  )
}
