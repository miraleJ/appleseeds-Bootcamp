function average(a, b, c) {
    return ((a + b + c) / 3)
}

let avJohn = average(89, 120, 103);
let avMike = average(116, 94, 123);

if (avJohn > avMike) {
    console.log(`The winner in average is: John, with the average score of ${avJohn}!`);
} else if (avJohn < avMike) {
    console.log(`The winner in average is: Mike, with the average score of ${avMike}!`);
} else {
    console.log(`There is no winner because the average score of Mike and John is equal to: ${avJohn}`);
}