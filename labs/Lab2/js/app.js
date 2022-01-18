// Robert Wood
// 1/18/2022
// n220

//application variables
let size = 10;

//setup of the application
function setup() {
    //create canvas with width of 800 and height of 600
    createCanvas(800,600);
}

function draw() {
    //increase size
    size = size + 1;
    console.log(size);

    // change fill color to red
    fill(255, 99, 99);

    //draw a circle at the center with an increasing size
    circle(150, 150, size);

    if(size == 800){
        size = 10;
    }
}