var readlineSync = require('readline-sync');

function isPalindrome (str) {
    'use strict';

    // split each char of the string to array, reverse the order of the chars, and join it to a string again
    let reverseStr = str.split('').reverse().join(''); 

    return str === reverseStr;    
};

let str = readlineSync.question('Please enter a sentence. ');
let s = 'It is not a palindrome!';
if (isPalindrome(str)) {
    s = 'It is a palindrome!';
};
console.log(s);
