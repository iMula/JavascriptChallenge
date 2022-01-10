//Very easy
let x = 34;

let y = 12;

console.log("The difference between 34 and 12 is " + (x - y))
//Very easy

//easy
let personName1 = "Seth"
let personName2 = "Justin"

console.log(`The name ${personName2} is longer than the name ${personName1} by 2 characters`)


//medium
let userInput = prompt (`Type a word. Ex: "BASKETBALL", "Basketball", "basketball" `)

if (userInput === userInput.toUpperCase()){
    console.log("YOU ARE SHOUTING")
}else if (userInput === userInput.toLowerCase()){
    console.log("you are whispering")
}else { 
console.log("You are Talking Normal")
}

//hard
//Addition
function add(){
    var num1 = 8;
    var num2 = 2;
    var answer = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + answer);
}
add();

//SUBTRACT
function subtract(){
    var num1 = 8;
    var num2 = 2;
    var answer = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + answer);
}
subtract();

//multiply
function multiply(){
    var num1 = 8;
    var num2 = 2;
    var answer = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + answer);
}
multiply();

//divide
function divide(){
    var num1 = 8;
    var num2 = 2;
    var answer = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + answer);
}
divide();


///VERY HARD CHALLENGE

var num1 = Number(prompt("Choose a number"))
var operator = prompt("Choose +, -, *, ?")
var num2 = Number(prompt("Choose a munber"))



function add(){
    var num1 = 8;
    var num2 = 2;
    var answer = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + answer);
}
add();


function subtract(){
    var num1 = 8;
    var num2 = 2;
    var answer = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + answer);
}
subtract();


function multiply(){
    var num1 = 8;
    var num2 = 2;
    var answer = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + answer);
}
multiply();


function divide(){
    var num1 = 8;
    var num2 = 2;
    var answer = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + answer);
}
divide();



var num1 = prompt("Choose a number")
var operator = prompt("Choose +, -, *, ?")
var num2 = prompt("Choose a munber")