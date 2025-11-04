// What is the difference between the (((Function statement))) and (((Function expression)))


//                       ---> Hoisting <--- 

// a(); // "So this is the Hoisting <---> in memory creation phase the value is assigned"  
// b(); // And the b will work as the ---> variable ---> assigned undefined ---> and when that code line hits the variable is then assigned the value 

// then as the b is undefined the value is error


// What is a function statement and Function declaration <=====>

    function a(){

       console.log("Function Statement");

    }

// Function expression <======>

// functions act as a value like we initialized the variable with the value 

    var b = function (){

        console.log("Function Expression");

    }


// Anonymous function 

// function (){ // It is an error --> it is anonynous

// }

// function can't be expressed without name in there declaration but they are acting as the values when are assigned in the variable they act as the value 


// Named function expression

/*

    what is the named fx expression

    -----> Named Function expression are those expressions that are assigned to the variable with the name assigned to the function


*/

var c = function drive(){
    console.log(drive);
} // This is the named function expression


c();

// what if i do something like this ----->

drive(); 

// This is the referance error like ______ it is because the fn is defined in the local scope not in the global scope.

// So, it is accessable globally like this 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// First Class Functions

/*

Functions can be assigned as the arguments -----> 

we can even return a fn from a fn

The ability to be used the function ----> as the value , arguments, return etc

*/

    


    var bc = function (param1, param2){
        console.log("hello");
        return function(){
            console.log("Function is gonna get us back in return")
        }
    }

    function xyz2(){

    }

    bc(function (){
        console.log("fn is returned")
    }, xyz2); // this is completely valid we can pass anonymous fn as the argumenets in fn



// Arrow Functions



