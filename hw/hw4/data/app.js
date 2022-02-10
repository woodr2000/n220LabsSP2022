//Robert Wood
//2/10/2022
//n220
//data-driven display

// create an object to store data that will help draw something on the page
let circObj = {
    width: 400,
    height: 400,
    color: "#FF0000",
    xPos: 200,
    yPos: 200
};

function setup() {
    createCanvas(circObj.width, circObj.height); // use the objects width and height
}

//use the drawCirc() function that was created
function draw(){
    drawCirc(300);
}

//create a draw circle function to draw a circle using the data stored in the object
function drawCirc(size) { //take on argument that will define the size of circle being drawn
    fill(circObj.color);
    circle(circObj.xPos, circObj.yPos, size);
};