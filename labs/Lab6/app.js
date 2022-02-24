//loop that prints to the console the numbers 1 to 10
for(x=1; x<11; x++){
    console.log(x);
}

console.log("-------------");
//loop that prints to the console the numbers 10 to 1
for(x=10; x>0; x--){
    console.log(x);
}

console.log("-------------");
//Write a loop that prints to the console the first 20 numbers of the Fibonacci sequence
let num1 = 0;
let num2 = 1;
let num3 = num1 + num2;
console.log(num1);
console.log(num2);
//const sequence = [];
for(x=0; x<20; x++){
    console.log(num3);
    num1 = num2;
    num2 = num3;
    num3 = num1 + num2;
}

console.log("-------------");

//write a loop that reverses the array
let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ];

for(x=4; x>-1; x--){
    console.log(words[x]);
}

console.log("-------------");

//write a loop that capitalizes the words in the array using the .toUpperCase() string method.


for(x = 0; x<5; x++){
    let word = words[x];
    console.log(word.toUpperCase());
}

console.log("-------------");
//write a loop that generates the string "Indiana! Yeah! University! Yeah! Purdue! Yeah! Indianapolis! Yeah!"
for(x = 0; x<5; x++){
    console.log(words[x]+"! Yeah!");
}