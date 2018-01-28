var five = require("johnny-five"),
  bumper, led;

five.Board().on("ready", function() {

  bumper = new five.Button(6);
  led = new five.Led(13);

  console.log('hi')
  bumper.on("press", function() {
  	console.log('hi')
    led.off();

  })
  bumper.on("release", function() {
  	  	console.log('hi2')

    led.on();

  });
});