'use strict';

// Famous dependencies
var Position = require('famous/components/Position');
var Rotation = require('famous/components/Rotation');
var PointLight = require('famous/webgl-renderables/lights/PointLight');
var Color = require('famous/utilities/Color');
var Vec3 = require('famous/math/Vec3');
var Mesh = require('famous/webgl-renderables/Mesh');

function Light(node, lightColor) {
    var _this = this;
    this.node = node;
    this.position = new Position(node);
    this.rotation = new Rotation(node);

    // Initialize the light, along with a color (off) and size
    this.light = new PointLight(node)
        .setColor(lightColor);

    // Setup random position vectors for moving the light around
    this.tempo = Math.random() * 3;
    this.radius = 1000;
    this.pos = new Vec3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
    this.r = new Vec3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);

    // Add a spinner component to the 'node' that is called, every frame
    var randomMover = node.addComponent({
        onUpdate: function(time) {
            var p = _this.pos;
            var dir = Vec3.cross(p, _this.r, new Vec3());
            dir.normalize().scale(_this.tempo);
            p.add(dir).normalize().scale(_this.radius);
            _this.rotation.setY(time / 1000);
            _this.position.set(p.x, p.y, p.z);
            node.requestUpdateOnNextTick(randomMover);
        }
    });

    // Set size mode, positional elements and call the component
    node
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(10, 10, 10)
        .setAlign(0.5, 0.5, 0.5)
        .setMountPoint(0.5, 0.5, 0.5)
        .setOrigin(0.5, 0.5, 0.5)
        .requestUpdate(randomMover);
}

module.exports = Light;
