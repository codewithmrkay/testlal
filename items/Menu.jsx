'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Menu = ({ text = '' }) => {
  const itemRef = useRef(null);
  const originalRef = useRef(null);
  const cloneRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    const orig = originalRef.current;
    const clone = cloneRef.current;

    // Hide the clone initially (positioned below)
    gsap.set(clone, { yPercent: 100 });

    item.addEventListener('mouseenter', () => {
      gsap.to(orig, {
        yPercent: -110,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(clone, {
        yPercent: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(orig, {
        yPercent: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(clone, {
        yPercent: 110,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div
      ref={itemRef}
      className="relative inline-block overflow-hidden cursor-pointer align-top"
    >
      {/* Force width & height using visible inline element (invisible visually) */}
      <span className="invisible inline-block text-white">{text}</span>

      {/* Animated original */}
      <span
        ref={originalRef}
        className="absolute top-0 left-0 w-full text-white"
      >
        {text}
      </span>

      {/* Animated clone */}
      <span
        ref={cloneRef}
        className="absolute top-0 left-0 w-full text-white"
      >
        {text}
      </span>
    </div>

  );
};

export default Menu;
