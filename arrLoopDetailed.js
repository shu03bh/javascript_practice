const coding = ['JavaScript', 'Python', 'Java', 'C++'];

const values = coding.forEach((item) => {
    console.log(item);
    return item; // This return value is ignored by forEach
})
console.log(values); //returns undefined because forEach does not return anything, it is used to perform an action on each element of the array, it does not return a new array like map or filter, it returns undefined.


const myNums = [1,2,3,4,5,6,7,8,9,10]

//filter is used for callback function, it returns a new array with all the elements that pass the test implemented by the provided function, it does not change the original array

const newnums = myNums.filter( (num) => num>4 ) //returns the values that satisfies the condition, in this case it will return all the numbers greater than 4

console.log(newnums);

const newnums2 = myNums.filter( (num) =>
{
    return num>4
}
)
console.log(newnums2);


//using for each

const newNums3 = []
myNums.forEach((num) =>{
    if(num>4){
        newNums3.push(num)
    }
}
)
console.log(newNums3);

const books =[
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        published: 1925
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        published: 1960
    },
    {
        title: "1984",
        genre: "Dystopian",
        published: 1949
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        published: 1951
    }, 
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        published: 1954
    }
]

let userbooks = books.filter( (book) => book.genre === "Fantasy")
console.log(userbooks);

userbooks = books.filter( (book) => {
    book.published >= 1960

})
console.log(userbooks);


//map is used to create a new array with the results of calling a provided function on every element in the calling array, it does not change the original array
userbooks.map( (book) =>
{
    if(book.published >= 1950){
        console.log(book.title);
    }
})
console.log(userbooks); //it will return the original array because map does not change the original array, it returns a new array with the results of calling a provided function on every element in the calling array, if we want to change the original array we can use forEach or we can use map and assign it to a new variable.

//chaining of array methods
const fantasyBooks = books
                    .filter( (book) => book.genre === "Fantasy")
                    .map( (book) => book.title)

console.log(fantasyBooks); //it will return an array of titles of the books that are in the fantasy genre, it is chaining of array methods, we are using filter to get the books that are in the fantasy genre and then we are using map to get the titles of those books, it is a common practice to chain array methods to get the desired result in a more concise way.

//accumulator - it is used to accumulate a value based on the elements of an array, it is used with the reduce method, it takes a callback function that takes an accumulator and the current value as arguments, it returns a single value that is the result of the reduction of the array, it does not change the original array.

const nums = [1,2,3,4,5]

const total = nums.reduce (function (accumulator, currentValue)
{
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator+ currentValue

}, 100) //100 is the initial value of the accumulator, if we don't provide it, the first element of the array will be used as the initial value of the accumulator and the reduction will start from the second element of the array.

    console.log(total);
    
//reduce in arrow function

const total2 = nums.reduce( (acc, curr) => acc+curr, 0)
console.log(total2);

const shoppingCart = [
    {
        product: "Laptop",
        price: 999
    },
    {
        product: "Phone",
        price: 499
    },
    {
        product: "Headphones",
        price: 199
    }
]

const totalPrice = shoppingCart.reduce( (acc, curr) => acc + curr.price, 0)
console.log(totalPrice);