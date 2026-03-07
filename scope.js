
//{} - scope of that program when used with function or if-else or loop, for object curlybraces{} is object declaration

var c = 300
let a = 100
if(true){
   let a = 10
    const b = 20
    var c = 30 
}

// console.log(a);
// console.log(b);
console.log(c); //var prints the value of c as 30 because var is function scoped, if we use let or const it will print 300 because they are block scoped

//global scope - var, let, const
//function scope - var
//block scope - let, const
//global scope - can be accessed anywhere in the program
//function scope - can be accessed only inside the function
//block scope - can be accessed only inside the block

console.log(a)

//scope of variable is determined by where it is declared, not where it is called
//core scope - global scope, function scope, block scope

function one(){
    const username = "Shubh"

    function  two(){
        const website = "youtube"
        console.log(username);
    } 
    //console.log(website);  //it is defned outside of scope 2
    
    //two()
}
one()

if (true){
    const username = "ABC"
    if(username === "ABcc"){
        const website = "google"
        console.log(username + website);
    }
    //console.log(website); - gives error as this is declared outside of 2nd if scope
}
//console.log(username); - error coz declared outside of 1st i scope

// +++++++++interesting+++++++++
addone(5)
function addone(num){
    return num+1
}
console.log(addone(5))

//expresssion
//addtwo(5) - error based on declaration
const addtwo = function(num){
    return num+2
}
console.log(addtwo(6))