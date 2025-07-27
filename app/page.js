'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const room1Ref = useRef(null)
  const imgRef = useRef(null)
  const zoomRef = useRef(null)
  const zoomimgRef = useRef(null)
  useEffect(() => {
    const scaleValue = window.innerWidth < 768 ? 4 : 10 // mobile vs desktop
    const yValue = window.innerWidth < 768 ? -500 : -1000
    const ctx = gsap.context(() => {
      gsap.fromTo(
        zoomimgRef.current,
        { scale: 1 },
        {
          scale: scaleValue,
          y: yValue,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: zoomRef.current,
            start: 'top top',
            end: '+=300', // how much scroll needed to finish zoom
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      )
    }, zoomRef)
    return () => ctx.revert()
  }, [])

  return (
    <main className="relative text-black">

      {/* Now the scrollable container starts */}
      <div className="w-full h-auto top-0 left-0 z-0">
        <div
          className="relative h-[120vh] sm:h-[180vh] w-full bg-[url('/backgroundsun.svg')] bg-center bg-cover flex items-center justify-center text-4xl font-bold overflow-hidden">
            <div data-speed="0.9" className="absolute  bottom-0 w-full h-[90%] flex items-end justify-center">
            <img className='aspect-video h-[300px] mb-30 sm:h-[500px] sm:mb-20 md:h-[600px] md:mb-10 lg:w-[80%] lg:mb-30  object-center object-cover' src="/shivajiraje.gif" alt="shivaji raje" />
          </div>
          <div data-speed="0.2" className="absolute bottom-0  bg-[url('/jungle1.svg')] bg-center bg-cover w-full h-[90%]">
          </div>
          <div data-speed="0.5" className="absolute bottom-0  bg-[url('/jungle2.svg')] bg-center bg-cover w-full h-[90%]">
          </div>
          <div data-speed="0.8" className="absolute bottom-0  bg-[url('/jungle3.svg')] bg-center bg-cover w-full h-[90%]">
          </div>
          <div data-speed="0.5" className="absolute bottom-0  bg-[url('/jungle4.svg')] bg-center bg-cover w-full h-[90%]">
          </div>
          <div data-speed="0.2" className="absolute bottom-0 left-0  bg-[url('/lastmountain.svg')] bg-center bg-cover w-full h-[90%]">
          </div>
          {/* 🏰 Fort Room 1 */}
          {/* <img
            className='scale-150 w-full h-full object-center object-cover' src="/backgroundsun.svg" alt="" /> */}
        </div>
        <div className="h-screen w-full bg-green-200 flex items-center justify-center text-4xl font-bold">
          🏺 Fort Room 2
        </div>
        <div className="h-screen w-full bg-blue-200 flex items-center justify-center text-4xl font-bold">
          🗡️ Fort Room 3
        </div>
      </div>

      {/* Zooming Fort Section (Pinned) */}
      <div
        ref={zoomRef}
        className="pointer-events-none absolute top-0 left-0 w-full h-screen z-50 overflow-hidden"
      >
        <div
          ref={zoomimgRef}
          className='h-full w-full absolute flex items-center justify-center'
        >
          <img
            src="/forth.gif"
            alt="Fort"
            className='w-full  h-full object-cover object-center'
          />
        </div>
      </div>
      {/* Final Section */}
      <section className="h-screen bg-yellow-100 flex justify-center items-center text-4xl font-bold">
        Welcome Inside the Fort 🥳
      </section>
    </main>
  )
}
