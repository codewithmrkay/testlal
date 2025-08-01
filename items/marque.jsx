'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Marquee = () => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current

    // Duplicate content for seamless loop
    const clones = content.cloneNode(true)
    container.appendChild(clones)

    const totalWidth = content.offsetWidth

    const tween = gsap.to(container, {
      x: `-=${totalWidth}`,
      duration: 150,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) // wrap around
      }
    })

    // Scroll direction control
    let prevScroll = window.scrollY

    const onScroll = () => {
      const currentScroll = window.scrollY
      const scrollingDown = currentScroll > prevScroll
      gsap.to(tween, {
        timeScale: scrollingDown ? 1 : -1,
        overwrite: true
      })
      prevScroll = currentScroll
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      tween.kill()
    }
  }, [])

  // const text = 'Virtual Dindi To Explore  Maharashtra'

  return (
    <>
      <div className="relative text-white  homefont w-full overflow-hidden uppercase font-medium text-[80px] md:text-[150px] whitespace-nowrap">
        <div
          ref={containerRef}
          className="flex w-fit"
          style={{ willChange: 'transform' }}
        >
          <div ref={contentRef} className="flex gap-8 px-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <span className='text-white' key={i}> Virtual Dindi To Explore <span className='text-orange-500'>Maharashtra</span>  &nbsp;&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[150px]" />
    </>
  )
}

export default Marquee
