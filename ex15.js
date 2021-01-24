var readlineSync = require('readline-sync');
 
(function () {
    'use strict';

    let a = ['aa', 'baa', 'ca'];
    let b = ['d', 'e', 'fa'];

    function f (a , b) {
        console.log(a.concat(b));
    }

    f(a,b);
}) ();