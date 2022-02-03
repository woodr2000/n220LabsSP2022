let xPos = 50;
let yPos = 50;
let greeting = "hello world";
//xPos += 50;
yPos += 3;

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background("grey");
    //user's circle
    fill("orange");
    circle(mouseX, mouseY, 40);
    
    //mirror circle
    //find out how far the user's circle is from the border
    //subtract 400 from each mouse position and put into variables
    xPos = 400 - mouseX;
    yPos = 400 - mouseY;

    fill("blue");
    //create a blue circle at those new x and y locations
    circle(xPos, yPos, 40);
}