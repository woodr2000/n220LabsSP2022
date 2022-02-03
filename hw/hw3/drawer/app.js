// Robert Wood
// 2/2/2022
// n220
// drawing drawer application

//setup of the application
function setup() {
    createCanvas(800,800);
}

function draw() {
    buildHouse(150,150);//house placed at 150, 150
    buildHouse(400,350);//house placed at 450, 350
    buildHouse(575,100);//house placed at 575, 100
}

function buildHouse(x,y){ //draw a house at the x and y coordinates that are specified
    //create the base of the house
    fill(255, 102, 102);
    square(x, y, 200); //uses the x and y conditions to place the house at a location

    //add a roof
    fill(51, 0, 0);
    triangle(x-25, y, x+225, y, x+100, y-100);//set the points of the roof by adding and subtracting from the condition

    //add some windows to the top floor of the house
    fill(255,255,255);
    square(x+25, y+25, 60);//add to the window location to place inside the base of the house
    square(x+115, y+25, 60);

    //add a front door
    fill(255, 255, 204);
    rect(x+75, y+120, 50, 80);//same idea as the window

    //a front door needs a door handle
    fill(230, 230, 0);
    circle(x+115, y+160, 10);//again, add to the condition to place within the door
}