# Jarvis-RaspberryPiExtention

_This is an additional module_ added to the core of the [the Jarvis Project](https://github.com/vanguard12/Jarvis) adding light switching, door opening/closing and buttons to the core of the project.

Jarvis is a voice and motion activated home automation platform. It provides developers with everything from: automating light switching and doors, to welcoming users home with the news of the day and their favourite song on Spotify.

This extends the functionality of Jarvis, and as such, Jarvis as a hard prerequisite. More details on prerequisites can be found below.

## Getting Started


To get started clone the repository and install the required dependencies by entering this into terminal:

```
git clone https://github.com/vanguard12/Jarvis-RaspberryPiExtention.git

npm install
```


## Prerequisites

- Jarvis: For how to set up Jarvis refer to https://github.com/vanguard12/Jarvis.

- Node.js: You will require the latest version of Node.js that can download here: https://nodejs.org/en/download/

- RaspberryPi: You will need a server to project from. For this instance I have used a RaspberryPi due to its low power draw and complexity.

- Arduino: You will require an Arduino, Firmata and servos set up on any light switches or doors you would like to automate. More details of which can be found in the hardware and Arduino sections below. 

- Johnny-Five: A good understanding of http://johnny-five.io/ is highly recommended for additional extensions. They have created a very user friendly and simple API. API documentation here: https://github.com/rwaldron/johnny-five

- Internal IP: A local IP for sockets to be established between this project and Jarvis needs to be defined in the core Jarvis program.


## Hardware

Though this project is only limited to the Ardunio's supported in the Johnny-Five supported list, it should work on most types and any operating systems Node supports. However, for this instance a RaspberryPi is used with an Arduino Mega 2560 as the controlling unit. 

The layout of the hardware wiring can be found below:
![Alt text](images/piServer.jpg?raw=true "Fritzing version of hardware set up")

![Alt text](images/buttons.jpg?raw=true "Fritzing version of button set up")

![Alt text](images/sensor.jpg?raw=true "Fritzing version of sensor set up")

## Installing

Once the prerequisites are completed, go to root and run:

```
node piServer.js
```
