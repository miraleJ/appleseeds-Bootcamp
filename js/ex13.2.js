const arr = ["boo", "doooo", "hoo", "ro"];

let lengths = [];
let i = 0;
while (i < arr.length) {
  lengths.push(arr[i].length);
  i++;
}

console.log(lengths);


// the for loop is better for this use - it is more organized.
// the while loop is better if there are conditions that will stop the looping in the middle of the running on the array