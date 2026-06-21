import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Hookah() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08;
    }
  });

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#d9a82e',
    roughness: 0.15,
    metalness: 0.9,
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#0d9488',
    roughness: 0.02,
    metalness: 0.05,
    transmission: 0.85,
    thickness: 0.8,
    transparent: true,
    opacity: 0.45,
    ior: 1.5,
  }), []);

  const liquidMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#14b8a6',
    roughness: 0.05,
    metalness: 0.2,
    transparent: true,
    opacity: 0.35,
  }), []);

  const hoseMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1209',
    roughness: 0.9,
    metalness: 0.0,
  }), []);

  const bowlMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#4a2e14',
    roughness: 0.95,
    metalness: 0.0,
  }), []);

  const coalMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ff6b35',
    emissive: '#ff4500',
    emissiveIntensity: 0.8,
    roughness: 1.0,
    metalness: 0.0,
  }), []);

  return (
    <group ref={groupRef} scale={0.75} position={[0, 0.3, 0]}>
      {/* Vase - elongated bulb shape using lathe */}
      <mesh position={[0, -1.0, 0]} material={glassMaterial}>
        <sphereGeometry args={[0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.85]} />
      </mesh>
      {/* Vase neck */}
      <mesh position={[0, -0.3, 0]} material={glassMaterial}>
        <cylinderGeometry args={[0.18, 0.22, 0.5, 32]} />
      </mesh>
      {/* Vase neck top */}
      <mesh position={[0, -0.05, 0]} material={goldMaterial}>
        <torusGeometry args={[0.18, 0.03, 16, 32]} />
      </mesh>
      {/* Vase bottom ring */}
      <mesh position={[0, -1.5, 0]} material={goldMaterial}>
        <torusGeometry args={[0.35, 0.04, 16, 32]} />
      </mesh>

      {/* Liquid inside */}
      <mesh position={[0, -1.1, 0]} material={liquidMaterial}>
        <sphereGeometry args={[0.42, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.75]} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, 0.35, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
      </mesh>
      {/* Stem rings */}
      <mesh position={[0, 0.85, 0]} material={goldMaterial}>
        <torusGeometry args={[0.09, 0.025, 16, 32]} />
      </mesh>
      <mesh position={[0, 0.55, 0]} material={goldMaterial}>
        <torusGeometry args={[0.08, 0.02, 16, 32]} />
      </mesh>
      <mesh position={[0, 0.0, 0]} material={goldMaterial}>
        <torusGeometry args={[0.08, 0.02, 16, 32]} />
      </mesh>
      {/* Stem ball decoration */}
      <mesh position={[0, 0.35, 0]} material={goldMaterial}>
        <sphereGeometry args={[0.1, 16, 16]} />
      </mesh>

      {/* Tray */}
      <mesh position={[0, 0.95, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.42, 0.35, 0.03, 32]} />
      </mesh>
      <mesh position={[0, 0.97, 0]} material={goldMaterial}>
        <torusGeometry args={[0.42, 0.015, 16, 32]} />
      </mesh>

      {/* Bowl */}
      <mesh position={[0, 1.22, 0]} material={bowlMaterial}>
        <cylinderGeometry args={[0.14, 0.09, 0.18, 16]} />
      </mesh>
      {/* Bowl rim */}
      <mesh position={[0, 1.31, 0]} material={goldMaterial}>
        <torusGeometry args={[0.14, 0.015, 16, 32]} />
      </mesh>

      {/* Coals - glowing orange */}
      <mesh position={[0, 1.36, 0]} material={coalMaterial}>
        <sphereGeometry args={[0.05, 8, 8]} />
      </mesh>
      <mesh position={[0.06, 1.35, 0.04]} material={coalMaterial}>
        <sphereGeometry args={[0.04, 8, 8]} />
      </mesh>
      <mesh position={[-0.05, 1.35, -0.03]} material={coalMaterial}>
        <sphereGeometry args={[0.04, 8, 8]} />
      </mesh>
      <mesh position={[0.02, 1.35, -0.05]} material={coalMaterial}>
        <sphereGeometry args={[0.035, 8, 8]} />
      </mesh>

      {/* Hose - curved */}
      <mesh position={[0.6, -0.7, 0]} rotation={[0, 0, Math.PI * 0.15]} material={hoseMaterial}>
        <torusGeometry args={[0.45, 0.04, 12, 32, Math.PI * 0.75]} />
      </mesh>
      {/* Hose connector */}
      <mesh position={[0.12, -0.2, 0]} material={goldMaterial}>
        <sphereGeometry args={[0.05, 12, 12]} />
      </mesh>
      {/* Hose mouthpiece tube */}
      <mesh position={[1.05, -0.72, 0.28]} rotation={[0, 0, Math.PI * 0.1]} material={goldMaterial}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
      </mesh>
      {/* Hose mouthpiece tip */}
      <mesh position={[1.15, -0.75, 0.35]} material={goldMaterial}>
        <cylinderGeometry args={[0.04, 0.03, 0.08, 8]} />
      </mesh>

      {/* Smoke rings rising from bowl */}
      {[...Array(6)].map((_, i) => (
        <SmokeRing key={i} offset={i * 0.9} />
      ))}
      {/* Extra small puffs */}
      {[...Array(4)].map((_, i) => (
        <SmokePuff key={`puff-${i}`} offset={i * 1.2 + 0.4} />
      ))}
    </group>
  );
}

function SmokeRing({ offset }: { offset: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshBasicMaterial>(null);

  const ringMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#94a3b8',
    transparent: true,
    opacity: 0.0,
    side: THREE.DoubleSide,
  }), []);

  useFrame((state) => {
    if (ref.current && matRef.current) {
      const t = (state.clock.getElapsedTime() + offset) % 5;
      const progress = t / 5;

      ref.current.position.y = 1.35 + progress * 1.8;
      ref.current.position.x = Math.sin(t * 0.8) * 0.06;
      ref.current.position.z = Math.cos(t * 0.6) * 0.06;

      const scale = 0.3 + progress * 0.8;
      ref.current.scale.setScalar(scale);

      matRef.current.opacity = progress < 0.15
        ? progress / 0.15 * 0.25
        : progress > 0.6
          ? (1 - progress) / 0.4 * 0.25
          : 0.25;
    }
  });

  return (
    <mesh ref={ref} position={[0, 1.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.15, 0.02, 8, 32]} />
      <meshBasicMaterial ref={matRef} color="#94a3b8" transparent opacity={0} side={THREE.DoubleSide} />
    </mesh>
  );
}

function SmokePuff({ offset }: { offset: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    if (ref.current && matRef.current) {
      const t = (state.clock.getElapsedTime() + offset) % 4;
      const progress = t / 4;

      ref.current.position.y = 1.35 + progress * 1.2;
      ref.current.position.x = Math.sin(t * 1.2 + offset) * 0.1;
      ref.current.position.z = Math.cos(t * 1.0 + offset) * 0.08;

      const scale = 0.2 + progress * 0.5;
      ref.current.scale.setScalar(scale);

      matRef.current.opacity = progress < 0.2
        ? progress / 0.2 * 0.2
        : progress > 0.5
          ? (1 - progress) / 0.5 * 0.2
          : 0.2;
    }
  });

  return (
    <mesh ref={ref} position={[0, 1.35, 0]}>
      <sphereGeometry args={[0.12, 8, 8]} />
      <meshBasicMaterial ref={matRef} color="#b0c4de" transparent opacity={0} />
    </mesh>
  );
}

export default function Hookah3D() {
  return (
    <div className="w-full h-[340px] md:h-[420px]">
      <Canvas camera={{ position: [0, 0.2, 3.8], fov: 38 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 4, 3]} intensity={1.0} color="#d9a82e" />
        <pointLight position={[-3, 2, -3]} intensity={0.5} color="#14b8a6" />
        <pointLight position={[0, 3, 0]} intensity={0.3} color="#f0d999" />
        <pointLight position={[0, 1.5, 0]} intensity={0.6} color="#ff6b35" distance={3} />
        <Hookah />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
