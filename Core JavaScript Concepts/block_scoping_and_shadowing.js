// =======================================================
// 🧱 BLOCKS & BLOCK SCOPES IN JAVASCRIPT
// =======================================================

// -------------------------------------------------------
// 1️⃣ What is a Block?
// -------------------------------------------------------

{
    // This is a block (also called a Compound Statement)
    // A block groups multiple JS statements together.
    var a = 10;
    console.log(a);
}

// ✅ A block is used to group multiple statements
// where JavaScript expects only ONE statement.

/*
    👉 Example:
    - Blocks allow you to write multiple statements in places
      where JS expects only one statement.
*/

if (true) { 
    // The 'if' statement expects only one statement after it.
}

// ✅ This is also valid (only one statement):
if (true) true;

// ✅ Using a block allows multiple statements:
if (true) {
    var a = 10;
    console.log(a);
}

// ✅ This is the true use of a block:
// A single statement location can now execute multiple statements.


// =======================================================
// 📦 2️⃣ What is a Block Scope?
// =======================================================

/*
    Block Scope:
    → The area (block) in which variables and functions are accessible.
*/

// Example:
{
    var d = 100;
    let b = 1000;
    const c = 10000;
    console.log(d);
    console.log(b);
    console.log(c);
}

console.log(d); // ✅ Accessible (var is global)
// console.log(b); // ❌ Not accessible (let is block-scoped)
// console.log(c); // ❌ Not accessible (const is block-scoped)

/*
    📘 In Developer Tools:
    - Each block creates its own scope in memory.
    - let & const are hoisted in that block scope.
    - var is hoisted in the global scope.

    ✅ Therefore:
      → var → hoisted in Global Scope
      → let & const → hoisted in Block Scope
*/

// -------------------------------------------------------
// ⚙️ So:
// -------------------------------------------------------
// - var is accessible inside & outside the block (global scope).
// - let & const are accessible ONLY inside their block.


// =======================================================
// 🪞 3️⃣ Shadowing in JavaScript
// =======================================================

var d = 10;
console.log(d); // 👉 d = 10 (global)

{
    var d = 100;
    let b = 1000;
    const c = 10000;
    console.log(d);
    console.log(b);
    console.log(c);
}

console.log(d); // 👉 d = 100 (value updated globally)

/*
    🧠 Explanation:
    - The inner variable 'd' (declared with var) shadows
      the outer variable 'd'.
    - Both point to the same memory location in the global scope.
    - Hence, the outer value also changes.
*/

// -------------------------------------------------------
// ⚠️ Shadowing with let & const
// -------------------------------------------------------

let b = 100;

{
    var d = 100;
    let b = 1000;
    const c = 10000;
    console.log(d);
    console.log(b);
    console.log(c);
}

console.log(b); // 👉 100 (inner let b is separate, block-scoped)

/*
    ✅ Explanation:
    - let and const are block-scoped.
    - Inner let 'b' creates a new variable inside the block.
    - Outer 'b' remains unchanged.
*/


// =======================================================
// 🚫 4️⃣ Illegal Shadowing
// =======================================================

// ❌ Illegal:
//
// let k = 10;
// {
//     var k = 10; // ❌ Cannot shadow a let variable with var
// }
//
// ✅ Legal:
var i = 10;
{
    let i = 10; // Allowed
}

/*
    📘 Rule:
    - Shadowing a let/const with var is NOT allowed.
    - Shadowing a var with let/const IS allowed.
*/


// =======================================================
// 🧩 5️⃣ Var is Function Scoped
// =======================================================

let u = 100; // outer variable

function extra() {
    var u = 100; // inner variable (function scope)
    return u;
}

console.log("---------");
console.log(extra()); // 100 (function variable)
console.log(u);       // 100 (outer variable)

// ✅ Legal shadowing example.
// var → Function scoped
// let/const → Block scoped


// =======================================================
// 🔍 6️⃣ Lexical Scoping (Scope Chain)
// =======================================================

const z = 20;

{
    // const z = 100;
    {
        // const z = 1000;
        console.log(z);
        // If 1000 defined → prints 1000
        // Else if 100 defined → prints 100
        // Else → prints 20
    }
}

/*
    🧠 Explanation:
    - JS first checks for variable 'z' in the current scope.
    - If not found → checks in its parent’s (lexical parent’s) scope.
    - If still not found → checks in the global scope.
*/

// ✅ Blocks follow lexical scoping.
// ✅ This creates the concept of “Scope Chaining”.


// =======================================================
// 🪜 SUMMARY
// =======================================================
//
// 1️⃣ Block → Groups multiple statements.
// 2️⃣ Block Scope → Area where variables are accessible.
// 3️⃣ var → Global/Function Scoped.
// 4️⃣ let & const → Block Scoped.
// 5️⃣ Shadowing → Inner variable hides outer one.
// 6️⃣ Illegal Shadowing → var cannot shadow let/const.
// 7️⃣ Lexical Scoping → Variables are searched in parent scopes.
// =======================================================
