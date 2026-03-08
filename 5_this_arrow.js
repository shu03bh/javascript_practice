//arrow function - a new way to write functions in ES6

//normal function
function add(a, b) {
    return a + b;
}

//arrow function
const addArrow = (a, b) => {
    return a + b;
}

//if only one line of code is there, we can omit the curly braces and return statement
const addArrowShort = (a, b) => a + b;

console.log(add(2, 3)); // 5
console.log(addArrow(2, 3)); // 5
console.log(addArrowShort(2, 3)); // 5

//this keyword in arrow function - it does not have its own this, it takes this from the surrounding code
//this function is used to refer current context of the object
const user = {
    username: "Shubh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welocme to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Shubhangi"
// user.welcomeMessage()

//gives empty object as we are in node environment, in browser it will give window object
//when we use arrow function, it takes this from surrounding code, in this case it will take this from global scope, which is empty object in node environment
//window object is global object in browser, global object in node is empty object
console.log(this);


function one(){
    let username = "Shubh"
    console.log(this.username); //undefined coz this is empty object in node environment
    const two = () => {
        console.log(this.username); //undefined coz this is empty object in node environment
    }
    two()
    
}
one()

//this inside function is not working because it is taking this from global scope, which is empty object in node environment, in browser it will give window object and it will work
//we should not use this inside arrow function when we want to refer to the object, we should use normal function instead of arrow function in that case

//when we use arrow function inside a method, it takes this from surrounding code, which is the method itself, so it will work

const user1 = () => {
    let username = "Shubh"
    console.log(this.username);
    console.log(this);
    
    
}

//arrowfunction 
//explicit return - when we use return statement to return a value from a function
//implicit return - when we don't use return statement and the function returns the value by default, it happens when we have only one line of code in the function
const addtwo = (num1, num2) =>{
    return num1 + num2
}
console.log("num1+num2 is : ", addtwo(3,4));

//if only one line of code is there, we can omit the curly braces and return statement
//implicit return
const addtwoShort = (num1, num2) => num1 + num2
console.log("num1+num2 is : ", addtwoShort(5,6));


//other method const addtwoShort = (num1, num2) => num1 + num2
const addtshort = (num1, num2) => (num1 + num2)
console.log("num1+num2 is : ", addtshort(5,6));

//if we use {} we need to use return statement, if we dont use {} it will return the value by default, 


//if we use () it will also return the value by default, but we can write multiple lines of code inside () and it will return the value of the last line of code

//to return an object
const addnum= (num1, num2) => ({username: "Shubh", price: 999})
console.log(addnum);

const myArray = [1,2,3,4,5,6,7,8,9,10]

//myArray.forEach(() => ())