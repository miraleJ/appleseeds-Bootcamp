const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

const whatTheSame = (a1, a2) => {
    let same = [];
    for (let i = 0; i < a1.length; i++) {
        // check the i element of a1 with all elements of a2
        for (let j = 0; j < a2.length; j++) {
            if (a1[i] === a2[j]) {
                //save the element in same
                same.push(a1[i]);
            }
        }
        
    }
    return same.length > 0 ? same : false;
}

console.log(whatTheSame(food, food1));