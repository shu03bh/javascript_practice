//CONVERION TO NUMBER
// let score = 33
// let score = null
// let score = undefined
// let score = true
let score = "string"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//number => number
//"string" => Nan
//true =>1 false => 0

//CONVERSION TO BOOLEAN
// let isUserLoggedIn = 1
let isUserLoggedIn = ""
// let isUserLoggedIn = "string"
let booleanIsLoggedIn = Boolean(isUserLoggedIn)
console.log(booleanIsLoggedIn)

// 1 =>true, 0 => false
//empty string => fals
//"string" = > true

//CONVERSION TO STRING
let someNumber = 33
let StringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof someNumber);