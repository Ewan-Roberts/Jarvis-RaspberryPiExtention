"use strict";

const five = require("johnny-five");

const eventHandler = require('./eventHandler.js')

const hallwayMotion = new five.Motion(3);

const moment = require('moment');

hallwayMotion.on("motionstart", () => {
            
    eventHandler.emit("leds", true)

    eventHandler.emit("corridorMotion")

    eventHandler.emit("hallwayLight",true)

});

hallwayMotion.on("motionend", () => {

    eventHandler.emit("leds", false)
    
});

        