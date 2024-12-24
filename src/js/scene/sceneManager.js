import * as THREE from 'three';
import { setupLighting } from './lighting.js';
import { setupCamera } from './camera.js';
import { createHouseModel } from '../models/houseModel.js';

export function initializeScene(container) {
    // Create scene
    const scene = new THREE.Scene();
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Setup camera
    const camera = setupCamera(container);
    
    // Setup lighting
    setupLighting(scene);
    
    // Add house model
    const house = createHouseModel();
    scene.add(house);

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    return { scene, renderer, camera };
}