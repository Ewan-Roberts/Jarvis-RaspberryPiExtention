"use strict";

const five = require("johnny-five"),
	board = new five.Board();

board.on("ready", () => {

    console.log('board up');

    const led = require('./led.js')

    const leds = require('./leds.js')

    const rocker = require('./rocker.js')

    const circleButton = require('./circleButton.js')

    const squareButton = require('./squareButton.js')

    const hallwayLight = require('./hallwayLight.js')

    const hallwayMotion = require('./hallwayMotion.js')

    const hallway = require('./hallway.js')

    const outsideMotor = require('./outsideMotor.js')

    const insideMotor = require('./insideMotor.js')

});
