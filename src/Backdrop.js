'use strict';

/**
 * Module dependencies
 */
var Mesh = require('famous/webgl-renderables/Mesh');
var Color = require('famous/utilities/Color');
var getRandomColor = require('./getRandomColor');

/**
 * Backdrop view constructing a basic WebGL mesh
 */
function Backdrop(node, glossinessColor) {
    var _this = this;

    // Set the mesh with the given glossiness color and plane geometry
    this.mesh = new Mesh(node);
    this.mesh.setGeometry('Plane');
    this.mesh.setBaseColor(new Color('#333'));
    var glossinessStrength = 20;
    this.mesh.setGlossiness(glossinessStrength, glossinessColor);

    // Change the specular color on a timed interval
    setInterval(function() {
        glossinessColor.set(getRandomColor(), { duration: 2000 });
        _this.mesh.setGlossiness(glossinessStrength, glossinessColor);
    }, 3000);

    // Set size mode, positional elements
    node
        .setProportionalSize(2, 2, 2)
        .setAlign(0.5, 0.5, 0.5)
        .setMountPoint(0.5, 0.5, 0.5)
        .setOrigin(0.5, 0.5, 0.5)
        .setPosition(0, 0, -1200);
}


/**
 * Expose
 */
module.exports = Backdrop;
