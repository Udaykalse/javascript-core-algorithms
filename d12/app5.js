let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4, 5, 6];

let total = arr.reduce((a, b) => a + b, 0);
console.log(total);


console.log("===================")
let result = 0;

for (let i = 0; i < arr1.length; i++) {
  result += arr1[i];
}

console.log(result)