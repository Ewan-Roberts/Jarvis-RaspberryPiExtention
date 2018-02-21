"use strict";

const moment = require('moment'),
	eventHandler = require('./eventHandler.js');

eventHandler.on("hallway", action => {

    if(action && file[0].hallwayDoor === "close") {
        
        eventHandler.emit("outsideServo",action)
        eventHandler.emit("insideServo",action)

    } 

    if (!action && file[0].hallwayDoor === "open") {
        
        eventHandler.emit("outsideServo",action)
        eventHandler.emit("insideServo",action)

    }

})