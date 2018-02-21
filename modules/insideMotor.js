"use strict";

const five = require("johnny-five"),
	eventHandler = require('./eventHandler')

// let insideMotorRelay = new five.Relay(31);

// let insideServo = new five.Servo({
  
//     pin:      10, 
//     type:     "continuous",
//     speed:    0.1,
//     time:     20000
// })

// insideMotorRelay.close()

eventHandler.on("insideServo", action => {

    eventHandler.emit("updateGlobal", "transition");

    insideMotorRelay.open() 

    action ? insideServo.cw(insideServo.speed):insideServo.ccw(insideServo.speed)

    setTimeout(() => {

        insideMotorRelay.close()
        insideServo.stop()

    }, insideServo.time)
    
})
       