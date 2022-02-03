
let position = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //creates grey background
  background(220);
  
  //sets position of line beginning to mouse position
  if(mouseIsPressed) {
    position.x = mouseX;
    position.y = mouseY;
  }

  //
  let point = distance( position, { x: mouseX, y: mouseY });

  //if the length is more than 120 make it red
  if(point > 120){ 
    stroke("#FF0000");
  } else if (point < 120) { //if the length is shorter than that, then make it black
    stroke("#000000");
  }
  
  line(position.x, position.y, mouseX, mouseY);
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
  return Math.sqrt(dx*dx + dy*dy);
}