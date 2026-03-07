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

console.log(this);
