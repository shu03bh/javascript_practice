
console.log('Test output: If you see this, console.log works!');
const myArr = [1,2,3] //in s brackets, can have a mix of datattypes

console.log(myArr[0])  //retreive value using indexing

//when we create a copy of array- it creates shalllow and deeep copy
//shallow copy- copy hose property share the same referance
//deep- dont share same referance

const myArr2 = new Array(1,2,3,4) //using keywords automatically turns () to []
console.log(myArr2)

//Array menthods


//Push()- adds a new value to the array
myArr.push(6)
myArr.push(10)
console.log(myArr)


//Pop()- removes the last value
myArr.pop()
console.log(myArr)


//unshift()- inserta a value in the starting
myArr.unshift(9)
console.log(myArr)

//shift()- returns 1st element from array and returns it
myArr.shift()
console.log(myArr)


//used to ask ques regarding elements inside array
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(3))

//join()- adds all the elements of arrray into a string

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice - returns a copy of section of an array
console.log("A ", myArr);


const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

//splice()- manipulates original array

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);

const marvel_heroes= ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", 'flash', "batman"]

marvel_heroes.push(dc_heroes) //takes array as an element
console.log(marvel_heroes)

console.log(marvel_heroes[3][1]);
console.log(marvel_heroes[3][2]);

//concat() -- adds 2nd array as element in 1st array
marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);

marvel_heroes.pop(dc_heroes)
console.log(marvel_heroes);

//concat- merge 2 arrays into one
const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);


//spread ooperator- ... spread elements of array and add them
const all_mew_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_mew_heroes);

//flat()-returns nested array into a single array
const another_array = [1,2,3,[4,5,6],7,,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)

console.log(Array.isArray("shubh"))
console.log(Array.from("shubh"))
console.log(Array.from({name: "shubh"}))  //returns empty array- we need to define what is going to be converted to array

let score1 = 100
let score2 = 200
let score3 = 300

//of(returns a new array from set of elements)
console.log(Array.of(score1, score2, score3));
