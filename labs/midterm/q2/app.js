// Robert Wood
// Question 2
// 3/1/2022

//define a function that will change a div's word when clicked
function change(){
    let word = document.getElementById("yesno").innerHTML;

    //if the word in the div is yes, then change to no. 
    //If the word is no, then change to yes
    if(word == "yes"){
        //for some reason it was not letting me use the variable word
        document.getElementById("yesno").innerHTML = "no";
    } else if(word == "no"){
        document.getElementById("yesno").innerHTML = "yes";
    } else {// this is for debugging
        console.log("error");
    }
}