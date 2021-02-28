let myO = {
    name : "ooo",
    printName() {
        console.log('the name is: ', this.name);
    },
    printNameSoon() {
        setTimeout(this.printName.bind(myO), 1000);
    }
}

myO.printName();
myO.printNameSoon();