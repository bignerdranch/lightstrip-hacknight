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

- Arduino Stuff
    - examples
    - neo pixel
        - example with AdaFruit - NeoPixel
    - dot star
        - FastLED - steve (Apa102)
        - AdaFruit DotStar library - Bolot

- Rasp Pi Stuff
    - NeoPixel / DotStar - build and setup, with C/Python
        - `git clone https://github.com/adafruit/Adafruit_DotStar_Pi`
        - Edit `strandtest.py`, change the number of LEDs and port numbers to match your setup
        - `sudo python strandtest.py`
        - If you want to try `image-paint.py` or `image-pov.py` examples, you'll need to install a few things:
            - `sudo apt-get install python-dev`
            - `wget https://raw.github.com/pypa/pip/master/contrib/get-pip.py`
            - `sudo python get-pip.py`
            - `sudo pip install Image`
            - Edit the `image-*.py` files, insert `from PIL` before `import Image`, on the same line
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

