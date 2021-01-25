'use strict';
var readlineSync = require('readline-sync');
 
// get info from user
var name = readlineSync.question('What is your name please? ');
console.log('Hi ' + name + '!');
