import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Cursor = styled.div`
  position: fixed;
`;

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(Cursor, {
                duration: 0.2,
                left: clientX,
                top: clientY,
                ease: 'power2.easeOut',
            });
            setPosition({ x: clientX, y: clientY });
        };

        const handleMouseEnter = () => {
            setIsZoomed(true);
            // gsap.to(Cursor, {
            //     duration: 0.1,
            //     scale: 3,
            //     ease: 'power2.easeOut',
            // });
        };

        const handleMouseLeave = () => {
            setIsZoomed(false);
            // gsap.to(Cursor, {
            //     duration: 0.1,
            //     scale: 1,
            //     ease: 'power2.easeOut',
            // });
        };
        window.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('a, button, .zoom-cursor, .trigger-close, .trigger-plus').forEach((element) => {
            console.log('anchorjj', this);
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        // return () => {
        //     window.removeEventListener('mousemove', handleMouseMove);
        //     document.querySelectorAll('a, button, .zoom-cursor, .trigger-close, .trigger-plus').forEach((element) => {
        //         element.removeEventListener('mouseenter', handleMouseEnter);
        //         element.removeEventListener('mouseleave', handleMouseLeave);
        //     });
        // };
    }, []);

    return (
        <Cursor
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            className={`${isZoomed ? 'cursor-close' : ''} cursor`}
        />
    );
}
