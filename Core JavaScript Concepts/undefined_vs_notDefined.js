// JavaScript is a loosely typed language
// ---> It means JS assigns and detects the data types of variables automatically

var a;

console.log(a); // undefined

if (a === undefined) {
    console.log("a is undefined");
} else {
    console.log("a is not undefined");
}

// Hoisting example
console.log(x); // undefined, because var is hoisted

var x;

x = 10;           // x is now a number
x = "Hello js";   // x is now a string, type changed dynamically

/////////////////////////////////////////////////////////////////////////////////
