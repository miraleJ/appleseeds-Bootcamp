'use strict';
var readlineSync = require('readline-sync');
 
// get a number from user
let num = readlineSync.questionInt('Please enter a number larger than 10. ');
// check the number and ask to corect if not ok
while (num <= 10) {
    num = readlineSync.questionInt('Please enter a number LARGER than 10. ');
}
console.log('thank you');
