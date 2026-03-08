//Immediately Invoked Function Expressions(IIFE) are functions that are executed immediately after they are defined. They are often used to create a new scope and avoid polluting the global namespace.


// Normal function declaration and call
function one(){
    console.log("DB Connected");
}
one(); // we have to call the function to execute it

// IIFE (Immediately Invoked Function Expression)
//named iife
(function two(){
    console.log("DB connected now");
    
})(); //we don't have to call the function, it will execute immediately after it is defined
//()() //gives error because we are trying to call the function again, but it is already executed and not stored in any variable


//unnmaed iife
( () => {
    console.log("DB connected with arrow function");
} )(); //gives error because we are trying to call the function again, but it is already executed and not stored in any variable

//( function three(){ //gives error because we are trying to call the function again, but it is already executed and not stored in any variable})

(   (name) =>
    {
        console.log(`DB connected with arrow function and name is ${name}`);
    })("John"); // Pass the name as an argument when invoking the IIFE


//to execute 2 iife together , use semicolon to separate them
(function four(){
    console.log("DB connected with normal function");
})();

(function five(){
    console.log("DB connected with normal function 2");
})();