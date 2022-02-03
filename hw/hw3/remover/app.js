// Robert Wood
// 2/2/2022
// n220
// red remover application

//application variables
let c;

//setup of the application
function setup() {
    //create canvas with width of 400 and height of 300
    createCanvas(400,400);
}

function draw() {
    //give the variable a color without the red RGB
    c = zeroRed(color(255,155,195));
    
    //color in the circle
    fill(c);

    //draw a circle without the color red
    circle(200, 200, 100);
}

function zeroRed(color){//define function zeroRed and give it an argument
    color.setRed(0);//take the red out of the argument
    return color;//spit that new RGB back out
}