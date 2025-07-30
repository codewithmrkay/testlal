'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, title: 'Card 1', img: '/images/1.jpg', speed: '1' },
  { id: 2, title: 'Card 2', img: '/images/2.jpg', speed: '1.2' },
  { id: 3, title: 'Card 3', img: '/images/3.jpg', speed: '0.8' },
  { id: 4, title: 'Card 4', img: '/images/4.jpg', speed: '1.1' },
  { id: 5, title: 'Card 5', img: '/images/5.jpg', speed: '0.9' },
  { id: 6, title: 'Card 6', img: '/images/6.jpg', speed: '1.3' },
];

const Horizontal = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;

    gsap.to(container, {
      x: () => -1 * (scrollWidth - window.innerWidth),
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
      className="relative py-[200px] bg-[#04091E] overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex gap-3 px-[50px] w-max"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            data-speed={card.speed}
            className="h-[400px] w-[200px] lg:h-[300px] lg:w-[500px] bg-cover bg-center rounded-[38px] text-[#f6f2e8] flex items-center justify-center text-3xl font-bold  bg-amber-500"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            {card.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Horizontal;
