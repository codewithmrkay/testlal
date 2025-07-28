"use client"
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HoverSwapText from './Menu'
import Menu from './Menu'
import { useRouter } from 'next/navigation'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenu = useRef(null)
  const router = useRouter()
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
            <li className="text-2xl font-medium">FortQuest</li>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8 list-none">
            <Link href="/"><li><Menu text="Home" /></li></Link>
            <Link href="/explore"><li ><Menu text="Explore" /></li></Link>
            <Link href="/my-trip"><li ><Menu text="My-Trip" /></li></Link>
            <button >EN</button>
            <Link href="/get-started">
              <li className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Get Started
              </li>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-20 ">
            <button
              className='cursor-pointer'
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
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
        <nav className="flex flex-col justify-center items-center gap-10 list-none w-full h-screen bg-gray-900 text-5xl">
          <Link href="/"><li onClick={() => setMenuOpen(false)}><Menu text="Home" /></li></Link>
          <Link href="/explore"><li onClick={() => setMenuOpen(false)}><Menu text="Explore" /></li></Link>
          <Link href="/my-trip"><li onClick={() => setMenuOpen(false)}><Menu text="My Trip" /></li></Link>
          <button onClick={() => setMenuOpen(false)}>EN</button>
          <Link href="/get-started">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl px-4 py-2 bg-blue-600 text-white rounded"
            >
              Get Started
            </button>
          </Link>
        </nav>
      </div>
    </nav>
  )
}
