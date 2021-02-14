const numbers = [1, -5, 666, 2, 400, 11];

function compareUp (a, b) {
    return a - b;
}

function compareDown (a, b) {
    return b - a;
}

console.log(numbers.sort(compareUp));
console.log(numbers.sort(compareDown));