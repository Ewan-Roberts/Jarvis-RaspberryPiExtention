"use strict";

const five = require("johnny-five");

const eventHandler = require('./eventHandler.js')

let leds = new five.Leds([42,8]);

eventHandler.on("leds", bool => {
    
    bool ? leds.on() : leds.off()

})