/////////////////////////// 1 
// return empty object
console.log(this);


/////////////////////////// 2
// a - this.name will be undefined, because it points on the window, and not on my object
// b-
const myObj = {
    name: "Timmy",
    greet: function greet()  {
    console.log(`Hello ${this.name}`);
    },
   };
   myObj.greet();

   /////////////////////////// 3
   // it will print the window
   const myFuncDec = function () {
    console.log(this);
   };

   /////////////////////////// 4
   // the arrow function moves a level up and there is no object around it so it is printing the window
   const myFuncArrow = () => {
    console.log(this);
   };
   myFuncArrow();

   /////////////////////////// 5
   // will print the window (outside the arrow function)
   document.querySelector(".element").addEventListener('click',() => {
    console.log(this);
   });