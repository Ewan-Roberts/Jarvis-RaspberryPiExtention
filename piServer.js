
const io = require('socket.io').listen(3014),
    moment = require('moment'), 
    eventHandler = require('./modules/eventHandler'),
    boardSetUp = require('./modules/boardSetUp');

io.sockets.on('connection', function(socket) {
    
    console.log('Connected!!')

    socket.on('corridorLight', bool => {
        
        // eventHandler.emit("hallwayLight",bool)

    })

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
