let a = [1,2,3,4,5,6,7,8,9,10];
let b = 'qwertqwertqwertqwertiiiiioeeeajhgghje';

////////////////1//////////////
function doubleValues(arr) {
    return arr.map((val) => (val * 2));
}

console.log(doubleValues(a));

//////////////2////////////////
function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(num => {
        // 
        if (num % 2 === 0) {
            newArr.push(num);
        }
    });
    return newArr;
}

console.log(onlyEvenValues(a));

/////////////3/////////////////
function showFirstAndLast(arr) {
    let firstStringI = -1;
    let lastStringI = -1;
    arr.forEach((item, i) => {
        if (typeof(item) === 'string') {
            if (firstStringI === -1) {
                firstStringI = i;
            }
            lastStringI = i;
        }
    });

    return firstStringI != -1 ? [arr[firstStringI],arr[lastStringI]] : [];
}

console.log(showFirstAndLast(a));
console.log(showFirstAndLast([12,1,3,'',1]));
console.log(showFirstAndLast([12,1,3,'',1,'aa',111]));

///////////////4///////////////
function vowelCount(str) {
    let letterMap = new Map ();
    
    str.split('').forEach((letter) => {
        if (letter.match(/[AaEeIiOoUu]/)) {
            let temp = 1;
            if (letterMap.has(letter)) {
                temp = letterMap.get(letter) + 1;
            }
            letterMap.set(letter, temp);
        } 
    });
    return letterMap;
}

console.log(vowelCount(b));

////////////////5////////////////
const capitalize = s => s.toUpperCase();

console.log(capitalize(b));

//////////////6/////////////
function shiftLetters(str) {
    return str.split('').map(letter => {
        if (letter === 'z') {
            return 'a';
        } else if (letter === 'Z') {
            return 'A';
        } else {
             return String.fromCharCode(letter.charCodeAt(0)+1);
        }
    }).join('');
}

console.log(shiftLetters('abcZFxyz'));

/////////////////7////////////////////
const swapCase = (str) => {
    return str.split(' ').map((word, index) => (index % 2) === 0 ? word : capitalize(word)).join(' ');
}

console.log(swapCase('aaa bbb ccc ddd eee'));