/*
Robert Wood
2/23/2022
Runner Up
*/

// give 3 runner 'times'
let runner = [45, 59, 33];

// keep looping until the array is ordered
while(runner[0] > runner[1] || runner[1] > runner[2]){
    
    //start with the first two numbers
    //if the first number is greater than the second, then switch their positions
    if(runner[0]>runner[1]){
        //placeholder variables
        a = runner[0];
        b = runner[1];

        //switch their values
        runner[0] = b;
        runner[1] = a;
    }

    //check if the second number is greater than the third, if so then switch them
    if(runner[1]>runner[2]){
        //placeholder values
        a = runner[1];
        b = runner[2];

        //switch the second and third number
        runner[1] = b;
        runner[2] = a;
    }
}

//after the loop is finished, display the times in their correct place
document.getElementById("first").innerHTML += runner[0];
document.getElementById("second").innerHTML += runner[1];
document.getElementById("third").innerHTML += runner[2];