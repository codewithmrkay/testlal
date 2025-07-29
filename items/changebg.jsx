'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ChangeBg() {
  const parentRef = useRef(null)
  const div2Ref = useRef(null)
  const div3Ref = useRef(null)

  useEffect(() => {
    const parent = parentRef.current

    const gradient1 = 'red' // default
    const gradient2 = 'blue'   // inverse

    // Section 2
    ScrollTrigger.create({
      trigger: div2Ref.current,
      start: 'top center',
      end: 'bottom top',
      scrub: true,
      onEnter: () => {
        gsap.to(parent, {
          backgroundColor: 'red',
          ease: 'power2.inOut',
        })
      },
    })

    // Section 3
    ScrollTrigger.create({
      trigger: div3Ref.current,
      start: 'top center',
      end: 'bottom top',
      scrub:true,
      onEnter: () => {
        gsap.to(parent, {
          backgroundColor: 'blue',
          ease: 'power2.inOut',
        })
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div
      ref={parentRef}
      className="relative w-full min-h-[100vh] bg-[size:20px_20px]"
      style={{
        backgroundImage: 'radial-gradient(#ffffff33 1px, #00091d 1px)',
      }}
    >
      <div className="h-screen flex items-center justify-center text-4xl font-bold text-white">
        div 1
      </div>
      <div
        ref={div2Ref}
        className="h-screen flex items-center justify-center text-4xl font-bold text-white"
      >
        div 2
      </div>
      <div
        ref={div3Ref}
        className="h-screen flex items-center justify-center text-4xl font-bold text-white"
      >
        div 3
      </div>
    </div>
  )
}
