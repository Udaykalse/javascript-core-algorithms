let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let result = arr.filter((a) => a % 2 !== 0).reduce((a, b) => a + b, 0);
console.log(result);
