//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//forof- doesnt need to define the index, it will automatically iterate through the array and give us the value of each element in the array

for (const num of arr) {
    console.log(num);
}

const greetings = ["Hello", "Hi", "Hey", "Hola"]

for (const greet of greetings) {
    console.log(`Each element of greetings array is: ${greet}`);
}  

//maps - it is a collection of key-value pairs, where each key is unique and maps to a specific value. It allows us to store and retrieve data based on keys, making it easier to manage and access information efficiently.

//remembers the order of insertion, all unique , no duplicate values, can have any type of key and value, iterable
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("IN", "Bharat") //it will update the value of IN key

console.log(map);

for (const key of map){
    console.log(key);
}

for (const [key, value] of map){
    console.log(key, value);
}

const myObject = {
    name: "Shubh",
    age: 25,
    city: "Delhi"
}

//not iterable - we cannot use for of loop to iterate through an object, we need to use for in loop or Object.keys() or Object.values() or Object.entries() to iterate through an object


// for (const [key,value] of myObject){
//     console.log(key, value);
// }


//for in loop - it is used to iterate through the keys of an object, it gives us the keys of the object, we can use the keys to get the values of the object

for(const key in myObject){
    console.log(` ${key} : ${myObject[key]}`); 
}

const programming = ["JavaScript", "Python", "Java", "C++"]
for (const key in programming) {
    console.log(` ${key} : ${programming[key]}`);
}

//foreach - it is used to iterate through the elements of an array, it gives us the value of each element in the array, we can also get the index of each element in the array

const coding = ["JavaScript", "Python", "Java", "C++"]

coding.forEach(function(item){
    console.log(item);
})

coding.forEach((item)=>{
    console.log(item);
})

coding.forEach((item, index, array) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
})


//array of object 
const mycoding = [
    {
        language : "javascript",
        filenam: "app.js"
    },
    {
        language : "python",
        filename: "app.py"
    },
    {
        language : "java",
        filename: "app.java"
    },
    {
        language : "c++",
        filename: "app.cpp"
    },
    {
        language : "c",
        filename: "app.c"
    }
]

mycoding.forEach((item)=>{
    console.log(item.language);
    
})

