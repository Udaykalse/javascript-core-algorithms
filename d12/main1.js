let arr = [10, 20, 40, 30, 40];
let unique = [...new Set(arr)];
unique.sort((a, b) => b - a);
console.log(unique[1]);
