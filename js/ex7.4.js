const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStory, id) {
    for (let candy of candyStore.candies) {
        if (candy.id === id) {
            return candy;
        }
    } 
    return undefined;
}

function getPrice (candyStore, id) {
    temp = getCandy(candyStore, id);
    if (temp) {
        return (temp.price);
    } else {
        return undefined;
    }
}

function addCandy(candyStore, id, name, price){
    temp = {
        name:   name,
        id:     id,
        price:  price,
        amount: 1
    }
    candyStore.candies[candyStore.candies.length] = temp;
}

function buy(candyStore, id){
    let c = getCandy(candyStore, id);
    if (c.amount > 0) {
        c.amount--;
        candyStore.cashRegister += c.price;
    }
}
    
addCandy(candyStore, 12345, "bamba", 6);
buy(candyStore, 12345);
console.log(candyStore);