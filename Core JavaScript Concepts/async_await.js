// Async _ Await ----> 

/*
    - What is async?
    - What is await?
    - How async await works behind the scenes?
    - Examples of using async/await
    - Error Handling
    - async await vs promises

*/



// async always return a promise

async function getData(){
    // This is gonna return a promise

}

// There will be two Cases <----> Explicit Returning of promise and Implicit Returning of promise

// async function dataRet(params) {
//     return new Promise(resolve, reject){
//         // here it will return a promise
//     }
// }

// Other one is we can return a value other than that of the promise
async function dataRet(params) {
    // if we return a value 
    return "string" 
    // return true 
}

// so it will wrap this value into a promise and then return us 

const dataPromise = dataRet();

dataPromise.then(res => console.log(res)); // this is how we get the data from the promise

// ------------------------------------------------------------

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!")
    }, 10000);
    
})

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!")
    }, 5000);
    
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!")
    }, 15000);
    
})


// So now it will not return wrap the promise to another promise
async function dataPr(){
    return p;
}

dataPr().then(res => console.log(res));


// ================================================================================================================================


// async - await combo ===> are use to handle promises 


// function getNewData(){
//     p.then(res => console.log(res));

// }

// getNewData()

// This normal function will also return the same type of value 

// =======================================================================================================

// lets control it using async await 


// async function handlePromise(){
//     const promise = await p; // await is used in front of a promise that has to be resolved 
//     console.log(promise);
// }

// await can only be used in async function 

// handlePromise();

// now the main thing in the use of the async/await and promise() is the 'stack trace'

/*

    - as the promise is given as the 

    -  FetchData().then(data => fixData()).catch() ====> now the fetchData will register a callback and move the code forward and the callstack will getEmpty and then the callBack will give the result after the stack is empty okie ....

    - So, now if the catch statement will work it will not know where the error comes while the asyn/await basically create its own virtual stack so it can actually trace where the error is occuring 


*/

// ============================The normal way=======================



// function getNewData(){

//     p.then(res => console.log(res)); // the promise is to resolve after 10 sec
//     console.log("Promise will resolve after 10 seconds");

// }

// getNewData()


// ============================== Async Await ========================

async function handlePromise(){

    const promise2 = await p1; // await is used in front of a promise that has to be resolved 
    console.log("This is the asyn one")
    console.log(promise2);

    const promise = await p; // await is used in front of a promise that has to be resolved 
    console.log("This is the asyn one")
    console.log(promise);

    const promises = await p2; // await is used in front of a promise that has to be resolved 
    console.log("This is the asyn one")
    console.log(promises);

}


handlePromise(); // do the promise print first or not 

// Damm the code literaly waited for the await to resolve the promise and then it worked on the code 

// JS Engine waited for the promise to resolve ----- when we use the async await -----> this is the difference in this 

 
// ==================================================================

/*

    - What i did is that ==> i have created 2 promises in the aync functions -----

    1. is to be resolved in the ===> 10 sec and other in the 5 sec now what happens that if the || ===> 10 sec promise resolve first then the 5 sec promise also resolved and the output come together 

    2. if the 5 sec promise come first then it work the seperate way first the 5sec wala get resolved and then the second one 10 sec resolved later 


*/


/*
    ---> Dynamics of the async - await ====>

        When our function comes into the call stack ===> 'what will happen it will -----> it starts the execution ===> so when the first await come what will happen _____ it will see that the promise is not resolved yet so what it will do it will move out of the call stack and then after the 10 seconds what it will do it will come back into the call stact as soon as the promise is resolved so it will print the result and then it will check the next promise then again move out of the call stack and this is how the it will again wait and then after the resolving of the second promise it will come back to call stack and print again it will not block the main thread

*/


// Js is not waiting ---- it is suspending the function 

// =======================================Real life coding Example====================================================

const API_URL = "https://api.github.com/users/dev-abuhurera";

async function fetchApi() {


    const data = await fetch(API_URL); // fetch will return a promise

    // fetch() => returns a response object => that has a body which is a readable Stream => and it can be converted into the json()

    // respose.json() => that is again a promise

    const jsonData = await data.json()

    console.log(jsonData);

    // fetch().then(res => res.json()).then(res => console.log(res)); // without async await 
    
}

fetchApi();


// ======================================================================== Error Handling ======================================================================================


async function fetchApi() {

    try{

        const data = await fetch(API_URL); // fetch will return a promise

        // fetch() => returns a response object => that has a body which is a readable Stream => and it can be converted into the json()

        // respose.json() => that is again a promise

        const jsonData = await data.json()

        console.log(jsonData);

        // fetch().then(res => res.json()).then(res => console.log(res)); // without async await 

    }catch(error){
        console.log(error);
    }
    
}

fetchApi();


// ====================================================================================================================================================================

