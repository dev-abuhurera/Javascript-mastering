// =======================================================
// 🔁 CALLBACK FUNCTIONS IN JAVASCRIPT
// =======================================================

/*
    📘 Definition:
    A callback function is a function that is passed 
    as an argument to another function.

    Callback functions give JavaScript access 
    to the asynchronous world — despite being 
    a synchronous, single-threaded language.
*/

setTimeout(function () {
    console.log("Timer");
}, 5000);

/*
    🧠 Explanation:
    - setTimeout() receives a callback function.
    - The callback is NOT executed immediately.
    - JS continues execution without waiting.
    - After the delay expires, the callback is executed asynchronously.

    👉 This behavior introduces the asynchronous nature of JS.
*/


// =======================================================
// 🧩 SIMPLE CALLBACK EXAMPLE
// =======================================================

function x(y) {
    console.log("X");
    y(); // Function Y is called here
}

x(function y() { // Function Y is passed as a callback
    console.log("Y");
});

/*
    🔍 Explanation:
    - Function 'y' is passed as an argument to 'x'.
    - It is not executed immediately when passed.
    - It is executed later inside 'x' → hence the name "callback function".
*/


// =======================================================
// 🧠 CALL STACK BEHAVIOR
// =======================================================

/*
    Here’s what happens step-by-step:

    1️⃣ The function `x` is invoked → added to the Call Stack.
    2️⃣ It logs "X", then calls `y()`.
    3️⃣ Function `y` is added to the Call Stack → logs "Y".
    4️⃣ Both are removed after execution (stack becomes empty).

    Meanwhile:
    - The setTimeout() callback waits in the Web API environment.
    - After 5 seconds, its callback moves to the Callback Queue.
    - Event Loop checks when the Call Stack is empty.
    - Then pushes the callback to execute "Timer".
*/

/*
    ⚙️ JS has only ONE main thread (Call Stack).
    - Anything that blocks this thread stops all other operations.
    - That’s why long-running or time-consuming tasks should be
      handled asynchronously (e.g., via callbacks, promises, async/await).
*/

/*
    💡 Without callback functions (and first-class functions),
       JavaScript wouldn’t be able to perform asynchronous operations.
*/


// =======================================================
// 🖱️ EVENT HANDLERS (Callback Functions in Action)
// =======================================================

document.getElementById("click").addEventListener("click", function xyz() {
    // This function is the event handler (callback function).
    // It will be executed only when the event occurs.
    console.log("Button Clicked!!!");
});

/*
    🧠 Explanation:
    - The `addEventListener` attaches the callback to the button.
    - When the button is clicked → the callback is pushed to the Call Stack.
*/


// =======================================================
// 🔒 CALLBACK + CLOSURE EXAMPLE
// =======================================================

function addedEventListener() {
    let count = 0;

    document.getElementById("click").addEventListener("click", function fn() {
        console.log("Button clicked", ++count);
    });
}

addedEventListener();

/*
    🧠 Explanation:
    - Each time the button is clicked, the inner function executes.
    - It has access to `count` because of closure.
    - The scope of the callback function:
        → Its own function scope
        → Its lexical environment (outer function)
        → Global scope
    - Together, these form the closure.
*/


// =======================================================
// 🧹 GARBAGE COLLECTION & REMOVE EVENT LISTENERS
// =======================================================

/*
    ⚠️ Why remove event listeners?

    - Event listeners create closures.
    - Even if nothing executes, the closures still hold memory.
    - Over time, unused listeners can cause memory leaks.
    - To free up memory, it’s a good practice to remove
      event listeners when they’re no longer needed.
*/

// Example:

function removeHandler() {
    const btn = document.getElementById("click");
    const handler = () => console.log("Clicked!");
    
    btn.addEventListener("click", handler);

    // Later...
    btn.removeEventListener("click", handler);
    // ✅ Now garbage collector can free the memory.
}


// =======================================================
// 🪜 SUMMARY
// =======================================================
//
// 1️⃣ A callback is a function passed into another function.
// 2️⃣ Enables asynchronous behavior in JS.
// 3️⃣ Common examples: setTimeout, event handlers, fetch, etc.
// 4️⃣ Blocking the main thread should always be avoided.
// 5️⃣ Callbacks can form closures, so removing listeners helps memory cleanup.
// =======================================================
