//singleton
//object literals 

//Object.Create - contructor method, singleon created here


const mySym = Symbol("key1")

//objects have key-value pairs
const JsUser = {
    name: "Shubh",  //system considers name as "name"- string automatically
    "fullname": "Shubh Agrawal",
    age : 19,
    location: "jaipur",
    email: "shubh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
    //mySym: "myKey1"
    [mySym]: "myKey1"
}

//to access value of object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.fullname);
console.log(JsUser["fullname"]);
console.log(typeof JsUser.mySym); //returns as string, not symbol, we need to use [] in key
console.log(JsUser[mySym]);

//to change value of object
JsUser.email = "shubh@chatgpt.com"
console.log(JsUser.email);

//freeze the value of object
//Object.freeze(JsUser)
JsUser.email= "shubh@microsoft.com"
console.log(JsUser);

//
JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
console.log(JsUser.greeting2);
console.log(JsUser.greeting2());

const Linkedinuser = new Object() //singleton. object
const Linkedinuser1 = {} //non-singleton object
console.log(Linkedinuser);
console.log(Linkedinuser1);

Linkedinuser.id = "123abc"
Linkedinuser.name = "Suv"
Linkedinuser.isLoggedIn = false
console.log(Linkedinuser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstename : "Shubh",
            lastname : "Agrawal"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstename);
// ? is used to check if the value is present or not, if not present it will return undefined instead of error
console.log(regularUser.fullname?.userfullname?.middlename);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj5 = {
    5: "a",
    6: "b"
}
const obj3 = {obj1, obj2}
console.log(obj3); //nested

//asign - static method, copies all source objects to targte obj
const obj4 = Object.assign({}, obj1, obj2, obj5)
console.log(obj4);

const obj6 = {...obj1, ...obj2, ...obj5}
console.log(obj6);

const users = [
    {id: 123, name: "123"},
    {id : 111, name: "111"},
    {id: 222, name: "222"}
]

console.log(users[1].name);
console.log(Object.keys(users));
console.log(Object.keys(regularUser)); //to get keys of a object
console.log(Object.values(regularUser));  //to get vlues of object
console.log(Object.entries(regularUser));  //datatype as array
console.log(regularUser.hasOwnProperty('isLoggedIn'));


const course = {
    name : "javascript",
    price : 999,
    instructor : "hitesh"
}

console.log(course.instructor);

//destructuring of objects

const {instructor: inst} = course
//console.log(instructor);
console.log(inst);

const navbar = ({company}) => {

}
navbar(company = "hitesh")


//APIs
