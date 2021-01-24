var readlineSync = require('readline-sync');
 
(function () {
    'use strict';

    // get tha array wanted length
    let arrLen = readlineSync.questionInt('How long the array should be? ');
    while (arrLen <= 0) {
        console.log('It suold be a positive number! How long the array should be? ');
        arrLen = readlineSync.questionInt('How long the array should be? ');
    }

    // put random numbers in the array
    let arr = [];
    for (let i=0; i<arrLen; i++) {
        arr.push (Math.floor (Math.random () * 49) +1);
    }
    
    // find and print min and max
    console.log('The min is: ' + Math.min(...arr));
    console.log('The max is: ' + Math.max(...arr));
    

}) ();