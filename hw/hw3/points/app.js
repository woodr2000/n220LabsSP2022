// Robert Wood
// 2/2/2022
// n220
// polar points application

//application variables
let x,y,res;

//setup of the application
function setup() {
    //create canvas with width of 400 and height of 300
    createCanvas(400,400);
}

function draw() {
    //give res the result of the new function
    res = polarPoint(20);
    //add a translate
    translate(100,100);
    //draw a circle
    circle(res.x,res.y,10);
}

//create a new function polarPoint()
function polarPoint(r){//give the function one argument, r
    //set the x value using sin
    x = r * Math.sin(mouseX);
    //set the y value using cos
    y = Math.cos(mouseX);

    //return createVector(x,y)
    return createVector(x,y);
}