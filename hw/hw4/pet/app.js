//Robert Wood
//2/10/2022
//n220
//virtual "pet"

//create an object that stores x, y, size and offsetX
let petObj = {
    x: 500,
    y: 400,
    size: 50,
    offsetX: 10
};
//create a canvas
function setup() {
    createCanvas(petObj.x, petObj.y);
}

//create a draw function
//within this function add an if(mousePressed)
function draw() {
    background("#000000");
    console.log(petObj.offsetX);
    //if the mouse is down, subtract 1 from offsetX (only down to 0)
    if (mouseIsPressed === true) {
        if(petObj.offsetX == 0){ //if the offest is 0, then dont do anything
            circle(mouseX, mouseY, petObj.size)
        } else { //if its not 0, then subtract 1
            petObj.offsetX -= 1;
        }
    } else { //if the mouse is up, add 1 to offsetX
        petObj.offsetX += 1;
    }
    fill("#FF0000");
    //draw the circle at mouseX and mouseY, but 
    //offset in the x direction by the amount of offsetX
    circle(mouseX + petObj.offsetX, mouseY, petObj.size);
}

function mousePressed(){

}



