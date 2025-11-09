// Javascript

var x = 1;

a();
b();

console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

/*

----------------------------------------------  Execution Flow  ----------------------------------------------

---->>>> So now, the Global Execution Context (GEC) is created when this code runs.


                        (First Phase - Memory Creation)                   (Second Phase - Code Execution)
                        ------------------------------------------------   --------------------------------
                        
                        Memory (Variable Environment)                      |||||||        Code (Execution)
                        ------------------------------------------------   --------------------------------
                        
                        x : undefined                                      |||||          x = 1

                        a : function() {...}                               |||||          When 'a()' is called → a new Execution Context is created

                        b : function() {...}                               |||||          When 'b()' is called → another Execution Context is created


----------------------------------------------  Step-by-Step  ----------------------------------------------

1.  During the **Memory Creation Phase**, JavaScript allocates memory for:
        - Variables → initialized with `undefined`
        - Functions → their full definitions are stored

2.  In the **Execution Phase**, the code runs line by line:
        - `x = 1` (global variable updated)
        - `a()` is called → a new **execution context** is created for function `a`
        - Inside `a()`:
              - Local variable `x` = 10
              - Prints 10
              - Function completes → its execution context is removed from the **call stack**

        - Then `b()` is called → another **execution context** is created for function `b`
        - Inside `b()`:
              - Local variable `x` = 100
              - Prints 100
              - Function completes → removed from **call stack**

        - Finally, `console.log(x)` from the **global context** executes:
              - Logs 1 (because global x = 1)


----------------------------------------------  Call Stack Visualization  ----------------------------------------------

    |                |
    |----------------|    <-- after b() completes
    |   Global EC    |
    |----------------|

    ---> At the start:

        |                |
        |----------------|
        |   b() EC       |   <-- executing b()
        |----------------|
        |   a() EC       |   <-- executed first, then popped out
        |----------------|
        | Global EC      |
        |----------------|

----------------------------------------------  OUTPUT  ----------------------------------------------

10
100
1


----------------------------------------------  Summary  ----------------------------------------------

- Variables and functions are **hoisted** during the memory creation phase.
- Each function call creates its own **execution context**.
- Every context has its own **variable environment (scope)**.
- Once a function finishes execution, its context is popped off the **call stack**.
- JavaScript executes everything in a **single-threaded** manner (one thing at a time).

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
