import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import { Suspense } from 'react';

const Sphere = () => (
  <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
    <mesh>
        {/* eslint-disable-next-line */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#ff0051" />
    </mesh>
  </Float>
);

const ThreeScene = () => {
  return (
    <Canvas style={{ height: '300px', width: '100%' }}>
        {/* eslint-disable-next-line */}
      <ambientLight intensity={0.5} />
      {/* eslint-disable-next-line */}
      <directionalLight position={[3, 3, 3]} />
      <Suspense fallback={<Html>Loading...</Html>}>
        <Sphere />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;