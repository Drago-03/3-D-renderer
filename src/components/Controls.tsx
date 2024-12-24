import React from 'react';
import { Icons } from './icons';
import { useHouseStore } from '../store/houseStore';

export const Controls: React.FC = () => {
  const { viewMode, floor, roofMode, setViewMode, setFloor, setRoofMode } = useHouseStore();

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
      <div className="flex gap-4">
        <button
          onClick={() => setViewMode(viewMode === '2d' ? '3d' : '2d')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          {viewMode === '2d' ? <Icons.Eye3D size={20} /> : <Icons.Eye2D size={20} />}
          {viewMode === '2d' ? '3D View' : '2D View'}
        </button>

        <select
          value={floor}
          onChange={(e) => setFloor(e.target.value as any)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-md"
        >
          <option value="ground">Ground Floor</option>
          <option value="first">First Floor</option>
          <option value="second">Second Floor</option>
          <option value="third">Third Floor</option>
        </select>

        <button
          onClick={() => setRoofMode(roofMode === 'open' ? 'closed' : roofMode === 'closed' ? 'tinted' : 'open')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Icons.Umbrella size={20} />
          {roofMode === 'open' ? 'Close Roof' : roofMode === 'closed' ? 'Tint Roof' : 'Open Roof'}
        </button>
      </div>
    </div>
  );
};