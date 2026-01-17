// Promise Api <------> 

// [ Parallel api calls <----> making multiple api calls at the same time ]

// --------Sequential----------

/*

Call API 1 → wait → get response → Call API 2 → wait → get response
Total time: 2 seconds + 2 seconds = 4 seconds

*/

// --------Parallel--------

/*

Call API 1 → wait ↘
                    → get both responses
Call API 2 → wait ↗

Total time: ~2 seconds (both run at once)

*/

// parallel api call ---- fetching of data from the multiple sources don't depend on each other 


// Parallel Api Calling ----> Promise.all()

/*
-------------------------when all the promises accepted-------------------------------

--->  Promise.all() => takes an array(iterable) having multiple promise api
 
    - Makes the api call at the same time 
    - Time division will happen
    - Promise.all() wait for all the promises to finish there execution 
    - The minimun time taking api ---- will be waited to get completed
    - once completed ----> it will return an array of all the apis

//////////////////////////////////////////////////////////////////////////////////////////////////

---> Promise.all() ----- if any one of the promise is not gets resolved, the promise.all() return error 

    - Other promise calls will get accepted or rejected _____ ------ _____ but promise.all() -- error show
 ----------------------------------------------------------------------------------------------------------------------------------

    Promise.allSetteled() ----. cases where if any one or two api gets rejected and other get accepted so we get the results 

    - it doesnot bother 
    - it will be waiting for the settlement of all the promises

////////////////////////////////////////////////////////////////////////////////////////////////////////////

---> Promise.race() ---->  take an array of promises ----> the one finishes first returns -----> as soon as one promise is resolved it will return the value of the settled promise 

    - what if now the first promise to be setteled failed -----> then it will return the error


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

------> Promise.any() ====> similar to race ====> it will wait for the first success not the failure 

    - what if the promise got rejected === it will not do anything it will wait for the success so if any one rejected then it will ignore and move for the first success
    
    - what if all fails ==== then it will return the aggragate error list

*/


//Code

// Dummy promises for demo

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 Success"), 3000);
    setTimeout(() => reject("P1 Success"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"), 2000);
})

const arr = Promise.all([p1,p2,p3]);

arr.then(res => {
    console.log(res)
}).catch((err) => console.error(err))

/*

[ 'P1 Success', 'P2 Success', 'P3 Success' ]

[Done] exited with code=0 in 3.04 seconds

*/

// Second Code 

Promise.allSettled([p1,p3,p2]).then(res => console.log(res)).catch((err) => console.error(err));

// let's fail some of these promises 

//done

// Third code 

Promise.race([p2,p3,p1]).then(res => console.log(res))

// The first settled promise come here 


// What is the settlement of promise means ????


/*

---->  settled ===> Got the result 

 - resolve ----(1)  && - reject ----(2)

 - success ----(2)  && - failure ----(2)

 - fullfilled ----(3) && - rejected ----(3)

*/

//code forth

Promise.any([p1,p2,p3]).then(res => console.log(res)).catch(err => console.log(err))

// Aggregate Error





