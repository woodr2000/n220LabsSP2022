// Robert Wood
// 1/21/2022
// n220
// puck application

//application variables
canvasX = 400;
canvasY = 300;

//setup of the application
function setup() {
    //create canvas with width of 400 and height of 300
    createCanvas(canvasX, canvasY);
}

function draw() {
    //redraw a white background every time
    background("white");

    //find the middle of the canvas by dividing it by 2
    middle = canvasX/2;
    
    //if the mouse is on the right side display the circle in red 
    if(mouseX > middle){
        //color the circle red
        fill(255, 99, 99);
    } else { //if the mouse is on the left side, display the circle in blue
        //color the circle blue
        fill(0,191,255);
    }

    //draw a circle at the mouse location
    circle(mouseX, mouseY, 40);

}