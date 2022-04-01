/**
 * Name: Robert Wood
 * Date: 3/31/2022
 * File: app.js for random
 **/ 

let result = document.getElementById("txtResult");

//function to generate a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//function that is called on the button click
function produceInt(){
    //generate a number between 0 and 10, then display it in the HTML
    num = getRandomInt(11);
    result.innerHTML = num;   
}