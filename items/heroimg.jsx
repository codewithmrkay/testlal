import React, { useEffect, useRef } from 'react'

function HeroImg() {
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
        <div
            ref={cardRef}
            className=" w-full h-screen overflow-hidden"
            style={{ perspective: 1000 }}
        >
            <img
                src="/raje.png"
                alt=""
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 h-screen aspect-square object-cover pointer-events-none"
            />
        </div>
    )
}

export default HeroImg