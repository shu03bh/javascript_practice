//Control Flow in JavaScript


//if statement
//Syntax - if(condition){}

//if true- execute code inside it, if false- skip it
// = assignemnt operator, == equality operator, === strict equality operator(checks value and type both)

const isUserLoggedIn = false

if(isUserLoggedIn){
    console.log("User is already logged in");
}
else{
    console.log("User is not logged in");
}

const score = 300
if(score>100){
    //if we use var- global scope, gives error
    const power = "super power"
    console.log(`User has ${power}`);
}

//ternary operator - it is a shorthand for if-else statement
//not to use, not industry standard, use if-else statement instead for better readability
const balance = 1000
if(balance>500) console.log("You have enough balance");

if (balance>500) console.log("You have enough balance"); 
else if (balance === 500) console.log("Your balance is exactly 500");
else if (balance < 500 && balance > 0) console.log("You have low balance");
else console.log("You don't have enough balance");


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromFacebook = true
if (userLoggedIn && debitCard){
    console.log("You can make a purchase");
}

if (loggedInFromGoogle || loggedInFromFacebook){
    console.log("User is already logged in");
    
}

//switch statement - it is used to perform different actions based on different conditions

const month = "jan"
switch(month){
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;
    default:
        console.log("Invalid month");
}

//break is important to stop the execution of the code after the case is matched, if we don't use break, it will execute all the cases after the matched case

//Truthy and Falsy values in JavaScript
//Truthy values - values that are considered true in a boolean context, eg - non-empty string, non-zero number, true, object, array
//Falsy values - values that are considered false in a boolean context, eg - empty string, 0, false, null, undefined, NaN


//we assume this is true value
const userEmail = "shubh@gmail.ai"
if(userEmail){
    console.log("User email is present");
}
else{
    console.log("User email is not present");
}

//falsy values - false, zero 0 , negative zero -0, BigInt 0n, "", null, undefined, Nan

//Truthy values - true, non-zero number, non-empty string, object, array, zero in string "0", 'false", anything inside string, function()

//to check for empty array
const arr = []
if (arr.length === 0){
    console.log("Array is empty");
}

//to check empty object
const obj = {}
if (Object.keys(obj).length === 0){
    console.log("Object is empty");
}

//false == 0 //true
//false === 0 //false, because it checks for type as well
//null == undefined //true
//null === undefined //false, because it checks for type as well    
//false  == "" 
//false === "" //false, because it checks for type as well
//0 == "" //true
//0 === "" //false, because it checks for type as well

//nullish coalescing operator - it is used to provide a default value when the value is null or undefined, it is represented by ??, it returns the right-hand side value when the left-hand side value is null or undefined, otherwise it returns the left-hand side value

let val1;
val1 = 5 ?? 10
console.log("Value of val1 is: ", val1); //5, because val1 is not null or undefined, it returns val1
//used when we ont have a direct reposnse from DB, thee may be null value, undefined value or 2 values, we want to return 2nd value when we have null or undefined value, otherwise we want to return the value from DB

let val2 
val2 = null ?? 10
console.log("Value of val2 is: ", val2); //10, because val2 is null, it returns 10

let val3 
val3 = undefined ?? 10
console.log("Value of val3 is: ", val3); //10, because val3 is undefined, it returns 10

let val4
val4 = null ?? 10 ?? 20
console.log("Value of val4 is: ", val4); //10, because val4 is null, it returns 10 , it doesn't check for 20 because it already found a value which is not null or undefined


//TERNARY OPERATOR
//syntax - condition ? expresssion1 : expression2

const age = 18
age >= 20 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote");
