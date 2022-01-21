// Robert Wood
// 1/21/2022
// n220
// Counter

//application variable count
let count = 0;

function setup() {
    //display count 0 in the console
    console.log(count);
}

function draw(){
    //count up by 1 every frame
    count = count + 1;

    //display new value in the console log
    console.log(count);
}