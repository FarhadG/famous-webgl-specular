'use strict';

// Famous dependencies
var FamousEngine = require('famous/core/FamousEngine');
var Camera = require('famous/components/Camera');
var Cube = require('./Cube');
var Light = require('./Light');
var Backdrop = require('./Backdrop');
var getRandomColor = require('./getRandomColor');

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize a scene, and add a 'node' and 'Camera'
var root = FamousEngine.createScene();
var cameraNode = root.addChild();
new Camera(cameraNode).setDepth(1500);

// Attach four lights
for(var i = 0; i < 4; i++)
    new Light(root.addChild(), getRandomColor());

// Create a backdrop with a random glossiness color
new Backdrop(root.addChild(), getRandomColor());

// Attach a cube
new Cube(root.addChild());
