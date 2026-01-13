// what is this keyword

/*

    This refers to the current context ------ (1)

    context ---- objects, variables in a given scope

*/

const user = { // this refer to the existing referance to the context 

    username: "ahsan",
    savings: "1000",

    welcomecall: function(){

        console.log(`${this.username}, welcome to Scatch`)

        console.log(this); // this is referencing to the whole context that is existing here
    }

    // It gave us this.username ----> like it is refering to the current context 
    // At, this point the current context is the ----> given variables ----> [username], [savings], and the function [welcomecall()]

}

// console.log(user.welcomecall());
// user.username = "ali";
// console.log(user.welcomecall());

 // this is concerned with the present context ====> 

console.log(this); // now it is returning an empty array

// in the browser it return a window object ===> with a lot of methods ----> this is refering to the window object in the browser


function show() { // now what is this 

  console.log(this);

}

// show();

const show2 = function goShow(){

    let name = "hurera";
    console.log(this.name); // it is still undefined 
    
}

// show2()


const arr = () => {

    console.log(this);

}


arr();

// arrow functions don't have there own this there own referance so they inherit from the surrounding lexical scope 

const obj = {

    name : "anaya",
    age : 43,
    id : arr()


}

obj.id;