const person1 = {
    name:       'aaa',
    lastName:   'AAA'
};

const person2 = {
    name:       'bbb',
    lastName:   'BBB'
};

const person3 = {
    name:       'ccc',
    lastName:   'CCC'
};

const myMap = new Map();
myMap.set(person1, 'a123');
myMap.set(person2, 'b123');
myMap.set(person3, 'c123');

for ([obj, id] of myMap) {
    console.log(obj.name, id);
}
