'use strict';

$(document).ready(function(){

    //Add entities to dropdown
    let dropdown = $('#entityType');
    entitySizes.forEach(obj => {
        let newOption = document.createElement('option');
        newOption.value = obj.Entity;
        newOption.innerHTML = obj.Entity;
        dropdown.append(newOption);
    });

    const visCanvas = document.querySelector("canvas[id='visualization']");

    setupWebGl(visCanvas);
});

function setupWebGl(canvas){
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
};
