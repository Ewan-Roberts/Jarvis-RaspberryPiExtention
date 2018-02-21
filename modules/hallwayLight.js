"use strict";

const five = require("johnny-five"),
eventHandler = require('./eventHandler'),
storage = require("node-persist");

storage.initSync()

const hallwayRelay = new five.Relay({pin:11,type: "NC"})

const hallwayLight = new five.Servo({
    pin: 9,
    range: [0,75]
});

hallwayLight.value = storage.getItemSync((hallwayLight.pin).toString());

console.log('change1')

hallwayRelay.close()

// hallwayRelay.close()

// console.log(hallwayRelay.isOn)
// setTimeout(()=>{hallwayRelay.open()
// console.log('hi1')},2000)

// setTimeout(()=>{hallwayRelay.close()
// console.log('hi2')},4000)

// setTimeout(()=>{hallwayRelay.open()
// console.log('hi3')},6000)

// setTimeout(()=>{hallwayRelay.open()
// console.log('hi5')},10000)

// hallwayLight.sweep()

eventHandler.on("hallwayLightFlip", () =>{

    if(hallwayLight.value === hallwayLight.range[0]){
        
        eventHandler.emit("hallwayLight",true)

    } else {
        
        eventHandler.emit("hallwayLight",false)

    }

})

eventHandler.on("hallwayLight", bool =>{

    eventHandler.emit("motionBuffer")

	if(!bool && (hallwayLight.value === hallwayLight.range[0])) {
        console.log('already off')
        return
    }

    if(bool && (hallwayLight.value === hallwayLight.range[1])) {
        console.log('already on')
        return
    }
    console.log('here')

    storage.setItemSync((hallwayLight.pin).toString(),hallwayLight.value); 

	hallwayRelay.open()

    if(bool){

        hallwayLight.to(75)

    } else {

        hallwayLight.to(0)

    }

    setTimeout(()=>{

        console.log('here1')
        
    	hallwayRelay.close()

    },1000)

})

        