"use strict";

const moment = require('moment');

const eventHandler = require('./eventHandler.js')

const fs = require("fs");

let fileName = '../globals.json';

let file = require(fileName);

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