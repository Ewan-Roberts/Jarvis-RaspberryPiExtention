"use strict";

const five = require("johnny-five"),
	eventHandler = require('./eventHandler.js');

const circleButton = new five.Button(5);
console.log("buttons")
circleButton.on("press", () => {

    console.log('circle Button')

    eventHandler.emit("led", true);

    eventHandler.emit("circleButton")

}).on("release", () => {

    eventHandler.emit("led", false);

});
        