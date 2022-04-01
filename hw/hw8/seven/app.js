/**
 * Name: Robert Wood
 * Date: 3/31/2022
 * File: app.js for seven
 **/ 

input = document.getElementById("txtInput");
result = document.getElementById("txtResult")

//use function on button click
function divisible(){
    //assign the input to a variable
    num = input.value;
    
    //if that variable is divisible by 7, then display true in a div
    //if it is anything else, then display false
    if((parseInt(num)%7) == 0){
        result.innerHTML = "true";
    } else {
        result.innerHTML = "false";
    }
}