
var b = 1;
function someFunction(number) {
 function otherFunction(input) {
    return b;
 }
 b = 5;
 return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

// //////////////
// // result == 5
// // 
var a = 1;
function b2() {
 a = 10;
 return;
 function a() { }
}
b2();
console.log(a);
// ////////////////////////

// /////////////
// // a = 1
// a inside the b2 function is local

//////////////////////////
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}

// ////////////////////
// // 3 3 3 
// while the timeout the loop continues