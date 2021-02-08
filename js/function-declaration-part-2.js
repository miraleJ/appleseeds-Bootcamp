/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
let impli = () => 'Welcome to Appleseeds Bootcamp!';

let expli = (a) => {return Math.pow(a, 2)};


// From function expressions to IIFE functions.
let x =(function(a) {return Math.sqrt(a);})(9);

let y = (function(a, b) {return Math.random() * (a - b) + b;})(1, 20);
