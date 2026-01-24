// Arrays

// Arrays in js -----> can store multiple datatypes together

const arr = ["an", 12, [
    "22"
], {
    'name' : 'abuhurera'
}, true];

// Arrays are iterables 

// now the arrays memory usage are like ------


/*

    const arr = [1 , 2 , 4];


    arr ---- created in the stack ----> pointing to the heap memory address where the orignal data is stored


*/


const arr1 = [1 , 2 , 4];

const arr2 = arr1;

// This is the shallow copy ==== arr1 and arr2 point to the same memory location

// While the hard copy ===> where the two variables will point to the seperate memory location


// =============================================================================================================

// How the array is being used in the case 

// ===>

 