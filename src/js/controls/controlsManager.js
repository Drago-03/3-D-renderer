import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function setupControls(sceneData) {
    const { camera, renderer } = sceneData;
    const controls = new OrbitControls(camera, renderer.domElement);
    
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 20;
    controls.maxPolarAngle = Math.PI / 2;
    
    return controls;
}