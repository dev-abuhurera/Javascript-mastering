// What is the map method

// Map method in the js ===> takes a call back function and then apply that function to every single element of the array and then return an Array

const numbers = [1,2,3,4,5];
const squares = numbers.map(sqr);

console.log(squares); // map create a new array so our orignal array remain the same 

// map is some how like the for each




function sqr(element){
    return Math.pow(element, 2);
}

const ele = ["sponge", "burger", "marshmellow"];
const uprCse = ele.map(upperCase);

console.log(uprCse);


function upperCase(element){
    return element.toUpperCase();
}