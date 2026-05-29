'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function HeroCanvas() {
    return (
        <Canvas>
            <ambientLight intensity={1.5} />

            <Float speed={3} rotationIntensity={2}>
                <Sphere args={[1.5, 100, 200]} scale={2.5}>
                    <MeshDistortMaterial
                        color="#c8a96e"
                        attach="material"
                        distort={0.2}
                        speed={2}
                        roughness={0}
                    />
                </Sphere>
            </Float>
        </Canvas>
    );
}