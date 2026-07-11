import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Icosahedron, MeshDistortMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import type { Mesh } from "three";

const MODEL_PATH = "/OldRetroPc.glb";

function HeroModel() {
  const { scene } = useGLTF(MODEL_PATH);

  return (
    <group scale={2.2}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}
useGLTF.preload(MODEL_PATH);

function PlaceholderModel() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Icosahedron ref={meshRef} args={[1.4, 1]}>
      <MeshDistortMaterial
        color="#6366f1"
        speed={1.5}
        distort={0.35}
        roughness={0.15}
        metalness={0.6}
      />
    </Icosahedron>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <pointLight position={[-3, -2, -2]} intensity={0.5} color="#a855f7" />
      <Suspense fallback={<PlaceholderModel />}>
        <HeroModel />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
      />
    </Canvas>
  );
}
