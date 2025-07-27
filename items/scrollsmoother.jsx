'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only create once
      if (!ScrollSmoother.get()) {
        ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.5,
          effects: true,
        })
      }
    }
  }, [])

  return (
    <div id="smooth-wrapper" className="min-h-screen overflow-hidden">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}
