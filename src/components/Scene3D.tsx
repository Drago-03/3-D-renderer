import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { House } from './House';
import { useHouseStore } from '../store/houseStore';

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

export const Controls: React.FC = () => {
  const { viewMode, setViewMode } = useHouseStore();
  
  const toggleView = () => {
    setViewMode(viewMode === '2d' ? '3d' : '2d');
  };

  return (
    <button 
      onClick={toggleView}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
    >
      {viewMode === '2d' ? '3D View' : '2D View'}
    </button>
  );
};