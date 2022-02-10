//Robert Wood
//2/10/2022
//n220
//world wrap

// create an object to store data that will help draw something on the page
let circObj = {
    color: "#FF0000",
    size: 50,
    velocity: 2,
    position: 0,
    max: 550,
    reset: 0
};

// create the setup
function setup() {
    createCanvas(500, 500);
}

//create a draw function that uses the new function drawCirc
function draw(){
    drawCirc(circObj);
}

//create a draw circle function that takes an argument c
function drawCirc(c){
    // create a white background
    background("white");
    
    //if the circle is not at x location 550, then move
    if(c.position < c.max){
        //fill the circle using the object
        fill(c.color);
        //use the position of the circle and the size from the object
        circle(c.position, c.position, c.size);
        
        //add the value of velocity to the position to move the circle
        c.position = c.position + c.velocity;

    } else { //when the position is more than or equal to 550, then reset its position
        c.position = c.reset;
    }   
}
