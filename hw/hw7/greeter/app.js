//Robert Wood
//3/23/22
//N220
//Greeter javascript

let txtName = document.getElementById("txtInput");

function greet() {
    // get the user input
    let input = txtInput.value;

    //display it in the result div
    console.log("Hello "+input);

    //reset the input field
    txtInput.value = "";
}