
// Example array
const arr = [10, 20, 30, 40, 50];

// For loop
console.log('For loop:');
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    if (element === 30) {
        console.log('Element found');
        // break; // Uncomment to break loop when found
        for (let j = 0; j < 3; j++) {
            console.log('Nested loop:', j);
        }
    }
}

// While loop
console.log('\nWhile loop:');
let idx = 0;
while (idx < arr.length) {
    console.log(arr[idx]);
    idx++;
}

// Do-while loop
console.log('\nDo-while loop:');
let k = 0;
do {
    console.log(arr[k]);
    k++;
} while (k < arr.length);

// For...of loop
console.log('\nFor...of loop:');
for (const value of arr) {
    console.log(value);
}

// For...in loop (for object properties)
console.log('\nFor...in loop:');
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        console.log(key, obj[key]);
    }
}

