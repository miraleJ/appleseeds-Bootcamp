class Animal {
    constructor(_name, _sound) {
        this.name = _name;
        this.sound = _sound;
    }

    getName() {
        return this.name;
    }

    getSound() {
        return this.sound;
    }

    print() {
        console.log(`The name of this animal is ${this.name}, and the sound it makes is "${this.sound}".`)
    }
}

const tom = new Animal('cat', 'miaw');
const edna = new Animal('cow', 'moo');
const mush = new Animal('cow', 'moo');

console.log(tom.getName());
console.log(edna.getSound());
mush.print();