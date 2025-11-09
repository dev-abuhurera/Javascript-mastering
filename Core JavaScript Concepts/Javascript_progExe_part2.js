// Execution Context in JavaScript


/*

    --->> When we run a JavaScript program, a [[[[[[ Global Execution Context ]]]]]] is created.


    ---------------------------------------------------------------
                    Two Phases of the Execution Context
    ---------------------------------------------------------------

        1️⃣  Memory Creation Phase
        2️⃣  Code Execution Phase


  //////////////////////////////////////////

        Code Example 👇

        n = 2;

        function square(num) {

            var ans = num * num;
            return ans;
        }

        var square2 = square(n);
        var square4 = square(4);

  //////////////////////////////////////////


                        Memory                      |||||||||                   Code Execution

--->>   n : undefined                               |       --->> n : 2   (Value assigned during execution)

        square : {                                 |       --->> Functions are not executed until invoked
            `Whole function code is stored here`   |
        }                                          |       --->> Function Invocation occurs

        square2 : undefined                        |       --->> Function call creates a **new Execution Context**

        square4 : undefined                        |               ---------------------------------------------------
                                                   |               ---->>>>>         Memory                ||||     Code
                                                   |               
                                                   |       memory allocation for        |     num : 2
                                                   |       variables & functions        |
                                                   |                                    |     ans : 4
                                                   |                                    |     
                                                   |       num : undefined              |     return ---> returns control
                                                   |       ans : undefined              |                  to the caller


---------------------------------------------------------------------------------------------------------------------------

    ----->>> When a function finishes execution, its Execution Context 
             is completely deleted from memory.

    ----->>> When the entire code completes, the Global Execution Context
             is also removed.
---------------------------------------------------------------------------------------------------------------------------

*/



/*            

                                                                                                [[[[[[[[ Call Stack ]]]]]]]]

--------->>> The **Call Stack** manages all Execution Contexts.

            🧠  The Global Execution Context sits at the base of the stack.
            🧩  Whenever a new function is invoked, a new Execution Context 
                 is created and pushed into the stack.

            🔁  Once the function finishes execution, its Execution Context 
                 is popped out from the stack.

            ⚙️  The Call Stack maintains the order of execution 
                 of all Execution Contexts throughout the program.

*/
