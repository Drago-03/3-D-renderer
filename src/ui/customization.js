import { Pane } from 'tweakpane';
import React, { useState } from 'react';

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

export const MaterialControls = () => {
  const [colors, setColors] = useState({
    walls: '#8B4513',
    roof: '#A52A2A',
    windows: '#87CEEB'
  });

  return (
    <div className="fixed right-4 top-4 bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Customize Materials</h3>
      
      <div className="space-y-4">
        <div>
          <label>Wall Color</label>
          <input 
            type="color" 
            value={colors.walls}
            onChange={(e) => setColors({...colors, walls: e.target.value})}
          />
        </div>

        <div>
          <label>Roof Color</label>
          <input 
            type="color" 
            value={colors.roof}
            onChange={(e) => setColors({...colors, roof: e.target.value})}
          />
        </div>

        <div>
          <label>Window Tint</label>
          <input 
            type="color" 
            value={colors.windows}
            onChange={(e) => setColors({...colors, windows: e.target.value})}
          />
        </div>
      </div>
    </div>
  );
};