/*
Robert Wood
2/23/2022
Beep Bop
*/

//start from zero and keep looping until 25
let x = 0;
while(x < 26){
    //define a text variable to store element
    let text = document.getElementById("beepbop");

    //create an exception to exclude 0
    if(x == 0){
        text.innerHTML += x + " ";
    } else if(x%3 == 0 && x%5 == 0){ //if the number is divisible by 3 and 5 then print beepbop
        text.innerHTML += "beepbop ";
    } else if (x % 5 == 0) { // if the number is divisible by only 5, then display bop
        text.innerHTML += "bop ";
    } else if (x%3 == 0) { // if the number is only divisible by 3, then display beep
        text.innerHTML += "beep ";
    } else { // if they do not meet previous criteria, just display the number
        text.innerHTML += x + " ";
    }

    x++;
}