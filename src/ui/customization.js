import { Pane } from 'tweakpane';

export function setupUI(renderer, materialManager) {
  const pane = new Pane({
    container: document.querySelector('.sidebar')
  });
  
  // Material controls
  const materials = pane.addFolder({ title: 'Materials' });
  
  // Wood material controls
  const woodParams = {
    color: '#8B4513',
    roughness: 0.7
  };
  
  materials.addInput(woodParams, 'color').on('change', (ev) => {
    materialManager.updateMaterialColor('wood', ev.value);
  });
  
  materials.addInput(woodParams, 'roughness', { min: 0, max: 1 }).on('change', (ev) => {
    const material = materialManager.getMaterial('wood');
    material.roughness = ev.value;
    material.needsUpdate = true;
  });
  
  // Lighting controls
  const lighting = pane.addFolder({ title: 'Lighting' });
  const lightParams = {
    intensity: 1,
    color: '#ffffff'
  };
  
  lighting.addInput(lightParams, 'intensity', { min: 0, max: 2 }).on('change', (ev) => {
    renderer.scene.children.forEach(child => {
      if (child.isDirectionalLight) {
        child.intensity = ev.value;
      }
    });
  });
  
  // View controls
  const view = pane.addFolder({ title: 'View' });
  const viewParams = {
    wireframe: false
  };
  
  view.addInput(viewParams, 'wireframe').on('change', (ev) => {
    renderer.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = ev.value;
      }
    });
  });
}