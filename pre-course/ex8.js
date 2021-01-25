'use strict';

function have7(n) {
    // check the string of the number - if the digit 7 is in it
    let s = n.toString();
    // if the digit 7 exists in the number
    if (s.indexOf('7') === -1) {
        return false;
    } else {
        return true;
    };
}


// write every number from 1 to 100, with BOOMs...
for (let i=1; i <= 100; i++) {
    // if the number is divisible by 7
    if (i%7 === 0) {
        console.log('BOOM, ');
    }
    else {
        // check if the number have 7 in its digits
        if (have7(i)) {
            console.log('BOOM, ');
        } else {
            console.log(i, ' ,');
        }
    }
};
