//VERY EASY
let x = 34;

let y = 12;

console.log("The difference between 34 and 12 is " + (x - y))
//Very easy

//EASY
let personName1 = "Seth"
let personName2 = "Justin"

console.log(`The name ${personName2} is longer than the name ${personName1} by 2 characters`)


//MEDIUM
let userInput = prompt (`Type a word. Ex: "BASKETBALL", "Basketball", "basketball" `)

if (userInput === userInput.toUpperCase()){
    console.log("YOU ARE SHOUTING")
}else if (userInput === userInput.toLowerCase()){
    console.log("you are whispering")
}else { 
console.log("You are Talking Normal")
}

//HARD CHALLENGE
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
//prompt to user
var num1 = Number(prompt("Choose a number"))
var operator = prompt("Choose +, -, *, ?")
var num2 = Number(prompt("Choose a munber"))

//directing to operator
if (operator === "+"){
    add()
}else if (operator === "-"){
    subtract()
}else if (operator === "*"){
    multiply()
}else if (operator ==="/"){
    divide()
}

//Math functions
function add(){
    var answer = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + answer);
}


function subtract(){
    var answer = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + answer);
}


function multiply(){
    var answer = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + answer);
}


function divide(){
    var answer = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + answer);
}




