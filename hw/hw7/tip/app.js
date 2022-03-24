//Robert Wood
//3/23/22
//N220
//Tip javascript


let cost = document.getElementById("cost");

function calcTip() {

    // get the user input
    let input = cost.value;
    //make it a float so i can do calculations with it
    input = parseFloat(input);
    
    //find the tip and final total, round to 2 decimal places
    tip = input * .15
    final = input * 1.15;

    console.log(`Tip: $${tip}. Final Total: $${final}`);

    //reset the input field
    cost.value = "";
}