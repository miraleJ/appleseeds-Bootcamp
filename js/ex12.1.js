let aaa = [1, 2, 35, 4, 8, 2, 3, -111];

////////1//////////
const max = arr => arr.reduce(maxReducer);

const maxReducer = (maxTillNow, num) => {return maxTillNow > num ? maxTillNow : num;}

console.log(max(aaa));


//////////2/////////////
const sumEven = arr => arr.reduce(sumEvenNum, 0);

const sumEvenNum = (sum, num) => {return num % 2 === 0 ? sum + num : sum};

console.log(sumEven([1,2,3]));
console.log(sumEven(aaa));


/////////3//////////
const average = arr => arr.reduce(sum, 0) / arr.length;

const sum = (sum, num) => sum + num;

console.log(average([1,2,3]));
console.log(average(aaa));
