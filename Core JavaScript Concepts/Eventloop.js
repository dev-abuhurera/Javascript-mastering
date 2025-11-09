// =======================================================
// 🌀 EVENT LOOP IN JAVASCRIPT
// =======================================================


// JavaScript ---> Synchronous Single-Threaded Language
// Meaning: JS executes one command at a time using a single call stack.


// =======================================================
// 🧠 1. Global Execution Context (GEC)
// =======================================================


// When JavaScript code runs, it first creates a Global Execution Context.
// This context executes line by line.



// - Function declarations → memory is allocated
// - Function invocation → new Execution Context is created
// - After execution → it’s removed from the Call Stack


// NOTE: The Call Stack doesn’t wait for anything. 
// It executes tasks immediately and moves on.


// -------------------------------------------------------
// ❓What if we want to execute something after a delay?
// -------------------------------------------------------
// The Call Stack alone cannot handle delays or async tasks.
// That’s where the BROWSER and WEB APIs come in.



// =======================================================
// 🌍 2. Browser + Web APIs
// =======================================================



// The Browser provides various APIs such as:
//   - setTimeout()
//   - DOM APIs
//   - fetch()
//   - localStorage
//   - console



// These are NOT part of JavaScript itself — they belong to the Browser.
//
// The Browser exposes them to JS via the Global Object → "window".


window.setTimeout();
window.localStorage;
window.console.log();

// ✅ We usually don’t write `window.` because these APIs exist globally.


// =======================================================
// 🧩 3. Example – Call Stack + Web API
// =======================================================

console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");

// OUTPUT (after 5 seconds delay):
// Start
// End
// Callback



// 👉 Explanation:

// - The setTimeout() registers a timer inside the browser.
// - The callback is stored in the Web API environment.
// - Meanwhile, JS continues executing the rest of the code.
// - After 5s, the timer completes and moves the callback to the CALLBACK QUEUE.
// - The EVENT LOOP monitors the Call Stack.
// - When the Call Stack is empty, the Event Loop pushes the callback into it.


// =======================================================
// 🎯 4. Event Loop + Callback Queue
// =======================================================
//
// The Event Loop acts as a gatekeeper between:
//
//       [ Callback Queue ]  --->  [ Call Stack ]
//
// It constantly checks:
//   “Is the Call Stack empty?”
//   → If yes, it pushes the next function from the queue into the stack.


// =======================================================
// 🧠 5. DOM Example (Web API + Callback Queue)
// =======================================================

console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
    console.log("Callback");
});

console.log("End");

// 👉 Explanation:
// - The `addEventListener` is a DOM API (Web API).
// - It registers a callback in the Web API environment.
// - When the button is clicked → the callback is sent to the CALLBACK QUEUE.
// - The EVENT LOOP checks the Call Stack.
// - Once empty, it pushes the callback into the stack for execution.
//
// Note: The Callback Queue works on FIFO (First-In-First-Out).
// Multiple clicks = multiple callbacks in the queue.


// =======================================================
// 🌐 6. fetch() + Promise Example
// =======================================================

console.log("Start");

setTimeout(function cbT() {
    console.log("Callback from setTimeout");
}, 5000);

fetch("https://api.netflix.com")
    .then(function cbF() {
        console.log("Callback from fetch (Promise resolved)");
    });

console.log("End");

// OUTPUT (order may vary):
// Start
// End
// Callback from fetch (Promise resolved)
// Callback from setTimeout

// 👉 Explanation:
// - `fetch()` is a Web API used for network calls.
// - It returns a PROMISE.
// - When the promise resolves, its callback goes to the MICROTASK QUEUE,
//   not the Callback Queue.


// =======================================================
// ⚙️ 7. Microtask Queue vs Callback Queue
// =======================================================
//
// 🔹 Callback Queue → contains callbacks from:
//      - setTimeout()
//      - setInterval()
//      - DOM events
//
// 🔹 Microtask Queue → contains callbacks from:
//      - Promises
//      - Mutation Observers
//
// 🏁 Priority Rule:
// Microtask Queue has HIGHER priority.
// Event Loop always empties Microtask Queue before moving to Callback Queue.


// =======================================================
// 🚨 8. Starvation Issue
// =======================================================
//
// If one microtask continuously creates new microtasks,
// they keep getting added to the Microtask Queue.
//
// ➡️ Result: Callback Queue starves (never gets a chance to run).
//
// This is called "Starvation of the Callback Queue."
//

// =======================================================
// ✅ SUMMARY
// =======================================================
//
// 1️⃣ Code executes inside the Call Stack.
// 2️⃣ Async tasks go to Web APIs (Browser).
// 3️⃣ When completed → callbacks move to a queue:
//      - Promises → Microtask Queue
//      - setTimeout, Events → Callback Queue
// 4️⃣ Event Loop continuously checks:
//      - If Call Stack is empty → push next task (Microtask first).
//
//  This is how JavaScript handles Asynchronous Behavior efficiently!
// =======================================================
