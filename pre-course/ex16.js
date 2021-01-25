var readlineSync = require('readline-sync');
 
(function () {
    'use strict';

    function doReverse (arr) {
        return arr.reverse();
    }

    console.log(doReverse([1,2,3,4,5,5,6]));
}) ();
