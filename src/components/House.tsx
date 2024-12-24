import { useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'
import { useHouseStore } from '../store/houseStore'
import { House } from './House'
function App() {
  return (
    <Canvas>
      <House position={[0, 0, 0]} scale={[1, 1, 1]} />
    </Canvas>
  )
}
export default App
interface HouseProps {
  position?: [number, number, number]
  scale?: [number, number, number]
}

export const House: React.FC<HouseProps> = ({
  position = [0, 0, 0],
  scale = [1, 1, 1]
}) => {
  const meshRef = useRef<Mesh>(null)
  const { wallColor, roofColor, windowColor } = useHouseStore()

  return (
    <group position={new Vector3(...position)} scale={new Vector3(...scale)}>
      <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[20, 1, 15]} />
        <meshStandardMaterial color="#808080" />
      </mesh>

      <mesh position={[0, 4, 0]} castShadow receiveShadow ref={meshRef}>
        <boxGeometry args={[18, 8, 13]} />
        <meshStandardMaterial color={wallColor || '#FFFFFF'} />
      </mesh>

      <mesh position={[0, 9, 0]} rotation={[0, 0, Math.PI * 0.1]} castShadow>
        <boxGeometry args={[20, 1, 15]} />
        <meshStandardMaterial color={roofColor || '#8B4513'} />
      </mesh>

      <group position={[0, 4, 6.6]}>
        {[-4, 4].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]} castShadow>
            <boxGeometry args={[3, 3, 0.1]} />
            <meshPhysicalMaterial
              color={windowColor || '#87CEEB'}
              transparent
              opacity={0.6}
              transmission={0.5}
            />
          </mesh>
        ))}
      </group>

      <mesh position={[0, 1.5, 6.6]} castShadow>
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#4A3C2C" />
      </mesh>

      <group position={[0, 6, 6]}>
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[8, 0.2, 2]} />
          <meshStandardMaterial color="#A9A9A9" />
        </mesh>
        <mesh position={[0, 1, 1]} castShadow>
          <boxGeometry args={[8, 2, 0.1]} />
          <meshPhysicalMaterial color="#FFFFFF" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  )
}

export default House// export default House