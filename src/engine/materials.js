import * as THREE from 'three';

export class MaterialManager {
  constructor() {
    this.materials = new Map();
    this.setupDefaultMaterials();
  }
  
  setupDefaultMaterials() {
    // Wood material
    this.materials.set('wood', new THREE.MeshStandardMaterial({
      color: 0x8B4513,
      roughness: 0.7,
      metalness: 0.1
    }));
    
    // Glass material
    this.materials.set('glass', new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 0.3,
      metalness: 0,
      roughness: 0,
      ior: 1.5,
      thickness: 0.01,
      specularIntensity: 1,
      envMapIntensity: 1,
      clearcoat: 1,
      transparent: true
    }));
    
    // Metal material
    this.materials.set('metal', new THREE.MeshStandardMaterial({
      color: 0x888888,
      roughness: 0.2,
      metalness: 0.8
    }));
  }
  
  getMaterial(name) {
    return this.materials.get(name);
  }
  
  updateMaterialColor(name, color) {
    const material = this.materials.get(name);
    if (material) {
      material.color.set(color);
    }
  }
}