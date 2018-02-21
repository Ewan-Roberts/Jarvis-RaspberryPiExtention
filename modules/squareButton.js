"use strict";

const five = require("johnny-five"),
	eventHandler = require('./eventHandler');

const squareButton = new five.Button(6);

squareButton.on("press", () => {

	console.log("Square button hit")

    eventHandler.emit("led",true);

eventHandler.emit("squareButton");

}).on("release", () => {

    eventHandler.emit("led",false);

});	
        