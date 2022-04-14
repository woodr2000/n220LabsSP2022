//Robert Wood
//4/14/2022
//Color Mixer

let r = 0; let g = 0; let b = 0;

let test = document.querySelectorAll("button").forEach(item => {
    item.addEventListener("click", mixColor);
})

//function to change the color of the clicked div
function mixColor(event){
    //find the 'color' and number value stored in the div
    col = parseInt(event.target.getAttribute("color"));
    plus = parseInt(event.target.getAttribute("plus-num"));
    
    //switch for each 'color'
    switch(col){
        //case if red
        case 0:
            //add whatever number stored in plus
            r += plus;
            break;
        //case if green
        case 1:
            //add whatever number stored in plus
            g += plus;
            break;    
        //case if blue
        case 2:
            //add whatever number stored in plus
            b += plus;
            break;
    }
    //finally, display the new color in the div and update the display below it
    document.getElementById("colored").style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
    document.getElementById("current").innerHTML = "RGB("+r+", "+g+", "+b+")";
}