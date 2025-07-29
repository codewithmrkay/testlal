'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export default function RevealText() {
    const textRef = useRef(null)

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({ lerp: 0.07 })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        lenis.on('scroll', ScrollTrigger.update)

        const text = textRef.current
        const splitText = new SplitType(text, { type: 'words' })

        const wordCount = splitText.words.length
        const scrollDuration = wordCount * 50 // each word takes 100px scroll

        gsap.from(splitText.words, {
            opacity: 0,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: {
                trigger: text.closest('section'),
                start: 'top top',
                end: `+=${scrollDuration}px`,
                scrub: true,
                pin: true,
                // markers: true,
            },
        })

        return () => {
            lenis.destroy()
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    return (
        <div className="app homefont text-white min-h-screen">
            <section className="min-h-screen flex items-center justify-center">
                <div className="container max-w-4xl mx-auto px-4">
                    <p
                        ref={textRef}
                        className="reveal text-2xl lg:text-4xl md:text-3xl leading-relaxed font-light text-center"
                    > 
                        TIRED OF JUGGLING BETWEEN BLOGS, MAPS, AND BORING TOURIST SITES?
                        OUR PLATFORM BRINGS EVERYTHING <span className='text-orange-600 font-semibold'>MAHARASHTRA</span> TO YOUR FINGERTIPS — FORTS, FOOD, 
                        CULTURE, AND FESTIVALS — IN ONE SMOOTH DIGITAL EXPERIENCE.
                    </p>
                </div>
            </section>
        </div>
    )
}
