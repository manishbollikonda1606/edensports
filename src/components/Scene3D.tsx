import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, TorusKnot, Sparkles, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface Scene3DProps {
  mode: 'form' | 'celebration';
}

function FloatingGeometries({ mode }: { mode: 'form' | 'celebration' }) {
  const group = useRef<Group>(null!);
  const sparklesRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.rotation.x += delta * 0.02;
    }
    if (sparklesRef.current && mode === 'celebration') {
      sparklesRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff8ba7" />
      <pointLight position={[10, -10, 10]} intensity={0.8} color="#76c47a" />

      <group ref={group} position={[0, 0, -5]}>
        <Sphere args={[1.2, 64, 64]} position={[-3, 1, 0]}>
          <meshStandardMaterial
            color={mode === 'celebration' ? '#ffd700' : '#76c47a'}
            emissive={mode === 'celebration' ? '#ffd700' : '#76c47a'}
            emissiveIntensity={mode === 'celebration' ? 0.6 : 0.3}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>

        <Box args={[1.5, 1.5, 1.5]} position={[3, -1, 0]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            color={mode === 'celebration' ? '#ff6b8b' : '#ff8ba7'}
            emissive={mode === 'celebration' ? '#ff6b8b' : '#ff8ba7'}
            emissiveIntensity={mode === 'celebration' ? 0.7 : 0.3}
            roughness={0.3}
            metalness={0.7}
          />
        </Box>

        <TorusKnot args={[1, 0.3, 200, 32]} position={[0, 3, -2]} rotation={[0.5, 0, 0]}>
          <meshStandardMaterial
            color={mode === 'celebration' ? '#00ffff' : '#76c47a'}
            emissive={mode === 'celebration' ? '#00ffff' : '#76c47a'}
            emissiveIntensity={mode === 'celebration' ? 0.8 : 0.3}
            roughness={0.1}
            metalness={0.9}
          />
        </TorusKnot>

        <Torus args={[1.2, 0.4, 50, 100]} position={[4, 2, -1]} rotation={[1, 0, 0]}>
          <meshStandardMaterial
            color={mode === 'celebration' ? '#ff00ff' : '#ff8ba7'}
            emissive={mode === 'celebration' ? '#ff00ff' : '#ff8ba7'}
            emissiveIntensity={mode === 'celebration' ? 0.6 : 0.3}
            roughness={0.4}
            metalness={0.6}
          />
        </Torus>

        <Sphere args={[0.6, 32, 32]} position={[-4, -2, -1]}>
          <meshPhysicalMaterial
            color={mode === 'celebration' ? '#ffffff' : '#5dbb62'}
            emissive={mode === 'celebration' ? '#ffffff' : '#5dbb62'}
            emissiveIntensity={mode === 'celebration' ? 1 : 0.4}
            roughness={0.1}
            metalness={0.9}
            transmission={0.5}
          />
        </Sphere>
      </group>

      {mode === 'celebration' && (
        <group ref={sparklesRef} position={[0, 0, -10]}>
          <Sparkles count={50} scale={10} size={0.5} tickSpeed={0.5} noise={0.2} />
          <Sparkles count={30} scale={10} size={0.3} tickSpeed={0.3} noise={0.1} position={[0, 0, 5]} />
        </group>
      )}
    </>
  );
}

export default function Scene3D({ mode }: Scene3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      className="absolute inset-0 z-0"
    >
      <color attach="background" args={['#0f0f1a']} />
      <fog attach="fog" args={['#0f0f1a', 5, 20]} />
      <Environment preset="night" />
      <FloatingGeometries mode={mode} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
