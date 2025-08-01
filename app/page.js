'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marque from '@/items/marque';
import ChangeBg from '@/items/changebg';
import RevealText from '@/items/reveltext';
import Horizontal from '@/items/horizontal';
import HorizontalFestival from '@/items/horizontalfestival';
import HorizontalFood from '@/items/horizontalFood';
import Navbar from '@/items/Navbar';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const gradientRef = useRef(null);
  const imgRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Pin gradient + image
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
        },
      })
        .to(gradientRef.current, { opacity: 0, ease: 'power1.out' }, 0)
        .to(imgRef.current, { opacity: 0, ease: 'power1.out' }, 0);

      // Infinite marquee scroll
      gsap.to(marqueeRef.current, {
        xPercent: -100,
        repeat: -1,
        ease: 'linear',
        duration: 15,
      });
    });

    return () => ctx.revert();
  }, []);

  return (

      <div
        ref={sectionRef}
        className="relative w-full min-h-[100vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
      >

        <div className='absolute top-[80vh] md:top-[70vh] z-10 w-full'>
          <Marque />
        </div>
        <div
          ref={pinRef}
          className="relative w-full flex items-center justify-center"
        >
          <div
            ref={gradientRef}
            className="absolute inset-0 opacity-70 z-5 h-[100vh]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #2563eb 0%, transparent 50%, #dc2626 100%)',
            }}
          />
          <img
            ref={imgRef}
            src="/raje.png"
            alt=""
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 h-screen aspect-square object-cover pointer-events-none"
          />
        </div>
        <div className="w-full text-white text-center  text-3xl">
          <RevealText />
        </div>
        <div className="w-full text-white text-center text-3xl">
          <Horizontal />
        </div>
        <div className="w-full text-white text-center text-3xl">
          <HorizontalFestival />
        </div>
        <div className="w-full text-white text-center text-3xl">
          <HorizontalFood />
        </div>
        <div className="w-full h-[50vh] text-white text-center py-32 text-3xl flex items-center justify-center">
          <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='flex items-center justify-center'>
              <h1>Made With</h1>
              <img className='w-[50px] h-[50px]' src="/heart.gif" alt="" />
            </div>
            <span>&nbsp;By Dark Army😎</span>
          </div>
        </div>
        {/* <div className="w-full h-[100vh] text-white text-center py-32 text-3xl">
      </div> */}
      </div>
   

  );
}
