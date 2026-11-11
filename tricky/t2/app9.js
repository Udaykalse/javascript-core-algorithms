const nums = [1, 2, 3, 4, 5];
const result = nums
  .map((n) => n * 2)
  .map((n) => n + 1)
  .map((n) => n * 2);

console.log(result)