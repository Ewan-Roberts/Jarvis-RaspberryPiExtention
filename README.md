# Jarvis-RaspberryPiExtention
This is an additional module added to the core of Jarvis to control additional functionality on a Raspberry Pi 

This is an extention of the "Jarvis" which can be found here: https://github.com/vanguard12/Jarvis

Jarvis is a home automation platform running on Node.js. It is able to track movement, respond to commands and provide useful functionality to make everything from waking up in the morning to coming home more automated and interesting.

This is extention of this functionality using the Rasperry Pi as base.


## Getting Started


To get started clone the repository and install the required dependencies:

```
git clone https://github.com/vanguard12/Jarvis-RaspberryPiExtention.git

npm install
```

### Prerequisites

You will require the latest version of Node.js which you can download here: https://nodejs.org/en/download/

You will require an Arduino, a server of any form, though this uses a raspberry pi and servos set up on any light switches you would like to automate, more details of which can be found in the hardware section below. 

This project is designed to be modular with aditional functionality being shared through sockets. Please refer to piServer for controls of the lights, more automated lights and the opening and closing of doors.

A good understanding of http://johnny-five.io/ is highly reccomended for additional extentions. They have created a very user friendly and simple API. I suggest looking them up here: https://github.com/rwaldron/johnny-five

You will need to connect the relevant extended hardwarte over your local network and provide an internal IP for sockets to be established between the prgrams.

### Hardware

For this module a Raspberry Pi is used with an Arduino Mega as the controlling unit. Additional modules connect through the local network and share socket sessions for sharing functionality. 

The wiring looks like:
![Alt text](images/piServer.jpg?raw=true "Fritzing version of hardware set up")

![Alt text](images/buttons.jpg?raw=true "Fritzing version of button set up")

![Alt text](images/sensor.jpg?raw=true "Fritzing version of sensor set up")

### Installing

Once the prerequisites are completed go to root and run 

```
node piServer.js
```
