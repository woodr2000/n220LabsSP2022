let cost = document.getElementById("cost");
let txtResult = document.getElementById("final");

function calcTip() {
    //reset the result to be empty
    txtResult.innerHTML = "";

    // get the user input
    let input = cost.value;
    //make it a float so i can do calculations with it
    input = parseFloat(input);
    
    //find the tip and final total
    final = input * 1.15;

    txtResult.innerHTML = "$"+final;

    //reset the input field
    txtInput.value = "";
}