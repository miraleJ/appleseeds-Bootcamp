var readlineSync = require('readline-sync');

(function () {
    'use strict';

    // get a string from the user
    let str = readlineSync.question('Please enter a sentence. ');
    
    // put each word of the sentence in an array
    let strArr = str.split(' ');

    let maxWord = '';
    strArr.forEach(word => {
        // if the word is a word and not numbers or symbols
        if (isWord(word)) {
        //if (true) {
            // if the word is longer from the max that is saved
            if (word.length > maxWord.length) {
                maxWord = word;
            }
        }
    });

    console.log(maxWord);

    
function isWord (word) {
    var letters = /^[A-Za-z]+$/;
    
    return word.match(letters); 
}

})();

