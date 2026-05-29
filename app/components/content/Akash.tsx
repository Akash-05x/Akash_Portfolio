'use client';

import { useEffect, useState } from 'react';
import HeroCanvas from './HeroCanvas';

export default function Akash() {
    const [rotation, setRotation] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        let frame: number;

        const animate = () => {
            setRotation({
                x:
                    Math.sin(Date.now() * 0.0012) * 6,

                y:
                    Math.sin(Date.now() * 0.0008) * 12,
            });

            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, []);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 35;
        const rotateX = -((y / rect.height) - 0.5) * 15;

        setRotation({
            x: rotateX,
            y: rotateY,
        });
    };

    const resetRotation = () => {
        setRotation({
            x: 0,
            y: 0,
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
            style={{
                width: '100%',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                perspective: '1600px',
                position: 'relative',
                overflow: 'visible',
                margin: '0',
            }}
        >

            {/* Glow */}
            <div
                style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(200,169,110,0.18) 0%, transparent 70%)',
                    filter: 'blur(90px)',
                    pointerEvents: 'none',
                }}
            />

            {/* 3D Container */}
            <div
                style={{
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.15s ease-out',
                    transform: `
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
          `,
                }}
            >


                {/* Solid 3D Extrusion Layers */}
                {[...Array(40)].map((_, i) => (
                    <h1
                        key={i}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            margin: 0,
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(3rem, 14vw, 8rem)',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',

                            /* Dark Gold Side Depth */
                            color: `rgba(${120 + i * 2}, ${90 + i}, ${40}, 1)`,

                            /* Dense Z depth */
                            transform: `translateZ(${-i * 2}px)`,

                            /* Sharp edges */
                            WebkitTextStroke: '0.5px rgba(0,0,0,0.25)',

                            /* No blur */
                            filter: 'none',

                            /* Better 3D */
                            backfaceVisibility: 'visible',

                            userSelect: 'none',
                            pointerEvents: 'none',
                        }}
                    >
                        AKASH S
                    </h1>
                ))}

                {/* Front Face */}
                <h1
                    style={{
                        position: 'relative',
                        margin: 0,
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',

                        /* Bright front */
                        color: '#ffffff',

                        transform: 'translateZ(50px)',

                        textShadow: `
      0 0 20px rgba(255,255,255,0.1),
      0 10px 40px rgba(0,0,0,0.5)
    `,

                        backfaceVisibility: 'visible',
                        userSelect: 'none',
                    }}
                >
                    AKASH S
                </h1>

                {/* Back Face */}
                <h1
                    style={{
                        position: 'absolute',
                        inset: 0,
                        margin: 0,
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.2)',
                        transform: 'rotateY(180deg) translateZ(40px)',
                        filter: 'blur(1px)',
                        backfaceVisibility: 'visible',
                    }}
                >

                </h1>
            </div>

        </div>
    );
}