import React from 'react';
import { Scene3D } from './components/Scene3D';
import { Controls } from './components/Controls';
import { useHouseStore } from './store/houseStore';

function App() {
  const { viewMode } = useHouseStore();

  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-2xl font-bold text-gray-800">Modern Wooden House</h1>
        <p className="text-gray-600">Interactive 3D Visualization</p>
      </div>

      <div className="w-full h-full">
        {viewMode === '3d' ? (
          <Scene3D />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-xl text-gray-600">2D floor plans coming soon...</p>
          </div>
        )}
      </div>

      <Controls />

      <div className="absolute top-4 right-4 text-sm text-gray-600">
        <p>Plot Area: 440 sq ft</p>
        <p>Coverage: 75%</p>
      </div>
    </div>
  );
}

export default App;