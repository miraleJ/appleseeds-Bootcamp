function findSmallest(a, b, c){
    if (a > c && b > c){
    return c;
    } else if (a > b && c > b) {
    return b;
   } else {
    return a;
    }
   }
   console.log(findSmallest(52,66, 2));

   // 10
   // log in terminal
   // the function that called does not exist

   // the if does not give the smallest
   // console.log