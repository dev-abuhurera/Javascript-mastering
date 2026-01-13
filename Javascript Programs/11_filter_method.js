// Filter method in javascript

// filter method in js ---> creates an new arrow after filtering out elements 


let number = [10,23,11,15,16,20]; // array of numbers 

let evenArr = number.filter(isEven); // it will check out the and filter all those are even and return us an array of even nums

let oddArr = number.filter(isOdd);

console.log(evenArr);
console.log(oddArr);


function isEven(element){
    return element % 2 === 0; // we will return a boolean 
}

function isOdd(element){
    return element % 2 !== 0; // we will return a boolean 
}


