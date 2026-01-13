// What is the difference between the (((Function Statement))) and (((Function Expression)))

// ------------------------------------------------------
//                       ---> Hoisting <---
// ------------------------------------------------------

// a(); // ✅ Works fine - due to hoisting
// b(); // ❌ Error - b is not a function (undefined at this point)

/*
    During the Memory Creation Phase:
    - Function declarations (statements) are hoisted with their full definition.
    - Function expressions are treated like variables → initialized with 'undefined'.
*/

// ------------------------------------------------------
// Function Statement (aka Function Declaration)
// ------------------------------------------------------

function a() {
    console.log("Function Statement");
}

// ------------------------------------------------------
// Function Expression
// ------------------------------------------------------

// Functions can act as values (assigned to variables)
var b = function () {
    console.log("Function Expression");
};

// ------------------------------------------------------
// Anonymous Function
// ------------------------------------------------------

// ❌ Invalid: function () { } 

// Function declarations must have a name.
// Anonymous functions are only valid when used as values, for example:

var anon = function () {
    console.log("Anonymous Function assigned to a variable");
};

// ------------------------------------------------------
// Named Function Expression
// ------------------------------------------------------

/*
    Named Function Expressions are function expressions
    where the function itself has an internal name.
*/

var c = function drive() {
    console.log(drive); // drive refers to itself (local to this function)
};

c();      // ✅ Works fine
drive();  // ❌ ReferenceError - not accessible globally

/*
    Explanation:

    The function 'drive' is defined inside the local scope of 'c'.
    It cannot be accessed outside its expression.
    
*/

// ------------------------------------------------------
// First-Class Functions
// ------------------------------------------------------

/*
    Functions in JavaScript are First-Class Citizens.

    Meaning:
    - Functions can be passed as arguments.
    - Functions can be returned from other functions.
    - Functions can be assigned to variables.

    In short, functions can behave just like any other value.
*/

var bc = function (param1, param2) {

    console.log("Hello");

    return function () {

        console.log("Function is gonna get us back in return");

    };
};

function xyz2() {

    console.log("I am xyz2");
    
}

// Passing functions as arguments
bc(
    function () {
        console.log("Anonymous function passed as an argument");
    },
    xyz2
);

// ------------------------------------------------------
// Arrow Functions
// ------------------------------------------------------

// Will be covered later...
// Arrow functions are a shorter way to write function expressions.
