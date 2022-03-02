// Robert Wood
// 3/2/2022
// n220
// rps

// create a global variable to keep the player's score
let score = 0;

// create a game function that will run when clicked
function game(player) { // take the id of the div as an argument
    // define variables that will be needed
    let cpuMove, playerMove;
    //record the random int (between 0 and 2)
    let cpu = Math.floor(Math.random() * 3);
     
    // I use a switch here as it is easier to use than a bunch of if statements in the scenario
    switch(cpu){
        // if the cpu number is 0, then it chose rock
         case 0:
            cpuMove = "rock";
            break;
        // if the cpu number is 1, then it chose paper
         case 1:
            cpuMove = "paper";
            break;
        // if the cpu number is 2, then it chose scissors
         case 2:
            cpuMove = "scissors";
            break;
        // if something wrong happened, then it will shoot an error message
        default:
            console.log("error - cpu")
     }

     playerMove = document.getElementById(player);

     //if the player chose guard, then minus the score by .5
     if (playerMove.innerHTML == "guard"){
         score -= .5;
     } 

     //otherwise, check to see if the player tied with the CPU
     // if they did not tie, then check to see if the player won, if so then a point
     // if the previous conditions were not met, then that means the player lost the game, thus losing a point
     else {
         // if the player tied, then keep the score the same
         if (playerMove.innerHTML == cpuMove){
             score += 0;
         } else if (playerMove.innerHTML == "rock" && cpuMove == "scissors"){ //rock beats scissors
            score++;
         } else if (playerMove.innerHTML == "paper" && cpuMove == "rock"){ //paper beats rock
            score++;
         } else if (playerMove.innerHTML == "scissors" && cpuMove == "paper"){ //scissors beats paper
            score++;
         } 
         // if the previous conditions were not met, then the player lost
         else {
             score--;
         }
     }

     // show what the CPU chose as well as the player's score
     document.getElementById("com").innerHTML = "The CPU Chose: "+cpuMove;
     document.getElementById("score").innerHTML = "Score: "+score;
}