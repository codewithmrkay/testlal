'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Boi from '@/items/marque';

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
      className="relative w-full min-h-[250vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className='absolute top-[90vh] z-10 w-full'>
        <Boi />
      </div>
      {/* Pinned Section */}
      <div
        ref={pinRef}
        className="relative w-full h-[100vh] flex items-center justify-center"
      >
        <div
          ref={gradientRef}
          className="absolute inset-0 opacity-70 z-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, #2563eb 0%, transparent 50%, #dc2626 100%)',
          }}
        />
        <img
          ref={imgRef}
          src="/raje.png"
          alt=""
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 h-screen aspect-square object-cover pointer-events-none"
        />
      </div>
      {/* ✅ Wrapper exactly 100vh tall, marquee sticks to bottom of that */}
      {/* Extra content below */}
      <div className="w-full text-white text-center py-32 text-3xl">
        Scroll keeps going...
      </div>
    </div>
  );
}
