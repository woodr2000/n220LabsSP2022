/*
Robert Wood
2/23/2022
Favorray
*/

//define a string array
let favorite = ["Pizza", "Burgers", "Stir Fry", "Netflix", "The Gym"];

//for loop to iterate through each of the elements
for(x=0; x<favorite.length; x++){
    //for each element, display this message
    document.getElementById("fav").innerHTML += favorite[x] + ", is one of my favorite things. "
}