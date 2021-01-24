'use strict';
var readlineSync = require('readline-sync');
 
// get a number from user
let num = readlineSync.questionInt('Please enter a positive number ');
// check the number and ask to corect if not ok
while (num < 0) {
    num = readlineSync.questionInt('Please enter a positive number ');
}

// check edge cases
if (num === 0 || num === 1) {
    console.log(1);
}
else {
    // go from the number down to 1 and multiplay by itself
    for (let i = num-1; i > 1; i--) {
        num *= i;
    }
    console.log(num);
}