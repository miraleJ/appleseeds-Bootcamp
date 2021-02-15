const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];

   /////////////////1//////////////
const allNames = data => data.map(obj => obj.name);

console.log(allNames(data));


/////////////////2/////////////////
const before1990 = data => data.filter(obj => (Number(obj.birthday.split('-')[2]) < 1990));

console.log(before1990(data));

/////////////3/////////////////
const createFoodsList = data => {
    foodList = new Map();
    data.forEach(person => {
        foodList = addArrItemsToMap(person.favoriteFoods.meats, foodList);
        foodList = addArrItemsToMap(person.favoriteFoods.fish, foodList);
    });
    return foodList;
}

const addArrItemsToMap = (arr, itemsMap) => {
    if (typeof(arr) === 'object') {
        arr.forEach(item => {
            let temp = 1;
            if (itemsMap.has(item)) {
                temp = itemsMap.get(item) + 1;
            }
            itemsMap.set(item, temp);
        });
    }
    return itemsMap;
}

console.log(createFoodsList(data));

// /////////////
// let letterMap = new Map ();
    
// str.split('').forEach((letter) => {
//     if (letter.match(/[AaEeIiOoUu]/)) {
//         let temp = 1;
//         if (letterMap.has(letter)) {
//             temp = letterMap.get(letter) + 1;
//         }
//         letterMap.set(letter, temp);
//     } 
// });
// return letterMap;