
var readlineSync = require('readline-sync');

function sum10 () {
    'use strict';
    // get numbers from user
    var num1 = readlineSync.questionInt('Please enter the first number: ');
    var num2 = readlineSync.questionInt('Please enter the second number: ');

    if (num1 + num2 == 10) {
        console.log('make 10');
    }
    else
        {console.log('nope');}
};

sum10();