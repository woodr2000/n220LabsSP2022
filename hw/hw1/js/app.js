// Robert Wood
// 1/18/2022
// n220

function setup() {
    //create an 800 by 600 canvas to draw on
    createCanvas(800, 600);

    //create the base of the house
    fill(255, 102, 102);
    square(150, 150, 200);

    //add a roof
    fill(51, 0, 0);
    triangle(125, 150, 375, 150, 250, 50);

    //add some windows to the top floor of the house
    fill(255,255,255);
    square(175, 175, 60);
    square(265, 175, 60);

    //add a front door
    fill(255, 255, 204);
    rect(225, 270, 50, 80);

    //a front door needs a door handle
    fill(230, 230, 0);
    circle(265, 310, 10);
}