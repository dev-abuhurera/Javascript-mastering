// Smallest program in JavaScript is the empty file 

/*

    ----->>        Even an empty file (with nothing inside it) is still a valid JavaScript program  <<----

    --->>          Because when the JavaScript Engine runs — it still performs certain internal tasks.
    
    --->>          The engine automatically creates two main things:

                    1. A Global Object (in browsers, it’s the "window" object)
                    2. A 'this' keyword (which points to that global object)

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        Whenever any JS program is executed ----->>
                        
                                A Global Object ( window === this ) is created
                                AND
                                A Global Execution Context is also created.


                    ----->> At the Global Level ----->> 
                            'this' always points to the Global Object (in browsers → window)

                                                                                                                        | > Global Level --->> 'this' << ---
                                                                                                                        
                    ----->> Whenever a new Execution Context is created ----->>
                            A 'this' keyword is also created along with it
                                                                                                                        | > Local Level  --->> 'this' << ---


*/


// ------------------ GLOBAL SPACE ------------------
// Anything that exists outside a function is in the Global Space


var a = 10;


function b() {
    var x = 100;
}


console.log(a);
console.log(window.a);
console.log(this.a);

// -------------------------------------------------------------
// '' So this [[window]] -- [[this]] -- [[a]] --->> 
//     All are referring to the same one object in the program ''
// -------------------------------------------------------------
