function multiply(a, b) {
  if (a === 0 || b === 0) return 0;
  const neg = a < 0 !== b < 0;
  a = Math.abs(a);
  b = Math.abs(b);
  let res = 0;
  for (let i = 0; i < b; i++) {
    res += a;
  }
  return neg ? -res : res;
}

console.log(multiply(8, 5));
