class Car {
    constructor(_brand, _speed) {
        this.brand = _brand;
        this.speed = _speed;
    }

    getBrand() {
        return this.brand;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(_speed) {
        this.speed = _speed;
    }

    print() {
        console.log(`This car brand is ${this.getBrand()}, and its speed is ${this.getSpeed()}.`)
    }
}

const someCars = [];
someCars.push(new Car('Opel', 120));
someCars.push(new Car('Subaru', 1400));
someCars.push(new Car('Sitroen', 160));
someCars.push(new Car('Ferari', 30));

let ii = someCars.reduce((maxCarI, car, i) => {
    if (i > 0 ) {
        if (car.getSpeed() >= someCars[i].getSpeed()) {
            maxCarI = i;
        } 
    } else {
        maxCarI = 0;
    }
    return maxCarI;
});

someCars[ii].print();

let ordered = someCars.sort((a, b) => {
    return a.getSpeed() - b.getSpeed();
})

console.log(ordered)