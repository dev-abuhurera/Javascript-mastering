// Some Important Questions and Concepts

/* 
    --->> What is Temporal Dead Zone (TDZ)?
    --->> Are let and const declarations hoisted in JS?
    --->> Difference between SyntaxError, ReferenceError, and TypeError?

    Fundamental:

    1. Let and const declarations are hoisted in JavaScript, but their hoisting is different from var.
    2. Let and const exist in the Temporal Dead Zone (TDZ) until they are initialized.
*/

// Example: Temporal Dead Zone

console.log(b); // Outputs: undefined (var hoisting)
 // console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // Now accessible
var b = 100;

/*

Explanation:

- Variables declared with var are hoisted and initialized to undefined.
- Variables declared with let and const are hoisted but not initialized.
- TDZ: Time from hoisting to initialization of let/const variables.
- Accessing them in TDZ throws a ReferenceError.

*/

// ReferenceError Example
// console.log(window.b); // window.b exists for var, but let/const are not attached to the global object

// SyntaxError Example: Redeclaration in the same scope
// let x = 10;
// var x = 20; // SyntaxError

// Var redeclaration allowed
var r = 10;
var r = 100;
console.log(r); // 100

// Let variables can be declared and initialized later
let q;
q = 1000;
console.log(q); // 1000

// Const must be initialized at declaration
// const w; // SyntaxError: Missing initializer
const w = 1000;
console.log(w);

// Reassigning const throws TypeError
// w = 2000; // TypeError: Assignment to constant variable

/* Error Summary:

- ReferenceError: Accessing a variable that does not exist or is in TDZ
- SyntaxError: Violates JS syntax rules (e.g., redeclaration of let in same scope)
- TypeError: Invalid operation on a variable type (e.g., reassigning const)

*/

/* Best Practices:

1. Prefer const for variables that should not change.
2. Use let for variables that will change.
3. Declare and initialize variables at the top of the scope to avoid TDZ issues.

*/
