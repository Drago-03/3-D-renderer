import * as THREE from 'three';
import { setupLighting } from './lighting';
import { setupControls } from './controls';

export class Renderer {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    container.appendChild(this.renderer.domElement);
    
    this.camera.position.set(5, 5, 5);
    this.camera.lookAt(0, 0, 0);
    
    this.controls = setupControls(this.camera, this.renderer.domElement);
    setupLighting(this.scene);
    
    window.addEventListener('resize', this.onWindowResize.bind(this));
    this.animate();
  }
  
  onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }
  
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
  
  addObject(object) {
    this.scene.add(object);
  }
}