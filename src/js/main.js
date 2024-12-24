import { initializeScene } from './scene/sceneManager.js';
import { setupControls } from './controls/controlsManager.js';
import { initializeCustomization } from './customization/customizationManager.js';

// Initialize the main application
document.addEventListener('DOMContentLoaded', () => {
    const viewContainer = document.getElementById('viewContainer');
    const scene = initializeScene(viewContainer);
    const controls = setupControls(scene);
    initializeCustomization(controls);
});