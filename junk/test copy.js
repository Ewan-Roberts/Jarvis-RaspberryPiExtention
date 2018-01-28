"use strict";

const eventHandler = require('./eventHandler.js')

const fs = require("fs");

let fileName = './globals.json';

let file = require(fileName);

eventHandler.on("updateGlobal", state => {

    file[0].hallwayDoor = state

    fs.writeFile(fileName, JSON.stringify(file), (err) => {
        console.log(JSON.stringify(file));
    });

}