import * as THREE from 'three';

export function createHouseModel() {
    const house = new THREE.Group();
    
    // Base/Foundation
    const foundation = new THREE.Mesh(
        new THREE.BoxGeometry(20, 0.5, 15),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    foundation.position.y = -0.25;
    house.add(foundation);
    
    // Ground Floor
    const groundFloor = new THREE.Mesh(
        new THREE.BoxGeometry(19, 4, 14),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    groundFloor.position.y = 2;
    house.add(groundFloor);
    
    return house;
}