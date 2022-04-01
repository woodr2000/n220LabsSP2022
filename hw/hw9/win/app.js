/**
 * Name: Robert Wood
 * Date: 4/1/2022
 * File: app.js for check win
 **/ 

let txtInput = document.getElementById("txtInput");
let result = document.getElementById("result");
  
function win() {
    //set up variables/ get user input
    let input = txtInput.value;
    let len = input.length - 1
    let array = [];
    let temp = ""; let total = 0;
 
    //take the user's input and insert the numbers into an array
    for(x=0;x<input.length;x++){
        //if it is not a comma or space then add it to a temporary variable
        if(!(input[x] == "," || input[x] == " ")){
            //if it is the last character in the string, then add it to the temp variable and immediately push it to the array
            if(x == len) { 
                temp += input[x];
                array.push(temp);
                temp = "";
            } else { //if it is not the last character, then add the number to the temporary variable
                temp += input[x]; 
            }
        } else { 
            //once a comma is encountered I want to push the temporary value to the array and reset the temp value for the next number
            array.push(temp);
            temp = "";
        }
    }

    //loop through this new array to see if there are 3 '1's in a row
    for(x=0; x<array.length; x++){
        //if there is a run of 1s in the middle of the string, then I still want there to be a winner
        if(total < 3){//if the total is less than 3, then check the next number, otherwise I want the outcome to get 1
            if(array[x] == 1){ //if it is equal to 1, add to total
                total++;
            } else {//if it is not a 1, then reset total to 0
                total = 0;
            }
        } else { //this is one of the conditions to win
            total = 3;
        } 
    }

    //check to see if the user won
    //there is a winner if total is equal to 3
    if(total == 3){
        result.innerHTML = "WINNER!"
    } else {
        result.innerHTML = "not winner"
    }
}