// // <-------- Promises --------> 

// // Promise is actually an object that ensures to be filled with the data in the later part of the code execution 

// // promise creation

// const githubApi = "https://api.github.com/user/dev-abuhurera";

// const promise = fetch(githubApi);

// console.log(promise); // At this point the promise object is just being said as pending but it is in pending stage at the time of loging but it 
// // is resolved and the data is reached too 

// promise.then(function (data){

//     console.log(data);

// });

// // Thus, here it is the promise is now resolved ====> and we got the response too

// // Thus, the promise is an object with the data undefined and it got filled on the later stage when the code is being executed and promise is resolved

// // Promise ---> then ----> chain

// const cart = ['bag', 'clothes', 'towels'];

// createOrder(cart).then(data => paymentRequest(orderId))
// .then(inovice => locationInfo(inDetail))
// .then(details => confirmOrder(details))

// So this is the use of the createOrder and then when the promise is resolved it will take on the data or result from the promise call another 
// api on this and so on 


// ---------------------------------------------------------------------------------------------------------------------------------------------

/* Creating our Own Promise */


const cart2 = ["shoes", "pants"];

const prom = createOrder(cart2); // This is an api call to db for creating an order
console.log(prom); 

// At this point ---->> empty promise object is created and then it attaches the callback function later on and how it will do so ---- it will happen when the timer is running in the promise 

// Consuming 

prom.then(function (orderId){
    console.log(orderId); // This will be called if the we resolve the promise
})
.catch( function(err){ // failure callback
    console.log(err.message); // This will be called if promise got rejected
})


// Producer Part
function createOrder(cart){

    const pr = new Promise(function (resolve, reject){

        // Here we will define our logic

        // Check cart is valid or not
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err); // here we rejected our promise
            return;
        }

        // logic for createOrder

        // We will make a db call and orderId will gonna be recieved
        const orderId = "12345"; 

        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

function validateCart(cart){
    return true; // if we mark it false now 
}

// ---------------------------------------------------------


// [[[[[[[[[[[[[[Callback Chaining]]]]]]]]]]]]]

// when we chain things we need to return the data we passed or the promise itself and it is then handled in the next resolving function

prom.then(function(orderId){

    console.log(orderId);
    return orderId;

})
.then(function(orderId){

    return proceedToPayment(orderId);

})
.then(function(paymentInfo){

    console.log(paymentInfo);

})
.catch(function(err){

    console.log(err.message);  

})
.then(function(){

    console.log("then method can be called after the catch it means catch will look at the failures occuring above it")

})
 