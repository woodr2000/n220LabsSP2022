// set up objects
let tvObj = {
    basePos: 200,
    baseSize: 200,
    screenPos: 215,
    screenSize: 175,
    baseColor: "grey",
    screenColor: "black"
}


//setup
function setup(){
    createCanvas(500, 500);
}

// draw a tv
function draw() {
    tvDraw(tvObj);
}
//create a function to draw a tv, let t be an object
function tvDraw(t) {
    fill(t.baseColor); //base color
    rect(t.basePos, t.basePos, t.baseSize, t.baseSize);// base
    if(mouseIsPressed){ // when mouse is pressed, turn the tv on
        fill(t.screenColor);
        rect(t.screenPos, t.screenPos, t.screenSize)
    }
    line(t.basePos * 1.75, t.basePos, t.basePos * 2, t.basePos - 40); //antenna
}