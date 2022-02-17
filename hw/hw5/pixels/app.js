//Robert Wood
//2/16/22
//Peak Pixels

// store the height and width in a variable
let size = 100;
//store the id in peakPixel
let peakPixel = document.getElementById("peak");

//style the id peak
peakPixel.style.backgroundColor = "green";
peakPixel.style.width = size + "px";
peakPixel.style.height = size + "px";

//create function to increase the size of the div
function increase() {
    //multiply by 1.1
    size = size * 1.1;

    //display div with new size
    peakPixel.style.width = size + "px";
    peakPixel.style.height = size + "px";
}