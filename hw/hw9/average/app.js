/**
 * Name: Robert Wood
 * Date: 3/31/2022
 * File: app.js for its just average
 **/ 

let txtInput = document.getElementById("txtInput");
let numAverage = document.getElementById("arrayAvg");
let numSum = document.getElementById("arraySum");
 
function takeInput() {
    let input = txtInput.value;
    let len = input.length - 1
    let arrayStr = []; let arrayInt = [];
    let temp = ""; let sum = 0; let avg = 0;

    //iterate through the length of the input
    //at the end of this for loop I should have an array of numbers that are still string
    for(x=0;x<input.length;x++){
        //if it is not a comma or a space, then I want to add the number to a temporary value
        if(!(input[x] == "," || input[x] == " ")){
            if(x == len) { // if it is the last number and a string, then I want to push it to the array so it does not get left behind
                temp += input[x];
                arrayStr.push(temp);
                temp = "";
            } else { //otherwise add the number to a temporary variable
                temp += input[x]; 
            }
        } else { //if the string is a comma or space, then that means it is the beginning of a new number
            //I want to push the number stored in the temp variable to the array and then reset temp
            arrayStr.push(temp);
            temp = "";
        }
    }

    //convert the array of strings into integers
    for(x=0;x<arrayStr.length; x++){
        arrayInt[x] = parseInt(arrayStr[x]);
    }

    //loop through the array and sum up the values.
    for(x=0;x<arrayInt.length; x++){
        sum += arrayInt[x];
    }

    //calculate the average of the array
    avg = sum/arrayInt.length;

    //display the results to the user and reset the input
    txtInput.value = "";
    numAverage.innerHTML = "Average: " + avg;
    numSum.innerHTML = "Sum: " + sum;
}