
const io = require('socket.io').listen(3013);

const moment = require('moment');

const eventHandler = require('./modules/eventHandler.js')

const boardSetUp = require('./modules/boardSetUp.js')

const fs = require("fs");

let fileName = './globals.json';

let file = require(fileName);

io.sockets.on('connection', socket => {
    
    console.log('Connected!!')

    socket.emit('fromPi', 'cheese')

    socket.on('corridorLight', bool => {
        
        eventHandler.emit("hallwayLight",bool)

    })

    socket.on('event', data => {
        
        console.log('serverserver data', data);

    });

    socket.on('piDoor', data => {

        console.log('serverserver data', data);

    });

    eventHandler.on("squareButton", () => {
        
        socket.emit("squareButton");

    })

    eventHandler.on("corridorMotion", () => {
        
        socket.emit("corridorMotion");

    })

    eventHandler.on("circleButton", () => {

        socket.emit("circleButton")
    })

});

eventHandler.emit("led",false)
