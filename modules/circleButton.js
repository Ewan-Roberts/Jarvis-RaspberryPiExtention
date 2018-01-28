"use strict";

const five = require("johnny-five");

const eventHandler = require('./eventHandler.js')

const circleButton = new five.Button(5);

circleButton.on("press", () => {

    console.log('circle Button')

    eventHandler.emit("led", true);

    eventHandler.emit("hallwayLight", true);

    eventHandler.emit("circleButton")

}).on("release", () => {

    eventHandler.emit("led", false);

});
        