'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, title: 'Card 1', img: '/fes1.webp', speed: '1' },
  { id: 2, title: 'Card 2', img: '/fes2.jpg', speed: '1.2' },
  { id: 3, title: 'Card 3', img: '/fes3.jpg', speed: '0.8' },
  { id: 4, title: 'Card 4', img: '/fes4.jpg', speed: '1.1' },
];

const HorizontalFestival = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const startX = -1 * (scrollWidth - window.innerWidth);
    gsap.set(container, {
      x: startX,
    });
    gsap.to(container, {
      x: () => 0,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  return (
    <section
      ref={sectionRef}
      className="relative py-[200px] overflow-hidden flex flex-col justify-center gap-10 h-screen"
    >
      <div className='homefont text-white text-3xl lg:text-8xl text-left w-fit mx-auto mt-10'>
        <h1>Explore Festival's</h1>
      </div>
      <div
        ref={containerRef}
        className="flex gap-3 px-[50px] w-max "
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="overflow-hidden h-[400px] w-[200px] lg:h-[300px] lg:w-[500px] bg-cover bg-center rounded-[18px] text-[#f6f2e8] flex items-center justify-center text-3xl font-bold  bg-gray-900 cursor-pointer"
          >
            <img
              className="w-full h-full object-cover object-center opacity-50 transform transition-all duration-500 ease-in-out hover:opacity-100 hover:scale-115 lg:hover:translate-x-[35px]"
              src={card.img}
              alt={card.title}
            />

          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalFestival;
