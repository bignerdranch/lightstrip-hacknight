/**
 * This example shows how to use node-pixel to cycle colors through your
 * NeoPixel strip using Johnny-Five.
 * https://vimeo.com/131618207
 *
 * created by @pierceray in June 2015
 */
var five = require("johnny-five");
var pixel = require("../lib/pixel.js");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);
var strip = null;

/**
 * how many frames per second do you want to try?
 *
 * This number will fluctuate with the number of pixels that you are trying to
 * update. With a NeoPixel Arduino Shield https://www.adafruit.com/product/1430
 * 13 is the max fps I've gotten to work.  You milage may vary.
 */
var fps = 25;
var leadPixel = 5;
var endPixel = 0;
var chain = true;
var direction = true;
var red = 'rgb(255, 0, 0)';
var black = 'rgb(0, 0, 0)';

board.on("ready", function() {

    console.log("Board ready, lets add light");

    // setup the node-pixel strip.
    strip = new pixel.Strip({
        data: 6,
        length: 150, // number of pixels in the strip.
        board: this,
        controller: "FIRMATA"
    });

    strip.on("ready", function() {
        // console.log("Strip ready, let's go: " + strip.stripLength());

        strip.pixel( leadPixel ).color( red );
        dynamicRainbow(fps);
    });

    function dynamicRainbow( delay ){
        // console.log( 'dynamicRainbow' );

        var showColor;

        var lightInterval = setInterval(function(){
            // for each light
            // check direction of chase
            // compare against lead
            // compare against chain
            // compare against end
            // console.log("Direction is: " + direction);
            // console.log("Lead is: " + leadPixel);
            // console.log("End is: " + endPixel);


            for(var i = 0; i < strip.stripLength(); i++) {
                showColor = black;
                if(direction && i == leadPixel) {
                    showColor = red;
                } else if (!direction && i == leadPixel) {
                    showColor = red;
                }
                if (direction && i < leadPixel && i > endPixel) {
                    showColor = red;
                } else if (!direction && i > leadPixel && i < endPixel){
                    showColor = red;
                } else {
                    showColor = black;
                }
                if(direction && i == endPixel) {
                    showColor = red;
                } else if (!direction && i == endPixel) {
                    showColor = red;
                }
                strip.pixel( i ).color( showColor );
            }
            strip.show();
            updateChase();
        }, 1000/delay);
    };
    function updateChase() {
        if( direction && leadPixel >= strip.stripLength() ){
            direction = false;
            leadPixel = strip.stripLength() - 5;
            endPixel = strip.stripLength();
        } else if (!direction && leadPixel <= 0){
            direction = true;
            leadPixel = 5;
            endPixel = 0;
        } else if (!direction) {
            leadPixel--;
            endPixel--;
        } else {
            leadPixel++;
            endPixel++;
        }
    }
});
