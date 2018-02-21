"use strict";

const five = require("johnny-five"),
	eventHandler = require('./eventHandler.js'),
	moment = require("moment")

let timeDiff = moment().add(20,"minutes").format("HH:mm");

eventHandler.on("resetMovementTimer", () => {timeDiff = moment().add(20,"minutes").format("HH:mm")});

setInterval(() => {

    let time = moment().format("HH:mm");

    console.log(time)

    console.log(timeDiff)

    if(time === timeDiff){

    	eventHandler.emit("hallwayLight",false)

    }


}, 60000);

const hallwayMotion = new five.Motion({

	pin: 3,

    freq: 1000,

    calibrationDelay: 2000
    
});

let pauseMotion = false;

const motionStart = () => {

	if(!pauseMotion){

		console.log('motion')

		eventHandler.emit("resetMovementTimer")

	    eventHandler.emit("leds", true)

	    eventHandler.emit("hallwayLight",true)

	} else {

		console.log("motion wanted but a buffer is going")

	}

}

eventHandler.on("motionBuffer", () => {

	pauseMotion = true

	setTimeout(()=>{

		pauseMotion = false;


	},5000)

})

hallwayMotion.on("motionstart", () => {motionStart()});

hallwayMotion.on("motionend", () => {eventHandler.emit("leds", false)});

        