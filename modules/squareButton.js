"use strict";

const five = require("johnny-five");

const eventHandler = require('./eventHandler.js')

const squareButton = new five.Button(6);

squareButton.on("press", () => {

	console.log("Square button hit")

    eventHandler.emit("led",true);          

    eventHandler.emit("squareButton")

    eventHandler.emit("hallwayLight", false);

}).on("release", () => {

    eventHandler.emit("led",false);

});	
        