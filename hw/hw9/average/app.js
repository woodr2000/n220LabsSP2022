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
    //split the input every time there is a comma
    let arrayStr = input.split(","); 
    let arrayInt = [];
    let sum = 0; let avg = 0;
 
    //convert the array of strings into integers
    for(x=0; x<arrayStr.length; x++){
        arrayInt[x] = parseInt(arrayStr[x]);
    }
 
    //loop through the array of integers and sum up the values.
    for(x=0; x<arrayInt.length; x++){
        sum += arrayInt[x];
    }
 
    //calculate the average of the array
    avg = sum/arrayInt.length;
 
    //display the results to the user and reset the input
    txtInput.value = "";
    numAverage.innerHTML = "Average: " + avg;
    numSum.innerHTML = "Sum: " + sum;
}