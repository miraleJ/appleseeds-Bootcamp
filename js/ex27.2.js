function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const a = new Pokemon('a', 'type1', ['x', 'y']);
const b = new Pokemon('b', 'type1', ['y', 'z']);
const c = new Pokemon('c', 'type2', ['z', 'x']);

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.name}!`)
    
}

Pokemon.prototype.attack = function(attakNum) {
    console.log(`${this.name} used ${this.attackList[attakNum]}`);
}


a.callPokemon();
b.callPokemon();
c.callPokemon();
a.attack(0);
b.attack(1);
c.attack(0);
