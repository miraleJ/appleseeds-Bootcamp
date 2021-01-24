'use strict';
var readlineSync = require('readline-sync');

// generate the restaurants:
let rest = {
    name:       'aa',
    kosh:       true,
    mehd:       true,
    foodKind:   'Chinese'
};
let restaurants = [rest];
rest = {
    name:       'bb',
    kosh:       false,
    mehd:       false,
    foodKind:   'Italian'
};
restaurants[1] = rest;
rest = {
    name:       'cc',
    kosh:       true,
    mehd:       false,
    foodKind:   'Meat'
};
restaurants[2] = rest;
rest = {
    name:       'dd',
    kosh:       false,
    mehd:       true,
    foodKind:   'Fish'
};
restaurants[3] = rest;
rest = {
    name:       'ee',
    kosh:       true,
    mehd:       true,
    foodKind:   'Sushi'
};
restaurants[4] = rest;
rest = {
    name:       'ff',
    kosh:       false,
    mehd:       false,
    foodKind:   'Fast-food'
};
restaurants[5] = rest;
rest = {
    name:       'gg',
    kosh:       true,
    mehd:       false,
    foodKind:   'Chinese'
};
restaurants[6] = rest;
rest = {
    name:       'hh',
    kosh:       false,
    mehd:       true,
    foodKind:   'Italian'
};
restaurants[7] = rest;
rest = {
    name:       'ii',
    kosh:       true,
    mehd:       true,
    foodKind:   'Meat'
};
restaurants[8] = rest;
rest = {
    name:       'jj',
    kosh:       false,
    mehd:       false,
    foodKind:   'Fish'
};
restaurants[9] = rest;
rest = {
    name:       'kk',
    kosh:       true,
    mehd:       false,
    foodKind:   'Sushi'
};
restaurants[10] = rest;
rest = {
    name:       'll',
    kosh:       false,
    mehd:       true,
    foodKind:   'Fast-food'
};
restaurants[11] = rest;

// get information from user
console.log('Hi! I will be happy to recommend you a good retaurant in Tel-Aviv.');
let numOfPeople = readlineSync.questionFloat('First - I like to know: how many people are you going with? ');
while (numOfPeople <= 0 || numOfPeople % 1 != 0) {
    numOfPeople = readlineSync.questionFloat('how many people are you going with? ');
};

let kosher = readlineSync.keyInYN('Should it be Kosher?');
let kosherKind = false;
if (kosher) {
    kosherKind = readlineSync.keyInYN('Should it be Kashrut LeMehadrin?');
}
let kindOfFood = ['Chinese', 'Italian', 'Meat', 'Fish', 'Sushi', 'Fast-food'];
let index = readlineSync.keyInSelect(kindOfFood, 'What kind of food do you want?');

// find the right rest
let flag = false;
let tmp;
// run on the rest array and find a good one
for (let i = 0, lastRest = restaurants.length - 1; ((i <= lastRest) && (flag === false)); i++) {
    // now we check this rest
    tmp = restaurants[i];
    
    // check all parameters
    if ((tmp.kosh == kosher) && (tmp.mehd == kosherKind) && (tmp.foodKind === kindOfFood[index])) {
        flag = true;
    }
};
if (flag === true) {
    console.log('The chosen restaurant is: ', tmp.name, '. Your reservation of ', numOfPeople, ' seats has been admitted.');
}
else {
    console.log('Unfotunatelly, we do not have a restaurant that matches your order.');
};