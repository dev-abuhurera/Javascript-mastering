// Spread operator ----> also the unpacking operator in js ----> it is used to unpack the elements from an iterable like Array or the string


let arr = [1,2,3,4,5];

let max = Math.max(...arr); // this will spread the numbers 

console.log(...arr)

console.log(max);

let min = Math.min(...arr);

console.log(min);

let str = "dev-Abuhurera"

console.log(...str);