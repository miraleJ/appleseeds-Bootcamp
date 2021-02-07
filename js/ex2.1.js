function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

let isr = describeCountry ('Israel', 8, 'Jerusalem');
let bel = describeCountry ('Belgium', 11, 'Brussels');
let tho = describeCountry ('South Africa', 59, 'Cape Town');

console.log(isr);
console.log(bel);
console.log(tho);