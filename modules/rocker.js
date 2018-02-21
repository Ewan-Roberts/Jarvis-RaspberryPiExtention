"use strict";

const five = require("johnny-five"),
eventHandler = require('./eventHandler')

let rocker = new five.Button(7);

rocker.on("press", () => {

    console.log('Rocker open');

    eventHandler.emit("hallwayLightFlip")


}).on("release", () => {

    console.log('Rocker close')

    eventHandler.emit("hallwayLightFlip")

});