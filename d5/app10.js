function calculateSum(num) {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}

console.log(calculateSum([10, 20, 1]));
