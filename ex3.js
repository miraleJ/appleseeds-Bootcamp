'use strict';
var readlineSync = require('readline-sync');
 
// get anumber from user
let num = readlineSync.questionInt('Please enter a number between 0 to 9: ');
// check what the number is and write it
switch (num) {
    case 0:
        console.log('ZERO');
        break;
    
    case 1:
        console.log('ONE');
        break;

    case 2:
        console.log('TWO');
        break;

    case 3:
        console.log('THREE');
        break;

    case 4:
        console.log('FOUR');
        break;

    case 5:
        console.log('FIVE');
        break;

    case 6:
        console.log('SIX');
        break;

    case 7:
        console.log('SEVEN');
        break;

    case 8:
        console.log('EIGHT');
        break;

    case 9:
        console.log('NINE');
        break;

    default:
        break;
}
