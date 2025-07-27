'use client'; // for Next.js app router

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
function Homepage() {
const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;

      const rotateY = ((x / width) - 0.5) * 10;
      const rotateX = ((y / height) - 0.5) * -2;

      gsap.to(card, {
        rotateY,
        rotateX,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute top-0 z-0 w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen flex items-center justify-center">
  {/* Image sits above everything */}
  <img ref={cardRef} className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 h-screen aspect-square object-cover" src="/raje.png" alt="" />

  {/* Gradient Layer */}
  <div
    className="opacity-70 w-full h-screen rounded-md flex items-center justify-center text-white text-xl"
    style={{
      backgroundImage: 'linear-gradient(to right, #2563eb 0%, transparent 50%, #dc2626 100%)',
    }}
  >
    hello
  </div>
</div>


  )
}

export default Homepage