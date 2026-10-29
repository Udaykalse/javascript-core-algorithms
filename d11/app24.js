function fact(num) {
  let res = 1;
  if (num === 0 || num === 1) return 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}
console.log(fact(5));
