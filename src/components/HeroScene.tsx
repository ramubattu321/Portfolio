import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DistortedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#0ea5e9"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={1.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingShape({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} transparent opacity={0.5} wireframe />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 60;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const positions = useRef(
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 12,
      y: (Math.random() - 0.5) * 12,
      z: (Math.random() - 0.5) * 8,
      speed: 0.2 + Math.random() * 0.5,
    }))
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const matrix = new THREE.Matrix4();
    positions.current.forEach((p, i) => {
      const y = p.y + Math.sin(clock.getElapsedTime() * p.speed + i) * 0.5;
      matrix.setPosition(p.x, y, p.z);
      meshRef.current!.setMatrixAt(i, matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={2} transparent opacity={0.6} />
    </instancedMesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#e0f2fe" />
        <pointLight position={[-3, -3, 2]} intensity={0.5} color="#0ea5e9" />

        <DistortedSphere />
        <FloatingShape position={[-3, 2, -1]} color="#22d3ee" scale={0.4} />
        <FloatingShape position={[3.5, -1.5, -2]} color="#0284c7" scale={0.3} />
        <FloatingShape position={[-2, -2.5, 0]} color="#38bdf8" scale={0.25} />
        <FloatingShape position={[2.5, 2.5, -1.5]} color="#06b6d4" scale={0.35} />
        <Particles />
      </Canvas>
    </div>
  );
}
