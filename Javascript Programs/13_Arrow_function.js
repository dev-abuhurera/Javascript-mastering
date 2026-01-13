// arrow functions 


const arrow = (num1, num2) => {

    return num1 + num2;

}

console.log(arrow(3, 5));


// now the (((implicit return)))

const arr = ( num1, num2 ) => (num1 + num2); // it is the ((( implicit return )))

// in paranthesis no return keyword needed 
// in curly braces needed

console.log(arr(3, 5));

const arr2 = () => ({name : "hitesh"}); // it is the returnig technique 

console.log(arr2());

