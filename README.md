# Neopixels and Dotstars and Brightlights, oh my!!

Welcome to the Big Nerd Ranch Hack Night: Light Strip Edition!
We have a bunch of Neopixel and Dotstar strips and supporting hardware
and know-how, and we're gonna get blinkered!

## Nerdly Feud Overview

In last year's clash, @tgandee, @bolot, @ceedon and @barbecuesteve built a podium
to play a variation of "Family Feud". Part of the game was accomplished with Neopixels.
They will discuss their glorious achievement! *We will embed a video here someday. hopefully.*

## Arduino

@bolot will go over the fundamentals of pushing hardware around with an Arduino. The Arduino
is popular, cheap, comes in a myriad shapes, and is really easy to program. It's a great
jumping off point. They have their own IDE, [get it here](https://www.arduino.cc/en/Main/Software).


We have a bunch of Arduino clones, including some of the fancy new [Particle Photons](https://www.particle.io/)!

## DotStar

We have a bunch of DotStar strips, too. They're more expensive but more capable.

## Rasp Pi - Docker

Here is [the Adafruit repo](https://github.com/adafruit/Adafruit_DotStar_Pi) we'll be
working from. Edit `strandtest.py`, change the number of LEDs and port numbers to match your setup,
and we're ready to begin.

- `sudo python strandtest.py`
- If you want to try `image-paint.py` or `image-pov.py` examples, you'll need to install one more thing:
- `sudo apt-get install python-imaging`





## Fritzing

?


## Link-land


_Working with Arduino, NodeJS, and NeoPixel Light Strips_

[Node-Pixel Repo](https://github.com/ajfisher/node-pixel)

[Installation with Johnny-Five](https://github.com/ajfisher/node-pixel/blob/master/docs/installation.md)

_Hardware Wiring_

![Custom Firmata Diagram](https://github.com/ajfisher/node-pixel/blob/master/docs/custom_firmata_bb.png)

- AdaFruit Neopixel
- FastLED - DotStar

[Video Inspiration from JSCONF](http://cdn.embedly.com/widgets/media.html?src=http://www.youtube.com/embed/NHs5t1l3qzo%3Ffeature%3Doembed&url=http://www.youtube.com/watch%3Fv%3DNHs5t1l3qzo&image=http://i1.ytimg.com/vi/NHs5t1l3qzo/hqdefault.jpg&key=92b31102528511e1a2ec4040d3dc5c07&type=text/html&schema=youtube&r=http://blog.whichlight.com/&s=1&autoplay=1)


