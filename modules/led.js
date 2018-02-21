"use strict";

const five = require("johnny-five"),
	eventHandler = require('./eventHandler')

let led = new five.Led(13);

eventHandler.on("led", bool => {
    
    bool?led.on():led.off()

})