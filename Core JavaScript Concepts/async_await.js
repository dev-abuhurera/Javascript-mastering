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
    resolve("Promise Resolved Value!!!");
})


// So now it will not return wrap the promise to another promise
async function dataPr(){
    return p;
}

dataPr().then(res => console.log(res));


// ================================================================================================================================


// async - await combo ===> are use to handle promises 


function getNewData(){
    return p;
}

getNewData().then(res => console.log(res));

// This normal function will also return the same type of value 

// =======================================================================================================

// lets control it using async await 


async function handlePromise(){
    const promise = await p; // await is used in front of a promise that has to be resolved 
    console.log(promise);
}

// await can only be used in async function 

handlePromise();

// now the main thing in the use of the async/await and promise() is the 'stack trace'

/*

    - as the promise is given as the 

    -  FetchData().then(data => fixData()).catch() ====> now the fetchData will register a callback and move the code forward and the callstack will getEmpty and then the callBack will give the result after the stack is empty okie ....

    - So, now if the catch statement will work it will not know where the error comes while the asyn/await basically create its own virtual stack so it can actually trace where the error is occuring 


*/

