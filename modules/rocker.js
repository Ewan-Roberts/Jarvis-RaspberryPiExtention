"use strict";

const five = require("johnny-five");

const eventHandler = require('./eventHandler.js')

let rocker = new five.Button(7);

rocker.on("press", () => {

    console.log('Rocker open');

    eventHandler.emit("hallwayLight", true)

}).on("release", () => {

    console.log('Rocker close')

    eventHandler.emit("hallwayLight", false)

});