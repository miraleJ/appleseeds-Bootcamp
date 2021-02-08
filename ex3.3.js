let worldPopulation = 7900;

function precentageOfWorld1(population) {
    return (population/worldPopulation)*100;
}

let china = precentageOfWorld1(1441);
let israel = precentageOfWorld1(9);
let us = precentageOfWorld1(328);

console.log (`China has ${china}% of the world population.`);
console.log (`Israel has ${israel}% of the world population.`);
console.log (`US has ${us}% of the world population.`);

let precentageOfWorld2 = (p) => (p/worldPopulation)*100;

china = precentageOfWorld2(1441);
israel = precentageOfWorld2(9);
us = precentageOfWorld2(328);

console.log (`China has ${china}% of the world population.`);
console.log (`Israel has ${israel}% of the world population.`);
console.log (`US has ${us}% of the world population.`);
