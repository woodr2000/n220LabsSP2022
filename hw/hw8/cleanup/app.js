/**
 * Name: Robert Wood
 * Date: 3/31/2022
 * File: app.js for cleanup
 **/ 
let txtInput = document.getElementById("txtInput");
let txtResult = document.getElementById("txtResult");

function removeHash() {

    txtResult.innerHTML = "";

    let input = txtInput.value;
    let word = "";
    
    //iterate through the length of the word
    for(x=0; x<input.length; x++){
        //if it is not a vowel, then add the letter to the variable word
        if(!(input[x] == "#")){
            word += input[x];
        } 
    }
    //display the final result to the page
    txtResult.innerHTML = word;
    txtInput.value = "";
}