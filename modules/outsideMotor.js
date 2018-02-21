"use strict";

const five = require("johnny-five"),
    eventHandler = require('./eventHandler')

// let outsideMotorRelay = new five.Relay(25);

// let outsideServo = new five.Servo({
      
//     pin:      2, 
//     type:     "continuous",
//     speed:    0.2, 
//     time:     20000

// })

eventHandler.on("outsideServo", action => {
        
    eventHandler.emit("updateGlobal", "transition");

    outsideMotorRelay.close() 

    setTimeout(() => {

        action ? outsideServo.cw(outsideServo.speed):outsideServo.ccw(outsideServo.speed)

    }, 500)

    setTimeout(() => {

        outsideMotorRelay.open()
        outsideServo.stop()

    }, outsideServo.time)

})


       