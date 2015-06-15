'use strict';

// Famous dependencies
var Mesh = require('famous/webgl-renderables/Mesh');
var Align = require('famous/components/Align');
var Size = require('famous/components/Size');
var Color = require('famous/utilities/Color');
var getRandomColor = require('./getRandomColor');

function Cube(node) {
    // Initialize the mesh along with a random color
    this.mesh = new Mesh(node);
    this.mesh.setGeometry('Box');
    this.mesh.setBaseColor(new Color(getRandomColor()));
    this.mesh.setGlossiness(40);

    // Add a component to be called, every frame
    var spinner = node.addComponent({
        onUpdate: function(time) {
            var x = Math.sin(time / 2000) * 300;
            var y = Math.sin(time / 8000) * 200;
            var z = Math.cos(time / 4000) * 500 - 300;
            node.setPosition(x, y, z);
            node.setRotation(time / 5000, time / 6000, time / 3000);
            node.requestUpdateOnNextTick(spinner);
        }
    });

    // Set size mode, positional elements and call the spinner component
    node
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(500, 500, 500)
        .setMountPoint(0.5, 0.5, 0.5)
        .setOrigin(0.5, 0.5, 0.5)
        .setAlign(0.5, 0.5, 0.5)
        .requestUpdate(spinner);
}

module.exports = Cube;
