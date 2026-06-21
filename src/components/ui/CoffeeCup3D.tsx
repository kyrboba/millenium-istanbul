import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CoffeeCup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15;
    }
  });

  const cupMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#2a1f12',
      roughness: 0.3,
      metalness: 0.6,
    });
  }, []);

  const goldMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#d9a82e',
      roughness: 0.2,
      metalness: 0.8,
    });
  }, []);

  const coffeeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#3d2e1a',
      roughness: 0.1,
      metalness: 0.1,
    });
  }, []);

  return (
    <group ref={groupRef}>
      {/* Cup body */}
      <mesh position={[0, -0.5, 0]} material={cupMaterial}>
        <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
      </mesh>
      {/* Cup rim */}
      <mesh position={[0, 0.1, 0]} material={goldMaterial}>
        <torusGeometry args={[0.8, 0.05, 16, 32]} />
      </mesh>
      {/* Coffee surface */}
      <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]} material={coffeeMaterial}>
        <circleGeometry args={[0.75, 32]} />
      </mesh>
      {/* Handle */}
      <mesh position={[1, -0.3, 0]} material={cupMaterial}>
        <torusGeometry args={[0.35, 0.08, 16, 32, Math.PI]} />
      </mesh>
      {/* Saucer */}
      <mesh position={[0, -1.15, 0]} material={goldMaterial}>
        <cylinderGeometry args={[1.1, 1, 0.1, 32]} />
      </mesh>
      {/* Steam particles */}
      {[...Array(3)].map((_, i) => (
        <SteamParticle key={i} offset={i * 2} />
      ))}
    </group>
  );
}

function SteamParticle({ offset }: { offset: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() + offset;
      ref.current.position.y = 0.3 + Math.sin(t * 0.5) * 0.3 + t * 0.1;
      ref.current.position.x = Math.sin(t * 0.7) * 0.2;
      ref.current.scale.setScalar(1 + Math.sin(t) * 0.3);
      ref.current.material.opacity = Math.max(0, 0.4 - (t % 4) * 0.1);
    }
  });

  return (
    <mesh ref={ref} position={[0, 0.3, 0]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshBasicMaterial color="#c9941a" transparent opacity={0.4} />
    </mesh>
  );
}

export default function CoffeeCup3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#d9a82e" />
        <pointLight position={[-5, 3, -5]} intensity={0.5} color="#14b8a6" />
        <CoffeeCup />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
