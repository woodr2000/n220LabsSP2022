//Robert Wood
//4/14/2022
//Flash Cards

//give each button an event listener
let test = document.querySelectorAll("button").forEach(item => {
    item.addEventListener("click", giveAnswer);
})


function giveAnswer(event){
    //get the data stored in the data-answer attribute
    ans = event.target.getAttribute("data-answer");
    //display that to a div
    document.getElementById("answer").innerHTML = ans;
}