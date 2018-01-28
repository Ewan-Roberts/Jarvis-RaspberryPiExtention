"use strict";

const five = require("johnny-five");

const eventHandler = require('./eventHandler.js')

const hallwayRelay = new five.Relay(11)

const hallwayLight = new five.Servo({
    pin: 9,
    range: [35,145]
});

let checkLightState = () => { 

    return hallwayLight.value === hallwayLight.range[1];

}

eventHandler.on("hallwayLight", bool =>{

	if(!bool && (hallwayLight.value === hallwayLight.range[0])) {
        console.log('already off')
        return
    }

    if(bool && (hallwayLight.value === hallwayLight.range[1])) {
        console.log('already on')
        return
    }

	hallwayRelay.close()

    bool ? hallwayLight.max():hallwayLight.min()

    setTimeout(()=>{

    	hallwayRelay.open()

    },500)

})

        