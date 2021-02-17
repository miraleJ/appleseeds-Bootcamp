function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
   funcA();

   //////////////////
   // line 2 - cann't know what the value of a, because the aaigining is lower in the code.
   // can fix it by moving up assigning before line 2
   // it will print  undefined 
   // 2
   // after fix: 1
   // and print 2

   ////////////////////////////
   var fullName = 'John Doe';
   var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
   };
   console.log(obj.prop.getFullName());
   var test = obj.prop.getFullName();
   console.log(test);

   ///////////////////////
// aurelio De Rosa
// undefined
// fix: remove () from line 32, add () to line 31


///////////////////////////////////////////////////////
function funcB() {
    let a = b = 0;
    a++;
    console.log(typeof a);
    console.log(typeof b);
    return a;
    
   }
   funcB();


   ////////////////
   // undefined
   // Number
   // the decleration and assignment of the variables are in the scope of the function
   // and the typeof is outside this scope


   /////////////////////////
   function funcC() {
    console.log("1");
   }
   funcC();
   function funcD() {
    console.log("2");
   }
   funcD();

   /////////////
   // 2
   // 2
   // the hoisting make the last declaration to be before the usage
   //better to use another name



   /////////////////////////////////////
   function funcD1() {
    d = 1;
   }
   funcD1();
   console.log(d);
   function funcD2() {
    var e = 1;
    return e;
   }
   funcD2();
   console.log(funcD2());

   // e not identified - not in the scope
   // in line 79 the d variable is declared without let/var/const, 
   // by defaulte it is global

   ///////////////////////////////////////
   var f = 1;
   function funcE() {
    console.log("Value of f in local scope: ", f);
   }
   console.log("Value of f in global scope: ", f);
   
   funcE();

   ///////////
   // undefined
   // 1
   // the assignment of t should be before the function


