function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

function isSquare() {
    return this.a === this.b && this.c === this.d && this.b === this.c;
}

Square.prototype.isSquare = isSquare
let s = new Square(1,1,1,1)
console.log(s.isSquare());