/////Javascript Study Notes/////

var num1 = 3;

var num2 = 5;

var stringNum1 = "3";

var stringNum2 = "5";

var parsNum1 = parseInt(stringNum1);
var parsNum2 = parseInt(stringNum2);


console.log("This is math: " + parseInt(num1 + num2));
console.log("This is madness: " + (parsNum1 + parsNum2));

var isTrue = true;

console.log(typeof(isTrue));


var num3 = 8;

var num4 = 6;

var num5 = num3 - num4;

console.log("Quick maths 8 minus 6 is " + (num3 - num4));
console.log("This is a variable");


/////////////Variable Mutation Example 1/5/22//////////
let hello = 15;
hello = 20;
console.log(hello);

hello = 500;
console.log(hello);

let coffeeCup = "person";
coffeeCup = "banana";

//this will throw an error because the hello variable has already been declared
//let hello



/////////type coersion Example///////
let myNumber = 15;
//console.log(typeof myNumber);

//convert myNumber to a string.  This is an example of implicit conversion
myNumber = myNumber + " is the best number of all time!"
//console.log(typeof myNumber);

//Why should use explict conversion?  Let's get input from the user. 
//This is the bad way to do things.
    let ageBadExample = prompt("How old are you?");

    console.log(typeof ageBadExample);

    //because age is being converted to a string via implicit, then it concatents age with whatever the user puts in.
    console.log(`In 10 years you will be ${ageBadExample + 10} years old!`);

//This is the good way to define a variable because you are being intentional with the type of data you get from the user
    let ageGoodExample = Number(prompt("How old are you?"));

    console.log(typeof ageGoodExample);

    console.log(`In 10 years you will be ${ageGoodExample + 10} years old!`);

//convert myNumber to a string using explicit conversion!

//Use can use String(data), Boolean(data), Number(data) to convert a data type.




////Another example of explicit conversion and why it is important
let num1 = 15;
let num2 = 15;

//this will display true because they are equal and it does not compare the type.  Double equals (==) compares two values together but is not strict.
console.log(num1 == num2);

//this will display true because they are equal it does compare the type.  triple equals (===) compares two values together and is strict.
console.log(num1 === num2);

//the problem with ==  and not being explicit
num2 = "15";
console.log(num1 == num2);
console.log(num1 === num2);




//Example parseInt vs Number





//var x = 5;

//var y = 15;

//increment 
x++ //increases number by one 

for(var i =0; i>5; i++){
    console.log(i)
}

console.log(x);
//console.log(y / x);

//shorthand operators
x += y 

console.log(x += y)

x = x + y //same thing but short hand


//how to us (&& "and") (|| "or") (! "not")
var x = 7

var y = 5 

var z = 5

console.log(z < y || z > x)
console.log(z = y && z < x)

//PEMDAS

function add(){
    console.log(x + y)
}

if (user === "+");


//conditionals (if,else statements)
if (condition){
    //execute code if true
}

let firstName = "Seth";

if (firstName === "Seth"){
    console.log("Hello " + firstName);
}

//
let num = 3;

if (num > 30){
    console.log("That is a big number ");
}

if (num < 30){
    console.log("That is a small number ");
}

let num1 = 34;

if (num1 = 34){
    console.log("The number is even")
}

//how to set up if/else statments
let num1 = 14;

if (num1 % 2 === 0){
    console.log("The number is even");
}else if (num1 % 5 === 0){
    console.log("divisible by 5")
}
else {
    console.log("This number is odd");
}

//switches syntax
switch (num1){
    case num1 % 5 ===0:
        console.log("This is multiple of 5")
        break;
    case num1 % 2 === 0:
        console.log("Is Even")
        break;
    default:
        console.log("This is an odd number")
}

//var vs let vs const Variables lesson///

///what is scope?//
//scope is the limit of whatever parameters you set//

///const means constant and the variable cannot change. Use this to prevent errors later down the line from someone else changing your code
const num1 = 10;
console.log(num1);

num1 = 20;

//let vs var
// let is what we call blocked scope vs function scoped. let was introduced ES6, so was const

// global variable vs local

let spiderman = "Tobey"; //example of global variable (open variable)

function chgSpiderName () {
    spiderman = "Tom";

    let bestMJ = "Emma";
    console.log(bestMJ);
}

chgSpiderName();
console.log(spiderman);
//console.log(bestMJ);

//1) calls the function
//2) updates the variable
//3) creates the variable bestMJ and assigns it a value
//4) prints the variable MJ
//5) function is over, so then it prints the variable spiderman

let spiderman = "Tobey"; //example of global variable (open variable)

function chgSpiderName () {
    spiderman = "Tom";

    let bestMJ = "Emma";
    
    function chgMjName(){
        bestMJ = "Zendaya";
        let sideKick = "Ned";
        console.log(bestMJ);
    }
    chgMjName();

    //console.log(sideKick);

    //if statments are "blocked" scoped
    if (spiderman = "Tom") {
        var congrats = "Thanks for choosing the best Spiderman";
        //var is function scoped, if i used "let" is would be blocked scope
    }
    //still prints out the congrats message
    console.log(congrats);
}

//This function only exists within ChangeSpiderManName chgMjName();

chgSpiderName();
//console.log(spiderman);
//console.log(bestMJ);


///function with parameters

num1 = 10;
num2 = 20;

function conCat(x, y){

    return String(x) + String(y);
}

console.log(conCat(num1,num2));

//function without parmeters
function floss(){
    return "you should floss everyday"
}
console.log(floss);

//function inside a function/ calculator
function calc(nu1,num2, operator){

    if (operator == "+"){
        return add();
    }else if (operator == "-"){
        return subtract()
    }

    function add (){
return num1 + num2;
    }

    function subtract (){
        return num1 + num2;
    }
}
 console.log(calc(10,5,"+"));


 ////Arrays//
 var numbers = [19, 17, 3, 7, 21, 23, 6]   ///an array of numbers

 var names = ["Seth", "Zendaya", "Daniel", "Chioma", "Iman"]  ///array with names

 var games = new Array("MW2", "Overwatch", "2K16", "Sims")

 console.log(games)