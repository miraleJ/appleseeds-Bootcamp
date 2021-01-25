var readlineSync = require('readline-sync');

function allPrimesToN (n) {
    'use strict';

    // check every number till n
    for (let i = 2; i <= n; i++) {
        if (isPrime (i)) {
            console.log(i);
        }
    };
};

function isPrime (n) {
    'use strict';

    let flag = true;
    // check edge cases
    if (n != 0 && n != 1) {
        if (n === 2) {
            flag = true;
        }
        else {
            // while didn't find a number to divide to and still under n/2
            let i = 2;
            while (flag && i <= n/2) {
                // if the number divide to i it is not prime
                if (n % i === 0) {
                    flag = false;
                }
                i++;
            };
        };
    } else {
        flag = false;
    };

    return flag;
};

// get a number from user
let num = readlineSync.questionInt('Please enter a positive number ');
// check the number and ask to corect if not ok
while (num < 0) {
    num = readlineSync.questionInt('Please enter a positive number ');
};

// print all the prime numbers till num
allPrimesToN (num);
