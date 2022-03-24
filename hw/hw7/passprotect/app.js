let username = document.getElementById("username");
let pass = document.getElementById("password");
let txtResult = document.getElementById("txtResult");

function password() {
    //reset the result to be empty
    txtResult.innerHTML = "";

    // get the user input
    let inputUser = username.value;
    let inputPass = pass.value;

    //if the username and the password match up, then send a successful response
    //if it fails, display access denied
    if(inputUser == "Username" && inputPass == "Password"){
        txtResult.innerHTML = "SUCCESS!";
    } else {
        txtResult.innerHTML = "ACCESS DENIED";
    }

    //reset the input fields
    username.value = "";
    pass.value = "";
}