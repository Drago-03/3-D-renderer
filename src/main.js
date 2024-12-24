import { Renderer } from './engine/renderer';
import { MaterialManager } from './engine/materials';
import { setupUI } from './ui/customization';

// Initialize the visualization
const container = document.getElementById('viewContainer');
const renderer = new Renderer(container);
const materialManager = new MaterialManager();

// Setup UI controls
setupUI(renderer, materialManager);

// Export for debugging
window.renderer = renderer;
window.materialManager = materialManager;