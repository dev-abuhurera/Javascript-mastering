// What are the closures


function x(){

    var a = 7;

    function y(){

        console.log(a);

    }

    y();
}

x();


// closure is the actually a function bundled together with its lexical environment...

/*

    Function + Lexical scope === Closure  ----(1)

    Function bind together with its lexical environment ----(2)


        For example ====>


            
                    function x(){

                        var a = 7;

                            function y(){

                                console.log(a);

                            }

                            y();         
                        }
                        x();


        [---->> Inner function ---> (y) ---->> is in its lexical environment ----->>> which is (x) ------->>>>  so it forms a closure with its lexical environment....]

                                                Function + along with its lexical environment ====>> Closures

                                    Thus, it forms a closure --->> and it has the access to the parent lexical scope <<-------->>

*/


//                                                                       <===   Closures and Functions ===>



    function x(){

    var a = 7;

        function y(){

            console.log(a);

        }

        y();         
    }
    x();


// what can be done in the functions --->>

 //                                                                             Functions can be assigned to a variable

  function x(){

    var a = function y(){

            console.log(a);

        }
        y();         
    }
    x();

 //  Functions can even be passed as the parameter in the functions


  function x(){

    var a 
        y();         
    }
    x(function y(){

            console.log(a);
        });

//                                              <<<------- Even we can return these functions from the functions ------>>>


// We can even return a function ---> a complete function


/*
        This is where the closures become difficult
*/


 function x(){

    var a = 7;

       function y(){

            console.log(a);
        }
        
        return y; // This is the returning of the function outside 
    }
    var i = x(); // Now ---- this will log out the whole function 

    console.log(i); // It gave the function


/*

    So, as we envoked the function x() ===> what will happen an execution context will be created ====> and the execution context will allocate the memory and all the things will happen and the value is returned in the variable ====> and this variable will be acting as the function

    ===> The x execution context will no longer be in the call stack ===> Now this function exist in the variable because we returned it 

    ===> iMPORTANT

        When we returned the function outside ===> it doesnot resides inside the x ====> anymore

        So, now how it will behave ====> now this variable i has the function y so what is the lexical scope behaviour and all

        How this (i) will now behave outside the scope ===> like outside the function scope ===> 
            
        
            // For example 

            now the function is residing in the i and we have a long and long program and at some point of time we called the function i



*/

     
i(); // so what will happen now ====> it printed out the value 

// here are the closures 

/*

        ====> Functions are that much beautifull that even when they are returned ---->> from other function then they remember there lexical scope 
        Tho ==> x don't exist or all 

        ====> what we can say is that the returned value ===>> is not the function that is returned ===> It is the closure that is returned (function + lexical scope)

*/ 






function x(){

    var a = 7;

        return function y(){ // it is also the same thing here ====> writing the return statement where it is declared 

            console.log(a);
        }
        
         
    }
    var i = x(); 
    console.log(i);


i();

// ========================================================================================================================================================================


function x(){

    var a = 7;

        function y(){ // it is also the same thing here ====> writing the return statement where it is declared 

            console.log(a);
        }

        a = 100;
        return y;
      
    }
    var i = x(); 
    console.log(i);


i();

/*

In the above case ===> before returning the function i have changed the value ----> of the variable to which the inner function is returning

So what will happen??

Is the value is going to change or what will happen now 

*/

/*
 This is where we need to understand that the variable inside the function ====> is actually the referance to the memory location

 and is preserved when the value returns so the referance is the same value can change tho


*/

// output will be updated adn this is how closure preserve things


// Now let make it go deep down more



function c(){

    var b = 600;

    function x(){

    var a = 7;

        function y(){ 

            console.log(a, b);
        }

        y();
      
    }
    x();
}

c();

// This is also the closure where the inner function will try to access the variable in the lexical parent and the then also the lexical scope of the outer parent


