var readlineSync = require('readline-sync');

function starInstadSpace () {
    'use strict';

    let str = readlineSync.question('Please enter a sentence. ');
    console.log(str.split(' ').join('*'));
};

starInstadSpace();
