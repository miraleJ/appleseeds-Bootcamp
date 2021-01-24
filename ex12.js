var readlineSync = require('readline-sync');

(function () {
    'use strict';

    // get a string from the user
    let str = readlineSync.question('Please enter a sentence. ');
    
    let strChange = str.split('');
    for (let i = 0; i < strChange.length; i++) {
        let c = strChange[i];
        // if the character is vowel
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'y') {
            strChange[i] = c.toUpperCase();
        }
    }
    
    // rejoin the array to string
    str = strChange.join('');
    console.log(str);
})();