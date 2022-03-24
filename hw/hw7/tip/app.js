let cost = document.getElementById("cost");
let txtResult = document.getElementById("final");
let txtTip = document.getElementById("tip");

function calcTip() {
    //reset the result to be empty
    txtResult.innerHTML = "";

    // get the user input
    let input = cost.value;
    //make it a float so i can do calculations with it
    input = parseFloat(input);
    
    //find the tip and final total
    tip = input * .15
    final = input * 1.15;
    txtTip.innerHTML = "Tip: $"+tip;
    txtResult.innerHTML = "Final Total: $"+final;

    //reset the input field
    txtInput.value = "";
}