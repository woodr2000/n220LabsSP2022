// Robert Wood
// 1/20/2022
// n220

//application variables
let size = 10;

//setup of the application
function setup() {
    //create canvas with width of 800 and height of 600
    createCanvas(800,600);
    console.log(size);
}

function draw() {
    //set background to black
    background("black");
    console.log(size);

    // change fill color to red
    fill(255, 99, 99);

    //draw a circle at the mouse location with the size variable as its size
    circle(mouseX, mouseY, size);

}

//this will run when the mouse is clicked
function mouseClicked(){
    //if the size variable is less than 100 and the mouse is clicked, then increase size by 5
    if (size <= 100){
        size = size + 5;
    }
}