// Robert Wood
// Question 1
// 3/1/2022

//define the specified array
let code = ["up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"];

// for loop to iterate through array and display each element into the div
for(i = 0; i < code.length; i++){
    //I do not want there to be unecessary dashes so to eliminate this I want the dashes before the number
    // because I do not want a dash before the first number I made an if statement to not put one unless i is boigger than 0
    if(i>0){
        //display the element in the div
        document.getElementById("konami").innerHTML += "-" + code[i];
    } else {
        document.getElementById("konami").innerHTML += code[i];
    }
}