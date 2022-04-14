//Robert Wood
//4/14/2022
//Color Changer

//array of colors
color = ["red", "green", "blue"];

let element;

//create an event listener for each div
for(x=0; x<3; x++){
    //get the element
    element = document.getElementById("changer"+x);
    //add an event listener
    element.addEventListener("click", itChanges);
}

//function to change the color of the clicked div
function itChanges(event){
    //find the 'color' stored in the div
    col = event.target.getAttribute("color");

    //if the current style matches with the stored color, then change it to grey
    if(event.target.style.backgroundColor == color[col]){
        event.target.style.backgroundColor = "gray";
    } 
    // if it is grey, then give it a color
    else { 
        event.target.style.backgroundColor = color[col];
    }  
}