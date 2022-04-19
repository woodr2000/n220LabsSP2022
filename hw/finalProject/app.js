// Robert Wood
// 4/19/2022
// N220
// Final Project - Hanged Man Game

let arr = [];
let wordBank = ["haiku","quizzes","abyss","avenue","haphazard","icebox", "bagpipes", "bandwagon", "buffalo", "khaki"];

let alpha = ["q","w","e","r","t","y","u","i","o","p",
             "a","s","d","f","g","h","j","k","l",
             "z","x","c","v","b","n","m"];

//random integer generator
let num = Math.floor(Math.random() * 6);

let word = wordBank[num];
let keyboard = document.getElementById("keyboard");
let score = 0; let hangedScore = 0;

//create empty p elements to show how many spaces there are
for(x=0; x<word.length; x++){
    char = document.createElement("div");

    //give each an id that i can call back to and give underscores to simulate the missing word
    char.id = "letter"+x;
    char.innerHTML = "_ ";
    char.style.display = "inline";

    document.getElementById("word").appendChild(char);
}

//set up the keyboard and all the event listeners
for(x=0; x<alpha.length; x++){
    button = document.createElement("button");

    //give each key an attribute that matches the letter on the key
    button.setAttribute("letter", alpha[x]);
    button.id = alpha[x];
    button.disabled = false;
    button.innerHTML = alpha[x];

    //when clicked, run checkWord
    button.addEventListener("click", checkWord);
    
    //this defines each row so it looks like an actual keyboard
    if(x < 10){
        document.getElementById("top").appendChild(button);
    } else if(x > 9 && x < 19){
        document.getElementById("middle").appendChild(button);
    } else {
        document.getElementById("bottom").appendChild(button);
    }
}

//RUN THIS EVERY TIME A BUTTON IS CLICKED
function checkWord(event){
    letter = event.target.getAttribute("letter");
    
    //if the letter is in the word, then put it into a different array at the exact same spot
    for(x=0; x<word.length; x++){
        if(word[x] == letter){
            arr[x] = letter;
            //add to score
            score++;
        } 
    }

    //if the letter is not in word, then add to the hanged score
    if(!(word.includes(letter))){
        hangedScore++;
        console.log("Add to the hanged man picture");
        document.getElementById("hanged-man").src = "img/strike"+hangedScore+".PNG"
    }

    //as long as the array element is not null, display it on the screen for the user
    for(x=0; x<arr.length; x++){
        if(!(arr[x] == null)){
            document.getElementById("letter"+x).innerHTML = arr[x]+" ";
        }
    }
    //disable the button after the guess
    event.target.disabled = true;

    //if the score matches the word length, then the user wins!
    if(score == word.length){
        //disable all the buttons
        for(x=0; x<alpha.length; x++){
            let d = document.getElementById(alpha[x]);
            d.disabled = true;
        }
        //display WINNER for the user
        document.getElementById("result").innerHTML = "WINNER!"
    } 


    //if the user loses
    else if (hangedScore == 6){
        //disable all buttons
        for(x=0; x<alpha.length; x++){
            let d = document.getElementById(alpha[x]);
            d.disabled = true;
        }
        //display TRY AGAIN to the user
        document.getElementById("result").innerHTML = "TRY AGAIN!"
    }
}

//function to reset the game without actually refreshing
function resetPage(){
    //delete word space element
    for(x=0; x<word.length; x++){    
        elem = document.getElementById("letter"+x);
        elem.parentNode.removeChild(elem);
    }
    document.getElementById("result").innerHTML = " ";

    //reset global variables
    score = 0; hangedScore = 0;
    arr = [];

    //new word
    let num = Math.floor(Math.random() * 6);
    word = wordBank[num];

    for(x=0; x<word.length; x++){
        char = document.createElement("div");
    
        //give each an id that i can call back to and give underscores to simulate the missing word
        char.id = "letter"+x;
        char.innerHTML = "_ ";
        char.style.display = "inline";
    
        document.getElementById("word").appendChild(char);
    }

    //reset the drawing
    document.getElementById("hanged-man").src = "img/hangmanPost.PNG"

    //re-enable the buttons
    for(x=0; x<alpha.length; x++){
        let d = document.getElementById(alpha[x]);
        d.disabled = false;
    }
}