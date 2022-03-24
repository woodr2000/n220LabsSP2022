let txtName = document.getElementById("txtInput");
let txtResult = document.getElementById("txtResult");

function greet() {
    //reset the result to be empty
    txtResult.innerHTML = "";

    // get the user input
    let input = txtInput.value;

    //display it in the result div
    txtResult.innerHTML = "Hello "+input;

    //reset the input field
    txtInput.value = "";
}