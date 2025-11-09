// --------------------------------------------------------------------------------------------------------------
//                             How JavaScript Works and How Code Executes
// --------------------------------------------------------------------------------------------------------------

/*
    --------------------------------------------------
     → Is JavaScript synchronous or asynchronous?
     → Is JavaScript single-threaded or multi-threaded?
    --------------------------------------------------
*/

// --------------------------------------------------------------------------------------------------------------
// Fundamental Concept:
// --------------------------------------------------------------------------------------------------------------

/*
    Everything that happens inside JavaScript executes within an
    "Execution Context".
*/

// --------------------------------------------------------------------------------------------------------------
//                                       [[[[[[[[ Execution Context ]]]]]]]]
// --------------------------------------------------------------------------------------------------------------

/*
    The Execution Context is made up of two main components:

    1️⃣ Memory (Variable Environment)
    2️⃣ Code (Thread of Execution)
*/

// --------------------------------------------------------------------------------------------------------------
// Memory (Variable Environment)
// --------------------------------------------------------------------------------------------------------------

/*
    - This is where all variables and functions are stored as key-value pairs.

        Example:
            a = 10;   --->   (a : 10)

    - Every variable or function you declare gets allocated memory here
      during the "Memory Creation Phase".
*/

// --------------------------------------------------------------------------------------------------------------
// Code (Thread of Execution)
// --------------------------------------------------------------------------------------------------------------

/*
    - This is the place where the code is executed line by line.

    - The thread of execution runs your code sequentially,
      executing one statement at a time in order.
*/

// --------------------------------------------------------------------------------------------------------------
// Summary:
// --------------------------------------------------------------------------------------------------------------

/*
    JavaScript is a **Synchronous**, **Single-Threaded** Language.

    1️⃣ Synchronous → Executes code one line at a time in a specific order.
    2️⃣ Single-Threaded → Has only one main thread (Call Stack)
        → meaning it can execute only one task at a time.

    Therefore:
        JavaScript executes code line by line,
        and the next line only runs after the previous one completes.
*/

// --------------------------------------------------------------------------------------------------------------
// Visual Representation (Conceptual)
// --------------------------------------------------------------------------------------------------------------

/*
    Execution Context
    ┌──────────────────────────────────────┐
    │          Memory (Variables)          │
    │  a : 10                              │
    │  b : 20                              │
    │  function add() {...}                │
    ├──────────────────────────────────────┤
    │         Code (Execution Thread)      │
    │  Line 1 → Line 2 → Line 3 ...        │
    └──────────────────────────────────────┘
*/

// --------------------------------------------------------------------------------------------------------------
// In short:
// --------------------------------------------------------------------------------------------------------------

/*
    🧠 Everything in JS runs inside an Execution Context.
    ⚙️ Code executes one line at a time (synchronously).
    🧵 JavaScript uses a single main thread to handle execution.
*/
