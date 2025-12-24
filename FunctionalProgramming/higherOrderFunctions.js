// Higher Order Functions


/*

    A function that take another function as an argument or if it returns another function is called as the higherOrderfunction.


*/

function x(){ // This is the callback function
    console.log("x");
}

function y(x){ // This is the higher order function
    x(); // calling the function
}



const radius = [10,2,32,100]; 


// now i will create the generic functions 

const area = function(radius){
    return Math.PI * radius * radius; // pie * r^2
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const calculate = function(radius, logic){ // not hoisted ----- function expression
    
    const ouput = [];

    for(let i = 0; i < radius.length; i++){
        ouput.push(logic(radius[i]));
    }

    return ouput;
    
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

// functional programming give us modularity and more compactness

// In the essence of the functional programming we try to make our code more and more modular -----> like we bring out the logic keep it inside the functions and make it more compact and reusable 









