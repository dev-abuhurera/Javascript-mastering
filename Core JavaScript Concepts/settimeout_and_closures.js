// Settimeout and closures


// function x(){

//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000); // So after 3 sec the code will execute

// }

// x();


// Second thing -------------------------->>>



// function x(){

//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000); // So after 3 sec the code will execute

//     console.log("Namaste Javascript!!!") // Now what will happen ????
// }

// // Ah it printed first and then waited for about 3 sec and then executed the function

// x();

// `What happened was that first the ---> Print statement executed First even before the [settimeout] ----> Like the behaviour is odd ----> 'First of all ====> why the code execute the code line didn't ran.`

/*

    Now what is happening ----> The settimeout callback function created a closure ----> it means the function and the lexical scope so the function have the referance to the outer variable right

    // ok so what will happen ---->> Javascript take the Callback Function <===> attaches a timer and then store it at side and then proceed <===> so basically javascript keeps procedding and keep performing it's functionality 
    

*/


// function x(){

//     for(var i = 1; i <= 5; i++){
//         setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
    
//     }
//     console.log("We Gonna Print the value of ----(i)---- after every second....")
// }

// x();


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// .......Ahhhh, What Will happen First of all the loop iteration will push the function to the side so what will happen <===> the function attaches the timer to the function move the function to the side and then completes the iterating and making the copies and as the clousre was formed the value of i at the referance is changed so then the js will move on and print the value and when the timer expires it will run the functions........




// Now ---> if i use the let ---> let has the block scope right so what will happen now 



function x(){

    for(let i = 1; i <= 5; i++){
        setTimeout(() => {
        console.log(i);
    }, i * 1000);
    
    }

    console.log("We Gonna Print the value of ----(i)---- after every second....")
}

x();




 