


// 1. Arrow function with no arguments and no return value
console.log("*****Function without arguments*****");

const greet = () => {
    console.log("Good Morning, Today is Tuesday");
};

// Invoke the function
greet();

// 2. Arrow function with 3 arguments and no return value (with default value for the 3rd argument)
console.log("\n*****Function with 3 arguments*****");
const multiply = (a, b, c = 1) => {
    console.log(`The multiplication of ${a}, ${b}, and ${c} is: ${a * b * c}`);
};

// Invoke the function with provided values
multiply(5, 5, 2);
multiply(10, 4); // The 3rd argument will take the default value of 1

// 3. Arrow function with 5 arguments and a return value
console.log("\n*****Function with 5 arguments*****");

const add = (a, b, c, d, e) => {
    return a + b + c + d + e;
};

// Invoke the function and log the result with meaningful messages
let result1 = add(100, 100, 200, 349, 756);
console.log(`The sum of 100, 100, 200, 349, and 756 is: ${result1}`);

let result2 = add("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`The concatenated result is: "${result2}"`);
