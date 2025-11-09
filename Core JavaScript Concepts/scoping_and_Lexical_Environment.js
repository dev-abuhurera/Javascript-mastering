// Lexical Environment 


function a() {
    console.log(b);
}

let b = 10;

a();


/*

    The function `a` has a local execution context where `b` doesn't exist locally,
    but due to the global execution context, `b` is accessible.  

    ------>>>>> HOW ??????????????????????????????????????????????????????????

    Let's make this a bit more complicated:

*/


function c() {

    e();
    
    function e() {
        console.log(d);
    }

}

d = 100;

c();


/*

    --->>> What will happen here now?

    If we have a function inside another function, what gets printed?

    Again, the output is shown on the console, and here's why:

*/


function t() {

    g = 100; // Variable inside function

    o();
    
    function o() {
        console.log(g);
    }
}

t();

// Even now, the variable is accessible inside the local execution context
// demonstrating the concept of lexical access


function w() {

    q = 100; // Local variable

    r();
    
    function r() {
        // Nested function
    }
}

console.log(q); // Accessing variable in global scope while it's local
w();

// Now `q` is not defined globally ----------------------------------------------------------------------------


/*


                                                                What is Scope?

        ---------------------------  
        Scope is where we can access a specific variable or function
        ---------------------------  ((((1))))                                                


        ----->> 'Scope is directly dependent on the Lexical Environment' <<-----


        1️⃣ Lexical means "in hierarchy"  

       ---->> Lexical ---> in hierarchy with parents


       When an execution context is created, it has a reference to its parent memory
       --->> This is its lexical parent.


    Example:

    function w() {

        q = 100;

        r();
        
        function r() {
            // Nested function
        }

        ----->>> The function `r` is inside `w` 
                --->>> `r` is lexical to `w` (it exists in `w`’s memory space)

        ----->> If we try to log a variable inside `r`, JS engine first checks `r`’s memory
                (Lexical Environment).  

        ----->> If the variable is not there, it looks up the **lexical parent** (`w`’s memory)

        ----->> Then the **Global Execution Context**, and if not found, it moves to `null`
                --->> JS will throw `ReferenceError: variable is not defined` if not found anywhere.

                                                                                [[[[[[[[SCOPE CHAINING]]]]]]]

        The chain of lexical environments determines variable accessibility.

        '''  Lexical Environment = local memory + lexical parent '''

    }

    console.log(q); // Error if variable is not in global scope
    w();

*/
