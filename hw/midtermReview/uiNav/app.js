// Robert Wood
// 3/2/2022
// n220
// uiNav

// create a function that will change the background and bold the text
// this will run whenever a div is clicked
function highlight(clickID){ //the function will take one argument, this being the id of the div that was clicked
    click = document.getElementById(clickID);
    
    //i want to make a for loop to iterate as many times as there is divs in the index.html page
    for(x = 1; x < 6; x++){
        //if the div does not match with the one that was clicked, then reset the styling
        if(document.getElementById("div"+x).innerHTML != click.innerHTML){ // I use concatination here since all my divs are labeled the same, with the exception of them all having a different number at the end
            //console.log(document.getElementById("div"+x).innerHTML)
            //get the element of "div"+x and change the styling so it does not have a background color, or have bold lettering
            document.getElementById("div"+x).style = "normal";
            document.getElementById("div"+x).style.backgroundColor = "white";
        }
        // otherwise, I want to bold and set the backgroundColor the div
        else {
            //console.log("success");
            //highlight and bold the clicked div
            click.style.backgroundColor = "yellow"
            click.style.fontWeight = "bold";
            
            //just set divPrime as the word that is clicked
            document.getElementById("divPrime").innerHTML = click.innerHTML;
        }
    }
}