"use strict";

const five = require("johnny-five");

const eventHandler = require('./eventHandler.js')

const hallwayMotion = new five.Motion(3);

hallwayMotion.on("motionstart", () => {
            
    eventHandler.emit("leds", true)

    timeSinceMovement = Date.now();

    if(clock.isItDaytime()) {
        
        // hallwayLight.action(true)

        // setTimeout(function() {

        //     hallwayLight.action(true)

        // }, 1000);
        
    }

    if (file[0].hallwayDoor === "close") {

        // pi.hallway("open"); 

    }

});

hallwayMotion.on("motionend", () => {

    eventHandler.emit("leds", false)
    
});

        