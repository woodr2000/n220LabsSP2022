/**
 * Name: Robert Wood
 * Date: 4/1/2022
 * File: app.js for divs
 **/ 

//given this
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

//for loop to create 3 divs using only one createElement
for(x=0; x<3; x++){
    //create a div
    newDiv = document.createElement("div");
    //give it an ID
    newDiv.id = "test"+x;        
        
    //put text into it so the color shows up on the page
    newDiv.innerHTML = "this is a test";

    //assign an object to a variable
    object = objects[x];
    //then get those values from the object, which will put them into an array I can use
    object = Object.values(object);
        
    //use the array of information to style the div
    newDiv.style.color = object[0];
    newDiv.style.height = object[1]+"px";
    newDiv.style.width = object[2]+"px";

    //add the completed div to the body of the page
    document.body.appendChild(newDiv);
}