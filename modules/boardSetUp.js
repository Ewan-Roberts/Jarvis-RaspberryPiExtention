"use strict";

const five = require("johnny-five"),
	board = new five.Board({repl: false});

board.on("ready", () => {

    console.log('board up');

    // const hallwayRelay = new five.Relay({pin:11,type: "NC"})

    // const hallwayLight = new five.Servo({
    //     pin: 9,
    //     range: [20,80],
    // });

    // board.repl.inject({
    //     relay: hallwayRelay,
    //     servo: hallwayLight
    // });

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
