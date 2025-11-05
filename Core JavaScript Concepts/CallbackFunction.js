// what is a callback function

/*

    A function that is passed into another function is a callback function...

    callback functions give us the access to the whole asynchronous world in the Javascript (A synchronous Single---threaded Language) ---> It can do one thing at a time in a specific order

*/


setTimeout(function () {
    console.log("Timer");
}, 5000); // As we know that the settimeout <===> The callback function is not executed here <===> It mean's that the settimeout will not wait here to be expired === this is where the callback fn gives the asynchronous nature 


function x(y){
    console.log("X");
    y(); // Now the function is called here 
}

x(function y(){ // This fn Y is the callback fn
    console.log("y");
});

// Now as the function Y is not called here ----> it will be called some how later in the code ----> thats why it is called as the callback function


// ---------------------------------------------------------- Now let's see what will happen in the call stack ----------------------------------------------------------

/*

    There is something a lot magical happened in the call stack ---->> First the function --- x executes and come to the call stack log the values and then get vanished from the callstack and after the 5 mili-seconds the callStack have again the execution context of the setTimeout function and thus value will be logged at the console

    --->
     
    Js has only one main thread --- (The callstack and everything that is done is done through it)

    --->


    So.... As everything is done through this call stack thus anything that block this call stack it is ------>>BLOCKING THIS MAIN THREAD<<------

    we should never block this main thread......

---->> Like if some of the function in js takes time -----> The js will not be able to execute anyother operation because it has only one callstack and that's why it is said that we should use the ------- async ------ operations <===> for the things that take time 

// AAAAAAAHHHHHHHH -----> 

    So if the js doesnot had the callback functions and if it is not able to pass the function into another funcitons the first class functions ---- we were not be able to perform this async operations

*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Event handler in js

document.getElementById("click").addEventListener("click", function xyz (){ // this function is called as the handler

    // This is the callback function ----- So what will happen in this the event listen will attach the callback function to the button and then execute the function when the event occur....
    // It basically push the function into the callstack....

    console.log("Button Clicked!!!");

});



// closure example

function addedEventlistner(){
    let count = 0;

    document.getElementById("click").addEventListener("click", function fn(){
        console.log("button is clicked", ++count);
    })
}

addedEventlistner();

// What is the scope of this event handler call back function -----> it is this function + its lexical environment ----> so it is that closure -----> and then the global environment === total scope of this function

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
    Garbage Collection + RemoveEvent Listner
*/


// Why we need to remove the event listener so it is basically because of the heaviness of the Event Listener -----> Because event listeners create closures ----- and even if the callstack is empty like nothing execute memory has the closures so good practice ---- remove this eventlistenere and it is then garbage collected









