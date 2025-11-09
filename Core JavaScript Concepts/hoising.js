// --------------------------------------------------------------------------------------------------------------
//                                              Hoisting in JavaScript
// --------------------------------------------------------------------------------------------------------------

// let x = 5;

// function getName() {
//     console.log("Javascript");
// }

// console.log(x);
// getName();

// The code is executed as expected.


getName(); // We are trying to invoke the function before it is even created.

// console.log(x);

// ✅ So the getName function executes successfully even before its creation.


let x = 5;

function getName() {
    console.log("Javascript");
}


// --------------------------------------------------------------------------------------------------------------
//                                   Memory Creation Phase (Before Execution)
// --------------------------------------------------------------------------------------------------------------

/*
    During the memory allocation phase, all variables and functions
    are hoisted to the top of their scope.

    Example:

        let x = 5;
        function getName() {
            console.log("Javascript");
        }

        getName();
        console.log(x);
        console.log(getName);

    ------------------------------------------
    Memory Allocation (Before Execution):

        x = <uninitialized>  // for let/const
        getName = function() { console.log("Javascript"); }
    ------------------------------------------
*/


// --------------------------------------------------------------------------------------------------------------
//                          undefined vs not defined
// --------------------------------------------------------------------------------------------------------------

/*
    "undefined"  → means the variable is declared but not assigned yet.
    "not defined" → means the variable doesn't exist in the memory.
*/


// Example: Arrow Function behaves differently (not hoisted like function declarations)
console.log(getname()); // ❌ TypeError: getname is not a function

// console.log(y); // ✅ Prints 'undefined' because 'var' is hoisted as undefined

var y = 7;

// If we call a variable before it's defined and it's declared with 'var' → undefined
// But if it's not declared at all → ReferenceError: not defined


// --------------------------------------------------------------------------------------------------------------
//                      Arrow Function behaves like a variable (not hoisted fully)
// --------------------------------------------------------------------------------------------------------------

var getname = () => {
    console.log("Hello");
};

// If we console.log(getName) before its initialization,
// it will give 'undefined' just like other variables.


// --------------------------------------------------------------------------------------------------------------
//                      Function Expression behaves the same way
// --------------------------------------------------------------------------------------------------------------

/*
    Another way of writing a function is using Function Expression.
*/

var getName2 = function () {
    console.log("Function Expression Example");
};

// The same case applies here:
// During hoisting, getName2 is treated as a variable → initialized with undefined.
// The actual function is assigned at runtime.


// --------------------------------------------------------------------------------------------------------------
// Summary:
// --------------------------------------------------------------------------------------------------------------
/*
    Function Declaration → Fully hoisted (can be called before defined)
    Function Expression → Hoisted as variable (undefined until assigned)
    Arrow Function       → Same as Function Expression (not hoisted as a function)
    var                  → Hoisted as undefined
    let/const            → Hoisted but not initialized (temporal dead zone)
*/
