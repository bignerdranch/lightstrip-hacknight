# lightstrip-hacknight


### Basic Notes from Meeting
#Lecture

## Nerdly Feud - 5 mins
## Arduino
## DotStar
## Rasp Pi - Docker



how to install
### download [Arduino app](https://www.arduino.cc/en/Main/Software)

###


#Git Repo

## Arduino

_Working with Arduino, NodeJS, and NeoPixel Light Strips_

[Node-Pixel Repo](https://github.com/ajfisher/node-pixel)

[Installation with Johnny-Five](https://github.com/ajfisher/node-pixel/blob/master/docs/installation.md)

_Hardware Wiring_
![Custom Firmata Diagram](https://github.com/ajfisher/node-pixel/blob/master/docs/custom_firmata_bb.png)


    - dot star
        - FastLED - steve (Apa102)
        - AdaFruit DotStar library - Bolot

- Rasp Pi Stuff
    - NeoPixel / DotStar - build and setup, with C/Python
        - `git clone https://github.com/adafruit/Adafruit_DotStar_Pi`
        - Edit `strandtest.py`, change the number of LEDs and port numbers to match your setup
        - `sudo python strandtest.py`
        - If you want to try `image-paint.py` or `image-pov.py` examples, you'll need to install one more thing:
            - `sudo apt-get install python-imaging`
    - docker - CeeDon

ReadMe - Links

- AdaFruit dotstar
- AdaFruit Neopixel
- FastLED - DotStar

Fritzing Diagrams of basic examples


Ideas -
- Steve's Bandwidth meter
- sensor input - motion, pressure, toggle knob, speed from a motor
- how many deploys are happening - docker monitor
- web socket, web server input - keys, events, etc.
- from triggered events - animation

Soldering Station

