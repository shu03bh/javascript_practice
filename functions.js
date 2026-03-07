//functions()- wrap all cpe inside a package and can reuse it

function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H"); 
}
sayMyName()
//sayMyName - function referance

function add2Num(num1, num2) {
    console.log(num1+num2);
    
}
add2Num() //
add2Num(3,4)
add2Num(2, "a")
add2Num(3,null)

//parameter- during definition of function
//arguments- during callling of function

const result = add2Num(3,5)
console.log("Result: ", result);


function add2numbers(num1, num2){
    let result= num1 + num2
    //return result
    //console.log("shubh") //nothings get print after return

    console.log("shubh");
    return result
}
add2numbers(10,100)

//otherway to define
function addnumbers(num1, num2){
    return num1+num2
}
addnumbers(10,10)

//qwerty- default value
function loginUserMessage(username = "QWERTY"){
    if(username === undefined){

        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Shubhnagi"))
console.log(loginUserMessage());

//if no value is passed- undefined, dont give it as null
//empty string - faslse value
//to f=deine if(!username) - not equal

//when no of argemnet is not defined- eg shopping cart, user can add multiple values

//RESt operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log("calculated price is : ", calculateCartPrice(200,400, 500, 1000));

const user = {
    username: "shubh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username:"AWS",
    price: 399
})

const myNewArray = [200,300,400,500]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue([100,1000,900]));
