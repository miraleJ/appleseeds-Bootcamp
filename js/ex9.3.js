/////////a///////////////
const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];

console.log(foods.sort());
console.log(foods.reverse());

////////////////b////////////
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
   ];

function compareWithUppercase (a, b) {
    a.toUpperCase();
    b.toUpperCase();
    return a.localeCompare(b);
}

console.log(foodsWithUpperCase.sort(compareWithUppercase));
console.log(foodsWithUpperCase.reverse());

////////////////c/////////////
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

function compareLen(a, b) {
    return a.length - b.length;
}

console.log(words.sort(compareLen));