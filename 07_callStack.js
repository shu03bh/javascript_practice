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

//execution o f code:
//Step 1: global execution is creatd and this is allocated inside this

//Step 2: Memory creation phase - val1, val2 - undefined, addnum (function definiton stored in memory), result1 - undefined, result2 - undefined

//Step 3: execution phase - val 1 =10, val2=20, addnum is stored in memory, result1 = addnum(val1,val2) - a new execution context is created (including new variable nev and exceution thread), for this new execution sandbox, memoryphase and execution phase is executed, num1=10, num2=20, total = 30, return total - 30 is returned and this execution context is removed from the stack, result1 = 30, total is returned to gloal execution context

//Step 4: result2 = addnum(5,10) - a new execution context is created (including new variable nev and exceution thread), for this new execution sandbox, memoryphase and execution phase is executed, num1=5, num2=10, total = 15, return total - 15 is returned and this execution context is removed from the stack, result2 = 15, total is returned to gloal execution context

//Step 5: console.log("Result: ", result1) - a new execution context is created for this line of code, it is executed and removed from the stack, same for console.log("Result: ", result2)

//callstack - it is a datastructire that stores the exceution context of the functions, it follows LIFO(Last In First Out) principle, the last function that is called is the first one to be executed and removed from the stack

//when a function is called, a new exceution context is created and pushed to the call stack, when the function is executed and returns a value, the execution context is popped from the call stack

//global execution context is created when the code is run, it is the first execution context in the call stack, when a function is called, a new execution context is created and pushed to the call stack, when the function is executed and returns a value, the execution context is popped from the call stack

//when a function is called inside another function, a new execution context is created for the inner function and pushed to the call stack, when the inner function is executed and returns a value, the execution context is popped from the call stack, then the outer function continues its execution and returns a value, then its execution context is popped from the call stack

