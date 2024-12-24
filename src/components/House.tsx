import React from 'react';
import { useHouseStore } from '../store/houseStore';
import * as THREE from 'three';

export const House: React.FC = () => {
  const { floor, roofMode } = useHouseStore();

  return (
    <group>
      {/* Base structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[20, 0.5, 15]} />
        <meshStandardMaterial color="#concrete" />
      </mesh>

      {/* Ground floor */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[19, 4, 14]} />
        <meshStandardMaterial color="#wooden" />
      </mesh>

      {/* Additional floors will be added based on selected floor */}
      {(floor === 'first' || floor === 'second' || floor === 'third') && (
        <mesh position={[0, 6.5, 0]}>
          <boxGeometry args={[19, 4, 14]} />
          <meshStandardMaterial color="#wooden" />
        </mesh>
      )}

      {/* Roof */}
      <mesh position={[0, 11, 0]} rotation={[0, 0, THREE.MathUtils.degToRad(20)]}>
        <boxGeometry args={[21, 0.5, 16]} />
        <meshStandardMaterial 
          color={roofMode === 'tinted' ? '#333' : '#wooden'}
          transparent={roofMode === 'open'}
          opacity={roofMode === 'open' ? 0.3 : 1}
        />
      </mesh>

      {/* Garden and pond area */}
      <mesh position={[10, 0.3, 7]}>
        <cylinderGeometry args={[2, 2, 0.3, 32]} />
        <meshStandardMaterial color="#water" />
      </mesh>
    </group>
  );
};