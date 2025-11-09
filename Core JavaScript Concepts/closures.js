// What are Closures

function x() {
    var a = 7;

    function y() {
        console.log(a);
    }

    y();
}

x();

// Closure is actually a function bundled together with its lexical environment.

/*
    Function + Lexical scope === Closure

    Function bound together with its lexical environment

    For example:
*/

function x() {
    var a = 7;

    function y() {
        console.log(a);
    }

    y();
}
x();

/*
    [---->> Inner function (y) is inside its lexical environment (x)
    so it forms a closure with its lexical environment.]

    Function + along with its lexical environment ====>> Closures

    Thus, it forms a closure ---> and it has the access to the parent lexical scope.
*/

// ------------------------------------------------------
// Closures and Functions
// ------------------------------------------------------

function x() {
    var a = 7;

    function y() {
        console.log(a);
    }

    y();
}
x();

// ------------------------------------------------------
// Functions can be assigned to a variable
// ------------------------------------------------------

function x() {
    var a = function y() {
        console.log(a);
    };
    y();
}
x();

// ------------------------------------------------------
// Functions can even be passed as parameters
// ------------------------------------------------------

function x(y) {
    var a;
    y();
}
x(function y() {
    console.log(a);
});

// ------------------------------------------------------
// Functions can be returned from other functions
// ------------------------------------------------------

/*
    This is where closures become really interesting.
*/

function x() {
    var a = 7;

    function y() {
        console.log(a);
    }

    return y; // Returning the function
}

var i = x(); // Logs the returned function
console.log(i); // Function body is printed
i();

/*
    When we invoked x(), an execution context was created.
    The function returned `y`, and after that, the execution context of x()
    was popped off from the call stack.

    Even though x() no longer exists in the call stack,
    the returned function still remembers its lexical scope.
    That’s what makes closures so powerful.

    The returned value is not just a function —
    it’s a closure (function + lexical environment).
*/

// ------------------------------------------------------
// Another example
// ------------------------------------------------------

function x() {
    var a = 7;

    return function y() {
        console.log(a);
    };
}

var i = x();
console.log(i);
i();

// ------------------------------------------------------
// Modifying variables before returning
// ------------------------------------------------------

function x() {
    var a = 7;

    function y() {
        console.log(a);
    }

    a = 100; // Updated before returning
    return y;
}

var i = x();
console.log(i);
i();

/*
    In this case, the variable `a` is updated before returning the function.
    Since closures preserve references (not values), the updated value will be printed.
*/

// ------------------------------------------------------
// Deeply nested closure example
// ------------------------------------------------------

function c() {
    var b = 600;

    function x() {
        var a = 7;

        function y() {
            console.log(a, b);
        }

        y();
    }

    x();
}

c();

/*
    In this example:
    The inner function `y` can access both `a` (from x) and `b` (from c),
    showing that closures can extend across multiple lexical scopes.
*/
