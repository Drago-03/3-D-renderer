import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { House } from './House';

export const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <House />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};