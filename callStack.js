//when we run a code in JS - a global Exceution context is created

//global execution context has 2 phases - creation phase and execution phase

//js is single threaded

//Functional execution context is created when a function is called, it has its own creation and execution phase

//Eval execution context is created when eval function is called, it has its own creation and execution phase

//eval execution context is a property of global execution context

//Memory Creation phase - allocates memory for variables and functions, variables are initialized with undefined, functions are stored in memory with their code

//Execution phase - executes the code line by line, assigns values to variables, executes functions

//call stack - it is a data structure that stores the execution context of the functions, it follows LIFO(Last In First Out) principle, the last function that is called is the first one to be executed and removed from the stack

let val1 =10
let val2 = 20
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1,val2)
console.log("Result: ", result1);
let result2 = addnum(5,10)
console.log("Result: ", result2);