let txtInput = document.getElementById("txtInput");
let txtResult = document.getElementById("txtResult");

function removeVowel() {
    txtResult.innerHTML = "";

    let input = txtInput.value;
    let word = "";
    
    //iterate through the length of the word
    for(x=0;x<input.length;x++){
        //if it is not a vowel, then add the letter to the variable word
        if(!(input[x] == "a" || input[x] == "e" || input[x] == "i" || input[x] == "o" || input[x] == "u")){
            word += input[x];
        } 
    }
    //display the final result to the page
    txtResult.innerHTML = word;

    txtInput.value = "";
}