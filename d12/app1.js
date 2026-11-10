let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = [...new Set([...arr1, ...arr2])];

console.log(arr);
