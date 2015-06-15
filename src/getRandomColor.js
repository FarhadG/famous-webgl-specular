// Module dependencies
var Color = require('famous/utilities/Color');

// Helper function for returning a random Color
module.exports = function getRandomColor() {
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    return new Color([r, g, b]);
};
