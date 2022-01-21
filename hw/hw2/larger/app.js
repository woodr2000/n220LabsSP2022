// Robert Wood
// 1/21/2022
// n220
// Ever Larger, until not

//application variables
let size = 0;

//setup of the application
function setup() {
    //create canvas with width of 800 and height of 600
    createCanvas(800,600);
    console.log(size);
}

function draw() {
    //set background to black
    background("white");

    // change fill color to red
    fill(255, 99, 99);
    
    //if the size is less than 200, then add 1 to size
    if(size < 200){
        size = size + 1;
    } else { //if it is equal to or larger than 200, then reset the circle
        size = 0;
    }

    //draw a circle at the center of the canvas with the size variable as its size
    //the size will increase until it reaches 200
    circle(400, 300, size);

}
