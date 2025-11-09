// SetTimeout and Closures

// Example 1: Simple setTimeout with closure

// function x(){
//     var i = 1;
//     setTimeout(() => {
//         console.log(i); // Will execute after 3 seconds
//     }, 3000);
// }

// x();


// Example 2: setTimeout with additional console.log

// function x(){
//     var i = 1;
//     setTimeout(() => {
//         console.log(i); // Executes after 3 seconds
//     }, 3000);

//     console.log("Namaste Javascript!!!"); // Executes immediately
// }

// x();

/*

    What happened here:

    - The `setTimeout` callback creates a closure. This closure remembers
      the lexical scope, so it has a reference to the outer variable `i`.
    
    - Javascript attaches the callback function to the timer, stores it aside,
      and continues executing the rest of the code. That’s why the console.log
      outside the `setTimeout` executes first.

*/


// Example 3: setTimeout inside a loop with var

// function x(){
//     for(var i = 1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i); // Will print 6 for all after each second
//         }, i * 1000);
//     }
//     console.log("We gonna print the value of i after every second...");
// }

// x();

/*

    Explanation:

    - The loop pushes the callback functions to the event queue.
    - Since `var` is function scoped, the same `i` is shared across all iterations.
    - By the time the timers fire, the loop has finished and `i = 6`, so every callback prints 6.
    - Closure preserves reference to the outer variable, not its value at the time of creation.

*/


// Example 4: Using let for block scope

function x() {
    for(let i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log(i); // Prints 1, 2, 3, 4, 5 correctly
        }, i * 1000);
    }

    console.log("We gonna print the value of i after every second...");
}

x();

/*

    Explanation:

    - `let` is block scoped, so each iteration creates a new `i` inside its own block.
    - The closure now remembers a separate copy of `i` for each callback.
    - This prints 1, 2, 3, 4, 5 at intervals of 1 second each.
    
*/
