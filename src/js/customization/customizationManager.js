import { Pane } from 'tweakpane';

export function initializeCustomization(controls) {
    const pane = new Pane({
        container: document.getElementById('tweakpane-container')
    });
    
    // View controls
    const viewFolder = pane.addFolder({ title: 'View Settings' });
    const viewParams = {
        autoRotate: false,
        wireframe: false
    };
    
    viewFolder.addInput(viewParams, 'autoRotate')
        .on('change', ({ value }) => {
            controls.autoRotate = value;
        });
        
    return pane;
}