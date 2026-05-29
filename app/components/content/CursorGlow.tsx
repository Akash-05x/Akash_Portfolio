'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', move);

        return () => {
            window.removeEventListener('mousemove', move);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x - 150,
                top: position.y - 150,
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: 'rgba(255, 204, 0, 0.18)',
                filter: 'blur(120px)',
                pointerEvents: 'none',
                zIndex: 0,
                transition: 'all 0.15s linear',
            }}
        />
    );
}