// javascript is a synchronous single threaded language 

// Call backs have a very important role in writing the asynchronus code in javascript 

setTimeout(function (){

    console.log("CallBack!!!")

}, 5000); // This is the callback function after the 5s it is executed !!! ----- So these are really imp in async codes

// Use of callbacks in the Ecommerce - website ===>>

const cart = ["Shoes", "Bags", "Sunglasses", "Boxes"]; // This is a cart

api.createOrder(); // This is the create order api in the backend

api.proceedToPayment(); // This is then to proceed to the payment 


// now this is an async task now it will be gonna maintain by the asynchronus nature code 

// api.createOrder()



api.createOrder(cart, () => { // So this is how we write the async code in javascript 

    api.proceedToPayment();

});

// Now, this is the main responsibility of the create order api <====> to create the order first and then call the function back 


// CreateOrder -----> ProceedToPayment ------> ShowOrderSummary -------> updateWallet  (This dependency is resolved in through callbacks)


api.createOrder(cart, () => { 

    api.proceedToPayment(() => {

        api.showOrderSummary();

    });

});


// Now it is the responsibility of this proceedToPayment api to call the callbackfunction after showing the payment


api.createOrder(cart, () => { 

    api.proceedToPayment(() => {

        api.showOrderSummary(() => {

            api.updateWallet();
        
        });

    });

});

// api.updateWallet(); // Now it is the responsibility of the showordersummary to call this callback


/*

    This is called as the callbackHell [-----------]

    One callback dependant to other and like this =====> the thing is very messy and in large codespace things are very 

    dependant and messy

*/



/*

    Now, the second thing in the callback problems ------> {{{{inversion of control}}}} =======> 

        Like in the case of one callback passed to the second callback -------> like we are completely giving the control of our own code to the second function

        Like it is the complete problem the inversion of control and now we don;t know the callback will ever occur or not 

*/

